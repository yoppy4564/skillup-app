import { GetStaticPaths, GetStaticProps } from "next"  
import matter from "gray-matter"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Seo from "../../components/seo";
import Layout from "../../components/layout";

interface StaticPath {
    params: {
      slug: string | undefined;
    };
    [key: string]: any;
  }

const SingleBlog = (props:any) => {
    return(
        <Layout>
            <div>
                <h1>{props.frontmatter.title}</h1>
                <p>{props.frontmatter.data}</p>
                <ReactMarkdown>{props.markdownBody}</ReactMarkdown>
            </div>
        </Layout>
    )
}

export default SingleBlog

export const getStaticPaths:GetStaticPaths<StaticPath> = async() => {
    const blogSlugs = ((context: __WebpackModuleApi.RequireContext) => {
        console.log(context)
        const keys = context.keys()
        const data = keys.map((key:string,index:number) => {
            let slug= key.replace(/^.*[\\\/]/,'').slice(0,-3)
            return slug
        })
        return data
    })(require.context('../../data',true, /\.md$/))

    const paths = blogSlugs.map((blogSlug : string) => `/blog/${blogSlug}`)
    return {
        paths:paths,
        fallback:false,
    }
      
}

export const getStaticProps:GetStaticProps = async(context :any) => {
    const { slug } =context.params
    const data = await import(`../../data/${slug}.md`)
    const singleDocument = matter(data.default)
    return{
        props:{
            frontmatter:singleDocument.data,
            markdownBody:singleDocument.content,
        }
    }
}
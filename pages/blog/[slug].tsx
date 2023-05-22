import { GetStaticPaths, GetStaticProps } from "next"  
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { getAllBlogs, getSingleBlog } from "../../utils/mdQueries";
import PrevNext from "../../components/prevNext"
import { Blog } from "../../types/blogs";

interface StaticPath {
    params: {
      slug: string | undefined;
    };
    [key: string]: any;
  }

const SingleBlog = (props:Blog) => {
    return(
        <Layout>
            <div>
                <h1>{props.frontmatter.title}</h1>
                <p>{props.frontmatter.excerpt}</p>
                <ReactMarkdown>{props.slug}</ReactMarkdown>
            </div>
        </Layout>
    )
}

export default SingleBlog

export const getStaticPaths:GetStaticPaths<StaticPath> = async() => {
    const { orderedBlogs } = await getAllBlogs()
    const paths = orderedBlogs.map((orderedBlog : any) => `/blog/${orderedBlog.slug}`)
    return {
        paths:paths,
        fallback:false,
    }
      
}

export const getStaticProps = async(context :any) => {
    const { singleDocument } = await getSingleBlog(context)
    const { orderedBlogs } = await getAllBlogs()
    const prev = orderedBlogs.filter((orderedBlog:any) => orderedBlog.frontmatter.id === singleDocument.data.id -1)
    const next = orderedBlogs.filter((orderedBlog:any) => orderedBlog.frontmatter.id === singleDocument.data.id +1)
    
    return{
        props:{
            frontmatter:singleDocument.data,
            slug:singleDocument.content,
            prev: prev,
            next: next,
        }
    }
}
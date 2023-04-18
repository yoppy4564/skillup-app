import { GetStaticPaths, GetStaticProps } from "next"  
import matter from "gray-matter"

interface StaticPath {
    params: {
      slug: string | undefined;
    };
    [key: string]: any;
  }

const SingleBlog = () => {
    return(
        <h1>記事ページ</h1>
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
    console.log(paths)
    return {
        paths:paths,
        fallback:false,
    }
      
}

export const getStaticProps:GetStaticProps = async(context :any) => {
    const { slug } =context.params
    const data = await import(`../../data/${slug}.md`)
    const singleDocument = matter(data.default)
    console.log(singleDocument)
    console.log(context)
    return{
        props:{

        }
    }
}
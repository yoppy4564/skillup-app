import matter, {GrayMatterFile} from "gray-matter"
import Link from "next/link"
import { GetStaticProps } from "next";
import Layout from "../components/layout";

export interface Blog {
    frontmatter: {
      id: number;
      uid: number;
      title: string;
      date: string;
      excerpt: string;
    };
    slug: string;
  }
  
  interface BlogProps {
    blogs: Blog[];
  }

const Blog = ({ blogs }: BlogProps) => {
    return(
        <Layout>
            <h1>ブログページ</h1>
            {blogs.map((blog:Blog,index:number) => (
                <div key={index}>
                    <h3>{blog.frontmatter.title}</h3>
                    <p>{blog.frontmatter.date}</p>
                    <Link href={`/blog/${blog.slug}`}>Read more</Link>
                </div>
            ))}
        </Layout>
    )
}

export default Blog

export const getStaticProps: GetStaticProps<BlogProps>  = async() => {
    const blogs = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)
        const data = keys.map((key,index) => {
            let slug = key.replace(/^.*[\\\/]/,'').slice(0,-3)
            const value :any = values[index];
            const document = matter(value.default);
            return {
                frontmatter: document.data,
                slug: slug
            }
        })
        return data
        
    })(require.context('../data',true, /\.md$/))
    const orderedBlogs = blogs.sort((a,b) => {
        return b.frontmatter.id-a.frontmatter.id
    })
    return{
        props:{
            blogs: JSON.parse(JSON.stringify(orderedBlogs))
        },
    }
}
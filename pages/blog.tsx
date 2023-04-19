import Link from "next/link"
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import { getAllBlogs } from "../utils/mdQueries";

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
    const { orderedBlogs, numberPages } = await getAllBlogs() 

    // const limitedBlogs = orderedBlogs.slice(0, blogsPerPage)
    
    return {            
        props: {
            blogs: orderedBlogs,
        },      
    }                   
}
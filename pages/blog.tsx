import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import { getAllBlogs, blogsPerPage } from "../utils/mdQueries"

const Blog = (props) => {
  return (
      <Layout>
        <Seo title="ブログ" description="これはブログページです" /> 
        <div className="wrapper">
            <div className="container">
              <h1>Blog</h1>
              <p>エンジニアの日常生活をお届けします</p>
              {props.blogs.map((blog, index) => {
                  return(
                      <div key={index} className="blogCard">                            
                          <div className="cardContainer">
                              <h3>{blog.frontmatter.title}</h3>
                              <p>{blog.frontmatter.excerpt}</p>
                              <p>{blog.frontmatter.date}</p>
                              <Link href={`/blog/${blog.slug}`}>Read More</Link>
                          </div>
                          <div className="blogImg">
                              <Image src={blog.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} priority />
                          </div>  
                      </div>
                  )}
              )}
              </div>
              <Pagination numberPages={props.numberPages} /> 
        </div>
      </Layout>
  )
}

export default Blog

export async function getStaticProps() { 
    const { orderedBlogs, numberPages } = await getAllBlogs() 

    const limitedBlogs = orderedBlogs.slice(0, blogsPerPage)
    
    return {            
        props: {
            blogs: limitedBlogs,
            numberPages: numberPages,
        },      
    }                   
}
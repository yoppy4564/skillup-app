import matter from 'gray-matter'
import Blog from '../pages/blog'

export const blogsPerPage = 5

export async function getAllBlogs() {
    const blogs = ((context) => {
        const keys = context.keys()     
        const values = keys.map(context)
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
            const value:any = values[index]
            const document = matter(value.default)
            return {
                frontmatter: document.data,
                slug: slug
            }
        })
        return data
    })(require.context('../data', true, /\.md$/))

    const orderedBlogs = blogs.sort((a, b) => {
        return b.frontmatter.id - a.frontmatter.id
    })

    const numberPages = Math.ceil(orderedBlogs.length / blogsPerPage) 

    return {
        orderedBlogs: JSON.parse(JSON.stringify(orderedBlogs)),
        numberPages: numberPages
    }
}

export async function getSingleBlog(context:any) {
    const { slug } = context.params
    const data = await import(`../data/${slug}.md`)
    const singleDocument = matter(data.default)

    return {
        singleDocument: singleDocument
    }
}
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

export const index = ({posts}) => {
    return (
        <div>{JSON.stringify(posts)}</div>
    )
}

export default index;

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path
            .join('posts', filename), 'utf-8')
        const {data:frontmatter} = matter(markdownWithMeta)
        
        return {
            frontmatter,
            slug: filename.split('.')[0]
        }
    })
    return {
        props: {
            posts
        }
    }

}
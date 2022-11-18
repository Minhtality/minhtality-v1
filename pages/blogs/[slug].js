import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize' 
import MDXRemote from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter';

const components = {SyntaxHighlighter}

const PostPage = ({ frontmatter, mdxSource }) => {
    return (
        <div>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRemote {...mdxSource} components={components}/>
        </div>
    )
}

const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(),'posts'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}

const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'))
    const { data: frontmatter, content } = matter(markdownWithMeta)
    console.log(content)
    const mdxSource = await serialize(content)
    return {
        props: {
            frontmatter,
            slug,
            mdxSource
        }
    }
}

export { getStaticPaths, getStaticProps }
export default PostPage
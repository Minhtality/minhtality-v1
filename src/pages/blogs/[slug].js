import React from 'react';
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize' 
import { MDXRemote } from 'next-mdx-remote'
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
export default PostPage

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('src','posts'))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(
        path.join('src','posts', slug + '.mdx'))
    const { data: frontmatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
    return {
        props: {
            frontmatter,
            slug,
            mdxSource
        }
    }
}
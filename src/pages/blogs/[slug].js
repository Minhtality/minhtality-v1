import React from 'react'
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import InfoBlock from '@components/InfoBlock'
import BlogsLayout from '@components/Layout/Blogs'

const components = {
  InfoBlock,
  SyntaxHighlighter: ({ children }) => {
    return (
      <SyntaxHighlighter language="javascript" style={monokai}>
        {children}
      </SyntaxHighlighter>
    )
  }
}

const PostPage = ({ mdxSource }) => {
  return (
    <BlogsLayout>
      <MDXRemote {...mdxSource} components={components} />
    </BlogsLayout>
  )
}
export default PostPage

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('src', 'posts'))
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
    path.join('src', 'posts', slug + '.mdx')
  )
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

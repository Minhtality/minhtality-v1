import React from 'react'
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import * as Styled from './index.styled'

export const index = ({ posts }) => {
  return (
    <Styled.BlogContainer>
      {posts.map((post, index) => (
        <Styled.BlogCardWrapper href={`/blogs/${post.slug}`} key={index}>
          <h2>{post.frontmatter.title}</h2>

          <Styled.Overlay>
            <p>
              {post.frontmatter.author} - {post.frontmatter.date}
            </p>
          </Styled.Overlay>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.frontmatter.thumbnail} alt="thumbnail" />
        </Styled.BlogCardWrapper>
      ))}
    </Styled.BlogContainer>
  )
}

export default index

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'posts'))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join('src', 'posts', filename)
    )
    const { data: frontmatter } = matter(markdownWithMeta)

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

import React from 'react';
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Card from '../../components/Card'

export const index = ({posts}) => {
    return (
        <div>
            {posts.map((post, index) => (
                <Link href={`/blogs/${post.slug}`} key={index}>
                <Card 
                    key={index}
                    title={post.frontmatter.title}
                    author={post.frontmatter.author}
                    date={post.frontmatter.date}
                    thumbnail={post.frontmatter.thumbnail}
                />
                </Link>
            ))}
        </div>
    )
}

export default index;

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('src', 'posts'))
    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path
            .join('src','posts', filename))
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
import React from 'react';
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Card from '../../components/Card'
import { MobileBreakpoint, TabletBreakpoint } from '../../components/breakpoints';

export const index = ({posts}) => {
    return (
        <div>
            {posts.map(({frontmatter, slug}, index) => (
                <Link href={`/blogs/${slug}`} key={index}>
                <Card 
                    key={index}
                    title={frontmatter.title}
                    author={frontmatter.author}
                    date={frontmatter.date}
                    thumbnail={frontmatter.thumbnail}
                />
                </Link>
            ))}
            <TabletBreakpoint>Hello</TabletBreakpoint>
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
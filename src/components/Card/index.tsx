import React from 'react'
import * as Styled from './index.styled'
interface CardProps {
  title: string
  thumbnail?: string
  avatar?: string
  author: string
  date: string
  tags: string[]
}

const index = ({ title, thumbnail, date, author, tags }: CardProps) => {
  const dateFormat = new Date(date)
  const day = dateFormat.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
  return (
    <Styled.Card>
      <Styled.ThumbnailContainer>
        <Styled.Thumbnail src={thumbnail} alt="thumbnail" />
      </Styled.ThumbnailContainer>
      <Styled.MetaContainer>
        {title && <p>{title}</p>}
        <Styled.TagsContainer>
          {tags.map((tag, index) => (
            <span key={`${tag}: ${index}`}>#{tag}</span>
          ))}
        </Styled.TagsContainer>
      </Styled.MetaContainer>
      {author && <Styled.Author>{author}</Styled.Author>}
      {date && <Styled.Date>{day}</Styled.Date>}
    </Styled.Card>
  )
}

export default index

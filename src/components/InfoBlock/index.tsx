import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import * as Styled from './index.styled'

interface InfoBlockProps {
  title: string
  children: any
}

const InfoBlock = ({ title, children }: InfoBlockProps) => {
  return (
    <Styled.InfoContainer>
      <Styled.IconContainer>
        <BsInfoCircle />
      </Styled.IconContainer>
      <Styled.Content>
        <h2>{title}</h2>
        {children}
      </Styled.Content>
    </Styled.InfoContainer>
  )
}

export default InfoBlock

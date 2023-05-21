import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import * as Styled from './index.styled'

const InfoBlock = ({ title, children }) => {
  return (
    <Styled.InfoContainer>
      <Styled.IconContainer>
        <BsInfoCircle />
      </Styled.IconContainer>
      <Styled.Content>
        <strong>{title}</strong>
        {children}
      </Styled.Content>
    </Styled.InfoContainer>
  )
}

export default InfoBlock

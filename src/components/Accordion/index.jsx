import React, { useState } from 'react'
import Image from 'next/image'
import * as Styled from './index.styled'
import { Arrow } from '../../../public/icons'
import parse from 'html-react-parser'
import { AnimatePresence } from 'framer-motion'
const Accordion = ({
  heading = 'default heading',
  description = 'default description',
  imgSrc = '',
  href = '',
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false)

  const handleToggle = event => {
    event.preventDefault()
    setOpen(prevState => {
      const newState = !prevState
      return newState
    })
  }

  const variants = {
    open: {
      opacity: 1,
      height: 'auto',
      x: 0
    },
    closed: {
      opacity: 0,
      height: 0,
      x: -100
    }
  }

  return (
    <Styled.AccordionContainer aria-expanded={open}>
      <Styled.Accordion onClick={handleToggle}>
        <Styled.Icon href={href} target="_blank">
          <Image alt="company-icon" src={imgSrc} width={100} height={100} />
        </Styled.Icon>
        <div>
          <Styled.Heading>{heading}</Styled.Heading>
          <Styled.Description>{description}</Styled.Description>
        </div>
        <Styled.Close show={open}>
          <Arrow />
        </Styled.Close>
      </Styled.Accordion>
      <AnimatePresence>
        <Styled.AccordionContent
          animate={open ? 'open' : 'closed'}
          variants={variants}
          exit={{ opacity: 0 }}
          initial="closed"
        >
          {children || parse(props.content)}
        </Styled.AccordionContent>
      </AnimatePresence>
    </Styled.AccordionContainer>
  )
}

export default Accordion

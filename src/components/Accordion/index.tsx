import React, { useState, useRef } from 'react'
import * as Styled from './index.styled'
import { Arrow } from '../../../public/icons'
import parse from 'html-react-parser'
import { AnimatePresence } from 'framer-motion'

interface AccordionProps {
  heading?: string
  description?: string
  imgSrc?: string
  href?: string
  children?: any[]
  type?: string
  content?: string
}

const Accordion: React.FC<AccordionProps> = props => {
  const { heading, description, imgSrc, href, children } = props
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)

  const handleToggle = event => {
    event.preventDefault()

    setTimeout(() => {
      contentRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'start'
        },
        1000
      )
    })

    setOpen(prevState => !prevState)
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
    <Styled.AccordionContainer ref={contentRef} aria-expanded={open}>
      <Styled.Accordion onClick={handleToggle}>
        <Styled.Icon href={href} target="_blank">
          <img alt="company-icon" src={imgSrc} />
        </Styled.Icon>
        <div>
          <Styled.Heading>{heading}</Styled.Heading>
          <Styled.Description>{description}</Styled.Description>
        </div>
        {/* @ts-ignore */}
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

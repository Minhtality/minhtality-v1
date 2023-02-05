import React, { useState } from 'react'
import { TabletBreakpoint, DesktopBreakpoint } from '@components/breakpoints'
import Link from 'next/link'
import * as Styled from './index.styled'
import { motion } from 'framer-motion'

const Navigation = ({ baseUrl = '/' }) => {
  const [isOpen, setOpen] = useState(false)
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <Styled.NavContainer />
  }

  const variants = {
    open: {
      opacity: 1,
      height: isOpen ? '20vh' : 0,
      y: 0
    },
    closed: {
      opacity: 0,
      height: 0,
      y: '-40%'
    }
  }
  const handleMenuClick = () => {
    setOpen(e => {
      const newState = !e
      return newState
    })
  }

  return (
    <>
      <TabletBreakpoint down>
        <Styled.NavContainer>
          <Styled.Heading>
            <Link href={baseUrl}>Minh M Trần</Link>
          </Styled.Heading>
          <Styled.Menu onClick={handleMenuClick}>
            <HamburgerIcon isOpen={isOpen} />
          </Styled.Menu>
        </Styled.NavContainer>
        <Styled.AnimateDiv
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          isOpen={isOpen}
        >
          {isOpen && (
            <Styled.Overlay onClick={handleMenuClick}>
              <Styled.List>
                <Styled.ListItem>
                  <Link href="/photography">Photography</Link>
                </Styled.ListItem>
                <Styled.ListItem>
                  <Link href="/blogs">Blogs</Link>
                </Styled.ListItem>
                <Styled.ListItem>
                  <Link href="/resume">Resume</Link>
                </Styled.ListItem>
              </Styled.List>
            </Styled.Overlay>
          )}
        </Styled.AnimateDiv>
      </TabletBreakpoint>
      <DesktopBreakpoint up>
        <Styled.NavContainer>
          <Styled.Heading>
            <Link href={baseUrl}>Minh M Trần</Link>
          </Styled.Heading>
        </Styled.NavContainer>
      </DesktopBreakpoint>
    </>
  )
}

const HamburgerIcon = ({ isOpen }) => (
  <Styled.Hamburger isOpen={isOpen}>
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </Styled.Hamburger>
)

export default Navigation

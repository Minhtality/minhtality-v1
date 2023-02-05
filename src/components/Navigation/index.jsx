import React, { useState } from 'react'
import * as Styled from './index.styled'
import { TabletBreakpoint, DesktopBreakpoint } from '@components/breakpoints'
import Link from 'next/link'
import Sticky from 'react-sticky-el'

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
      height: isOpen ? '300px' : 0,
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
    <Sticky
      isIOSFixEnabled={false}
      stickyStyle={{ zIndex: 5 }}
      style={{ position: 'relative', zIndex: 4 }}
    >
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
          aria-expanded={isOpen}
        >
          {isOpen && (
            <Styled.Overlay onClick={handleMenuClick}>
              <Styled.List>
                <Styled.ListItem>
                  <Link href="/">Photography (Under Construction)</Link>
                </Styled.ListItem>
                <Styled.ListItem>
                  <Link href="/blogs">Blogs (Under Construction)</Link>
                </Styled.ListItem>
                <Styled.ListItem>
                  <Link href="/">About (Under Construction)</Link>
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
    </Sticky>
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

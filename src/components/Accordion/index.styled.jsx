import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AccordionContainer = styled.li`
  list-style: none;
  scroll-margin-top: 15px;
`

export const Accordion = styled.div`
  width: 100%;
  cursor: pointer;
  text-align: left;
  display: flex;
  margin-bottom: 15px;
  position: relative;
`

export const Heading = styled.h3`
  margin: 0;
`
export const Description = styled.p``
export const Icon = styled.a`
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const Close = styled.button`
  margin-left: auto;
  padding: 0;
  width: 20px;
  height: 20px;
  transform: rotate(-90deg);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  transform: ${({ show }) => (show ? 'rotate(0deg)' : 'rotate(-90deg)')};
  align-self: center;
  border: none;
  background: transparent;
  svg {
    width: 100%;
    height: 100%;
  }
`
export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  text-align: left;
  a {
    color: inherit;
    text-decoration: underline;
  }
  li {
    margin-bottom: 10px;
  }
`

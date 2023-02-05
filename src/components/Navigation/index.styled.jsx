import styled from 'styled-components'
import breakpoints from '@components/breakpoints'
import { motion } from 'framer-motion'

export const NavContainer = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 25px 100px;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  border: 1px solid rgb(226, 226, 226);
  box-sizing: border-box;
`

export const Heading = styled.div`
  font-size: 16px;
  display: block;
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const Menu = styled.div`
  text-align: right;
`

export const Hamburger = styled.div`
  display: block;
  width: 25px;

  div {
    background-color: #000;
    content: '';
    display: block;
    height: 2px;
    margin: 3px 0;
    transition: all 250ms ease-in-out;
    border-radius: 1px;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
  .bar1 {
      transform: translateY(5px)  rotateZ(45deg);
    }
    .bar2 {
      transform: scale(0);
    }
    .bar3 {
      transform: translateY(-5px)  rotateZ(-45deg);
    }
  `}
`
export const AnimateDiv = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '20vh' : '0')};
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 100;
  color: #000;
  border-radius: 0 0 10px 10px;
`

export const Overlay = styled.div`
  height: 100vh;
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  margin: 0 auto;
  padding-top: 25px;
  a {
    color: inherit;
  }
`

export const ListItem = styled.li`
  width: calc(100% - 200px);
  height: 50px;
  margin: 0 auto;
  cursor: pointer;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
`

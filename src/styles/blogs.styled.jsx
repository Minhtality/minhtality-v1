import styled from 'styled-components'
import breakpoints from '@components/breakpoints'
import Link from 'next/link'

export const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  ${breakpoints('desktop', 'up')} {
    flex-direction: row;
    padding: 0 100px;
    justify-content: flex-start;
    width: calc(100% - 200px);
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
`
export const BlogCardWrapper = styled(Link)`
  color: inherit;
  text-decoration: none;
  height: 600px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  width: calc(100% - 40px);
  margin: 0 20px 10px 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  ${breakpoints('desktop', 'up')} {
    width: calc(50% - 20px);
    margin: 20px 10px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff50;
  width: 100%;
  font-size: 12px;
  backdrop-filter: blur(10px);
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 0.2s ease-in-out;
  ${BlogCardWrapper}:hover & {
    height: 60px;
  }
`

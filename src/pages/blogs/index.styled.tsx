import styled from 'styled-components'
import breakpoints from '@components/breakpoints'
import Link from 'next/link'

export const BlogContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% - 200px);
  ${breakpoints('desktop', 'up')} {
    flex-direction: row;
    padding: 0 100px;
  }
`
export const BlogCardWrapper = styled(Link)`
  color: inherit;
  text-decoration: none;
  width: 50%;
  height: 600px;
  position: relative;
  /* margin: 20px 10px; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
`

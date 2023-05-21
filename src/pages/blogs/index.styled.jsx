import styled from 'styled-components'
import breakpoints from '@components/breakpoints'

export const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  ${breakpoints('desktop', 'up')} {
    flex-direction: row;
  }
`

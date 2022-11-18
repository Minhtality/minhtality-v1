import styled from 'styled-components';

export const Left = styled.div`
display: grid;
overflow: hidden;
img {
    width: 100%;
    height:100%;
    object-fit: 
    }
`
export const Right = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-gap: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const GridContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 60% calc(40% - 5px);
  grid-gap: 5px;
  box-sizing: border-box;
  ${Left} {
    order: -1;
  }
  ${Right} {
    order: 1;
  }
`;

export const CardContainer = styled.button`
  padding: 0;
  border: none;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
  img {
    transition: .4s;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`
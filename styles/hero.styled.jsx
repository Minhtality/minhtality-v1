import styled from "styled-components";

export const Page = styled.div`
    max-width: 1440px;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const NavContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 50px 0 50px 0;
`;

export const Heading = styled.div`
    font-size: 16px;
    display: block;
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const Menu = styled.div`
    text-align: right;
`;

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

  ${({isOpen}) => isOpen && `
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
`;

// export const Gallery = styled.div`
//   display: grid;
//   grid-template-columns: 33% 33% 33%;
//   grid-template-rows: 50% 50%;
//   gap: 10px;
//   justify-items: center;
//   align-items: stretch;
// `;

// export const CardContainer = styled.button`
//   padding: 0;
//   border: none;
//   cursor: pointer;
//   width: 100%;
//   height: 100%;
//   position: relative;
//   overflow: hidden;
//   img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//       &:hover {
//         transform: scale(1.1)
//       }
//     }

// `;
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



import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    padding: 50px 0 50px 0;
    box-sizing: border-box;
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
import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 50px 100px 50px 100px;
  margin-left: auto;
  margin-right: auto;
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
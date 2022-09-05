import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: 'rgb(242,242,242)',
  color: '#363537',
}

export const darkTheme = {
  body: 'rgb(32,33,36)',
  color: '#FAFAFA',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
    transition: ${({ isMounted }) => isMounted ? 'all 1s linear' : 'none'};
    /* transition: all 0.25s linear; */
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    overflow-x: hidden;
  }
  svg {
    fill: ${({ theme }) => theme.color};
  }
  button {
    border: none;
    padding: 0;
  }
`
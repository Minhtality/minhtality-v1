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
    transition: all 0.50s linear;
  }
  svg {
    fill: ${({ theme }) => theme.color};
  }
  button {
    border: none;
    padding: 0;
  }
`
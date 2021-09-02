import { createGlobalStyle } from 'styled-components'

export const CSSReset = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.4rem;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.darkgray};
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.lightgray};
  }

  h1, h2, h3, h4, h5, h6, input {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
  }
`

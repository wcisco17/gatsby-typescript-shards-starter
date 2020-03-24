import { theme } from '@config/theme'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${theme.colors.primay_dark_blue};
    height: 100vh;
  }
  h1, h2,h3, h4, p {
    color: ${theme.colors.primary_light_gray} !important;
  }
`

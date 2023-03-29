// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  colors: {
    transparent: 'transparent',
    black: '#151515',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      900: '#171923',
    },
  },
  initialColorMode: 'dark',
  useSystemColorMode: true
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme

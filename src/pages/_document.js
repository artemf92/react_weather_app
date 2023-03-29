import { Html, Head, Main, NextScript } from 'next/document'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../theme'

export default function Document() {
  return (
    <ChakraProvider>
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    </ChakraProvider>
  )
}

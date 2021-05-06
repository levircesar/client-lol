import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import { Container, Flex } from '../styles/pages/App'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Flex>
          <Navbar />
          <Sidebar />
        </Flex>

        <Component {...pageProps} />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp

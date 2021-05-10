import React, { useState } from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import { Container, Flex } from '../styles/pages/App'

import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Flex>
          <Navbar toggleTheme={toggleTheme} />
          <Sidebar />
        </Flex>
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp

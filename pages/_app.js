import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import SEO from 'next-seo.config'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>MySocial</title>
      <link rel="shortcut icon" href="/logo_black.svg" />
      <link rel="apple-touch-icon" href="/logo_black.svg" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="MySocial"
      />
    </Head>
    <DefaultSeo {...SEO} />
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App
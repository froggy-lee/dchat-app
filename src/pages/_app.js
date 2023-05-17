import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import Head from 'next/head'
import { GlobalStyles, lightTheme } from '../styles/theme.config'
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
import { store } from '../store'
import { appWithTranslation } from 'next-i18next'
import { SSRProvider } from '@react-aria/ssr'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CookiesProvider } from 'react-cookie'
import NavBar from '/src/components/Layout/NavBar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <SSRProvider>
      <Provider store={store}>
        <CookiesProvider>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <ToastContainer
              position="bottom-left"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, maximum-scale=1"
                />
              </Head>
              <Component {...pageProps} />

              {router.pathname === '/login' ||
              router.pathname === '/account' ||
              router.pathname === '/account/[...id]' ? (
                <NavBar />
              ) : (
                <NavBar isSearch />
              )}
            </>
          </ThemeProvider>
        </CookiesProvider>
      </Provider>
    </SSRProvider>
  )
}

export default appWithTranslation(MyApp)

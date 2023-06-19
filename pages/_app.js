import '@/styles/globals.scss'
import Layout from '@/components/layout/layout'
import { Fragment } from 'react'


export default function App({ Component, pageProps }) {
  return(
    <Fragment>

  <Layout>

  <Component {...pageProps} />
  </Layout>
    </Fragment>
  )
}

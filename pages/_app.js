import '@/styles/globals.scss'
import Layout from '@/components/layout/layout'
import { Fragment } from 'react'
import { BlurContextProvider } from "@/components/BlurContext";


export default function App({ Component, pageProps }) {
  return(
    <Fragment>
<BlurContextProvider>
  <Layout>

  <Component {...pageProps} />
  </Layout>
</BlurContextProvider>
    </Fragment>
  )
}

import '@/styles/globals.scss'
import Layout from '@/components/layout/layout'
import { Fragment } from 'react'
import { BlurContextProvider } from "@/components/BlurContext";
import {SessionProvider} from "next-auth/react"
import {Analytics} from '@vercel/analytics/react'


export default function App({ Component, pageProps: {session, ...pageProps} }) {
  return(
    <Fragment>
      <SessionProvider session={session} refetchInterval={5*60}>

<BlurContextProvider>
  <Layout>

  <Component {...pageProps} />
  <Analytics />
  </Layout>
</BlurContextProvider>
      </SessionProvider>
    </Fragment>
  )
}

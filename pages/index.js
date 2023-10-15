import Head from 'next/head'
import { Fascinate_Inline, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import image from "../public/images/cherrydeck-rMILC1PIwM0-unsplash (1).jpg"
import classes from "./home.module.css"
import Link from 'next/link'
import { Fragment } from 'react'
import Landing from '@/components/homepage/landing'
import Education from '@/components/homepage/Education'
import About from '@/components/homepage/About'

export default function Home() {




  return (
    <>
      <Head>
        <title>Impresario Entrepreneurial Solutions</title>
        <meta name="description" content="Denver's best web development site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:900" rel="stylesheet"/>
      </Head>
      <main className={styles.main}>
          
      <Landing /> 
    <div className='pxSpacer'></div>

      <div className='everythingInMain goLeftPhone'>

        <div className={classes.promotional}>
          <div className='center'>
            <h2 className='center whiteText'>   Three Kings of Search Engine Optimization</h2>
            <ul className='whiteText'>
              <li>The Three Kings for SEO: Title, H1s, and URL.</li>
              <br/>
              <li>Google trends to power your site's visibility.</li>
              <br/>
              <li>Optimize your content with relevant trending keywords to attract more visitors.</li>
            </ul>
            

  
  
          </div>
          <div className='center whiteText'>
            <h2>   Analytics and Split Testing</h2>
              <ul>
                <li>Boost your site's performance with Vercel Analytics.</li>
                <br/>
                <li>Analyze user behavior, clicks, and purchases.</li>
                <br/>
                <li>Enhance your website through valuable insights gained from A/B testing.</li>
              </ul>
          </div>       
          <div className='center whiteText'>
            <h2>   Automated Outreach and Retention</h2>
            <ul >
              <li>Engage and retain customers with tailored offers.</li>
              <br/>
              <li>Track customer activity and boost sales.</li>
              <br/>
              <li>Automatically send follow-up texts to potential customers to rekindle interest.</li>
            </ul>

          </div>      
        </div>

      <About />
      </div>
      <Education />


      </main>
    </>
  )
}




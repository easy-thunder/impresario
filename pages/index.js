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


// I can't tell you how many times I changed the css and complete layout


  return (
    <>
      <Head>
        <title>Impresario Entrepreneurial Solutions</title>
        <meta name="description" content="Denver's best web developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Landing /> 
      <Fragment>

        <div className={classes.promotional}>
          <div className='center'>
            <h2 className='center whiteText'>   Three Kings of Search Engine Optimization</h2>
            <p className='whiteText'>Google records every search term you input. Often google records millions of people searching for the same thing. When this happens this is considered a google trend. To maximize your site traffic we take relevant trending keywords and include them in your three kings with proper context. So what are the three kings? </p>
            <p className='whiteText'>The three kings are what googles web crawlers &#40;AI that reads the content of every website&#41; use to determine whether they should serve your website to your potential customers. The three kings are:</p>
            <ul className='whiteText'>
              <li>The title of your website</li>
              <li>The title of each section of your site &#40;h1 elements&#41;</li>
              <li>The URL of your website</li>
            </ul>
            

  
  
          </div>
          <div className='center whiteText'>
            <h2>   Analytics and Split Testing</h2>
            <p>Once you have your site up and running how do you figure out that your website is doing well? You have to hook up analytics to your site. Google analytics can slow your site down. That is why I utilize Vercel Analytics which is 40 times smaller than google analytics. These analytics can show you what pages your potential customers are clicking on, and whether they are purchasing or not.</p>
            <p>What if you want to improve your website? Are you worried that changing something could be detrimental to your site? Well that is what split testing is. We deploy two different versions of your site with one small change. The potential customer doesn't know which version they are on. However, a better design will have them clicking on purchasing things from your website. We then take the version that performed better and implement that design!</p>
  
          </div>       
          <div className='center whiteText'>
            <h2>   Automated Outreach and Retention</h2>
            <p>If your customers login to your site you can look at what they are viewing on your site. Let's say they don't buy anything. But they looked at one item for a while. You will have the ability to view what they clicked on and send them a discount code for that item. This type of outreach may prompt them to come back to your site and earn you a new customer. 
            </p>
            <p>Sometimes a potential customer may call while you're busy. If you don't answer you may have lost that potential customer. With Impresario we can generate an automated text message to be sent to the potential customer saying that you will get rite back with them. Prompting them to reach back out as a potential customer</p>

          </div>      </div>
      </Fragment>

      <About />
      {/* <Education /> */}


      </main>
    </>
  )
}




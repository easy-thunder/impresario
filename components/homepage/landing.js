import Link from "next/link"
import classes from "../../pages/home.module.css"
export default function Landing(){
    // the commented out is the old way I had it. Will still use code from there.
    return(
        <div>
            
        {/* <div className={classes.landingImage}>
        <div className={`${classes.whoWeAre} ${classes.bringItDown} whiteText`}>
          <h3 className={`${classes.middle}`}>
            Need a website?
          </h3>
          <h3>
            Build with search engine optimization (SEO) in mind. First get a consultation to discover trends for your site. Generating content that people are searching for is key too a successful business! Next we design your site with figma(A website design tool) and use the straight line sales approach. Finally we build with Next.js which allows google web crawlers to more easily serve your carefully curated content to the masses. See our site building &nbsp;
            <Link className='blue' href='/Buy/BuildSite'>
            Services!
            </Link>
          </h3>

        </div>
        <div className={`${classes.bringItDown} ${classes.creationServicesDiv} whiteText`}>
        <div className=''>
            <h3 className='transitionCenter'>Full Stack+</h3>

            <ul>
              <li className='slightlySmallerText'>starting at $3999.85</li>
              <li>Many Consultations</li>
              <li>Animations</li>
              <li>Content Aid</li>
              <li>Davinci Resolve Edits</li>
              <li>Five Sections</li>
              <li>1 year of Management</li>
              <li>Automatic smart email</li>
              <li>All Full Stack Services</li>
              <button className='button-64 drawAttention'>purchase</button>

            </ul>
          </div>
          <div className=''>
            <h3 className='transitionCenter'>Static Site</h3>
            <ul>
              <li className='slightlySmallerText'>Starting at $799.85</li>
              <li>One time fee*</li>
              <li>Link your social media</li>
              <li>Two consultations</li>
              <li>Figma Design & Align</li>
              <li>Google analytics</li>
              <li>Three Sections</li>
              <li>Static Deployment</li>
              <li>More Static Options!</li>
              <button className='button-64'>purchase</button>
            </ul>

          </div>
          <div className=''>
            <h3 className='transitionCenter'>Full Stack</h3>
              <ul>
                <li className='slightlySmallerText'>Starting at $1399.85</li>
                <li>Three Consultations</li>
                <li>Three Sections</li>
                <li>Session Functionality</li>
                <li>Includes static services</li>
                <li>FullStack Deployment</li>
                <li>Payments with Stripe</li>
                <li>More Full Stack options</li>
                <button className='button-64'>purchase</button>
              </ul>
          </div>

        </div>
        <div>
        <div className={`${classes.whoWeAre} ${classes.creationServicesDiv} whiteText`}>
          <div className=''>
            <h3 className='transitionCenter'>Management+</h3>

            <ul>
              <li className='slightlySmallerText'>starting at $3999.85</li>
              <li>Many Consultations</li>
              <li>Animations</li>
              <li>Content Aid</li>
              <li>Davinci Resolve Edits</li>
              <li>Five Sections</li>
              <li>1 year of Management</li>
              <li>Automatic smart email</li>
              <li>All Full Stack Services</li>
              <button className='button-64 drawAttention'>purchase</button>

            </ul>
          </div>
          <div className=''>
            <h3 className='transitionCenter'>Static Site</h3>
            <ul>
              <li className='slightlySmallerText'>Starting at $799.85</li>
              <li>One time fee*</li>
              <li>Link your social media</li>
              <li>Two consultations</li>
              <li>Figma Design & Align</li>
              <li>Google analytics</li>
              <li>Three Sections</li>
              <li>Static Deployment</li>
              <li>More Static Options!</li>
              <Link href='/Buy/BuildSite/Package/Static'>
              <button className='button-64'>purchase</button>
              </Link>
            </ul>

          </div>
          <div className=''>
            <h3 className='transitionCenter'>Full Stack</h3>
              <ul>
                <li className='slightlySmallerText'>Starting at $1399.85</li>
                <li>Three Consultations</li>
                <li>Three Sections</li>
                <li>Session Functionality</li>
                <li>Includes static services</li>
                <li>FullStack Deployment</li>
                <li>Payments with Stripe</li>
                <li>More Full Stack options</li>
                <button className='button-64'>purchase</button>
              </ul>
          </div>

        </div>
          
        </div>

        <div className={`${classes.whoWeAre} whiteText  `}>
          <h3 className={classes.middle}>Already have a site?</h3>
          <h3>
          Impresario reconfigures your website to resonate with the google search algorithm. Get google analytics and google trends to determine content generation. We then utilize A/B split testing to determine if your sites traffic grew. Get measurable results to determine the next steps for your business.
          </h3>
          </div>


        </div>
       */}

<div className={`${classes.grid100} `}>

    <div className={`center ${classes.mainAttraction}  ${classes.background} ${classes.downFifth}`}>
        <h1 className={`${classes.center}`}>Impresario</h1>
        <h2 className={`${classes.centerLess}`}>Design . Develop . Dream</h2>
    </div>
    <div className={`${classes.leftDetails} ${classes.upTenth} whiteText`}>
        <h3 className={`${classes.marginRightSome}`}>Need a Site?</h3>
        <ul>
            <li>Expert Designers listen to your vision</li>
            <li>Get advice for what Content you need</li>
            <li>We build your design with SEO in mind</li>
            <li>Hook your site up with google analytics</li>
            <li>Connect to your social media</li>
            <li className="smaller">Builds start at $799.85</li>
        </ul>
        <div className={`${classes.details} `}></div>
    </div>
    <div className={`${classes.leftSide} whiteText`}></div>
    <div className={`${classes.rightDetails} ${classes.upTenth} whiteText`}>
        <h3 className={`${classes.marginRightSome}`}>Have a site?</h3>
        <ul>
            <li>Know your traffic with google Analytics</li>
            <li>Make small design changes to the site</li>
            <li>Or make small keyword changes to your header and title</li>
            <li>Deploy both unedited and edited version with a split test</li>
            <li>Get results back and see your traffic explode! </li>
            <li className="smaller">Basic Plan starts at $49.99 a month</li>
        </ul>
    </div>
</div>








      
        </div>
    )
}



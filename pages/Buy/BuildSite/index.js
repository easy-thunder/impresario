import { Fragment } from "react";
import classes from "./BuildSite.module.css"

export default function SiteBuilding(){
    return (<Fragment>
        <div className="marginPastHeader whiteText"></div>
        <h1 className="whiteText updatedCenter">Your Next Site</h1>
        <div className={classes.boundary}>
        <div className={classes.card}>
            <h2 className=" updatedCenter">Static Site</h2>
            <ul className={` ${classes.list}`}>
                <li>Informational Site that gets your name and contact out there!</li>
                <br/>
                <li>Social media connection.</li>
                <br/>
                <li>SEO initially optimized.</li>
                <br/>
                <li>includes three sections.</li>
                <br/>
                <li>Google analytics attached for your site.</li>
                <br/>
                <li>One Expert Design Template consultations confirmed before building.</li>
                <br/>
                <li>No server fees.</li>
                
                <br/>
                <li>Options include Stripe checkout, Thryv Scheduling, search bar, google maps, additional sections, animations and content Generation </li>

            </ul>
<h5 className={`centerPrice`}>price: $999.85</h5>
<button className="center">purchase</button>
        </div>

        <div className={classes.card}>
            <h2 className=" updatedCenter">Fullstack+</h2>
            <ul className={` ${classes.list}`}>
                <li>Automated Emails utilized for continued customer outreach.</li>
                <br/>
                <li>Unlimited expert design consultations confirmed before building.</li>
                <br/>
                <li>Give users the ability to upload files.</li>
                <br/>
                <li>Includes seven sections.</li>
                <br />
                <li>Establish cookies and sessions so users don't have to sign back in.</li>
                <br/>
                <li>Chat sessions.</li>
                <br/>
                <li>Everything included in lower plans</li>
                <br/>
                <li>Options: google maps, additional sections and animations at half price.</li>
            </ul>
<h6 className={`centerPrice`}>price: $3499.85</h6>
<button className="center">purchase</button>
        </div>
        <div className={classes.card}>
            <h2 className=" updatedCenter">Fullstack</h2>
            <ul className={` ${classes.list}`}>
                <li>Login info stored.</li>
                <br/>
                <li>Security features to safely store customer info</li>
                <br/>
                <li>Includes Search bar with filter.</li>
                <br/>
                <li>Everything included in Static Site.</li>
                <br/>
                <li>includes five sections.</li>
                <br/>
                <li>Three Expert Design Template consultations confirmed before building.</li>
                <br/>
                <li> Automated scheduling or automatic payment system.</li>
                
                <br/>
                <li>Options: Sessions and cookies, automated emails,  google maps, additional sections, and animations. </li>
                <br/>

            </ul>
<h5 className={`centerPrice`}>price: $2299.99</h5>
<button className="center">purchase</button>
        </div>


        </div>

        
    </Fragment>)
}
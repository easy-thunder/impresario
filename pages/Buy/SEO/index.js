import { Fragment } from "react";
import classes from "../BuildSite/BuildSite.module.css"

export default function SiteBuilding(){
    return (<Fragment>
        <div className="marginPastHeader whiteText"></div>
        <h1 className="whiteText updatedCenter">Site Management</h1>
        <div className={classes.boundary}>
        <div className={classes.card}>
            <h2 className=" updatedCenter">Basic SEO</h2>
            <ul className={` ${classes.list}`}>
                <li>SEO is the way we get your site to the first page of google results.</li>
                <br/>
                <li>We do this by analyzing trending phrases on google related to your website.</li>
                <br/>
                <li>We update your h1 tags, title, and url's based on those trending search phrases.</li>
                <br/>
                <li>This works really well with Content generation as with content generation we can make new pages for your site to route better to related search phrases.</li>


            </ul>
<h5 className={`centerPrice`}>price: $49.99/month</h5>
<button className="center">purchase</button>
        </div>

        <div className={classes.card}>
            <h2 className=" updatedCenter">Content Generation</h2>
            <ul className={` ${classes.list}`}>
                <li>We generate content once a month related to trending search terms.</li>
                <br/>
                <li>For example say you own a survival education course. Fourth of July is trending. And we make you a blog about smoking meat for fourth of July.</li>
                <br/>
                <li>Now you have traffic related to the fourth of July routed to your site.</li>
                <br/>
                <br/>
                <li>Includes Basic SEO.</li>
        
            </ul>
<h6 className={`centerPrice`}> price: $199.85/month</h6>
<button className="center">purchase</button>
        </div>
        <div className={classes.card}>
            <h2 className=" updatedCenter">Site rework</h2>
            <ul className={` ${classes.list}`}>
                <li>First we configure your site for split testing.</li>
                <br/>
                <li>We make one small change to the site and launch the changed site as the test subject, and the original site as the control.  </li>
                <br/>
                <li>If that change caused greater conversion then we implement that change.</li>
                <br/>
                <li>Includes Basic SEO.</li>
                <br/>
        <br/>
        <br/>

            </ul>
<h5 className={`centerPrice`}>price: $199.85</h5>
<button className="center">purchase</button>
        </div>


        </div>

        
    </Fragment>)
}
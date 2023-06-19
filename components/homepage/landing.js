import Link from "next/link"
import classes from "../../pages/home.module.css"
import { Fragment } from "react"
export default function Landing(){
    // the commented out is the old way I had it. Will still use code from there.
    return(
        <div className={classes.up}>
            


<div className={`${classes.grid100} `}>

    <div className={`center ${classes.mainAttraction}  ${classes.background} ${classes.downFifth}`}>
        <h1 className={`${classes.center} bigger`}>Impresario</h1>
        <h2 className={`${classes.centerLess} big`}>Design . Develop . Dream</h2>
    </div>
    <div className={`${classes.leftDetails} ${classes.upTenth} whiteText`}>
        <h3 className={`${classes.marginRightSome}`}>Need a Site?</h3>
        <ul>
            <li>Professional Designers listen to your vision</li>
            <li>We build your design with SEO in mind</li>
            <li>Hook your site up with google analytics</li>
            <li>Connect to your social media</li>
            <li>Build now pay later</li>
            <li className="smaller">Builds start at $999.85</li>
        </ul>
        <Link href="../../Buy/BuildSite">
        <button className={`${classes.goRightLess}`}>Build a Site</button>
        </Link>

        <div className={`${classes.details} `}></div>
    </div>
    <div className={`${classes.leftSide} whiteText`}></div>
    <div className={`${classes.rightDetails} ${classes.upTenth} whiteText`}>
        <h3 className={`${classes.marginRightSome}`}>Have a site?</h3>
        <ul>
            <li>Know your traffic with google Analytics</li>
            <li>Make small design or keyword changes to the site</li>
            <li>Or get a total rework</li>
            <li>Deploy both unedited and edited version with a split test</li>
            <li>Get results back and see your traffic explode! </li>
            <li className="smaller">Basic Plan starts at $49.99 a month</li>
        </ul>
        <Link href={`../../Buy/SEO`}>
        <button className={`${classes.goRightLess} `}>Site Management</button>
        </Link>
    </div>
</div>








      
        </div>
    )
}



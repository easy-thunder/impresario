import { Fragment } from 'react'
import classes from './Footer.module.css'
import Link from 'next/link'

export default function Footer(){
return(
    <Fragment>
        <div className={`${classes.footer} whiteText`}>
            {/* <div>
                <h3 className={classes.borderBottom}>Social Media</h3>
                <h4>TickTock</h4>
                <h4>Youtube</h4>
                <h4>Facebook</h4>
                <h4>Instagram</h4>
            </div> */}
            <div>
                <h3 className={classes.borderBottom2}>Contact</h3>
                <Link href="/Contact/Employment">
                <h4>Employment</h4>
                </Link>
                <h4>(720) 773-1934</h4>
                <h4>jddiehl17@gmail.com</h4>
                {/* <h4>chat</h4> */}

            </div>
            <div>
            <h3 className={classes.borderBottom3}>Services</h3>
            <Link href='/Buy/SEO'>
                <h4>SEO</h4>
            </Link>
            <Link href={`/Buy/BuildSite`}>
                <h4>Build Site</h4>
            </Link>
            <Link href={`/WebsiteEducation`}>
                <h4>Educate</h4>
            </Link>
                <h4>IOT- coming soon</h4>

            </div>
            <div>
                <h3 className={classes.borderBottom4}>Resources</h3>
                <h4>site map-coming soon</h4>
                <Link href={`/FAQ`}>
                <h4>FAQ</h4>
                </Link>
            </div>
    
        </div>
    </Fragment>
)
}
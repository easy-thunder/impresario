import { Fragment } from "react";
import classes from '../EducationIntro.module.css'
import Link from "next/link";




export default function Games(){

    return(
        <Fragment>
             <div className="marginPastHeader whiteText"></div>
        <h1 className="whiteText">Interactive Games</h1>
        <div className={`${classes.boundary} ${classes.noPlay}`}>
            <div className={classes.card}>  
            <h2 className=" center">QueryQuest</h2>
          {/* <img></img> */}
            <h4>Select the correct element and change its properties!</h4>
            <p>Discover the art of DOM navigation, become a querySelector expert, and gain proficiency in pseudo-classes and combinators in both querySelector and CSS through this engaging game.</p>


      <Link href='/WebsiteEducation/games/querySelector'><button>continue</button></Link>
        

            </div>

       




        </div>
        </Fragment>

    )
}


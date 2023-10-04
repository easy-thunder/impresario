import { Fragment } from "react";
import classes from '../EducationIntro.module.css'
import Link from "next/link";




export default function Games(){

    return(
        <Fragment>
             <div className="marginPastHeader whiteText"></div>
        <h1 className="whiteText">Interactive Games</h1>
        <div className={classes.boundary}>
            <div className={classes.card}>  
            <h2 className=" center">Master querySelector</h2>
          {/* <img></img> */}
            <h4>Select the correct element and change its properties!</h4>


      <Link href='/WebsiteEducation/games/querySelector'><button>continue</button></Link>
        

            </div>

       




        </div>
        </Fragment>

    )
}


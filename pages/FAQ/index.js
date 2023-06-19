import { Fragment } from "react";
import classes from './FAQ.module.css'
export default function FAQ(){
    return(
        <Fragment>
        <div className="marginPastHeader whiteText"></div>
        <h1 className="whiteText">FAQ</h1>
        <div className={classes.boundary}>
            <h2>Haven't had any questions</h2>


        </div>        </Fragment>
    )
}
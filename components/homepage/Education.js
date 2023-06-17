import { Fragment } from "react"
import classes from "../../pages/home.module.css"

export default function Education(){
    return(
        <Fragment>
        <div className='transitionCenter whiteText'>
          <h2 className='center'>Impresario Education</h2>
          <h3 >Signup</h3>
        </div>
        <div className={classes.educationSection}>
          <div className='center'>
            <h3 className='center whiteText'>   Education Introduction</h3>
            <div className={`${classes.frame}`}></div>
            <p className='whiteText'>This video covers the mission and values of impresario. I believe that the best way to fight inflation is through leveling the playing fields for everyone. We can do that by generating new ideas, educating, and getting your business out in the world to increase a healthy amount of competition. If you can convince me to sell your product, I will gladly take the risk of building you a website and becoming a stakeholder in your company. Get full access to all of my educational videos by signing up for free! </p>
  
  
          </div>
          <div className='center'>
            <h3 className='whiteText'>   Newest Video</h3>
            <div className={`${classes.frame}`}></div>
            <p className='whiteText'>We will need an API call for this video</p>
  
          </div>       
          <div className='center'>
            <h3 className='whiteText'>   Most Popular</h3>
            <div className={`${classes.frame}`}></div>
            <p className='whiteText'>We will need an API call for this video</p>
          </div>      </div>
        </Fragment>
    )
}
import { Fragment } from 'react'
import classes from "../../pages/home.module.css"



export default function About(){
return  <Fragment>
<h2 className='transitionCenter whiteText'>About Impresario</h2>

<div className={`${classes.leftRight} whiteText`}>
   <div className={`${classes.title}`}><h3>The Entrepreneur of Impresario</h3></div>
   <div className={`${classes.left}`}></div>
   <div className={`${classes.right}`} ><p>Hi, I'm Jake, I've held many titles. Raft Guide, Musician, Biologist, Software Engineer,  and now Entrepreneur. </p>
  <p>In any role I've held I've put nothing but my whole heart into it.
    I want to help others that are passionate about their craft get their products out in the world.
  </p>
  <p>So I built Impresario, A way for your ideas to vibrate at the tone of Googles Search Engine Optimization</p>
  <p>Impresario gives the power for you to build your own site, or have it built for you. </p>
  <p>Let's take back business from large corporations and bring it back to you!</p>
  </div>
</div>
<div className={`${classes.leftRight} whiteText`}>
   <div className={`${classes.title}`}><h3>The Mission of impresario</h3></div>
   <div className={`${classes.lowerRight}`}></div>
   <div className={`${classes.lowerLeft}`} ><p>To facilitate the self actualization of those surrounding impresario. </p>
  <p>By elegantly conveying your passions to the web.
  </p>
  <p>And empowering you with education.</p>
  <p>We want you to be successful in business and happiness, and to proceed forward courageously. </p>
  <p>And become the cultivation of community that impresario is.</p>
  </div>
</div>
</Fragment>

}
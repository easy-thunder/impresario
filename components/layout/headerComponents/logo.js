import { Fragment, useState } from "react";
import classes from "./logo.module.css"
import Link from "next/link";



export default function Logo(){





    function signUpModal(){
        setModal(modal=>!modal)
    }

    function LoginModal(){
        setModal(modal=>!modal)
    }


    return <Fragment>
        {/* one IDEA FOR THE LOGO */}
        {/* <div className={classes.bottomLineTriangle}></div>
        <div className={classes.leftLineTriangle}></div>
        <div className={classes.rightLineTriangle}></div>
        <div className={classes.leftLineInnerTriangle}></div>
        <div className={classes.rightLineInnerTriangle}></div>

        <div className={classes.circle}>
            <div className={classes.horizontal}></div>
            <div className={classes.vertical}></div>
        </div> */}
        {/* End of idea one */}
        {/* <section className={classes.underLogo}>

        <h2 className={classes.I}>I
        </h2>
        <h2 className={classes.E}>E</h2>
        <h2 className={classes.S}>S</h2>
        </section> */}
        <div>

<Link href='/'>
    <div className={``}>

        <div className={classes.vertical} style={{color: `#243972`}}></div>
        <div className={classes.horizontalBottom}  style={{color: `#243972`}}></div>
        <div className={classes.horizontalTop}  style={{color: `#243972`}}></div>
        <div className={classes.horizontalMiddle}  style={{color: `#243972`}}></div>
        <div className={classes.topCurve}  style={{color: `#243972`}}></div>
        <div className={classes.bottomCurve}  style={{color: `#243972`}}></div>
    </div>
</Link>
        <div className={classes.marginPastLogo}>
        <h4 className="bold">Impresario</h4>
        <h4>Entrepreneurial</h4>
        <h4>Solutions</h4>
        </div>
        </div>
{/*  */}


<div>

                        <Link href='/Buy/BuildSite'>
        <h6 className={`lighter transitionCenter`} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
</svg>

<div className={classes.space}> </div>



            Build</h6>
            </Link>
</div>


        

   
<Link href={`/WebsiteEducation`}>
        <h6 className={`lighter transitionCenter`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>

  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
<div className={classes.space}> </div>
            Educate</h6>
</Link>

<Link href='/Buy/SEO'>
        <h6 className={`lighter transitionCenter`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

<div className={classes.space}> </div>


&nbsp;SEO</h6>
        </Link>
            



    


<div className={`${''}`}>
{/* I want to get better at next-auth before implementing on my website */}
{/* <button className="button-64 smallerContainer" onClick={signUpModal}>SignUp</button>

<span className="invisible">" "</span>

<button className="button-64 smallerContainer" onClick={LoginModal}>Login</button> */}
        </div>






  





        





    </Fragment>
}
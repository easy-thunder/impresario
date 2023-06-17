import { Fragment, useState } from "react";
import classes from "./logo.module.css"
import Link from "next/link";



export default function Logo({hamburger}){

const colorArray=[{first:26, second: 131, third: 0},{first:239, second:18, third:18},{first:5, second:67, third:114} ]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const colors = colorArray[getRandomInt(3)]
  const colorOne = colors.first
  const colorTwo = colors.second
  const colorThree= colors.third
  const [modal, setModal]= useState(false)

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
<Link href='/'>
    <div>

        <div className={classes.vertical} style={{color: `rgb(${colorOne},${colorTwo},${colorThree})`}}></div>
        <div className={classes.horizontalBottom}  style={{color: `rgb(${colorOne},${colorTwo},${colorThree})`}}></div>
        <div className={classes.horizontalTop}  style={{color: `rgb(${colorOne},${colorTwo},${colorThree})`}}></div>
        <div className={classes.horizontalMiddle}  style={{color: `rgb(${colorOne},${colorTwo},${colorThree})`}}></div>
        <div className={classes.topCurve}  style={{color: `rgb(${colorOne},${colorTwo},${colorThree})`}}></div>
        <div className={classes.bottomCurve}  style={{color: `rgb(${colorOne},${colorTwo},${colorThree})`}}></div>
    </div>
</Link>
        <div className={classes.marginPastLogo}>
        <h4 className="bold">Impresario</h4>
        <h4>Entrepreneurial</h4>
        <h4>Solutions</h4>
        </div>
{/*  */}
        <div className={`${classes.marginPastLogoTitle} `}>
        <h3 className={classes.services}>Services</h3>
        <div className="flex">

            <br/>
            <Link href='/Develop'>
        <h6 className={`lighter`} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
</svg>
<div className={classes.space}> </div>



            Develop</h6>
            </Link>

        <span className="invisible">' '</span>

        <Link href='/Design'>
        <h6 className={`lighter`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
<div className={classes.space}> </div>


            Design</h6>
        </Link>
        <span className="invisible">' '</span>

        <Link href='/SEO'>
        <h6 className={`lighter`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

<div className={classes.space}> </div>


&nbsp;SEO</h6>
        </Link>
        <span className="invisible">' '</span>
<Link href={`/WebsiteEducation`}>
        <h6 className={`lighter`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>

  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
<div className={classes.space}> </div>
            Educate</h6>
</Link>
            

        </div>

        </div>

        <div className={`${classes.marginPastServices} `}>
        <h3 className={classes.account}>Account</h3>


<div className="flex">
        <Link href='/Chat'>
            <h6 className="lighter">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>
<div className={classes.space}> </div>
            &nbsp;    Chat</h6>
        </Link>
            <span className="invisible">' a'</span>

<Link href='/Buy'>
            <h6 className="lighter">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>
<div className={classes.space}> </div>

&nbsp;    Buy</h6>
</Link>
            <span className="invisible">' a'</span>
            <Link href='/FAQ'>
            <h6 className="lighter"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>

<div className={classes.space}> </div>
       &nbsp; FAQ</h6>
            </Link>

            {/* <h5 className="lighter">Login</h5>
            <span className="invisible">' a'</span>
            
        <h5 className="lighter">SignUp</h5> */}


<div className={`${classes.marginPastLogoAccount}`}>

<button className="button-64" onClick={signUpModal}>SignUp</button>
<br />
<span className="invisible">" "</span>
<br />
<button className="button-64" onClick={LoginModal}>Login</button>
        </div>



</div>
<svg onClick={hamburger} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon right">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
        </div>



        





    </Fragment>
}
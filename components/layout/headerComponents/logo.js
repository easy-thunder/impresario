import { Fragment, useState } from "react";
import classes from "./logo.module.css"
import Link from "next/link";
import LoginModal from "@/components/Modal/LoginModal";
import PurchaseModal from "@/components/Modal/PurchaseModal";
import { useAuth } from "@/pages/hooks/useAuth";
import ChatModal from "../../Modal/ChatModal";

export default function Logo({setModal, modal}){
    const { session, signOut } = useAuth();
    const [chat, setChat]=useState(false)




    function turnOffModal(){
        setModal(()=>null)
        setChat(()=>null)
    }

    function signUpModal(){
        setModal(()=>"signUp")
    }

    function LoginModal(){
        setModal(()=>"signIn")
    }

    async function logOut(){
        await signOut();
        location.reload()
    }


    
    
    return <Fragment>
        <svg onClick={()=>setChat(()=>true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="chatIcon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>

{chat? <ChatModal/>:null}
        <div  onClick={turnOffModal} className={modal? "modalBackground":null}>

<Link href='/'>
    <div>
        <div onClick={turnOffModal} className={chat? "modalBackground":null}></div>

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
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
</svg> */}

<div className={classes.space}> </div>



            Build</h6>
            </Link>
</div>


        

   
<Link href={`/WebsiteEducation`}>
        <h6 className={`lighter transitionCenter`}>


  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" className="chatModal"/>
<div className={classes.space}> </div>
            Educate</h6>
</Link>

<Link href='/Buy/SEO'>
        <h6 className={`lighter transitionCenter`}>


<div className={classes.space}> </div>


&nbsp;SEO</h6>
        </Link>
            

{session ? 
    <div className={`${''}`}>
<Link href={'/Profile'}> 
<button className="button-64 smallerContainer">Profile</button>
</Link>
<span className="invisible">" "</span>
<button className="button-64 smallerContainer" onClick={logOut}>SignOut</button>

<span className="invisible">" "</span>

        </div>

:

<div className={`${''}`}>
<button className="button-64 smallerContainer" onClick={signUpModal}>SignUp</button>

<span className="invisible">" "</span>

<button className="button-64 smallerContainer" onClick={LoginModal}>Login</button>
        </div>
}






  




        





    </Fragment>
}
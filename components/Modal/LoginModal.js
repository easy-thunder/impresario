import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./modal.module.css"
import { signIn } from "next-auth/react";
import FacebookLogin from "../SignInButtons/FacebookLogin";
import Link from "next/link";
import GoogleLoginButton from "../SignInButtons/GoogleLogin";

export default function LoginModal({title, confirmPassword, button, setModal}){

    const emailInputRef= useRef()
    const passwordInputRef=useRef()
    const passwordCheckRef = useRef()

    const [isLogin, setIsLogin]= useState(true)
    const [calling, setCalling]= useState(false)
    const [error, setError]= useState(false)
    const [message, setMessage]=useState(false)

    useEffect(()=>{
        if(button==="Sign Up"){
            setIsLogin(()=>false)
        }
        if(button==="Login"){
            setIsLogin(true)
        }
    },[])




      async function createUser(e){
        e.preventDefault()

        setCalling(()=>true)
        const email = emailInputRef.current.value
        const password = passwordInputRef.current.value

        
        if(isLogin){
            const result = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password,
            })
            setCalling(()=>false)
            setError(()=>result.error)
            if(result.status===200){
                modalOffHelper()
            }
           
        }
        else{
            const checkPassword = passwordCheckRef.current.value
            const newUser={email:email, password:password, checkPassword:checkPassword}
    try{
        const response = await fetch('/api/auth/signup',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        })
        if (!response.ok) {
            throw new Error('Failed to sign up');
          }
          const responseData = await response.json();
          console.log(responseData)
          if(responseData){
            setMessage(()=>responseData.message)
            setCalling(() => false);
            setIsLogin(()=>true)
            const result = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password,
            })
            setCalling(()=>false)
            setError(()=>result.error)
            if(result.status===200){
                modalOffHelper()
            }


          }




        }
        catch (error) {
            console.error('Error during signup:', error);
            setError(() => error.message);  // Assuming error.message contains the relevant error information
        }

    }
}



    function modalOffHelper(){
        setModal(()=>null)
        setError(()=>false)
        setCalling(()=>false)
    }



 
    return(
        <Fragment>
        <div className="modalBorder">
            <h4 onClick={modalOffHelper} className="whiteText exitButton">x</h4>
        <form onSubmit={createUser} className="centerText">
            <h2 className="whiteText">{title}</h2>
            <div className="modal">

            <label>Email</label>
            <br/>
            <input type="email" ref={emailInputRef} id='email'/>
            <br/>
            <label>Password</label>
            <br/>
            
            <input type="password" ref={passwordInputRef} id='password'/>
            {confirmPassword?

<Fragment>
    <br/>
                    <label>Confirm Password</label>
                    <br/>
                    <input type="password" ref={passwordCheckRef} id='check'/>
                    <br/>
                    <input type="checkbox" /> <label>Acknowledge you have read our <Link href="/Legal/PrivacyPolicy" style={{color: "blue"}}>Privacy Policy</Link> and that we may use your email to promote services Impresario offers. </label>
                <br/>
                <input type="checkbox"/> <label>Acknowledge you have read our <Link href="/Legal/TermsOfService" style={{color: "blue"}}>terms of service</Link>.</label>
                    </Fragment>
                    :null
                }
                <br/>
            <input type="submit" value={calling? "Loading":button} disabled={calling? "disabled": null}/>
                </div>
                {error? <h2 className="red">{error}</h2>:null}
                {message? <h2 className="whiteText">{message} has signed up</h2>:null}

        </form>
        <h2 className="whiteText">Signup with Social Media</h2>
        {/* <FacebookLogin/> */}
        {/* <GoogleLoginButton/> */}

           
        </div>
            
        </Fragment>
    )
}


import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./modal.module.css"
import { signIn } from "next-auth/react";


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

// if(button==="Login"){
//     setIsLogin(()=>true)
// }

    // function switchAuthModeHandler(){
    //     setIsLogin(isLogin=>!isLogin)
    // }



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
            const newUser={email:email, password:password, check:checkPassword}
    try{
        fetch('/api/auth/signup',{
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {"Content-Type": "application/json"}
        })
        .then((r)=> r.json())
        .then(data=> console.log(data.message))
        .then(setCalling(()=>false))
        .then(setMessage(()=>"Sign in to access your account. I realize I could have just signed in but my next step is email verification to prevent spam."))

        // .then(modalOffHelper())


        }
        catch(error){
            setError(()=>error)
            setCalling(()=>false)
            
        }

    }
}


        // const newUserString = JSON.stringify(newUser)
        // console.log(newUserString)





    // async function submitHandler(e){
    //     e.preventDefault()
        
    //     const enteredEmail = emailInputRef.current.value
    //     const enteredPassword = passwordInputRef.current.value

    //     const checkPassword = passwordCheckRef.current.value

    //     if(isLogin){
    //         // USER login
    //     }
    //     else{
    //         try{

    //             const result = await  createUser(enteredEmail, enteredPassword, checkPassword)
    //         }catch(error){
    //             console.log(error)
    //             console.log(enteredEmail, enteredPassword, checkPassword)
    //         }

    //     }
    // }


    function modalOffHelper(){
        setModal(()=>null)
        setError(()=>false)
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
                    </Fragment>
                    :null
                }
                <br/>
            <input type="submit" value={calling? "Loading":button} disabled={calling? "disabled": null}/>
                </div>
                {error? <h2 className="red">{error}</h2>:null}
                {message? <h2 className="whiteText">{message}</h2>:null}

        </form>
           
        </div>
            
        </Fragment>
    )
}


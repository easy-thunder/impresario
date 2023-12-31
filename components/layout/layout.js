import Footer from "./Footer";
import MainHeader from "./headerComponents/mainHeader"
import { useState } from "react";
import LoginModal from "../Modal/LoginModal";
import { useSession } from 'next-auth/react';
import ChatModal from "../Modal/ChatModal";

const {Fragment}= require('react');

//comment
export default function Layout(props){
const { data: session, status } = useSession();
const [modal, setModal]=useState(null)
let modalProperties={}

if(modal==="signUp"){
    modalProperties={
        confirmPassword: true,
        title: 'Register a New Account',
        button: "Sign Up"
    }
}
if(modal==="signIn"){
    modalProperties={
        confirmedPassword: false,
        title: 'Login',
        button: "Login"
    }
}


    return (
        <Fragment>
        
        

        <MainHeader setModal={setModal} modal={modal} />
        <main>
            {props.children}
            {modal?
    <LoginModal title={modalProperties.title} confirmPassword={modalProperties.confirmPassword} button={modalProperties.button} setModal={setModal} />
     :null}
        </main>
        
        <Footer />



    </Fragment>
    )
}
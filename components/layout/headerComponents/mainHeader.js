import Link from "next/link"
import classes from "./mainHeader.module.css"
import Logo from "./logo"
import { useState } from "react"

export default function MainHeader({setModal, modal}){
        
      
    return <header className={classes.header}>
        {/* really this is the whole header not just the logo */}
        <Logo setModal={setModal} modal={modal} />

 
    </header>
}


import Link from "next/link"
import classes from "./mainHeader.module.css"
import Logo from "./logo"
import { useState } from "react"

export default function MainHeader(){
        
      
    return <header className={classes.header}>

        <Logo />
 
    </header>
}


import Link from "next/link"
import classes from "./mainHeader.module.css"
import Logo from "./logo"
import { useState } from "react"

export default function MainHeader(){
        const [open, setOpen]= useState(false)
        
        function hamburger(){
            setOpen(open=>!open)
        }
    return <header className={classes.header}>

        {open ? <Logo hamburger={hamburger} />: <svg onClick={hamburger} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon right">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
 }
    </header>
}


import { Fragment } from "react"
import Link from "next/link"

export default function QuerySelectorNavBar(){
    return <div className="">
                        <h3>Nav</h3>
                <Link href='/WebsiteEducation/games/querySelector'><p className="">Intro</p></Link>
                <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel1'><p className="">The + operator</p></Link>
                <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel2'><p className="">Multiple +'s</p></Link>
                <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel3'><p className=""></p>nth-child()</Link>
                <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel4'><p>Child Combinator</p></Link>
                <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel5'><p>Double Nested Elements</p></Link>
                <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel6'><p>Combining+ and &#62;</p></Link>
                <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel7'><p>Navigating Tables</p></Link>
                <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel8'><p>ID's for querySelector</p></Link>
                <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel9'><button>Classes for querySelector</button></Link>


    </div>
}



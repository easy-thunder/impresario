import { Fragment } from 'react'
import classes from './EducationIntro.module.css'
import Link from 'next/link'


export default function Educate(){
    return (<Fragment>
        <div className="marginPastHeader whiteText"></div>
        <h1 className="whiteText">Impresario Education </h1>
        <div className={classes.boundary}>
            <div className={classes.card}>  
            <h2 className=" center">Beginner Dev</h2>
            <ul className={` ${classes.list}`}>
                <li>This is still yet to come!</li>
                <br/>
                <li>Learn JSX, HTML, and CSS to build your own website.</li>
                <br/>
                <li>Includes how to set up an IDE.</li>
                <br/>
                <li>Includes a brief overview of git and github.</li>
                <br/>
                <li>Includes basic CLI commands.</li>
                <br/>
                <li>Includes how to set up files in NEXT.js.</li>
                <br/>
                <li>Includes deployment on Vercel.</li>
            </ul>
            <h4>Best for people that only want an informational site and have no need for login information or payment systems</h4>


{/* <button className="center">continue</button> */}

            </div>
            <div className={classes.card}>
            <h2 className=" center">Intermediate Dev</h2>
            <ul className={` ${classes.list}`}>
                <li className={classes.listAttention}>Still yet to come! </li>
                <br/>
                <li>Learn how to setup and connect to MongoDB.</li>
                <br/>
                <li>Learn how to encrypt your passwords with Next.js</li>
                <br/>
                <li>Learn how to setup JSON web tokens with NextAuth.</li>
                <br/>
                <li>Learn how to setup automated payment systems to your bank account.</li>
                <br />
                <li>Learn how to route your API calls to your MongoDB.</li>
            </ul>
            <h4>Best for people that have completed the previous course and want a payment system or login system </h4>
{/* <button onClick={''} className="center">continue</button> */}
        </div>
        <div className={classes.card}>
            <h2 className=" center">Interactive Learning</h2>
            <ul className={` ${classes.list}`}>
                <li className={classes.listAttention}>In programming one method can do so many things.</li>
                <br/>
                <li>Everything in here is designed to be an interactive game to learn.</li>
                <br/>
                <li>Also includes how to build games and the algorithms for VI's to play against you.</li>
                <br/>
                <li>Chat sessions.</li>
                <br/>
                <li>Options: google maps, additional sections and animations at half price.</li>
            </ul>
            <h4>Best for devs that want to learn in an engaging way that already have experience!</h4>
            <Link href='/WebsiteEducation/games'><button>continue</button></Link>
        </div>





        </div>

        
    </Fragment>)
}
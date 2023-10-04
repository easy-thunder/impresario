import { Fragment, useState,useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction} from "../../../../components/querySelector/querySelectorMasterFunctions";

//Just to note, I realize there is a lot of repeat structure between this file and all the other querySelector files. 
//There is just too much custom code in each section and div that trying to bring it in as an import isn't practical.
//I have taken the function that I have most manipulated out to make it easier to work with between all my levels.



export default function QuerySelector(){
    
    const [hint, setHint]=useState(false);
    const [answer, setAnswer]=useState(false);
    const [nextLesson, setNextLesson]=useState(false);
    const [hintButton, setHintButton]=useState(true);
    const [badMessage, setBadMessage]=useState("");
    

    const elements=["<document>",
    '   <div className={classes.box}></div>',
    "   <div className={classes.box}></div>",
    "   <div className={classes.box}></div>",
    "   <div className={classes.box}></div>",
    "   <div className={classes.box}></div>",
    "   <div className={classes.box}></div>",
    "</document>"];

    let elementsScreen;
    let selection;
    let submit;

    


    
    function changeUserSelection(e){
        e.preventDefault();
        //I import this function because it is used in so many places and I want it to act the same everywhere.
        selection =changeUserSelectionFunction(e, selection, setBadMessage, submit, elementsScreen,activateNextLesson)
    }

    function activateHint(){
        setAnswer(answer=>false);
        setHint(hint=>true);
        setHintButton(hintButton=>false);
        
    }
    function activateAnswer(){
        setHint(hint=>false);
        setAnswer(answer=>true);
        setHintButton(hintButton=>true);
    }
    function activateNextLesson(){
        setAnswer(answer=>false);
        setHint(hint=>false);
        setHintButton(hintButton=>false);
        setNextLesson(nextLesson=>true);
        
    }




    return <Fragment>
        <div className="marginPastHeader whiteText"></div>
        <h1 className="whiteText">querySelector Master</h1>
        <div className={classes.interactiveConsoleAndScreen}>
            <QuerySelectorNavBar />
            <div className={classes.screenAndElements}>
                <section className={classes.Screen}>
                    <div className={classes.thisBox}></div>
                    <div className={classes.box}>
                    </div>
                    <div className={classes.box}>

                    </div>
                    <div className={classes.box}>

                    </div>
                    <div className={classes.box}></div>
                    <div className={classes.box}></div>
                </section>
                <div className={classes.elements}>
                        {elements.map(element=>
                            <pre>{element}</pre>
                        )}
                </div>

            </div>
            <div className={classes.console}>
                <div className={classes.instructions}>
                    <h3>Introduction</h3>
                    <p>document.querySelector() is a valuable asset when handling unpredictable data. It lets you precisely locate and manipulate DOM elements, making it versatile for various scenarios. Whether you're dealing with user-generated content or dynamic data, this method empowers you to interact with elements as needed, enhancing your web applications' responsiveness. It's especially handy when working with data from third-party APIs or uncertain DOM structures, allowing developers to efficiently navigate and utilize the DOM's potential.</p>
                    <p>If you are new to querySelector it allows you to select elements on your elementsScreen (AKA the DOM) and change the properties of those elements.</p>
                    <p className={classes.mainInstructions}>In this exercise we will be using document.querySelector() to select the first div box within our elements. This div is highlighted blue on the elementsScreen. When you have selected the correct div box our target div box will turn green and the continue button will be available! The red boxes are the boxes that we don't want to change. Feel free to click the hint button if you don't know how to start!</p>
                    <p>Just to note, if you know how querySelector works, The only thing that we are focusing on is the div to the left of here. So don't worry about trying to incorporate navigating through the headers of this website. </p>
                </div>
                <div className={classes.elementsScreenSelector}>
                    <form onSubmit={changeUserSelection}>

                    <label>document.querySelector("</label>
                    <input type="text" name="userInput"/>
                    <label>")</label>
                    <br />
                    <input type="submit"/>
                    </form>
                    {hintButton? <button onClick={activateHint}>hint</button>:null}
                    {hint? <button onClick={activateAnswer} >answer</button>:null}
                    {hint? <p>On the elements section what is the first element after the document element?</p>: null}
                    {answer? <p>copy and paste: div into document.querySelector(). this is saying select the first element called div within the document.</p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel1'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}



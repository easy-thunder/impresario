import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "./querySelectorMasterFunctions";






export default function QuerySelectorLevel3(){
    
    const [hint, setHint]=useState(false);
    const [answer, setAnswer]=useState(false);
    const [nextLesson, setNextLesson]=useState(false);
    const [hintButton, setHintButton]=useState(true);
    const [badMessage, setBadMessage]=useState(false);


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
        selection = changeUserSelectionFunction(e,selection, setBadMessage, submit, elementsScreen,activateNextLesson)
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
                <section className={classes.screen}>
                    <div className={classes.box}>
                    </div>
                    <div className={classes.box}>

                    </div>
                    <div className={classes.box}>

                    </div>
                    <div className={classes.box}></div>
                    <div className={classes.box}></div>
                    <div className={classes.thisBox}></div>
                </section>
                <div className={classes.elements}>
                        {elements.map(element=>
                            <pre>{element}</pre>
                        )}
                </div>

            </div>
            <div className={classes.console}>
                <div className={classes.instructions}>
                    <h3>nth-child()</h3>
                    <p>When working with complex HTML structures, selecting a specific child element using :nth-child within document.querySelector can be much more practical than chaining multiple div+div+div+div selectors. The :nth-child pseudo-class allows you to pinpoint an element's position within its parent, providing a more flexible and efficient way to access elements. This approach is particularly useful when dealing with dynamic or varying DOM structures, as it adapts to the actual position of the element, making your code more robust and maintainable.</p>
                    <p>Using :nth-child simplifies the selection process and reduces the need for long chains of selectors, making your code easier to read and maintain when dealing with complex HTML documents.</p>
                    <p>The syntax for using :nth child looks like: document.querySelector("div:nth-child(number)")</p>

                    <p className={classes.mainInstructions}>Using the nth-child pseudo-class return the last box.</p>
               
               
                </div>
                <div className={classes.screenSelector}>
                    <form onSubmit={changeUserSelection}>

                    <label>document.querySelector("</label>
                    <input type="text" name="userInput"/>
                    <label>")</label>
                    <br />
                    <input type="submit"/>
                    </form>
                    {hintButton? <button onClick={activateHint}>hint</button>:null}
                    {hint? <button onClick={activateAnswer} >answer</button>:null}
                    {hint? <p>If you count the number of boxes there are or look at the number of divs in the elements section how many do you count?</p>: null}
                    {answer? <p>copy and paste: div:nth-child(6) into document.querySelector().</p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel4'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}



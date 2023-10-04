import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "../../../../components/querySelector/querySelectorMasterFunctions";






export default function QuerySelectorLevel5(){
    
    const [hint, setHint]=useState(false);
    const [answer, setAnswer]=useState(false);
    const [nextLesson, setNextLesson]=useState(false);
    const [hintButton, setHintButton]=useState(true);
    const [badMessage, setBadMessage]=useState(false);


    const elements=["<document>",
    "   <div className={classes.box}>",
    "   <div className={classes.box}>",
    "   <div className={classes.box}></div>",
    "   </div>",
    "   <div className={classes.box}>",
    "   <div className={classes.box}></div>",
    "   </div>",
    "   </div>",

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
                    <div className={classes.bigBox}>
                    <div className={classes.bigBox}>
                    <div className={classes.thisBigBox}>

                    </div>
                    </div>
                    <div className={classes.bigBox}>
                        <div className={classes.bigBox}></div>
                    </div>
                    </div>
                 
                </section>
                <div className={classes.elements}>
                        {elements.map(element=>
                            <pre>{element}</pre>
                        )}
                </div>

            </div>
            <div className={classes.console}>
                <div className={classes.instructions}>
                    <h3>Double Nested Elements</h3>
                    <p>Imagine a scenario where you have a double-nested div structure within your HTML document. This means you have a div element inside another div element, creating a nested hierarchy. To access the innermost div, you can use two &#62; operators within the document.querySelector() method.</p>
                    <p className={classes.mainInstructions}>Using two child combinator's select the blue box.</p>
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
                    {hint? <p>The first div is the big red square that surrounds the two smaller squares with children. The first box will be the first descendent of the large red box.</p>: null}
                    {answer? <p>copy and paste: div&#62;div into document.querySelector().</p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel6'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}



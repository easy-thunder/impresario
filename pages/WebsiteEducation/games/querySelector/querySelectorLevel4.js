import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "../../../../components/querySelector/querySelectorMasterFunctions";






export default function QuerySelectorLevel4(){
    
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
        <h1 className="whiteText">QueryQuest.js</h1>
        <div className={classes.interactiveConsoleAndScreen}>
            <QuerySelectorNavBar />
            <div className={classes.screenAndElements}>
            <section className={classes.screen}>
                    <div className={classes.bigBox}>
                    <div className={classes.thisBigBox}>
                    <div className={classes.bigBox}></div>
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
                    <h3>Child Combinator</h3>
                    <p>The &#62; operator, known as the 'child combinator,' is a valuable tool when using document.querySelector(). It enables you to select elements that are direct children of a specific parent element.</p>
                    <p>Here's how it works: When you use the &#62; operator in a selector, you are instructing the browser to select elements that are immediate descendants of the preceding selector. In other words, it matches elements that are one level deep within the DOM hierarchy from the parent element.</p>
                    <p className={classes.mainInstructions}>Using the child combinator select the blue box.</p>
               
               
                </div>
                <div className={classes.screenSelector}>
                    <form onSubmit={changeUserSelection}>

                    <label>document.querySelector("</label>
                    <input type="text" name="userInput"/>
                    <label>")</label>
                    querySelectorLevel5
                    <br />
                    <input type="submit"/>
                    </form>
                    {hintButton? <button onClick={activateHint}>hint</button>:null}
                    {hint? <button onClick={activateAnswer} >answer</button>:null}
                    {hint? <p>The first div is the big red square that surrounds the two smaller squares with children. The first box will be the first descendent of the large red box.</p>: null}
                    {answer? <p>copy and paste: div&#62;div into document.querySelector().</p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel5'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}



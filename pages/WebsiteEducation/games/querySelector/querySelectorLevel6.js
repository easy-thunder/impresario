import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "../../../../components/querySelector/querySelectorMasterFunctions";






export default function QuerySelectorLevel6(){
    
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
                    <div className={classes.bigBox}>
                        <div className={classes.bigBox}></div>
 
                    </div>
                    <div className={classes.bigBox}>
                        <div className={classes.thisBigBox}>

</div>
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
                    <h3>Combining+ and &#62;</h3>
                    <p>As we know from previous lessons the + operator selects the immediate sibling element of a given element. It allows you to target elements that share the same parent and appear immediately after one another in the DOM.</p>
                    <p>On the other hand, the &#62; operator selects direct child elements of a given element. It allows you to traverse one level down in the DOM hierarchy, focusing on elements that are directly nested within a parent element.</p>
                    <p>When you combine these operators, you can precisely pinpoint elements within complex structures. For example, element.querySelector('parent &#62; child + sibling') selects a sibling element that follows a specific child element inside a particular parent.</p>
                    <p className={classes.mainInstructions}>Select the blue box using the two operators we have learned about. (There is more than one answer. I encourage you to look at the answer button after you take a shot at this.)</p>
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
                    {hint? <p>You have to first traverse down a level. Then get the sibling element and then traverse down that sibling element.</p>: null}
                    {answer? <p>copy and paste: div&#62;div +div&#62;div into document.querySelector(). This is the best way I think about it. However, div+div&#62;div also works. Why? Because querySelector will look for the first div that actually has a sibling. In this case, the
                        largest red box has no sibling element. So querySelector skips that level and continues reading the document down one level.
                    </p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel7'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}


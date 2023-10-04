import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "../../../../components/querySelector/querySelectorMasterFunctions";





export default function QuerySelectorLevel1(){
    
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
        //JSX is loaded in next.js before the html is converted to the DOM. So document is undefined when script first loads. So I use a useEffect with a if statement to ensure the DOM loads first.


        

    function changeUserSelection(e){
        e.preventDefault();

       selection= changeUserSelectionFunction(e,selection, setBadMessage, submit, elementsScreen,activateNextLesson)

            


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
                    <div className={classes.thisBox}></div>
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
                    <h3>The + operator</h3>
                    <p>The + operator in a CSS selector is known as the "adjacent sibling combinator." It is a powerful tool in the world of web development that allows you to target elements that are immediately preceded by another specific element.</p>
                    <p>The + operator selects elements that are siblings and immediately follow another specific element. For instance, div + p selects the p elements that directly follow a div element.</p>
                    <p>Keep in mind that the + operator targets only the first matching adjacent sibling. If you want to select multiple adjacent elements, you may need to use other techniques or combine selectors.</p>
                    <p className={classes.mainInstructions}>Use the + operator to select the blue box.</p>
               
               
                </div>
                <div className={classes.screenSelector}>
                    <form onSubmit={changeUserSelection}>

                    <label>document.querySelector("</label>
                    <input type="text" name="userInput" id="userInput"/>
                    <label>")</label>
                    <br />
                    <input type="submit"/>
                    </form>
                    {hintButton? <button onClick={activateHint}>hint</button>:null}
                    {hint? <button onClick={activateAnswer} >answer</button>:null}
                    {hint? <p>If you input div and that gives you the first box, what operator + what element will give you the second box?</p>: null}
                    {answer? <p>copy and paste: div + div into document.querySelector().</p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel2'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}



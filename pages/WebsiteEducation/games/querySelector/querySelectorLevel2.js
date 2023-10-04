import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "./querySelectorMasterFunctions";





export default function QuerySelectorLevel2(){
    
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
                    <div className={classes.thisBox}></div>
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
                    <h3>Multiple +'s</h3>
                    <p>Using multiple + operators in a CSS selector is a clever way to target elements beyond just the immediate adjacent sibling. By chaining + operators together, you can reach the third, fourth, or even further sibling elements in a sequence. This technique allows you to select elements that have a consistent pattern or spacing within the HTML structure.</p>
                    <p>To select a specific sibling element beyond the first adjacent sibling, you can use multiple + operators. For example, div + div + div would select the third div element that follows two div elements.</p>
                    <p> It's handy for working with complex layouts where certain elements repeat at regular intervals, such as in grids, lists, or multi-step forms.</p>
                    <p className={classes.mainInstructions}>Use multiple + operators to select the blue box.</p>
               
               
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
                    {hint? <p>If you input div + div and that gives you the second box, what would you have to do to get to the third sibling div?</p>: null}
                    {answer? <p>copy and paste: div + div + div into document.querySelector().</p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel3'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}



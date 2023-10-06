
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "../../../../components/querySelector/querySelectorMasterFunctions";






export default function QuerySelectorLevel14(){
    
    const [hint, setHint]=useState(false);
    const [answer, setAnswer]=useState(false);
    const [nextLesson, setNextLesson]=useState(false);
    const [hintButton, setHintButton]=useState(true);
    const [badMessage, setBadMessage]=useState(false);




     let elementsScreen;
     let selection;
     let submit;

 
 
     
     function changeUserSelection(e){
         e.preventDefault();
         if(e.target.userInput.value.includes("td")||!e.target.userInput.value.includes('[')){
             setBadMessage(()=>"I have disabled this route. You may have been correct but this lesson is to learn how to use [class^='className'] with your querySelector")
            return 0;
         }
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
                <h2>Congratulations!</h2>
                <h3>You have developed a regex-like understanding of document.querySelector</h3>
                <p>I included all the pseudo classes and operators that I felt were necessary for successfully navigating any DOM for querySelector. But here is a list of all the pseudo classes and operators that can be used in document.querySelector</p>
                <h3>Pseudo Classes:</h3>
                <ul>
                    <li>:hover: Selects an element when the mouse pointer is over it.</li>
                    <li>:active: Selects an element when it is being activated (e.g., clicked).</li>
                    <li>:focus: Selects an element when it has keyboard focus.</li>
                    <li>:first-child: Selects the first child element of its parent.</li>
                    <li>:last-child: Selects the last child element of its parent.</li>
                    <li>:nth-child(n): Selects elements based on their position among siblings, where n is a numeric value or formula.</li>
                    <li>:not(selector): Selects elements that do not match the specified selector.</li>
                    <li>:checked: Selects input elements that are checked (e.g., checkboxes or radio buttons).</li>
                    <li>:disabled: Selects input elements that are disabled.</li>
                    <li>:enabled: Selects input elements that are enabled.</li>
                    <li>:required: Selects input elements with the "required" attribute.</li>
                    <li>:optional: Selects input elements without the "required" attribute.</li>
                    <li>:valid: Selects input elements with valid input data (e.g., in a form).</li>
                    <li>:invalid: Selects input elements with invalid input data (e.g., in a form).</li>
                    <li>:nth-of-type(n): Selects elements based on their position among siblings of the same element type, where n is a numeric value or formula.</li>
                    <li>:nth-last-child(n): Selects elements based on their position among siblings, counting from the last child.</li>
                    <li>:nth-last-of-type(n): Selects elements based on their position among siblings of the same element type, counting from the last child.</li>
                    <li>:only-child: Selects elements that are the only child of their parent.</li>
                    <li>:first-of-type: Selects the first element of a specific type among siblings.</li>
                    <li>:last-of-type: Selects the last element of a specific type among siblings.</li>
                </ul>
                <h3>Operators we didn't use:</h3>
                <ul>
                    <li>Attribute Value Prefix Selector ([attribute|="value"]): Selects elements with an attribute whose value is either an exact match or starts with the specified value followed by a hyphen (-).</li>
                    <li>Attribute Value Not Equal Selector ([attribute!="value"]): Selects elements with an attribute that does not match the specified value. We didn't learn this one because it was included in the not:(selector)</li>
                </ul>
                <h3>Continuing on to document.querySelectorAll()</h3>
                <p>Now that you have a good idea of how document.querySelector works we will start looking at how to use document.querySelectorAll works. Click the continue button to see the next Lesson</p>


    
  
                 
                </section>
                <div className={classes.elements}>

                </div>

            </div>
            <div className={classes.console}>
                <div className={classes.instructions}>
                    <h3>The querySelectorAll lesson is still under construction.</h3>
           
                </div>
                <div className={classes.screenSelector}>


                    <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel14'><button>continue</button></Link>
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}

import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "../../../../components/querySelector/querySelectorMasterFunctions";






export default function QuerySelectorLevel13(){
    
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
            <table border="">
        {/* Table caption */}
        <caption>Table Caption</caption>
        
        {/* Table header */}
        <thead>
          <tr>
            <th colSpan="3">Table Header</th>
          </tr>
        </thead>
        
        {/* Table body */}
        <tbody>
          <tr>
            <td className={classes.notthis}>Data 1.1</td>
            <td className="notthis">Data 1.2</td>
            <td class="notthisgdSoG">Data 1.3</td>
          </tr>
          <tr>
            <td className={classes.notthis}>Data 2.1</td>
            <td className={classes.this}>Data 2.2</td>
            <td>Data 2.3</td>
          </tr>
        </tbody>
        
        {/* Table footer */}
        <tfoot>
          <tr>
            <td colSpan="3">Table Footer</td>
          </tr>
        </tfoot>
      </table>
                 
                </section>
                <div className={classes.elements}>

                </div>

            </div>
            <div className={classes.console}>
                <div className={classes.instructions}>
                <h3>The not pseudo class</h3>
                    <p>Sometimes class names can be horrendous. You have class names that start with the same value as your target class, and class names that end with your target class.</p>
                    <p>We can use the not pseudo class to help us navigate through that mess.</p>
                    <p>The :not() pseudo-class in document.querySelector allows you to select elements that do not match a specific selector. You provide two selectors within the :not() function: the primary selector, which defines the elements you want to select, and the selector to exclude, which specifies which elements to exclude from the selection. Elements matching the primary selector but not the exclusion selector will be selected. It's a powerful tool for fine-tuning your element selection and excluding specific elements based on their attributes, classes, or other criteria.</p>
                    <p>The syntax looks like:</p>
                    <p>document.querySelector("div:not([ class='theValueWeDon't want!'])")</p>
                    <p className={classes.mainInstructions}>Select the blue table data using the not pseudo class. Note that you must use the attribute selector [].</p>
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
                    {hint? <p>Notice that all the elements we don't want has 'not' included in their names. What do you think the value in our not() should include?</p>: null}
                    {answer? <p>copy and paste: [class*='this']:not([class*='not'])
                    </p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel14'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}
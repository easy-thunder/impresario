{/* <p>Query selectors are the key to unlocking the full potential of DOM manipulation in web development. One often overlooked but powerful feature is the use of square brackets [ ]. What do they do, you ask? Well, they let you target elements based on their inline attributes! That is how we were able to use the [class*="this"] in the previous example</p> */}
                    // <p>In the previous lesson we used the * wildcard. In this lesson we will use the ^ start of attribute selector. The ^ indicates that you want elements with attributes that start with that substring.</p>
                    // <p>In the second example notice the * before the = sign. This is stating within the class does there exist the string "this"? If so then select that element.</p>

                    import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "../../../../components/querySelector/querySelectorMasterFunctions";






export default function QuerySelectorLevel10(){
    
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
            <td className={classes.notthis}>Data 1.2</td>
            <td>Data 1.3</td>
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
                    <h3>The $ operator</h3>
                    <p>The $ operator does the exact opposite of the ^ operator. While ^ selects elements where the attribute's value starts with a specified substring, $ selects elements where the attribute's value ends with a specified substring. It's a handy way to target elements with attributes that have specific endings, offering flexibility in element selection based on attribute values.</p>
                    <p>The syntax looks exactly the same as the ^ operator only we use the money sign (ie.document.querySelector("[attribute$='End_of_attribute']"))</p>
                    <p className={classes.mainInstructions}>Select the blue table data using the $ operator. Note that you must use the attribute selector [].</p>
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
                    {hint? <p>Notice that in the elements tab the first couple of td elements ends with 't1byr'. What does the element we want end with?</p>: null}
                    {answer? <p>copy and paste: [class$='gdSoG']
                    </p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel12'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}
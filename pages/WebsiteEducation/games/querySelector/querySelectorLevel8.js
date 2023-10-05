import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "../../../../components/querySelector/querySelectorMasterFunctions";






export default function QuerySelectorLevel8(){
    
    const [hint, setHint]=useState(false);
    const [answer, setAnswer]=useState(false);
    const [nextLesson, setNextLesson]=useState(false);
    const [hintButton, setHintButton]=useState(true);
    const [badMessage, setBadMessage]=useState(false);


    const elements=["<document>",
"   <table border=''>",
"   <caption>Table Caption</caption>",
"   <thead>",
"      <tr>",
"      <th colSpan='3'>Table Header</th>",
"      </tr>",
"   </thead>",
"   <tbody>",
"      <tr>",
"         <td>Data 1.1</td>",
"         <td>Data 1.2</td>",
"         <td>Data 1.3</td>",
"      </tr>",
"      <tr>",
"         <td>Data 2.1</td>",
"         <td id='this' >Data 2.2</td>",
"         <td>Data 2.3</td>",
"      </tr>",
"   </tbody>",

"   <tfoot>",
"      <tr>",
"      <td colSpan='3'>Table Footer</td>",
"      </tr>",
"   </tfoot>",
"</table>",

        "</document>"];

     let elementsScreen;
     let selection;
     let submit;

 
 
     
     function changeUserSelection(e){
         e.preventDefault();
         if(e.target.userInput.value.includes("td")){
             setBadMessage(()=>"I have disabled this route. You may have been correct but this lesson is to learn how to use an id with your querySelector")
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
            <td>Data 1.1</td>
            <td>Data 1.2</td>
            <td>Data 1.3</td>
          </tr>
          <tr>
            <td>Data 2.1</td>
            <td id="this" className={classes.this}>Data 2.2</td>
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
                        {elements.map(element=>
                            <pre>{element}</pre>
                        )}
                </div>

            </div>
            <div className={classes.console}>
                <div className={classes.instructions}>
                    <h3>ID's for querySelector</h3>
                    <p>Using IDs in document.querySelector allows you to efficiently target specific HTML elements on a web page. An ID is a unique identifier for an element, making it a powerful tool for precise element selection. When you provide the ID of an element as a selector in document.querySelector, it returns that specific element, allowing you to access and manipulate it easily.</p>
                    <p>The syntax for including an ID in document.querySelector is: document.querySelector("#yourID"). In this exercise to find the id you will need to look at the elements section to find the blue table data. </p>
                    <p className={classes.mainInstructions}>Select the blue table data navigating with the information We have learned and utilizing the elements section. Note that I have disabled the child combinator route and the nth-child pseudo-class</p>
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
                    {hint? <p>Look at the elements. find the td that has an id attribute. Note that I have disabled using the child combinator route.</p>: null}
                    {answer? <p>copy and paste: #this
                    </p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel9'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}
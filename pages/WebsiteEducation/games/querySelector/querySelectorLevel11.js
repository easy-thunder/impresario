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
"         <td id='this' class='EducationIntro_this__gdSoG'>Data 2.2</td>",
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
                    <h3>Accessing Dev Tools</h3>
                    
               

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
                    {hint? <p>If you got to the elements tab click on body&gt;</p>: null}
                    {answer? <p>copy and paste: [class*="this"] or .EducationIntro_this__gdSoG
                    </p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel11'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}
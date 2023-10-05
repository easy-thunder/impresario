import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "../../../../components/querySelector/querySelectorMasterFunctions";






export default function QuerySelectorLevel9(){
    
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
                    <h3>Classes for querySelector</h3>
                    <p>Drawing attention to the elements we have: &lt;td class="EducationIntro_this__gdSoG"&gt; Data2.2 &lt;/td&gt;. I actually named the className="this". So why did the DOM prepend my folder name and append the random string? </p>
                    <p>In my CSS I used something called a module. A css module is a file that is separate from your global css file. In order to prevent two classes from crossing over the DOM automatically prepends and appends those values to your className. This is very important to know if you are trying to use querySelector in your own program.</p>
                    <p>But here are two different ways to querySelect your class we can use document.querySelector(".EducationIntro_this__gdSoG") or we can use document.querySelector("[class*="this"]")</p>
                    <p>In the second example notice the * before the = sign. This is stating within the class does there exist the string "this"? If so then select that element.</p>
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
                    {hint? <p>Look at the elements. find the td that has an class attribute. Note that I have disabled using the child combinator route.</p>: null}
                    {answer? <p>copy and paste: [class*="this"] or .EducationIntro_this__gdSoG
                    </p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel10'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { changeUserSelectionFunction } from "../../../../components/querySelector/querySelectorMasterFunctions";






export default function QuerySelectorLevel7(){
    
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
"         <td>Data 2.2</td>",
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
                        {elements.map(element=>
                            <pre>{element}</pre>
                        )}
                </div>

            </div>
            <div className={classes.console}>
                <div className={classes.instructions}>
                    <h3>Navigating Tables</h3>
                    <p>Using browser developer tools and navigating the Elements tab is a fundamental skill for web developers and designers. This powerful toolset allows you to inspect, edit, and debug HTML and CSS directly in the browser. By right-clicking on any element in your webpage and selecting "Inspect" or by pressing Ctrl + Shift + j or Cmd + Option + I (on macOS), you can open the Developer Tools and access the Elements tab.</p>
                    <p>On your screen where it says "&lt;document&gt; this is a very simplified version that has been provided to you as an informational tool to aid in your query selector.</p>
                    <p>Up to this point, our focus has primarily been on manipulating &lt;div&gt; elements. Now, we're shifting our attention to working with table data, which requires us to navigate the elements section more extensively. It's important to highlight that in this scenario, you don't need to access the &lt;table&gt; element itself. Instead, your main concern will be targeting the third &lt;tr&gt; (table row) and the second &lt;td&gt; (table cell). The simplicity of this task is due to the absence of multiple tables, streamlining your selection process.</p>
                    <p className={classes.mainInstructions}>Select the blue table data navigating with the information We have learned and utilizing the elements section.</p>
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
                    {hint? <p>Notice that the first tr is within the thead. The second tr is within the tbody. The third tr is the second tr within tbody!.</p>: null}
                    {answer? <p>copy and paste: tr+tr&#62;td+td into document.querySelector(). Other answers:tbody&#62;tr+tr&#62;td+td, tr:nth-child(2)&#62;td:nth-child(2), td[class="EducationIntro_this__gdSoG"](this one mite differ if you have a different browser), [class*="this"] (this one should work regardless of your browser)
                    </p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel8'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}


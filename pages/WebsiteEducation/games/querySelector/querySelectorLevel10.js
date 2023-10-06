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
            <td className={classes.poop}>Data 2.2</td>
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
                    <h3>Accessing Dev Tools</h3>
                    
                    <p>For this exercise I am removing the elements section. They were there to simplify things for beginners. </p>
                    <p>You will now be accessing those elements through developer tools.</p>
                    <p>Here's how you can access developer tools in some popular web browsers:</p>

                    <h3>Google Chrome:</h3>
                    <ul>
                      <li>Windows/Linux: Press Ctrl + Shift + I or F12.</li>
                      <li>Mac: Press Cmd + Option + I.</li>
                      <li>Alternatively, right-click anywhere on a webpage and select "Inspect" or "Inspect Element."</li>
                    </ul>

                    <h3>Mozilla Firefox:</h3>
                    <ul>
                      <li>Windows/Linux: Press Ctrl + Shift + I or F12.</li>
                      <li>Mac: Press Cmd + Option + I.</li>
                      <li>Alternatively, right-click anywhere on a webpage and select "Inspect Element."</li>
                    </ul>

                    <h3>Microsoft Edge:</h3>
                    <ul>
                      <li>Windows: Press Ctrl + Shift + I or F12.</li>
                      <li>Mac: Press Cmd + Option + I.</li>
                      <li>Alternatively, right-click anywhere on a webpage and select "Inspect."</li>
                    </ul>

                    <h3>Safari:</h3>
                    <ul>
                      <li>Mac: Go to "Safari" &gt; "Preferences" &gt; "Advanced" and enable the "Show Develop menu in the menu bar" option. Once enabled, you can access developer tools by clicking "Develop" in the menu bar and selecting "Show Web Inspector."</li>
                    </ul>

                    <h3>Opera:</h3>
                    <ul>
                      <li>Windows/Linux: Press Ctrl + Shift + I or Ctrl + Shift + J.</li>
                      <li>Mac: Press Cmd + Option + I or Cmd + Option + J.</li>
                    </ul>

                    <p><strong>Navigating the Elements Tab in Dev Tools</strong></p>

                    <ol>
                      <li>Open Dev Tools to access the "Elements" tab.</li>
                      <li>Note to find more tabs click on the &gt;&gt; sign at the top of dev tools.</li>
                      <li>This tab represents the entire web page document.</li>
                      <li>You'll find the &lt;!DOCTYPE html&gt; declaration at the top.</li>
                      <li>Below it, locate the body element.</li>
                      <li>Click on body to reveal the &lt;div id="__next"&gt;.</li>
                      <li>Further inside, explore the &lt;main&gt; element.</li>
                      <li>Now, delve into the &lt;div class="EducationIntro_interactiveConsoleAndScreen__dWuke"&gt;.</li>
                      <li>Inside this div, you'll notice another div with a class containing "EducationIntro_interactiveConsoleAndScreen."</li>
                      <li>Finally, reach the div with class="EducationIntro_screen__iT_LJ"—this is what we consider the "document" in the elements section.</li>
                    </ol>


                    <p className={classes.mainInstructions}>Navigate through the elements and find the class name of our blue td element. Using the methods we used in the previous lesson select the blue td element. I have changed it's class name. Note that I have disabled the child combinator route and the nth-child pseudo-class.</p>
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
                    {hint? 
                      <ol>If you got to the elements tab click on:
                        <li>body</li>
                        <li>div id="__next"</li>
                        <li>main</li>
                        <li>div class= "EducationIntro_interactiveConsoleAndScreen__dWuke"</li> 
                        <li>div EducationIntro_screenAndElements__fYEic</li> 
                        <li>section class= "EducationIntro_screen__iT_LJ"</li>
                        <li>table</li>
                        <li>tbody</li>
                        <li>tr(note it is the second tr)</li>
                        <li>Now you will see three td's. what is the class of the second td? That is what you will put in your .className or [class="that_Class_name"]</li>

                     </ol>: null}
                    {answer? <p>You really have to learn how to navigate the elements tab before continuing.
                    </p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel11'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}
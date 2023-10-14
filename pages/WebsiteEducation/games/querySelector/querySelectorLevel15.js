// const filteredRows = document.querySelectorAll('tr td:first-child:where(:scope > ' + threshold + ')');
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import classes from '../../EducationIntro.module.css'
import QuerySelectorNavBar from "@/components/querySelector/querySelectorNavBar";
import { querySelectorAllFunction } from "@/components/querySelector/querySelectorAll";
import LineChart from "@/components/querySelector/LineChart";




export default function QuerySelectorLevel15(){
    
    const [hint, setHint]=useState(false);
    const [answer, setAnswer]=useState(false);
    const [nextLesson, setNextLesson]=useState(false);
    const [hintButton, setHintButton]=useState(true);
    const [badMessage, setBadMessage]=useState(false);

    const temperatureData = [
        0.211, 0.038, 0.168, -0.246, -0.223, 0.201, -0.117, -0.126, -0.092, 0.15,
        -0.093, -0.199, 0.269, -0.181, 0.088, -0.314, 0.269, 0.001, 0.226, 0.332,
        0.443, 0.086, 0.46, 0.127, -0.031, 0.242, 0.403, 0.558, 0.331, 0.639, 0.468,
        0.184, 0.348, 0.507, 0.835, 0.355, 0.656, 0.993, 0.783, 0.728, 0.834, 1.021,
        0.893, 0.913, 1.095, 0.998, 1.195, 0.935, 0.957, 1.219, 0.921, 1.074, 1.016,
        1.053, 1.412, 1.66, 1.429, 1.29, 1.444, 1.711, 1.447, 1.394
      ];
    const yearStart=1961;
    
    function createTableData(){
        const rows= [];
        for(let i=0; i<temperatureData.length; i++){
            rows.push(
                <tr key={i}>
                    <td>{i+yearStart}</td>
                    <td>{temperatureData[i]}</td>  
                </tr>
            )
        }
        return rows;
    };





     let elementsScreen;
     let selection;
     let submit;

 
 
     
     function changeUserSelection(e){
         e.preventDefault();
        //  if(e.target.userInput.value.includes("td")||!e.target.userInput.value.includes('[')){
        //      setBadMessage(()=>"I have disabled this route. You may have been correct but this lesson is to learn how to use [class^='className'] with your querySelector")
        //     return 0;
        //  }
         //I import this function because it is used in so many places and I want it to act the same everywhere.
         selection = querySelectorAllFunction(e,selection, setBadMessage, submit, elementsScreen,activateNextLesson,61,100)
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
            <section className={classes.screenGridHalf}>
                <div>

                <table border={1} >
                <caption>Blank Caption</caption>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th >Temperature</th>
                    </tr>
                </thead>
                    <tbody>
                    {createTableData()}
                    </tbody>
                    <tfoot></tfoot>

                </table>
                </div>
                <div>
                <LineChart/>     
                <p>This dataset represents the average global ocean temperatures during the period from 1951 to 1980, with this period defined as the baseline with a value of 0°C. The positive (+) and negative (-) values indicate deviations from this baseline, representing variations in ocean temperatures.</p>            
               {nextLesson? <p className="hugeText">GREAT JOB! Press continue for the next lesson!</p>:null}
                </div>
            </section>
            <div className={classes.elements}>

            </div>

            </div>
            <div className={classes.console}>
                <div className={classes.instructions}>
                <h3>QuerySelector all intro</h3>
                    <p>querySelectorAll is a powerful JavaScript method used for selecting multiple HTML elements that match a specified CSS selector. It allows you to access and manipulate multiple elements at once.</p>
                    <p>We can use all the operators and pseudoClasses we previously learned about with querySelectorAll.</p>
                    <p className={classes.mainInstructions}>Using previous knowledge how can you select all the temperature data without including the year?</p>
                </div>
                <div className={classes.screenSelector}>

                    <div>
                    <form onSubmit={changeUserSelection}>
                    
                    <label>document.querySelectorAll("</label>
                    <input type="text" name="userInput"/>
                    <label>")</label>
                    <br />
                    <input type="submit"/>
                    </form>
                    </div>

                    {hintButton? <button onClick={activateHint}>hint</button>:null}
                    {hint? <button onClick={activateAnswer} >answer</button>:null}
                    {hint? <p>If we use the + operator on the td we can get only the td's that are the second child.</p>: null}
                    {answer? <p>copy and paste: td+td
                    </p>: null}
                    {nextLesson?       <Link href='/WebsiteEducation/games/querySelector/querySelectorLevel14'><button>continue</button></Link>:null}
                    {badMessage? <p className="red">{badMessage}</p>:null}
                </div>

            </div>
        </div>
    </Fragment>
}
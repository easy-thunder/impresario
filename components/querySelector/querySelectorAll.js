import classes from "@/pages/WebsiteEducation/EducationIntro.module.css"


export function querySelectorAllFunction(e,selection,setBadMessage,submit,elementsScreen,activateNextLesson,winningScore,pointCondition){
    e.preventDefault();

        
        try{
             submit =document.querySelector("input[type=submit]")
             elementsScreen=document.querySelector("section");
              selection = elementsScreen.querySelectorAll(`${e.target.userInput.value}`);
        }
        catch(error){console.error(error)}

        let score =0;
        let win = winningScore;


        function handleColorChange(element, bgColorClass){
            element.style.backgroundColor = '';
    
            // Remove the color classes
            element.classList.remove(classes.greenBackground);
            element.classList.remove(classes.redBackground);
        
            // Apply the new color class
            element.classList.add(classes.slowColorChange);
            element.classList.add(classes[bgColorClass]);
        

            setTimeout(()=>{
                
                element.style.backgroundColor = '';
                element.classList.remove(classes.greenBackground);
                element.classList.remove(classes.redBackgroundColor);
            },3000)


        }
        
        
        if(selection==null){
            setBadMessage(()=>"Unfortunately you didn't put a valid element into the querySelector. This would normally error out the program. Try again!")
            return 0}
        const elementsArray= Array.from(selection)

        elementsArray.map(element=>{
            if(element.textContent<pointCondition){
                handleColorChange(element, 'greenBackground')
                score++;
            }

            else{
                handleColorChange(element, 'redBackgroundColor')
                setBadMessage(""); score--;
            }
        })
        if(score>=win){
            activateNextLesson();
            submit.disabled=true;
            // element.style.backgroundColor="green";
            // elementsArray.map(element=>{
            //     element.style.backgroundColor="green"
            // })
        }

        return selection;
        

}
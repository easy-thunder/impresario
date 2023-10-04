

export function changeUserSelectionFunction(e,selection,setBadMessage,submit,elementsScreen,activateNextLesson){
        e.preventDefault();
            if(selection){
                selection.style.backgroundColor="white";
                
            }
            
            try{
                 submit =document.querySelector("input[type=submit]")
                 elementsScreen=document.querySelector("section");
                //  console.log(elementsScreen)
                  selection = elementsScreen.querySelector(`${e.target.userInput.value}`);
            }
            catch(error){console.error(error)}
            
            
            if(selection==null){
                setBadMessage(()=>"Unfortunately you didn't put a valid element into the querySelector. This would normally error out the program. Try again!")
                return 0}
            if(selection.className.includes("thisBox")|| selection.className.includes("thisBigBox")){
                submit.disabled=true;
                setBadMessage("")
                 selection.style.backgroundColor="green";
                activateNextLesson();
                        
            }
            else{selection.style.backgroundColor="rgb(255,0,0,0.4)"; setBadMessage("")}
            return selection;
            

}






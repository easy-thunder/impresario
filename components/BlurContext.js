import { createContext, useState } from "react";

 const BlurContext = createContext({
    blurOn: (blurOn)=>{},
    blurOff: (blurOff)=>{},
    blur: false,
})


export function BlurContextProvider(props){
    const [blur, setBlur] = useState(false)

function blurOn(){
    return setBlur(()=>true)
}
function blurOff(){
    return setBlur(()=>false)
}
const context={
blur: blur,
blurOn: blurOn,
blurOff: blurOff,
}


return(
    <BlurContext.Provider value = {context}>
        {props.children}
    </BlurContext.Provider>
    )
}


export default BlurContext




















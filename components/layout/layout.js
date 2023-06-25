import Footer from "./Footer";
import MainHeader from "./headerComponents/mainHeader"
import BlurContext from "../BlurContext";
import { useContext } from "react";

const {Fragment}= require('react');


export default function Layout(props){
    const blurCtx= useContext(BlurContext)
    const isBlur = blurCtx.blur
    return (
        <Fragment>
        
        
    <div className={isBlur ? "blur": null}>

        <MainHeader />
        <main>
            {props.children}
            
        </main>
        
        <Footer />
    </div>



    </Fragment>
    )
}
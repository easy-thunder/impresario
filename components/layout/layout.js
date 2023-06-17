import { Modal } from "flowbite-react";
import Footer from "./Footer";
import MainHeader from "./headerComponents/mainHeader"

const {Fragment}= require('react');


export default function Layout(props){
    return <Fragment>
        <MainHeader />
        <main>
            {props.children}
        </main>
        
        <Footer />
    </Fragment>
}
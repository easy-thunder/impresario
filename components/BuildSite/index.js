import { Fragment, useState, useContext, useEffect } from "react";
import classes from "@/pages/Buy/BuildSite/BuildSite.module.css"
import PurchaseModal from "../Modal/PurchaseModal";
import { productionBrowserSourceMaps } from "@/next.config";

const stripe = require('stripe')('sk_test_51MTKZtAdCijzaWdMbFKg2sW20PCV5PQlshcXg3JqxZWqDhrtFCXGBZoPTgRakE2AdqMNN8r4KmvUsx9ejB58wys000pY1kQMEM');


export default function SiteBuildingComponent(){
    const [modal, setModal]= useState(null)
    const [products, setProducts]= useState([])


    function staticSiteModal(){
        setModal(()=>"staticSite")
    }

function fullStackModal(){
    setModal(()=>"fullStack")
}

    function turnModalOff(){
        setModal(()=>null)
    }
    function fullStackModalPlus(){
        setModal(()=>"fullStackPlus")
    }

     function getProducts(){
        fetch('/api/checkout_sessions')
        .then((r)=>{if(r.ok){
            console.log("r is okay")
            return r.json()}
            else{console.log('r is not okay')}
        
        })
        .then((data)=>{
            console.log(data.message)
            setProducts(()=>data.message)
            
    })
    }




    useEffect(()=>{
        getProducts()
    },[])

    const staticSiteAddOns=products.filter(product=>{
        if(product.unit_label==="staticOnly"||product.unit_label==="allServices"||product.unit_label==="Static Site"){return product}
    })

    
    const fullStackAddOns=products.filter(product=>{
        if(product.unit_label==="allServices"||product.unit_label==="fullStack" || product.unit_label==="FullStack"){return product}
    })
    if(products){
    }

    const fullStackPlusAddOns= products.filter(product=>{
        if(product.unit_label==="allServices"|| product.unit_label==="FullStack+"){return product}
    })

    console.log(fullStackPlusAddOns)

    let modalProperties={}
    //I realize now after setting up this mach data that I could have just fetch requested the Stripe
    //data. However, I wanted to get this done and move on to other projects instead of reformatting.
    // Thus this is why my services are hard coded in.

    if(modal==="staticSite"){
        modalProperties={
            title: "Static Site",
            // paidOptions:["Stripe", "Thryv", "Advanced Search", "Google Maps", "Animations", "Content Generation", "Additional Sections"],
            // payCodes:['prod_P2gNnvePdv0g4G',"prod_P2gMOLiPujnmXB","prod_P2gMOhdZjKgNxr", "prod_P2gIjIiPgHiLbV", "prod_P2gLImTpSzIMlp", "prod_P2gLwYwb9lWRN4","prod_P2gLlfNcbkofvD"],
            // paidDescriptions:["Automatic payment system for your business.", "Automatic scheduling system for your business.", "Get a search bar for your products or services that filter and sort.", "Get google maps locations on your website- useful for a mobile business.", "Add small animations to your site to make them more engaging.", "Generate content for your site to promote traffic flow.", "Get more sections for your website."],
            // paidPrice: [249.99, 249.99, 99.85, 149.99, 149.99, 149.99, 299.85],
            // initialPrice:999.85
            options: staticSiteAddOns
            
        }
    }
    if(modal==="fullStack"){
        modalProperties={
            title:"FullStack",
            // paidOptions:["File Upload", "Sessions and Cookies", "Chat", "Automated Emails", "Google Maps", "Animations", "Content Generation", "Additional Sections"],
            // payCodes:["prod_P2gK1BjLkKVLBT","prod_P2gJ9JdGqt4d4M","prod_P2gJy6XtcROV6P","prod_P2gJTPF7qAfeh5", "prod_P2gIjIiPgHiLbV", "prod_P2gLImTpSzIMlp", "prod_P2gLwYwb9lWRN4","prod_P2gLlfNcbkofvD"],
            // paidDescriptions:["Give your users the ability to upload their files to your website.","Make it so your customer can refresh the website and not be logged out.", "Have your users be able to contact you instantly in your website.", "Be able to reach out to your customers for customer retention.", "Get google maps locations on your website- useful for a mobile business.", "Generate content for your site to promote traffic flow.","Get more sections for your website." ],
            // paidPrice:[699.99,299.99,699.99, 499.99,149.99,149.99,149.99,419.85],
            // initialPrice:2299.99
            options: fullStackAddOns
        }
    }
    if(modal==="fullStackPlus"){
        modalProperties={
            title: "FullStack+",
            // paidOptions:["Google Maps", "Animations", "Additional Sections"],
            // payCodes:['prod_P2gIjIiPgHiLbV','prod_P2gLImTpSzIMlp','prod_P2gLlfNcbkofvD'],
            // paidDescriptions:["Get google maps locations on your website- useful for a mobile business.", "Add small animations to your site to make them more engaging.","Get more sections for your website."],
            // paidPrice:[149.99,149.99,419.85],
            // initialPrice:4499.85,
            options: fullStackPlusAddOns
        }
    }


return(
<Fragment>


<div onClick={turnModalOff} className={modal? "modalBackground":null}></div>
        <div className="marginPastHeader whiteText"></div>
        <h1 className="whiteText updatedCenter">Your Next Site</h1>
        <div className={classes.boundary}>
        <div className={classes.card}>
            <h2 className=" updatedCenter">Static Site</h2>
            <ul className={` ${classes.list}`}>
                <li>Informational Site that gets your name and contact out there!</li>
                <br/>
                <li>Social media connection.</li>
                <br/>
                <li>SEO initially optimized.</li>
                <br/>
                <li>includes three sections.</li>
                <br/>
                <li>Google analytics attached for your site.</li>
                <br/>
                <li>One Expert Design Template consultations confirmed before building.</li>
                <br/>
                <li>No server fees.</li>
                
                <br/>
                <li>Options: Stripe checkout, Thryv Scheduling, search bar, google maps, additional sections, animations and content Generation </li>

            </ul>
            <h4>Best for no monthly cost</h4>

<h5 className={`centerPrice`}>price: $999.85</h5>

<button 
onClick={staticSiteModal}
className="center">purchase</button>
        </div>

        <div className={classes.card}>
            <h2 className=" updatedCenter">Fullstack+</h2>
            <ul className={` ${classes.list}`}>
                <li className={classes.listAttention}>Everything included in lower plans</li>
                <br/>
                <li>Automated Emails utilized for continued customer outreach.</li>
                <br/>
                <li>Unlimited expert design consultations confirmed before building.</li>
                <br/>
                <li>Give users the ability to upload files.</li>
                <br/>
                <li>Includes seven sections.</li>
                <br />
                <li>Establish cookies and sessions so users don't have to sign back in.</li>
                <br/>
                <li>Chat sessions.</li>
                <br/>
                <li>Options: google maps, additional sections and animations at half price.</li>
            </ul>
            <h4>Best for automated customer retention</h4>
<h6 className={`centerPrice`}>price: $4499.85</h6>
<button onClick={fullStackModalPlus} className="center">purchase</button>
        </div>
        <div className={classes.card}>
            <h2 className=" updatedCenter">Fullstack</h2>
            <ul className={` ${classes.list}`}>
                <li>Everything included in Static Site.</li>
                <br/>
                <li>Login info stored.</li>
                <br/>
                <li>Security features to safely store customer info</li>
                <br/>
                <li>Includes Search bar with filter.</li>
                <br/>
                <li>includes five sections.</li>
                <br/>
                <li>Three Expert Design Template consultations confirmed before building.</li>
                <br/>
                <li> Automated scheduling or automatic payment system.</li>
                
                <br/>
                <li>Options: Sessions and cookies, automated emails, chat,  google maps, file upload, additional sections, and animations. </li>
                <br/>

            </ul>
            <h4>Best for customization options</h4>

<h5 className={`centerPrice`}>price: $2299.99</h5>
<button onClick={fullStackModal} className="center">purchase</button>
        </div>


        </div>

        {modal?
        <PurchaseModal  setModal={setModal} title={modalProperties.title} options={modalProperties.options}/>
         :null}
        
    </Fragment>)}
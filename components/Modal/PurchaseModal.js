import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./modal.module.css"
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );


export default function PurchaseModal({title, setModal, options}){

    useEffect(()=>{
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    },[])

    const sectionAdditionRef= useRef()
    const mainPurchase= options.find(option=>{
        console.log(option.name)
        if(option.name===title){
            return option
        }
    })
    

    const additionalSection= options.find(option=>{
        if(option.name==="Additional Sections"){return option}
    })
    console.log("additionalSections",additionalSection)
    const filteredOptions= options.filter(option=>{
        if(option.name!=title){
            return option
        }
    })
    // const [formData, setFormData] = useState({codesToSend:[
    //     {price: mainPurchase.default_price, quantity:1}
    // ]})


    const [total, setTotal]= useState(mainPurchase.price)
    const [addSections, setAddSections]= useState(false)
    const [previous, setPrevious]= useState(0)
    const [codesToSend, setCodesToSend]=useState([{price: mainPurchase.default_price,quantity:1}])
    
    



    function modalOffHelper(){
        setModal(()=>null)
    }

  


    const sectionPrice= additionalSection.price
    
    function calculateTotal(e){
        if(e.target.name==="Additional Sections"){
            if(e.target.checked===true){

                setAddSections(()=>true)
                setTotal(total=>(Math.round((total-sectionPrice)*100)/100))
                // setCodesToSend((prev)=>[...prev, {price:e.target.id, quantity:1}])
            }
            if(e.target.checked===false){
                setAddSections(()=>false)
                setTotal(total=>(Math.round((total+sectionPrice)*100)/100))
                // setCodesToSend((prev) => {
                //     const updatedState = prev.filter((item) => item.price !== e.target.id);
                //     console.log("updatedState", updatedState);
                //     return updatedState;
                //   });

            }
        }
        if(e.target.id==="numberOfSections"){
            setPrevious(((sectionPrice*e.target.value)))
            let now =  ((((sectionPrice+1)*e.target.value-previous)))    
            setTotal(total=> (((Math.round((total+now)*100)/100))))
            // setCodesToSend((prev)=>[...prev], {price:additionalSection.default_price, quantity:e.target.value})

            setCodesToSend((prev)=>{
                // console.log("prev",prev)
                // console.log('additionalSections',additionalSection.default_price)
                const theSection = prev.find((service)=>{
                if(service.price===additionalSection.default_price){
                    service.quantity=e.target.value
                    // console.log("here",service)
                    return service
                }
                // else{console.log("Not here",service); return false}
                    
                }
                )
                console.log("newPrev",...prev)
            return [...prev]
            })
        }

        if(e.target.checked&& e.target.id!=="numberOfSections"){
            setTotal(total=>((total+parseFloat(Math.round ((e.target.value)*100)/100))))
            setCodesToSend((prev)=>[...prev, {price:e.target.id, quantity:1}])
        }
        if(!e.target.checked && e.target.id!=="numberOfSections"){
            setTotal(total=>((total-parseFloat(Math.round((e.target.value)*100)/100))))
            setCodesToSend((prev) => {
                const updatedState = prev.filter((item) => item.price !== e.target.id);
                console.log("updatedState", updatedState);
                return updatedState;
              });
             }
            }
            console.log(codesToSend)

    async function submit(e) {
        e.preventDefault();
        // console.log(codesToSend)
        const response = await fetch('/api/checkout_sessions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
    
              {formData:codesToSend}
            
            ),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          // Assuming the server returns a JSON object with a 'url' property
          const result = await response.json();
          
          // Redirect the user to the Stripe checkout session URL
          window.location.href = result.url;
      }
    return(
        <Fragment>
        <div className="modalBorder">
            <h4 onClick={modalOffHelper} className="whiteText exitButton">x</h4>

            <form onSubmit={submit}>
                <h2 className="whiteText" >{title}</h2>
            <div className="modal">
                <h2 className="centerText">Paid Options</h2>
                <br/>
                <br/>
                <br/>
                {filteredOptions.map((option)=>{
                    const key= option.id;
                    return <Fragment key={key}> 
                        <div className={classes.purchaseOptionsModal}>
                        <div>

                        <h3>{option.name}</h3>
                        <label className="switch">
                            
  <input type="checkbox" id={option.default_price} value={option.price} name={option.name} onChange={calculateTotal}/>
  <span className="slider round"></span>
</label>
  <h4>{option.description}</h4>
                        </div>
                        <div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p>
                                price: ${option.price}
                            </p>
                            </div>
                        </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
                    </Fragment>
                })}
                {addSections? <Fragment> 
                    <label>How many sections? </label>
                    <select onChange={calculateTotal} ref={sectionAdditionRef} id="numberOfSections">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>
                    
                </Fragment>:null}
                
            </div>
                <h3 className="whiteText">quote:${Math.round((total)*100)/100} </h3>
                <input type="submit" />
                <h2 className="red" >This is a demonstration and an estimate. You can test the form by putting in 4242 repeating. It is difficult pin pointing how much each service is.
                If you have questions call (720) 773-1934</h2>
                
                </form>
        </div>
            
        </Fragment>
    )
}








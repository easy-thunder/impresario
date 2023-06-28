import { Fragment, useRef, useState } from "react";
import classes from "./modal.module.css"


export default function purchaseModal({paidOptions, setModal, paidPrice, paidDescriptions, initialPrice}){

    const sectionAdditionRef= useRef()

    const [total, setTotal]= useState(initialPrice)
    const [addSections, setAddSections]= useState(false)
    const [previous, setPrevious]= useState(0)

    function modalOffHelper(){
        setModal(()=>null)
    }

  function  submit(e){
    e.preventDefault()

    }
    const sectionPrice=paidPrice[paidPrice.length-1]
    
    function calculateTotal(e){
        if(e.target.id==="Additional Sections"){
            if(e.target.checked===true){

                setAddSections(()=>true)
                setTotal(total=>(Math.round((total-sectionPrice)*100)/100))
            }
            if(e.target.checked===false){
                setAddSections(()=>false)
                setTotal(total=>(Math.round((total+sectionPrice)*100)/100))
            }
        }
        if(e.target.id==="numberOfSections"){
            setPrevious(((sectionPrice*e.target.value)))
let now =  ((((sectionPrice+1)*e.target.value-previous)))
                
                setTotal(total=> (((Math.round((total+now)*100)/100))))
        }

        if(e.target.checked){
            setTotal(total=>((total+parseFloat(Math.round ((e.target.value)*100)/100))))
        }
        if(!e.target.checked){
            setTotal(total=>((total-parseFloat(Math.round((e.target.value)*100)/100))))
        }
    }
    return(
        <Fragment>
        <div className="modalBorder">
            <h4 onClick={modalOffHelper} className="whiteText exitButton">x</h4>

            <form onSubmit={submit}>
                <h2 className="whiteText" >Static Site</h2>
            <div className="modal">
                <h2 className="centerText">Paid Options</h2>
                <br/>
                <br/>
                <br/>
                {paidOptions.map((option, index)=>{
                    const key= option;
                    return <Fragment> 
                        <div className={classes.purchaseOptionsModal}>
                        <div>

                        <h3>{option}</h3>
                        <label className="switch">
                            
  <input type="checkbox" id={option} value={paidPrice[index]} onChange={calculateTotal}/>
  <span className="slider round"></span>
</label>
  <h4>{paidDescriptions[index]}</h4>
                        </div>
                        <div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p>
                                price: ${paidPrice[index]}
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
                        <option value={0}>0</option>
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
                <h3 className="whiteText">total:${Math.round((total)*100)/100} </h3>
                <h2 className="whiteText">To get setup call (720) 773-1934</h2>
                </form>
        </div>
            
        </Fragment>
    )
}








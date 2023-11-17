import { Fragment } from "react"
import { useAuth } from "./hooks/useAuth";
import { useState } from "react";

export default  function Profile(){
    const { session, isAuthenticated } = useAuth();
    const [deleteToggle, setDeleteToggle]= useState(false)

async function logOut(){
    await signOut();
    location.reload()
}

    function deleteProfile(){

        
        fetch(`/api/auth/DeleteProfile/${encodeURIComponent(session.user.email)}`,{method:"DELETE"})
        // .then(logOut())
        .then(r=>r.json())
        .then(data=>console.log(data))
        .then(logOut())

    }

    function checkDelete(){
        setDeleteToggle((deleteToggle)=>!deleteToggle)
    }


    return(
        <Fragment>
        
        {session? 
        <Fragment>
                <div className="marginPastHeader whiteText"></div>
                <h1 className="whiteText updatedCenter">Welcome {session.user.name}</h1>
                <div style={{backgroundColor: "white"}}>
                    <div style={{minHeight:"80vh"}}>
                        <p>This is a work in progress but here is a way to delete your profile:</p>
                        <button onClick={()=>checkDelete()}>Delete Profile</button>
                        <img src={session.user.image} alt="User Image" />
                        {deleteToggle? <Fragment>
                            <p>Are you sure you want to delete?</p>
                            <button onClick={()=>deleteProfile()}>yes</button>
                            <button onClick={()=>checkDelete()}>no</button>
                        </Fragment>:null}

                    </div>


        
        
                </div>
                </Fragment>:
                <Fragment>
                     <div className="marginPastHeader whiteText"></div>
                <h1 className="whiteText updatedCenter">You need to sign in to access this page</h1>
                </Fragment>
                
                }
        
              
                
            </Fragment>)
}




"use client";
import { Fragment, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import ChatModal from "@/components/Modal/ChatModal";








export default function AdminPage(){



    

    const {data: session, status}= useSession();
    const [admin, setAdmin]=useState(false)
    const [users, setUsers]=useState([])
    const [userChat, setUserChat]=useState(null)



  


    useEffect(()=>{
        if(!session){return}
        if(session.user.email==="jakediehl17@gmail.com"){
            setAdmin(()=>true)
            fetch(`/api/AllUsers`)
            .then(r=>{if(r.ok){return r.json()}})
            .then(data=>{
                setUsers(()=>data)
            })
        }
    },[session])


    useEffect(() => {

    }, []);



    
    

    function openChat(email){
        setUserChat({
            email: email,
        })
      }







    
    return <Fragment>
        {admin?       <Fragment>
                <div className="marginPastHeader whiteText"></div>
                <h1 className="whiteText updatedCenter">Welcome {session.user.name}</h1>
                <div style={{backgroundColor: "white"}}>
                    <div style={{minHeight:"80vh"}}>
                        <img src={session.user.image} alt="User Image" />
                        <div className="flex">

                        {users? users.map(user=>
                                <Fragment key={user._id}>
                                    <div onClick={()=>openChat(user.email)} style={{cursor:"pointer"}} className="userCards">

                                <h3>{user.email}</h3>
                                




                                    </div>
                                </Fragment>
                            
                            ):null}
                            {userChat?  <ChatModal/>:null}
                            </div>


                        


                    </div>


        
        
                </div>
                </Fragment>:null}

                
        
    </Fragment>

}



























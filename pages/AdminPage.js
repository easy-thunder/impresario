"use client";
import { Fragment, useEffect, useState } from "react";
import ChatModal from "@/components/Modal/ChatModal";
import { useSession } from "next-auth/react";






export default function AdminPage(){



    const { data: session } = useSession();
    console.log(session)
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



    
    

    function openChat(email, messages){
        setUserChat({
            email: email,
            messages: messages,
            auth: true
        })
        const action="HIDESHOWCHAT"
        fetch(`/api/auth/UserIndividualActions/${email}`,
       { method:"PATCH",
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify({action})

        }

        )
      }


      const sortedUsers = users.sort((a,b)=>{return a.viewedChat - b.viewedChat})




    
    return <Fragment>
        {admin?   
        
            <Fragment>
                <div className="marginPastHeader whiteText"></div>
                <h1 className="whiteText updatedCenter">Welcome {session.user.name}</h1>
                <div style={{backgroundColor: "white"}}>
                    <div style={{minHeight:"80vh"}}>
                        <img src={session.user.image} alt="User Image" />
                        <div className="flex" style={{flexDirection:"column"}}>

                            {sortedUsers? sortedUsers.map(user=>
                                <Fragment key={user._id}>
                                    <div onClick={()=>openChat(user.email)} style={{cursor:"pointer", color: user.viewedChat ? "red":null, backgroundColor: user.viewedChat ? "green":null }} className="userCards">

                                        <h3>{user.email}</h3>
                                        
                                    </div>
                                </Fragment>
                            
                            ):null}
                            {userChat?  <ChatModal auth={userChat.auth} userEmail={userChat.email} userMessages={userChat.messages}/>:null}
                            </div>
                    </div>
                </div>
            </Fragment>:null}

                
        
    </Fragment>

}



























"use client";
import { Fragment, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { io } from "socket.io-client";
import ChatModal from "@/components/Modal/ChatModal";


function useSocket(){
  const [socketIo,setSocketIo]= useState(null);
  useEffect(() => {
    const  socket = io(process.env.HOST_URL, {
        path:'/api/socket',
       // transports: ["websocket"]
      });
    setSocketIo(socket)
    return () => {
      socket.disconnect();
    };
  }, []);
  return socketIo;

}




export default function AdminPage(){



    

    const {data: session, status}= useSession();
    const [admin, setAdmin]=useState(false)
    const [users, setUsers]=useState([])
    const [userChat, setUserChat]=useState(null)
    const [message, setMessage]= useState('')
    const [allMessages, setAllMessages] = useState([]);

    const socket = useSocket();

    useEffect(() => {
      if(socket) {
        socket.on('connect', () => {
          console.log('connect');
        });
        socket.on('disconnect', () => {
          console.log('disconnect');
        });
        socket.on("receive-message", (data) => {
          setAllMessages((pre) => [...pre, data]);
        });
      }
      
    }, [socket]);
  


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

      function sendMessage(e){
        e.preventDefault();

        console.log("emitted");
        socket.emit("send-message", {
          message
        });

        setMessage("");
      }





    
    return <Fragment>
        {admin?       <Fragment>
                <div className="marginPastHeader whiteText"></div>
                <h1 className="whiteText updatedCenter">Welcome {session.user.name}</h1>
                <div style={{backgroundColor: "white"}}>
                    <div style={{minHeight:"80vh"}}>
                        <img src={session.user.image} alt="User Image" />
                        <div className="flex">

                        {users.map(user=>
                                <Fragment key={user._id}>
                                    <div onClick={()=>openChat(user.email)} style={{cursor:"pointer"}} className="userCards">

                                <h3>{user.email}</h3>
                                




                                    </div>
                                </Fragment>
                            
                            )}
                            {userChat?  <ChatModal/>:null}
                            </div>


                        


                    </div>


        
        
                </div>
                </Fragment>:null}

                
        
    </Fragment>

}



























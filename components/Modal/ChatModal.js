// 'use client'
import useSWR from 'swr'

import { Fragment, useEffect, useState } from "react";

// import e from "express";
// require('dotenv').config()
import { useSession } from 'next-auth/react';

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};








export default function ChatModal({auth,userEmail,usersMessages}) {

  const { data: session } = useSession();
  const [messages, setMessages] = useState([]);
  const [admin, setAdmin]= useState(false)
  const [messageError, setMessageError]=useState(null)
  useEffect(()=>{

    if(auth){
      setAdmin(()=>true)
    }
  },[])
  // console.log(session.user.email)
  ///////////////////////////////////////////////////
  ///// useSWR Get Request:

  let apiUrl;
  if(!auth){ apiUrl = session?.user?.email ? `/api/Messaging/${session.user.email}` : null;}
  if(auth){apiUrl = `api/Messaging/${userEmail}`}

  const { data, error } = useSWR(apiUrl, fetcher, {refreshInterval: 5000});
  if (error){console.log(error)}


  useEffect(() => {
    if (data) {
      const processedMessages = data.messages? data.messages.map(messageObj => {
        const isAdmin = messageObj.admin; // Check if the admin property is present
        return {
          message: messageObj.message,
          admin: isAdmin,
          style: {
            // Define styles based on the isAdmin condition
            backgroundColor: isAdmin ? 'green' : 'red',
            // Add other styles as needed
          },
        };
      }
      )
      :null
      ;
  
      setMessages(processedMessages);
    }
  }, [data]);
///////////////////////////////////////////////////////









  const [message, setMessage] = useState('');
  // const [eventData, setEventData] = useState({
  //   eventType: 'messageSend',
  //   data: 'someData',
  // });

// console.log(messageData)

////////////////////////




/////////////////////////////////////
  
async function sendMessage(e) {
  e.preventDefault();
  console.log(message);

  try {
    const response = await fetch(`/api/Messaging/${session.user.email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message, admin: admin }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      // Update the state only after the fetch is successful
      setMessages([...messages, {message:message,admin:false}]);
      setMessage(() => '');

    } else {
      console.log("Failed to send message");
    }
  } catch (error) {
    setMessageError(()=>error);
  }
}
  
  

  return (
    <Fragment>
      <div className="modalBorder">
        <div style={{ backgroundColor: 'white' }}>
          <div style={{ minHeight: '6vh', marginTop: '2em' }} className='messageContainer'>
            {session?
            <Fragment>

            {auth? <p>{userEmail}</p>:null}
          <ul style={{ display: 'block', padding: 0, margin: 0 }}>
            {messages? 
            
  
    
    messages.map((message, index) => (
      <li key={index} style={{ display: 'block', marginBottom: '10px' }} className={message.admin? "adminMessage":"userMessage"}>
      {message.message}
      </li>
      ))
      :null}
  {messageError? <p>messageError</p>:null}
</ul>




  </Fragment>

  :<p>You need to login to use ImpresarioChat</p>
  
  
  }
          </div>
          <form style={{ display: 'flex' }} onSubmit={sendMessage}>
            <input
              style={{
                height: '6vh',
                marginTop: '2em',
                border: '2px red solid',
                borderRadius: '2em',
                width: '80%',
                marginRight: '10px',
              }}
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input
              type="submit"
              style={{
                display: 'inline-block',
                float: 'right',
                marginTop: '1.3em',
                height: '6vh',
                verticalAlign: 'middle',
              }}
            />
          </form>


       </div>
      </div>
    </Fragment>
  );
}
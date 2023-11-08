
import { Fragment, useEffect, useState } from "react";
import io from "socket.io-client";
import { useSession } from "next-auth/react";
require('dotenv').config()


 function useSocket(){
  const [socketIo,setSocketIo]= useState(null);
  useEffect(() => {
    establishSocket()

  }, []);
  async function establishSocket(){
    const  socket = await io("https://impresario-six.vercel.app", {
      path:'/api/socket',
    });
  setSocketIo(socket)
  return () => {
    socket.disconnect();
  };
  }
  return socketIo;

}


export default function ChatModal() {

  const {data: session, status}= useSession();
  const [allMessages, setAllMessages] = useState([]);
  const [message, setMessage] = useState('');

  const socket =  useSocket();
  
  // console.log(socket.id)
  if(socket){
    console.log(socket.io.uri)
    if(session){
      if(session.user.email==="jakediehl17@gmail.com"){
        socket.id="admin"
      }
      else{

        socket.id=session.user.email
      }
    }
  }

  useEffect(() => {
    connectToSocket()
    
  }, [socket]);


 async function connectToSocket(){
  if(socket) {
    await socket.on('connect', () => {
      console.log('connect');
    });
    socket.on('disconnect', () => {
      console.log('disconnect');
    });
    socket.on("receive-message", (data) => {
      console.log(data)
      setAllMessages((pre) => [...pre, data]);
    });
  }
  }


  

  function sendMessage(e){
    e.preventDefault();
    console.log("emitted");
    socket.emit("send-message", {
      message
    });
    setMessage("");
  }
  


  return (
    <Fragment>
      <div className="modalBorder">
        <div style={{ backgroundColor: 'white' }}>
          <div style={{ minHeight: '6vh', marginTop: '2em' }}>
            {allMessages.map((message, index) => (
              <p key={index}>{message.message}</p>
            ))}
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
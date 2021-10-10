import React, { useState,useRef,useEffect } from "react";
import { firestore, auth,firebase } from "../configs/firebase.config";
import { useCollectionData } from "react-firebase-hooks/firestore";

import Message from "./Message";

function ChatRoom() {
  // To Get Messages
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(query, { idField: "id" });

  // To Send Messages
  const [text, setText] = useState("");
  const down = useRef();

  const SendMessage = async () => {
    let message = {
      uid: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      img: auth.currentUser.photoURL,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    if (text !== "") {
      await messagesRef.add(message);
    }
    setText("");
    down.current.scrollIntoView({behavio:'smooth'});
  };

  const EnterKey=(e)=>{
    if (e.charCode === 13 || e.keyCode===13) {
      SendMessage();
    }
  }

  // To Logout
  const SignOutFn = () => {
    auth.signOut();
  };

  useEffect(()=>{
    down.current.scrollIntoView({behavio:'smooth'});
  },[])



  return (
    <div className="chat-room">
      <div className="messages">
        {messages &&
          messages.map((msg) => {
            return <Message key={msg.id} msg={msg} />;
          })}
          <div ref={down} ></div>
      </div>

      <div className="form">
        <button className="logout" onClick={SignOutFn}>
          Logout
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyPress={EnterKey}
          placeholder="your message"
        />
        <button onClick={SendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;

import './App.css';

import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

import {auth,firestore,firebase} from "./configs/firebase.config.js"


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>
        {user ? <ChatRoom /> : <SignIn/> }
        {auth.currentUser.uid}
       <img src={auth.currentUser.photoURL} />
       {auth.currentUser.displayName}
        <SignOut />
      </section> 
    </div>
  );
}

const SignIn=()=>{

  const SignInFn=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return(
    <div>
      <button onClick={SignInFn} >Sign in with google</button>
    </div>
  )
}

const SignOut=()=>{

  const SignOutFn=()=>{
    auth.signOut();
  }

  return auth.currentUser && (
    <button onClick={SignOutFn} >Sign Out</button>
  )
}

const ChatRoom=()=>{
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query,{idField:'id'});

  return(
    <div>
      <hr/>
      {
        messages && messages.map(msg=>{
          return <h2 key={msg.id} >{msg.text} {msg.uid}</h2>
        })
      }
      <hr/>
    </div>
  )

}

export default App;

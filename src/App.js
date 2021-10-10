import './App.css';

import {useAuthState} from "react-firebase-hooks/auth";


import {auth} from "./configs/firebase.config.js"

import SignIn from "./components/SignIn";
import ChatRoom from "./components/ChatRoom";

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
        {user ? <ChatRoom /> : <SignIn/> }
    </div>
  );
}


export default App;

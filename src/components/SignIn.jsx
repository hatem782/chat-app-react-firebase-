import React from 'react'
import {firebase,auth} from "../configs/firebase.config"; 

function SignIn() {

    const SignInFn=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }

    return (
        <div className="signin" >
            <h1> HELLO AND WELLCOME TO REACT CHAT APP </h1>
            <button onClick={SignInFn} >Sign In With Google</button>
        </div>
    )
}

export default SignIn

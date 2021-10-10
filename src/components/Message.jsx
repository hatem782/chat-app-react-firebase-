import React from 'react'

import {auth} from "../configs/firebase.config";

function Message({msg}) {
    const uid = auth.currentUser.uid;

    return (
        <div className={"message " + (uid===msg.uid? "right"  : "left" )} >
            <img alt={"no img"} src={msg.img} />
            <h2 className="text" >{msg.text}</h2>
        </div>
    )
}

export default Message

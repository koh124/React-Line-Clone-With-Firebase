import React, { useEffect, useState } from 'react'
import SignOut from "./SignOut"
import SendMessage from './SendMessage';
import { auth, db } from "../firebase";
import Styles from "../../css/App.css";

function Line() {
  const [messages, setMessages] = useState([]);

  // ブラウザの初回マウント時にだけDBにクエリを発行する
  useEffect(() => {
    db.collection("messages")
    .orderBy('createdAt')
    .limit(50)
    .onSnapshot((snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => doc.data())
      );
    });
  }, []);
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className={Styles.msgs}>
        {messages.map(({id, text, photoURL, uid}) => (
          <div>
            <div key={id} className={`${Styles.msg} ${uid === auth.currentUser.uid ? Styles.sent : Styles.received}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Line

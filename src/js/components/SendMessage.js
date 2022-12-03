import React, { useRef, useState } from 'react'
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import Styles from "../../css/App.css";

function SendMessage() {
  const [message, setMessage] = useState('');
  function submitMessage(e) {
    const { uid, photoURL } = auth.currentUser;

    // inputタグに入力してenterキーを押す度にページ全体のロードが発生する
    // これはformをsubmitしたときの普通の仕様
    // それを防ぐためにpreventDefaultをする
    e.preventDefault();

    db.collection('messages').add({
      text: message,
      photoURL: photoURL,
      uid : uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), // timestampを作成
    });

    setMessage(''); // messageを送信したら空にする
  }
  return (
    <div>
      <form onSubmit={submitMessage}> {/* formのonSubmitイベントはenterキーを押すと発火する */}
        <div className={Styles.sendMsg}>
          {/* value属性にmessageを指定することによって、DOMの再レンダリングが行われる */}
          <Input
            style={{
              width: '78%',
              fontSize: '15px',
              fontWeight: '550',
              marginLeft: '5px',
              marginBottom: '-3px'
            }}
            value={message}
            onChange={(e) => {setMessage(e.target.value)}}
            placeholder="メッセージを入力してください"
            type="text"
          />
          <SendIcon />
        </div>
      </form>
    </div>
  )
}

export default SendMessage

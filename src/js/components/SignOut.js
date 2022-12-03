import { Button } from '@mui/material'
import CallIcon from "@mui/icons-material/Call";
import React from 'react'
import { auth } from "../firebase";
import Styles from "../../css/App.css";

function SignOut() {
  return (
    <div className={Styles.header}>
      <Button
        onClick={() => {auth.signOut()}}
        style={{
          color: 'white',
          fontSize: '15px'
        }}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  )
}

export default SignOut

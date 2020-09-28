import React from 'react'
import firebase from 'firebase/app';
import './ChatMessage.css'

export const ChatMessage = ({ message }) => {
    const { text, uid } = message;
    const messageClass = uid === firebase.auth().currentUser.uid ? 'sent' : 'recived'
    return (
        <div className={`message ${messageClass}`}>
            <div>{text}</div>
            <img className={'logo'} src={firebase.auth().currentUser.photoURL} />
        </div>
    )
}

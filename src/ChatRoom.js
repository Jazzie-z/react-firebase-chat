import firebase, { auth } from 'firebase/app'
import React, { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { ChatMessage } from './ChatMessage';
import { SignOut } from './SignOut'
import './ChatRoom.css'
export const ChatRoom = () => {
    const messagesRef = firebase.firestore().collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');
    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = firebase.auth().currentUser;
        setFormValue('')
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        
    }
    return (
        <div className={'chat-room'}>
            <div className={'chat-header'}>
            Chat Room
            <SignOut />
            </div>
            <div className={'chat-container'}>
                {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
            </div>
            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

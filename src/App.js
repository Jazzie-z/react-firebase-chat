import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { ChatRoom } from './ChatRoom';
import { SignIn } from './SignIn';

firebase.initializeApp({
  apiKey: "AIzaSyAi2K6lS1k4GwIQW3a2k-qCVm7qldauZqg",
    authDomain: "my-chat-app-e8831.firebaseapp.com",
    databaseURL: "https://my-chat-app-e8831.firebaseio.com",
    projectId: "my-chat-app-e8831",
    storageBucket: "my-chat-app-e8831.appspot.com",
    messagingSenderId: "685794509328",
    appId: "1:685794509328:web:35a9b7f21c4a0b5f034095"
})

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const App = () =>{
  const [user] = useAuthState(auth);
return (
  <div className="App">
    {/* <header className="App-header">
     
    </header> */}
    <section>
      {user?<ChatRoom/>:<SignIn/>}
    </section>
  </div>
);
}

export default App;

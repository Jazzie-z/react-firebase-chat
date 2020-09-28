import { auth } from 'firebase';
import React from 'react'
import firebase from 'firebase/app';
// import {auth} from './App';

export const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    }
    return (
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    )
}

import React from 'react';
import firebase from 'firebase/app';

export const SignOut = () => {
    const signOut = () => {
        firebase.auth().signOut();
    }
    return (
        <button onClick={signOut}>Sign Out</button>
    )
}

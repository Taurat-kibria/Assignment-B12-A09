import React, { createContext, useState, } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();

    const [credError, setCredError] = useState("")
    const [user, setUser] = useState("")



    function createUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function googleSignIn() {
        return signInWithPopup(auth, provider);
    }

    function passReset(email) {
        return sendPasswordResetEmail(auth, email);
    }

    function logOut(){
        return signOut(auth);
    }


    onAuthStateChanged(auth, (us) => {
        if (us) {
            console.log(us)
            setUser(us)
        }
        else {
            console.log("no user");
        }
    });


    const authInfo = {
        user,
        setCredError,
        credError,
        createUser,
        googleSignIn,
        passReset,
        signUp,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();

    const [forgetPass, setForgetPass] = useState(false);


    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function googleSignIn() {
        return signInWithPopup(auth, provider);
    }

    function passReset(email){
        return sendPasswordResetEmail(auth, email);
    }

    const authInfo = {
        forgetPass,
        setForgetPass,
        createUser,
        googleSignIn,
        passReset,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
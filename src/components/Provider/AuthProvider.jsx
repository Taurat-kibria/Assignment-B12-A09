import React, { createContext } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();


    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function googleSignIn() {
        return signInWithPopup(auth, provider);
    }

    const authInfo = {
        createUser,
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
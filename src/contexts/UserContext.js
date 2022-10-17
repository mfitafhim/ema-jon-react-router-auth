import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });


        return () => unSubscribe();
    }, [])

    const authInfo = { user, loading, createUser, login, logout }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
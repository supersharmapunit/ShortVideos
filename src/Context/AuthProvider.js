import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../Components/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
export const AuthContext = React.createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const value = {
        user,
        login,
        signup,
        logout
    }
    return (
        <AuthContext.Provider value={value} >{!loading && children}</AuthContext.Provider>
    )
}

export default AuthProvider
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpWithEmailPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email : userEmail}
            setUser(currentUser);
            console.log("Current User", currentUser);
            setLoading(false)
            // token related(if user exist then issue a token)
            if(currentUser){
                axios.post(('https://car-doctor-server-eight-sooty.vercel.app/jwt'),loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log('token response',res.data)
                })
            }
            else{
                axios.post(('https://car-doctor-server-eight-sooty.vercel.app/logout'), loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                })
            }
        });
        return () => {
            return unsubscribe();
        }
    },[]);


    const authInfo = {user, loading, signUpWithEmailPass, signInWithEmailPass, signOutUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
  };

export default AuthProvider;
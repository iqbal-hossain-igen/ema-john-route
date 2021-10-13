import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged   } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAuthentication from "../firebase/firebase.init";

intializeAuthentication();

const useFirebase = () => {
    const [user,setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        

    };
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              
            } 
          });
    },[]);

    const logOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    };

    return{
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;
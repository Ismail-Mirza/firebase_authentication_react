
import React, { createContext,useContext,useState,useEffect } from 'react';
import { User as FirebaseUser, GoogleAuthProvider, RecaptchaVerifier, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPhoneNumber, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/config';

interface UserAuthContextType {
    setupRecaptcha:(number:string) => any;
    googleSignIn:() => any;
    logout: ()=>any;
    
    signup: (email:string,password:string) => any;
    
    login: (email:string,password:string) => any;
    currentUser: FirebaseUser |null|{};
    
}
interface contextType {
    

}

const userAuthContext = createContext<contextType|null>(null);

export function UserAuthContextProvider({ children }: { children: React.ReactNode }): JSX.Element {

    const [currentUser,setCurrentUser] = useState<FirebaseUser|{}|null>({})
    function setupRecaptcha(number:string) {
        const recaptchaVerifier = new RecaptchaVerifier(auth,'recaptcha-container',{})
        recaptchaVerifier.render()
        return signInWithPhoneNumber(auth,number,recaptchaVerifier)
    }
     
    const logout:any = ()=>{
        return signOut(auth)
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
      }
    
    const signup:any = (email:string, password:string)=>{
            return createUserWithEmailAndPassword(auth,email, password);
    }
    const login:any = (email:string, password:string) =>{
           return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentUser:FirebaseUser|null|{}) =>{
            setCurrentUser(currentUser);
      })
    
      return () => {
        unsubscribe();
      }
    }, [auth])
    const contextValue: UserAuthContextType = {
        setupRecaptcha,
        googleSignIn,
        logout,
        signup,
        login,
        currentUser,
    };
    
    return (
        <userAuthContext.Provider value={contextValue}>
                {children}
        </userAuthContext.Provider>
    );
}


export function useUserContext():any {
    return useContext(userAuthContext);
}
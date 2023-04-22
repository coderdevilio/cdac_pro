import { useState } from "react";
import  {auth, googleProvider} from "../config/firebase";
import { signInWithPopup,signOut} from 'firebase/auth';
import {firebase,provider} from '../config/firebase'
import {getDocs,collection,addDoc}  from 'firebase/firestore';
import {db} from '../config/firebase';
import { toast } from "react-toastify";



 const Auth = () => {

  

    const usersCollectionRef =collection(db,'Users')

    const signInWithGoogle = async () =>{

        try{
         const result=   await signInWithPopup(auth,googleProvider);
         const user = result.user;
         console.log(result)
         console.log(user.uid)
         //   const result =  await signInWithPopup(auth,googleProvider);
        //     const user = result.user;
        //    console.log(result)
        await db.collection('Users').doc(user.uid).set({
            email: result.user.email,
            displayName:result.user.displayName
          // photoURL: user.photoURL,
        });
       
        toast.success("user created")
        }catch(err){
            console.log(err);
        }
    };

    // const signOut = async () => {
    //     try {
    //         await signOut(auth);
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    return (
        <div>

          <button onClick={signInWithGoogle}> Sign In with google</button>

          <button onClick={signOut}> Signout</button>
       


        </div>
    )
}

export default Auth;
import React from 'react';
import "./Navbar.css";
import { Link } from "react-scroll";
import '../App.css';
import Questions from './Questions';
import Home from './Home';
import { useEffect,useState } from 'react';
import  {auth, googleProvider} from "../config/firebase";
import { signInWithPopup,onAuthStateChanged, updateCurrentUser} from 'firebase/auth';
import {signOut} from 'firebase/auth'
import { toast } from "react-toastify";
import Easy from './Easy';
function Navbar() {
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);


  
  const signInWithGoogle = async () =>{

    try{
     const result= await signInWithPopup(auth,googleProvider);
     setIsSignedIn(true);
     setUser(result.user)
    console.log(auth.currentUser)
     
    toast.success("user created")
    }catch(err){
        console.log(err);
    }
};


const logOut = async () => {
try {
  await signOut(auth);
  setIsSignedIn(false);


} catch (err) {
  console.log(err)
}

  // try {
  //     await signOut(auth);
      
  // } catch (error) {
  //     console.log(error);
  // }
//   const auth = getAuth();
// signOut(auth).then(() => {
//  toast.success("Sign out successful")
// }).catch((error) => {
//   toast.success("Sign out unscuccess")
// });
}
function CustomLink({href,children,...props}) {
  const path=window.location.pathname;
  
return(
<li className={path === href? "active":""}>
  <a href ={href} {...props}>{children}</a>
</li>
)
}
  return (
    <>
    <nav className="navbar" style={{ backgroundColor: "#008080" }}>
      <ul className="navbar__list">
        <li className="navbar__item">
          {/* <a href="#">PRACTICE</a> */}
          <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
        </li>
        <li className="navbar__item">
        <Link activeClass="active" smooth spy to="projects">
                PRACTICE
              </Link>
        </li>
        <li className="navbar__item">
        {/* <Link activeClass="active" smooth spy to="projects">
                EXPERIENCES
              </Link> */}
             {/* <a  activeClass="active" href="Experiences">EXPERIENCES</a> */}
        <CustomLink href="/Experiences">EXPERIENCES</CustomLink>
        </li>
      </ul>
      {/* <button className="navbar__button" onClick={signInWithGoogle}> */}
      {user ? (
        <>
          {/* <h4>Welcome, {user.displayName}!</h4> */}
          <button className="navbar__button" onClick={logOut}>Sign Out </button>
          
        </>
      ) : (
        <button className="navbar__button" onClick={signInWithGoogle}>Sign In with Google</button>
      )}     
       {/* </button> */}
    </nav>
    <div>
    <section id="about"> <Home/>
        </section>
    </div>
      <section id="projects"><Questions/>
  </section>
  
    
    </>
  );
}

export default Navbar;

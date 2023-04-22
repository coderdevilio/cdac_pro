
import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { Link } from "react-scroll";

import { Auth } from './Components/Auth';
import {db} from './config/firebase';
import {getDocs,collection,addDoc}  from 'firebase/firestore'
import Easy from './Components/Easy';
import Medium from './Components/Medium';
import Hard from './Components/Hard';
import Testimonials from './Components/Testimonials';
import Navbar from './Components/Navbar';

function App() {
  const [activeSection, setActiveSection] = useState(1);

  const handleToggleSection = (sectionNum) => {
    setActiveSection(sectionNum);
  };

  
  let Component
  switch (window.location.pathname) {
   case '/Experiences':
     Component=<Testimonials/>
     
     break;
  
   default:
     break;
  }

  function Section1() {
    return  <Easy/>
  }
  
  function Section2() {
    return <Medium/>;
  }
  
  function Section3() {
    return <Hard/>;
  }
  
  function Section4() {
    return <Easy/>;
  }
  const [movieList,setMovieList] = useState([]);
  // New movie states
  const [newMovieTitle,setNewMovieTitle] = useState("");
  const [newReleaseDate,setNewReleaseDate] = useState(0);
  const [isNewMovieOscar,setIsNewMovieOscar] = useState(false);

  const moviesCollectionRef =collection(db,'movies')

  const getMovieList = async () => {

    //  read the data
    //set the movie list
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData= data.docs.map((doc) => ({
        ...doc.data(),
        id:doc.id,
      }));
      setMovieList(filteredData);
      console.log(data);
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect (() =>{
    getMovieList();

  },[])

  const onSubmitMovie = async () =>{
   
    try {
      await addDoc(moviesCollectionRef,{
        title: newMovieTitle,
        releaseDate:newReleaseDate,
        receivedAnOscar:isNewMovieOscar,
      });
      getMovieList();
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
   
    <>
    <Navbar/>
    <div className='container'>{Component}</div>
{/* 
 <div className="App">
    
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PRACTICE
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="blog">
                EXPERIENCES
              </Link>
            </li>
            <li className="nav-button">
              <Link activeClass="active" smooth spy to="contact">
               Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </header> 
      <section id="about">ABOUT</section>
      <section id="projects"></section>
      <section id="blog"><Auth/></section>
      <section id="contact">CONTACT ME</section>
    </div> */
    }


=
 
  
   </>


  );
}

export default App;
import React from 'react';
import './Table.css';
import { useState,useEffect } from 'react';
import {db} from '../config/firebase';
import {getDocs,collection,addDoc}  from 'firebase/firestore';

const Hard = () => {
    const [problem, setProblem] = useState();
   const [problemLink,setProblemLink] = useState('');
   const [status,setStatus] = useState(false);
   const [videoSolution,setVideoSolution] = useState('');
  
   const [easyQuestions,setEasyQuestions]= useState([]);

  const hardQuestionsCollectionRef =collection(db,'HardQuestions')

  const getEasyQuestions = async () =>{

    try {
      const data = await getDocs(hardQuestionsCollectionRef);
      const filterData= data.docs.map((doc) => ({
        ...doc.data(),
        id:doc.id,
      }));
      setEasyQuestions(filterData);
      console.log(data);
      
      
    } catch (err) {
      console.log(err);
      
    }
      }
      useEffect (() =>{
        getEasyQuestions();
    
      },[])
    const onSubmitEasyQuestion = async () =>{
   

      try {
        await addDoc(hardQuestionsCollectionRef,{
          Problem:problem,
          ProblemLink:problemLink,
          status:status,
          VideoSolution:videoSolution,
        })
        getEasyQuestions();
      } catch (err) {
        console.log(err);
      }
        
      }
      

  return (
    <>
    <h4>Hard Questions</h4>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Status</th>
            <th>Problem</th>
            <th>Video Solution</th>
          </tr>
        </thead>
        <tbody>
        {
            easyQuestions.map((question,index) => (
              
              <tr key={question.id}>
              <td>{index+1}</td>
              <td><input type="checkbox"></input></td>
             <td><a href={question.ProblemLink}>{question.Problem}</a></td> 
              <td> <a href={question.VideoSolution}>Watch Solution</a></td>


              </tr>
            ))
          }
          {/* <tr>
            <td>1</td>
            <td><span className="open-status">Open</span></td>
            <td>Issue with login page</td>
            <td><a href="#">Link to video solution</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td><span className="closed-status">Closed</span></td>
            <td>Bug in checkout process</td>
            <td><a href="#">Link to video solution</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td><span className="open-status">Open</span></td>
            <td>Broken image on home page</td>
            <td><a href="#">Link to video solution</a></td>
          </tr> */}
        </tbody>
      </table>
    </div>

<div>

<input placeholder='Problem ...' 
onChange={(e) => setProblem(e.target.value)}/>

<input placeholder='Problem Link' 
onChange={(e) => setProblemLink(e.target.value)}/>


<input type='checkbox' 
checked={status}
onChange={(e)=> setStatus(e.target.checked
)}/>

<label> isCompleted </label>
<input placeholder='Video Solution Link ...' 
onChange={(e) => setVideoSolution(e.target.value)}/>

<button onClick={onSubmitEasyQuestion}>  Submit Question</button>
</div> 

</>
  );
};

export default Hard;
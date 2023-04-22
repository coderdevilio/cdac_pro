import React from "react";
import { useState } from "react";
import Easy from "./Easy";
import Hard from "./Hard";
import Medium from "./Medium";

const Questions = () =>{

    
    const [activeSection, setActiveSection] = useState(1);

  const handleToggleSection = (sectionNum) => {
    setActiveSection(sectionNum);
  };

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


    return (

        <>
        <br></br>
       <br></br>
        {/* <br></br>
        <br></br> */}
        
 <div className="App">
    <button class="button-3" role="button" onClick={() => handleToggleSection(1)}>Easy Questions</button>
   <button class="button-3" role="button" onClick={() => handleToggleSection(2)}>medium Questions</button>
   <button class="button-3" role="button" onClick={() => handleToggleSection(3)}>Hard Questions</button> 
   {/* <button class="button-3" onClick={() => handleToggleSection(4)}>Company Wise Questions</button> */}
    
 {activeSection === 1 && <Section1 />}
 {activeSection === 2 && <Section2/>}
 {activeSection === 3 && <Section3/>}
 {activeSection === 4 && <Section4/>}
 </div>
 </>
    );


}


export default Questions;
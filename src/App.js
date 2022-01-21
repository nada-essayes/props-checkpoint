import React from 'react';
import './App.css';
import Profile from './Profile/Profile.js';
import imageDeProfil from './Profile/image.png';
function App() {
  const fullName='Essayes Nada' ;
  const bio ="Master's degree in computer sciences";
  const profession ='Student' ;
  const HandleName=()=>{
    alert(fullName);
  }
  return (
  <div >
  <Profile fullName={fullName}  bio={bio}  profession={profession} HandleName={HandleName()} imageDeProfil={imageDeProfil}>
    <div style={{ backgroundColor: "rgb(207,232,220)", border: "2px solid rgb(79,185,227)", padding: "10px",
  margin: "10px", borderRadius: "5px", color:"blue"}}><img src="imageDeProfil"/></div>
  </Profile>
  
  </div>
  );
}

export default App;

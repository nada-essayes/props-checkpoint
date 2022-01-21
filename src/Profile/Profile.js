import React from "react";
import PropTypes from 'prop-types';

const Profile=(props)=> {
    console.log(props)
  return (
  <div style={{ backgroundColor: "rgb(207,232,220)", border: "2px solid rgb(79,185,227)", padding: "10px",
  margin: "10px", borderRadius: "5px", color:"blue"}}>
  
  {props.HandleName}
  {props.childrean}
  <h1>Fullname :{props.fullName} </h1>
  <h1>Bio : {props.bio}</h1>
  <h1>Profession: {props.profession}</h1>
  
  </div>
  );
  };
  Profile .defaultProps={
    fullName:"Essayes Nada",
    bio:"Master's degree in computer sciences",
    profession :'Student'

  }
Profile.propTypes={
 fullName : PropTypes.string,
 bio: PropTypes.string,
 profession: PropTypes.string
}

export default Profile;
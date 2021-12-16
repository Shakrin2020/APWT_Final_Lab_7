import React from "react"
import { Link } from "react-router-dom";
//import homeimg from '.images/homepage.jpg';

const Head = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

    
    return(
        <div>
          <h2>  <Link to="/" style = {myStyle} > Home</Link> 
                <Link to="/adds" style = {myStyle} >Advertisment </Link> 
                <Link to="/showpost" style = {myStyle} >Show Post </Link> 
                <Link to="/wantedpost" style = {myStyle} >Wanted Post </Link> 
                <Link to="/report" style = {myStyle}>Report </Link> 
                <Link to="/dash" style = {myStyle}>Dash Board</Link> 
                <Link to="/login" style = {myStyle}>Login </Link> 
                <Link to="/logout" style = {myStyle}>Logout </Link> </h2>

         </div>
    )
}
export default Head;

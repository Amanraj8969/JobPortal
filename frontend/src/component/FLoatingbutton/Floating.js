import React from 'react';
import './Floating.css'; // Create a CSS file for styling the floating button
import {Link} from "react-router-dom"


const FloatingButton = () => {

//     const navigate=useNavigate();
//   const handleButtonClick = () => {
    
//     navigate("/form");
   
//   };

  return (
    <button className="floating-button" >

      <span className="button-icon" role="img" aria-label="Button Icon">
       <Link to="/service">Ask</Link>
      </span>
    </button>
  );
};

export default FloatingButton;


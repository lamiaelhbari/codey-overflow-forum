import React from 'react';
import '../CSS/style.css';  // Importation du fichier CSS



const Header = (props) => {
  return (
    <>
    <img src={props.profileImg} alt="Profile"/> {/* Display the profile image */}
    <h1>{props.username}</h1> {/* Display the username */}
    </>
    
  );
};




// Exporting  component
export default Header;

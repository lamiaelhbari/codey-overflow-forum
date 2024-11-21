import React from 'react';
import Header from '../components/Header.js'; // Importation du composant Header
import Body from '../components/Body.js'; // Importing Body component



const Card = (props) => {
  return (
    <>
      {/* Passing props to Header and Body components */}
      <Header profileImg={props.commentObject.profileImg} 
              username={props.commentObject.username} />
      <Body comment={props.commentObject.comment} />
    </>
  )
}


// Exporting  component
export default Card;
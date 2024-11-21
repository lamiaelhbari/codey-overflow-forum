import React from 'react';




const Body = (props) => {
  // The Body component receives props and uses the comment property
  return (
    <p>{props.comment}</p> // Display the comment from props
  );
};




// Exporting  component
export default Body;
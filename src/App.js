import React from 'react';
import Card from './components/Card.js'; // Importing the Card component
import { comments } from './commentData.js'; // Importing the comments array from commentData.js


const App = () => {
  return (
    <div >
      {/* Section title */}
      <h2 className="comments-title">User Comments</h2>

      {/* Mapping over the comments array and passing each comment as a prop to Card */}
      {comments.map((comment) => (
        <Card commentObject={comment} key={comment.username} /> // Passing comment as prop and using username as key
      ))}
    </div>
  );
};


export default App;
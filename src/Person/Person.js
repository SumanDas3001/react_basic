import React from 'react';

const person = (props) =>{
  return(
    <div>
      <p>I am a person and I am {props.name} and I am {props.age} years old.</p>
    </div>
  );
}

export default person;
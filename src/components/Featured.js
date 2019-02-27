import React from 'react';

const Featured = ({match}) => {
  let fname = `${match.params.fname}`;
  let lname = `${match.params.lname}`;
  let topic = match.params.topic;
  let name;
  if (lname === 'undefined'){
   name = `${fname}`;
  } else {
   name = `${fname} ${lname}`
  } 

  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;
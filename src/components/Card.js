import React from 'react';

import './card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className='card tc grow br3 pa3 ma2 dib bw2 shadow-5'>
      <img
        alt='robots'
        src={`https://robohash.org/${id}?size=200x200&set=set4`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

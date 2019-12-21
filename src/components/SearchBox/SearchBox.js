import React from 'react';

import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='searchbox-container'>
      <input
        arie-label='Search Kitties'
        className='searchbox'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

import React from 'react';
import Style from 'style-it'

const SearchBar = () => {
  return Style.it(`
   
  `,
    <>
      <div className="search-bar">
          <img src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1586869822/iTazkir/search_ha0nmq.svg" alt="search" />
          <input className="search-input" placeholder="Search" />
      </div>
    </>
  )
}

export default SearchBar;

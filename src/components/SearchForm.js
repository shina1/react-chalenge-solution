import React from "react";
import InputWithLabel from './InputWithLabel';
import './componentStyle.css'


const SearchForm = ({
  searchTerm,
  onSearchInput,
  onSearchSubmit,
}) => (
  <form onSubmit={onSearchSubmit}>
    <InputWithLabel
      id="search"
      value={searchTerm}
      isFocused
      onInputChange={onSearchInput}
    >
      <strong>Search:</strong>
    </InputWithLabel>

    <button type="submit" disabled={!searchTerm} className='btn'>
      Submit
    </button>
  </form>
);

export default SearchForm;

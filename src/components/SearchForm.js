import React from "react";

function SearchForm(props) {
  const { searchText, setSearchText, onSubmit } = props;

  const handleInputChange = (event) => setSearchText(event.target.value);
  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} />
      <button type="submit" onClick={onSubmit} value={searchText}>Search</button>
    </div>
  );
}

export default SearchForm;

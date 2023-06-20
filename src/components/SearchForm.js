import React from "react";
import "../styles/SearchForm.css";

function SearchForm(props) {
  const { searchText, setSearchText, onSubmit } = props;

  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input className="search-form_input" type="text" onChange={handleInputChange} />
      <button className="search-form_button" type="submit" onClick={onSubmit} value={searchText}>Search</button>
    </div>
  );
}

export default SearchForm;

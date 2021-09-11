import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, setAlert, showClear }) => {
  // how to use useState destructure out the state and state with its current state and the set state and its initial value
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    // On submits need e.prevent default to stop submitting/reloading page --> always use this with onSubmit
    e.preventDefault();
    // this sets an alert when the user doesn't input anything
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      // Passing this prop up to App Component
      searchUsers(text);
      // This will clear our state, clearing out the text bar after submitting
      setText("");
    }
  };
  // In order to use the text field we must use the onchange function this will render the component and allow you to write in the text field
  // e.target.name allows us to use onchange in multiple fields
  // Arrow function allows us not use bind
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          // Allows us to write
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {/*This shows the clear button on when showClear is we have users */}
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

// Used proptypes to make these props available if proptypes wasn't declared
// Proptypes go underneath the function for functional components
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;

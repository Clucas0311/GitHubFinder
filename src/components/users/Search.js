import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  // Used proptypes to make these props available if proptypes wasn't declared
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    // On submits need e.prevent default to stop submitting/reloading page --> always use this with onSubmit
    e.preventDefault();
    // this sets an alert when the user doesn't input anything
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      // Passing this prop up to App Component
      this.props.searchUsers(this.state.text);
      // This will clear our state, clearing out the text bar after submitting
      this.setState({ text: "" });
    }
  };
  // In order to use the text field we must use the onchange function this will render the component and allow you to write in the text field
  // e.target.name allows us to use onchange in multiple fields
  // Arrow function allows us not use bind
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            // Allows us to write
            onChange={this.onChange}
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
  }
}

export default Search;

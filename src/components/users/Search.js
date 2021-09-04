import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  onSubmit = (e) => {
    // On submits need e.prevent default to stop submitting/reloading page --> always use this with onSubmit
    e.preventDefault();
    // Passing this prop up to App Component
    this.props.searchUsers(this.state.text);
    // This will clear our state, clearing out the text bar after submitting
    this.setState({ text: "" });
  };
  // In order to use the text field we must use the onchange function this will render the component and allow you to write in the text field
  // e.target.name allows us to use onchange in multiple fields
  // Arrow function allows us not use bind
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
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
      </div>
    );
  }
}

export default Search;

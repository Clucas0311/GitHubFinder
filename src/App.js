import React, { Component } from "react";
import NavBar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    };
  }
  // Runs when the component first renders
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const { data } = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: data, loading: false });
  // }
  // Search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: data.items, loading: false });
  };
  // Clears the user from the state
  clearUsers = () => {
    // take the users and set it to an empty array
    this.setState({ users: [], loading: false });
  };
  render() {
    const { users, loading } = this.state;
    return (
      // React.Fragment makes invisible divs
      <div className="App">
        <NavBar title="GitHub Finder" icon="fab fa-github" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;

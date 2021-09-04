import React, { Component } from "react";
import NavBar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
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

  render() {
    return (
      // React.Fragment makes invisible divs
      <div className="App">
        <NavBar title="GitHub Finder" icon="fab fa-github" />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

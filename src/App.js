import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Multiple things use an array
      users: [],
      // Single thing use an object
      user: {},
      //all repos
      repos: [],
      loading: false,
      alert: null,
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

  // Get a single GitHub User
  getUser = async (username) => {
    this.setState({ loading: true });
    const { data } = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: data, loading: false });
  };

  // Get Users Repo
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=createde:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: data, loading: false });
  };

  // Clears the user from the state
  clearUsers = () => {
    // take the users and set it to an empty array
    this.setState({ users: [], loading: false });
  };
  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    // sets a time on the alert for 5 secs then changes state back to null/original state
    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  render() {
    const { users, user, loading, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <NavBar title="GitHub Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

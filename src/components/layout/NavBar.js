import React from "react";
import PropTypes from "prop-types";
// Use curly braces when export default is not used
// To add link to the page using react router dom
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { title, icon } = props;
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      {/* Adding links to the page using link from react-router */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
// We use defualtProps when as a way of having props incase props were not passed in
NavBar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
// PropTypes are used as a type checker
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavBar;

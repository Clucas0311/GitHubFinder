import React from "react";
import PropTypes from "prop-types";

const NavBar = (props) => {
  const { title, icon } = props;
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
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

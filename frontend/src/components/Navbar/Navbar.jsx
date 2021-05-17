import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ userName }) {
  const history = useHistory();

  const onHandleSingUp = () => {
    history.replace("/");

    history.push("/");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-brand">
        <div className="navbar-logo"></div>
        <h1 className="navbar-title">ProjectToDo</h1>
      </div>

      <div className="nav-user">
        <h1 className="navbar-user">{userName}</h1>

        <i
          className="fas fa-sign-out-alt navbar-incon-singUp "
          onClick={onHandleSingUp}
        ></i>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  userName: PropTypes.string.isRequired,
};

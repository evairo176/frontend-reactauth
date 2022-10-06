import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  state = {
    loggedOut: "",
  };

  logout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };
  render() {
    let button;
    let profile;
    if (localStorage.getItem("token")) {
      button = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={this.logout}>
              Logout
            </Link>
          </li>
        </ul>
      );
      profile = (
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
      );
    } else {
      button = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Belajar Mudah
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">{profile}</li>
          </ul>
          {button}
        </div>
      </nav>
    );
  }
}

export default Nav;

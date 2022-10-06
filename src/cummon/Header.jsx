import React, { Component } from "react";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Forget from "../components/Forget";
import Profil from "../components/Profil";
import axios from "axios";
import Reset from "../components/Reset";

export class Header extends Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get("/user");
      this.setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  setUser = (data) => {
    this.setState({
      user: data,
    });
    // console.log(data);
  };
  render() {
    return (
      <BrowserRouter>
        <Nav user={this.state.user} setUser={this.setUser} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={<Login setUser={this.setUser} />}
          />
          <Route
            exact
            path="/register"
            element={<Register user={this.state.user} setUser={this.setUser} />}
          />
          <Route exact path="/forget" element={<Forget />} />
          <Route exact path="/reset/:id" element={<Reset />} />
          <Route
            exact
            path="/profile"
            element={<Profil user={this.state.user} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Header;

import React, { Component } from "react";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Forget from "../components/Forget";
import Profil from "../components/Profil";

export class Header extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/forget-password" element={<Forget />} />
              <Route exact path="/profile" element={<Profil />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;

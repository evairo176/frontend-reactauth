import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate, Route } from "react-router-dom";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
    loggedIn: false,
  };

  //   login submit
  formSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: this.state.email,
        password: this.state.password,
      };
      const response = await axios.post("/login", data);
      localStorage.setItem("token", response.data.token);
      this.setState({
        loggedIn: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // setelah login redirect ke profile
    if (this.state.loggedIn) {
      return <Navigate to="/profile" replace />;
    }

    return (
      <div>
        <br />
        <br />
        <br />
        <div className="row mt-2">
          <div className="col-lg-4 offset-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Login Account</h3>
                <form onSubmit={this.formSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name="email"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      name="password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                  <p className="mt-2">
                    Forget My Password{" "}
                    <Link to="/forget-password">Click Here</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

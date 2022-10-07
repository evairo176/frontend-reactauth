import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

export class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    message: "",
  };
  //   Register submit
  formSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
      };
      const response = await axios.post("/register", data);
      localStorage.setItem("token", response.data.token);
      this.setState({
        loggedIn: true,
      });
      this.props.setUser(response.data.user);
    } catch (error) {
      this.setState({ message: error.response.data.message });
    }
  };

  render() {
    // console.log();
    // after register redirect to
    if (this.state.loggedIn) {
      return <Navigate to="/profile" replace />;
    }
    if (localStorage.getItem("token")) {
      return <Navigate to="/profile" replace />;
    }

    let error;
    if (this.state.message) {
      error = "is-invalid";
    }

    return (
      <div className="container-fluid">
        <br />
        <div className="row mt-2">
          <div className=" col-lg-4 offset-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Register Account</h3>

                <form onSubmit={this.formSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                      name="name"
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                    <div className="text-danger">{this.state.message.name}</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name="email"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                    <div className="text-danger">
                      {this.state.message.email}
                    </div>
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
                    <div className="text-danger">
                      {this.state.message.password}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="exampleInputPassword2"
                      placeholder="Password"
                      name="password_confirmation"
                      onChange={(e) => {
                        this.setState({
                          password_confirmation: e.target.value,
                        });
                      }}
                    />
                    <div className="text-danger ">
                      {this.state.message.password_confirmation}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                  <p className="mt-2 mb-0">
                    Have an account? <Link to="/login">Login</Link>
                  </p>
                  <p className="mt-2">
                    Forget my password <Link to="/forget">Click Here</Link>
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

export default Register;

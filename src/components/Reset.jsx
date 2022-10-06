import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

export class Reset extends Component {
  state = {
    token: "",
    email: "",
    password: "",
    password_confirmation: "",
    message: "",
  };

  //   reset submit
  formSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        token: this.state.token,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
      };
      const response = await axios.post("/resetpassword", data);
      this.setState({ message: response.data.message });
      console.log(response.data.message);
      document.getElementById("resetForm").reset();
    } catch (error) {
      console.log(error);
      document.getElementById("resetForm").reset();
      this.setState({ message: error.response.data.message });
    }
  };
  render() {
    if (this.state.reset) {
      return <Navigate to="/login" replace />;
    }

    let error;
    if (this.state.message) {
      error = (
        <div>
          <div className="alert alert-danger" role="alert">
            {this.state.message}
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <br />
        <div className="row mt-2">
          <div className=" col-lg-4 offset-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Register Account</h3>
                {error}
                <form onSubmit={this.formSubmit} id="resetForm">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Pin Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      name="token"
                      onChange={(e) => {
                        this.setState({ token: e.target.value });
                      }}
                    />
                    <div className="text-danger">
                      {this.state.message.token}
                    </div>
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
                    <label htmlFor="exampleInputPassword1">New Password</label>
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

export default Reset;

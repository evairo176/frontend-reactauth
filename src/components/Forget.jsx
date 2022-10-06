import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Forget extends Component {
  state = {
    email: "",
    message: "",
  };

  //   forget submit
  formSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: this.state.email,
      };
      const response = await axios.post("/forgetpassword", data);
      document.getElementById("forgetForm").reset();
      // console.log(response);
      this.setState({ message: response.data.message });
    } catch (error) {
      this.setState({ message: error.response.data });
      // console.log(error);
    }
  };

  render() {
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
        <br />
        <br />
        <div className="row mt-2">
          <div className="col-lg-4 offset-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Forget Password</h3>
                {error}
                <form onSubmit={this.formSubmit} id="forgetForm">
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
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                  <p className="mt-2 mb-0">
                    Have an account? <Link to="/login">Login</Link>
                  </p>
                  <p className="mt-2">
                    dont have account? <Link to="/register">Register</Link>
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

export default Forget;

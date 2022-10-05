import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Register extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="row mt-2">
          <div className=" col-lg-4 offset-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Register Account</h3>
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">
                    Submit
                  </button>
                  <p className="mt-2 mb-0">
                    Have an account? <Link to="/login">Login</Link>
                  </p>
                  <p className="mt-2">
                    Forget my password{" "}
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

export default Register;

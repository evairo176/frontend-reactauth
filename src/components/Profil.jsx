import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export class Profil extends Component {
  render() {
    let name;
    let email;
    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
    }

    if (!localStorage.getItem("token")) {
      return <Navigate to="/login" replace />;
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
                <h3 className="text-center">Profile Account</h3>
                <ul className="list-group">
                  <li className="list-group-item">Name : {name}</li>
                  <li className="list-group-item">Email : {email}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profil;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Profil extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <div className="row mt-2">
          <div className="col-lg-4 offset-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Profile Account</h3>
                <ul class="list-group">
                  <li class="list-group-item">Name : Dicki Prasetya</li>
                  <li class="list-group-item">Email : dicki@gmail.com</li>
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

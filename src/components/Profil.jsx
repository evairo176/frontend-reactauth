import React, { Component } from "react";

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
                <ul className="list-group">
                  <li className="list-group-item">Name : Dicki Prasetya</li>
                  <li className="list-group-item">Email : dicki@gmail.com</li>
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

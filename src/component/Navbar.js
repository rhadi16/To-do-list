import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold">
            To Do List App
          </a>
        </div>
      </nav>
    );
  }
}

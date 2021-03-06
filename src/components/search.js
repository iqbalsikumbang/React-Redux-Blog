import React, { Component } from "react";

export default class search extends Component {
  render() {
    return (
      <form id="search" className="d-flex justify-content-center lg-6 sm-6">
        <div className="form-group mr-2">
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    );
  }
}

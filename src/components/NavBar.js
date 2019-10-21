import React, { Component } from "react";
import logo from "../images/logooo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} style={{ width: "40px" }} alt="pata-hao" />
            </Link>
            <button
              className="nav-btn"
              type="button"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/" style={{ paddingLeft: "350px" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" style={{ spacing: "30px" }}>
                HouseRooms
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

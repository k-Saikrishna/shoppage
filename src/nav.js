import React, { Component } from 'react';
import './App.css';
import logo from './img/1.png'
class Nav extends Component {
  render() {
    return (
      <nav>
      <div className="logo">
          <img src={logo} alt="Func Box logo" />
      </div>
      <div className="items">
          <div className="item">home</div>
          <div className="item">About</div>
          <div className="item">Shop</div>
          <div className="item">Login/Signup</div>
      </div>
  </nav>
    );
  }
}

export default Nav;
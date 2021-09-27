import React, { Component } from 'react';
import './App.css';
class Footer extends Component {
  render() {
    return (
        <div className="footer">
        <div className="input">
            <div className="text">
            <h2>Get In Touch</h2>
            </div>
            <div className="form">
            <form>
                <input type="text"/>
            </form>
            </div>
        </div>
        <div>
        <div className="area">
            <p>Join our Team</p>
            <p>Terms</p>
            <p>Privacy</p>
        </div>
        </div>
        <div className="socialmedia">
            <p>made with <code>&hearts;</code> by team FuncBox</p>
        </div>
    </div>
    );
  }
}

export default Footer;
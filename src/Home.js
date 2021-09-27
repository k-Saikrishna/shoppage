import React, { Component } from 'react';
import './App.css';
import intro from './img/2.jpg'
import teach from './img/2.png'
import truck from './img/3.png'
import free from './img/4.png'
import to from './img/5.png'
class Home extends Component {
  render() {
    return (
      <div>
      <div className="home">
            <div className="round">
                <img src={intro} alt="childs"/>
                </div>
                <div className="rectangle">
                    <div className="rectext">
                        <p>FuncBox is a box full of suprises which will teach you educational conceots and coding with a revolutionary twist.</p>
                        <ul>
                            <li><p><code>&gt;</code>  Perfect for age-group 6-12 years</p></li>
                            <li><p><code>&gt;</code> Build your own fun games</p></li>
                            <li><p><code>&gt;</code> Learn to code and explore</p></li>
                            <li><p><code>&gt;</code> Share your gane with your friends</p></li>
                            </ul>
                    </div>
                </div>
                </div>
                <div className="banner">
                    <div className="content">
                    <img src={truck} alt="childs"/>
                    <h3>Free shiping</h3>
                        </div>
                        <div className="content">
                        <img src={free} alt="childs"/>
                            <h3>No experinece neccesary</h3>
                        </div>
                        <div className="content">
                        <img src={to} alt="childs"/>
                            <h3>Cancel Anytime</h3>
                        </div>
                </div>
                <div className="cost">
                    <h2>Plans</h2>
                    <div className="plancost">
                    <div class="plans basic">
                        <h3>Basic</h3>
                    </div>
                    <div class="plans std">
                    <h3>Standard</h3>
                    </div>
                    <div class="plans pre">
                    <h3>Premium</h3>
                    </div>
                    </div>
                </div>
               
                <div className="query">
                    <h2>Frequently Asked Questions</h2>
                    <strong><p>What age is for Funcbox</p></strong>
                    <p>Funcbox is designed for the kids 6-12 years in age</p>
                    <strong><p>What age is for Funcbox</p></strong>
                    <p>Funcbox is designed for the kids 6-12 years in age</p>
                    <strong><p>What age is for Funcbox</p></strong>
                    <p>Funcbox is designed for the kids 6-12 years in age</p>
                    <strong><p>What age is for Funcbox</p></strong>
                    <p>Funcbox is designed for the kids 6-12 years in age</p>

                </div>
                <div className="school">
                    <h1>For Schools</h1>
                    <div className="contact">
                    <div className="image">
                    <img src={teach} alt="teach"/>
                    </div>
                    <div className="text">
                        <p>yay! FuncBox brings special discount for all the School Tie-ups.FuncBox can be eaisily incorporated in all the school grades.to make your students outperform and help our institute gain an edge over the other contact our team NOW!</p>
                    </div>
                    </div>
                </div>
                </div>
    );
  }
}

export default Home;
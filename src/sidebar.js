import React  from "react";
import './App.css';
import Procced from "./proceed";
import { BrowserRouter as Router,Link,Route } from 'react-router-dom'
const prop = 'text-align';


class SideNav extends React.Component {
  render() {
    return (
        <div>
        <div style={{[prop]:'center'}}>
                  <h1>Cart</h1>
                  <div className="buy">
                      <div className="bttn">
                          <p>Basic</p>
                      </div>
                      <form>
                          <input type="number" value="1" step="1" min="1" max="1"/>
                      </form>
                  </div>
                  <Router>
                  <Link to="/procced" className="btn">Peoceed to buy</Link>
                   <Route path="/procced" component={Procced} />
                  </Router>
                  </div>
                  </div>   
    );
  }
}

export default SideNav;
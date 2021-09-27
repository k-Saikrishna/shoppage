import React from "react";
import Sidebar from "react-sidebar";
import cart from './img/cart.png';
import SideNav from './sidebar';
import './App.css';
class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <SideNav />
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
       
        <div className="cart-slide" onClick={() => this.onSetSidebarOpen(true)}>
            <img src={cart} alt="cart"/><p>Go To Cart</p>
        </div>
      </Sidebar>
    );
  }
}

export default Intro;
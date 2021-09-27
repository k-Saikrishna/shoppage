import './App.css';
import SideNav from './intro.js'
import Home from './Home'
import Nav from './nav'
import Footer from './footer'
function App() {
  return (
    <div>
      <Nav />
      <SideNav/>
      <Home />
      <Footer />
    </div>
  );
}

export default App;

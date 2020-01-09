import React, { Component } from 'react'
import NavBar from "./HeaderComponent/navbar/Navbar";

import GlobalStyle from './styles/Global';
import HomePage from "./HomePage";
import whatWeDo from "./Pages/whatWeDo";
import theTeam from "./Pages/theTeam";
import whyUs from "./Pages/whyUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavBar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <div style={{backgroundColor: '#6f4e37',
                  backgroundImage: "url(https://www.transparenttextures.com/patterns/wood-pattern.png)",
                  height: '295em'
              }}>
          <Router>
              <div>
                  <NavBar navbarState={this.state.navbarOpen} handleNavbar={this.handleNavbar}/>
                  <GlobalStyle/>
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/theTeam" component={theTeam}/>
                  <Route exact path="/whatWeDo" component={whatWeDo}/>
                  <Route exact path="/whyUs" component={whyUs}/>
              </div>
          </Router>
      </div>
    )
  }
}

export default App
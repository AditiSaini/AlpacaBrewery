import React from 'react'
import Nav from './HeaderComponent/navbar/Nav';
import GlobalStyle from './styles/Global';
import HomePage from "./HomePage";
import whatWeDo from "./Pages/whatWeDo";
import theTeam from "./Pages/theTeam";
import whyUs from "./Pages/whyUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    return (
      <div style={{backgroundColor: '#6f4e37',
                  backgroundImage: "url(https://www.transparenttextures.com/patterns/wood-pattern.png)",
                  height: '295em'
              }}>
          <Router>
              <div>
                  <Nav/>
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
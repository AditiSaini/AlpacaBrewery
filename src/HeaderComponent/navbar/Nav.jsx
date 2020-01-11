import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import logo from '../../assets/alps.jpeg';

class FixedNavbarExample extends React.Component {
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
      const paddingStyle=  {paddingRight: '20px'}
    return(
      <header>
            <MDBNavbar style={{backgroundColor: '#000000', fontSize: '160%'}} dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/" style={{fontSize: '160%'}}>
                  <img src={logo} alt="Company Logo" className='mt-2' height="50"/>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active style={paddingStyle}>
                  <MDBNavLink to="/"><b>HOME</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem style={paddingStyle}>
                      <MDBNavLink to="/whatWeDo"><b>WHAT WE DO</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem style={paddingStyle}>
                      <MDBNavLink to="/whyUs"><b>WHY US</b></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem style={paddingStyle}>
                      <MDBNavLink to="/theTeam"><b>THE TEAM</b></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
      </header>
    );
  }
}

export default FixedNavbarExample;


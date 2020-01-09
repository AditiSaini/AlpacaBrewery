import React from "react";
import {  MDBRow, MDBCol, MDBCardImage, MDBJumbotron} from "mdbreact";
import arabica from '../assets/arabica.jpg';
import robusta from '../assets/robusta.jpg';
import mix from '../assets/mix.jpg';


const TeamPage = () => {
  return (

        <MDBJumbotron style={{background: 'white', padding: '5px 40px 10px 40px'}}>
          <h2 className="h1-responsive font-weight-bold my-5" style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Available Picks</h2>
          <MDBRow center>
            <MDBCol   className="mb-lg-0 mb-5">
              <MDBCardImage
                tag="img"
                src={arabica}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Arabica Breeze</h5>
              <p className="text-uppercase blue-text">Pure Arabica</p>
            </MDBCol>
            <MDBCol  className="mb-lg-0 mb-5">
              <MDBCardImage
                tag="img"
                src={robusta}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Robusta Drizzle</h5>
              <p className="text-uppercase blue-text">Pure Robusta</p>
            </MDBCol>

            <MDBCol   className="mb-lg-0 mb-5">
              <MDBCardImage
                tag="img"
                src={mix}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Bronze Caffeine Swirl</h5>
              <p className="text-uppercase blue-text">Arabica + Robusta</p>
            </MDBCol>
          </MDBRow>
        </MDBJumbotron>

  );
}

export default TeamPage;
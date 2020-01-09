import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import p1 from '../assets/bottle.png';

const FeaturesPage = () => {
  return (
    <MDBContainer>
      <MDBContainer >
        <h1 className="h1-responsive font-weight-bold text-center my-5">
          Why Alpaca Cold Brew?
        </h1>

        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2" style={{marginTop: '10%'}}>
                <MDBIcon
                  icon="flag-checkered"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10" style={{marginBottom: '20%', marginTop: '10%'}}>
                <h3 className="font-weight-bold mb-3">Enhances concentration</h3>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10" style={{marginBottom: '20%'}}>
                <h3 className="font-weight-bold mb-3">Easy to make</h3>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="thumbs-up" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h3 className="font-weight-bold mb-3">Lower in acidity than coffee</h3>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name">
            <img
              className="img-fluid"
              src={p1}
              alt=""
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2" style={{marginTop: '10%'}}>
                <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10" style={{marginBottom: '20%', marginTop: '10%'}}>
                <h3 className="font-weight-bold mb-3">Sweeter and smoother</h3>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="bolt" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10" style={{marginBottom: '20%'}}>
                <h3 className="font-weight-bold mb-3">Freshly roasted beans</h3>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h3 className="font-weight-bold mb-3">Magical taste</h3>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}

export default FeaturesPage;
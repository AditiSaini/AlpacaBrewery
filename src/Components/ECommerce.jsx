import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import p1 from '../assets/alp-1.jpg';
import p2 from '../assets/alp-2.jpg';


const EcommercePage = () => {
  return (
    <section className="text-center my-5">
      <MDBRow center>
        <MDBCol md="3" xs="2" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={p1}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <h5>
                <strong>
                  <a href="https://forms.gle/nNr8YFyhth8R2igZ7" className="dark-grey-text">
                    1 bottle{" "}
                    <MDBBadge pill color="danger">
                      NEW
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>$8</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="3" xs="2" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center">
            <MDBCardImage
              src={p2}
              top
              alt="sample photo"
              overlay="white-slight"
            />
            <MDBCardBody className="text-center">
              <h5>
                <strong>
                  <a href="https://forms.gle/nNr8YFyhth8R2igZ7" className="dark-grey-text">
                    2 bottles{" "}
                    <MDBBadge pill color="primary">
                      BEST
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                <strong>$15</strong>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default EcommercePage;
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import beans from '../assets/beans-2.jpg';

const BlogPage = () => {
  return (
      <MDBRow center>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src={beans}
                  alt=""
                  className="img-fluid"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  <a>We are a company that specialises in providing ready to drink, easy to make <b><i>cold brew concentrate</i></b>, with fresh beans, on demand, a healthier alternative to normally produced coffee.</a>
                </h2>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
            </MDBContainer>
          </MDBCol>
        </MDBRow>



  );
}

export default BlogPage;
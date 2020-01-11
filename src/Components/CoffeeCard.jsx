import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardTitle,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText
} from "mdbreact";
import p1 from "../assets/art-1.jpg";
import p2 from "../assets/art-2.jpg";
import p3 from "../assets/team.jpg";
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const JumbotronPage = () => {
    const cardTitle = {fontSize: '18px'}
    const cardText = {fontSize: '15px'}
    const btnText = {fontSize: '14px'}
  return (

      <AnimatedOnScroll animationIn="zoomIn" animationOut="zoomOut">
  <MDBContainer>
      <MDBRow>

      <MDBCol md='4' className='mb-5 row-cols-sm-1'>
      <MDBCard style={{ width: "32rem", height: "50rem" }}>
        <MDBCardImage className="img-fluid" src={p1} waves />
        <MDBCardBody>
          <MDBCardTitle className="h1-responsive m-5 font-bold" style={cardTitle}>Order your cold brew happiness!</MDBCardTitle>
          <MDBCardText className="mx-5 mb-5" style={cardText}>
            Here's wishing you a life without yawns and livelier smile :)
          </MDBCardText>
            <MDBBtn href="https://forms.gle/nNr8YFyhth8R2igZ7" color="info" className="mb-5 mx-5" style={btnText}>Order Now</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
          <MDBCol md='4' className='mb-5 row-cols-sm-1'>
      <MDBCard style={{ width: "32rem", height: "50rem" }}>
        <MDBCardImage className="img-fluid" src={p3} waves />
        <MDBCardBody>
          <MDBCardTitle className="h1-responsive m-5 font-bold" style={cardTitle}>Find out more about our mission</MDBCardTitle>
          <MDBCardText className="mx-5 mb-5" style={cardText}>
            Curious about us and the team behind this startup? Get to know us.
          </MDBCardText>
            <MDBBtn href="/theTeam" color="info" className="mb-5 mx-5" style={btnText}>Reach out</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol md='4' className='mb-5 md-2 row-cols-sm-1'>
      <MDBCard style={{ width: "32rem", height: "50rem" }}>
        <MDBCardImage className="img-fluid" src={p2} waves />
        <MDBCardBody>
          <MDBCardTitle className="h1-responsive pt-4 m-5 font-bold" style={cardTitle}>Get added to our online channels</MDBCardTitle>
          <MDBCardText className="mx-5 mb-5" style={cardText}>
            Get to know more about our offers through subscription.
          </MDBCardText>
            <MDBBtn href="https://t.me/joinchat/Gfi6UxUjRgTzCBZ9k96a0w" color="info" className="mb-5 mx-5" style={btnText}>Connect</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
      </AnimatedOnScroll>
  )
}

export default JumbotronPage;


import React, { Component } from 'react';
import {MDBContainer, MDBCard, MDBCol, MDBRow, MDBBtn, MDBCardImage, MDBBtnGroup} from "mdbreact";
import Features from '../Components/Features';
import Collection from '../Components/Collection';
import styled from "styled-components";
import logo from "../assets/alps.jpeg";
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class whyUs extends Component {
  render() {
    return (
        <MDBContainer>
        <MDBContainer className="text-center mt-5 pt-5">
            <Container style={{marginTop: '10%'}}>
            <MDBCard>
        <Features/>
            </MDBCard>
            </Container>
        </MDBContainer>
        <Container>
        <MDBRow center>
            <MDBCol lg='7'>
                <Container>
                    <h1 style={{marginBottom: '8%'}} className="quote">Our Trendy Collections</h1>
                </Container>
                <Collection/>
                <MDBRow center>
                    <MDBCol style={{height: '20rem', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    marginTop: '8%'}}>
                        <h1 class="quote" >Have urgent questions?</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow center>
                    <MDBCol className="mb-md-0 mb-4">
                        <Container>
                            <MDBBtnGroup vertical className='mb-12'>
                                <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut">
                                    <MDBBtn href="https://t.me/joinchat/Gfi6UxUjRgTzCBZ9k96a0w" color="warning" className='waves-button buttonCheck' size='lg' style={{padding: '20px 60px 20px 60px',
                                        fontFamily: 'Open Sans, sans-serif', fontSize: '20px'}}>
                                        Reach out on Telegram
                                    </MDBBtn>
                                </AnimatedOnScroll>
                            </MDBBtnGroup>
                        </Container>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
            <MDBCol lg='12'>
                <Container style={{marginTop: '25%'}} >
                <MDBCard style={{ width: "30rem"}}>
                    <MDBCardImage className="img-fluid"  src={logo} waves/>
                </MDBCard>
                </Container>
            </MDBCol>
        </MDBRow>
        </Container>
        </MDBContainer>
    )
  }
}
export default whyUs;
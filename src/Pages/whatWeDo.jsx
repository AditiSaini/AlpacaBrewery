import React, { Component } from 'react';
import {MDBBtn, MDBBtnGroup, MDBCol, MDBContainer, MDBJumbotron, MDBRow, MDBView} from "mdbreact";
import styled from "styled-components";
import ECommerce from '../Components/ECommerce';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import CoffeeType from '../Components/CoffeeTypes';
import OurNews from '../Components/OurNews';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class whatWeDo extends Component {
  render() {
      return (
        <MDBContainer>
            <Container>
                    <h1 className="quote">Our Deals</h1>
            </Container>
            <MDBRow center>
            <MDBCol style={{marginTop: '10%'}}>
                <AnimatedOnScroll animationIn="bounceIn" animationOut="fadeOut">
            <ECommerce/>
                </AnimatedOnScroll>
            </MDBCol>
            </MDBRow>
            <MDBRow center>
                <MDBCol lg='5' style={{marginTop: '5%'}}>
            <CoffeeType/>
                </MDBCol>
            </MDBRow>
        <Container>
            <MDBBtnGroup vertical className='mb-12'>
                <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut">
                    <MDBBtn href="https://forms.gle/nNr8YFyhth8R2igZ7" color="warning" className='waves-button buttonCheck' size='lg' style={{padding: '20px 60px 20px 60px',
                        fontFamily: 'Open Sans, sans-serif', fontSize: '20px', marginBottom: '70%'}}>
                        Order Now
                    </MDBBtn>
                </AnimatedOnScroll>
            </MDBBtnGroup>
        </Container>
            <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut">
            <OurNews/>
            </AnimatedOnScroll>

        </MDBContainer>
    )
  }
}
export default whatWeDo;
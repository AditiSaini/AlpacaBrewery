import React from "react";
import './quote.css';
import {MDBBtn, MDBRow, MDBCol, MDBBtnGroup, MDBContainer} from "mdbreact";
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const QuoteComponent = () => {

  return (
      <MDBContainer>
          <MDBRow center>
              <MDBCol style={{height: '20rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <h1 class="quote" >"Just one step, to do your day right!"</h1>
              </MDBCol>
          </MDBRow>
          <MDBRow center>
              <MDBCol className="mb-md-0 mb-4">
                  <MDBBtnGroup vertical className='mb-12'>
                      <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut">
                      <MDBBtn href="https://forms.gle/nNr8YFyhth8R2igZ7" color="warning" className='waves-button buttonCheck' size='lg' style={{padding: '20px 60px 20px 60px',
                          fontFamily: 'Open Sans, sans-serif', fontSize: '20px'}}>
                          Take the step
                      </MDBBtn>
                      </AnimatedOnScroll>
                  </MDBBtnGroup>
              </MDBCol>
          </MDBRow>
      </MDBContainer>
  )
}

export default QuoteComponent;
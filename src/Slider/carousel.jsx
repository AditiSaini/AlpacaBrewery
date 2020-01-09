import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBRow,
  MDBMask,
} from "mdbreact";
import p1 from '../assets/coffee-1.jpg';
import p2 from '../assets/coffee-2.jpg';
import p3 from '../assets/coffee-3.jpg';

class CarouselPage extends Component {
  render() {
    return (
      <MDBView>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={p1}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={p2}
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={p3}
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
            </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBView>
    );
  }
}

export default CarouselPage;
import React, { useState, useEffect } from "react";
import './parallex-scroll.css';
import {MDBCard, MDBCardImage} from 'mdbreact';
import logo from "../assets/alps.jpeg";
import QuoteComponent from "../Components/quote";

const ScrollComponent = () => {
  const [offset, setOffset] = useState(0);

  const listener = e => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <div className="scrollable">
      <header className="header-background" style={{ backgroundPositionY: offset }}>
        <section className="info-container" style={{   bottom: offset / 100}}>
            <MDBCard style={{ width: "25rem"}}>
              <MDBCardImage className="img-fluid"  src={logo} waves/>
            </MDBCard>
        </section>
      </header>
        <QuoteComponent/>
    </div>
  )
}

export default ScrollComponent;
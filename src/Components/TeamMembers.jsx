import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import aditi from '../assets/aditi.jpg';
import jookai from '../assets/jookai.png';
import adnan from '../assets/adnan.png';
import gabriel from '../assets/gabriel.png';
import jade from '../assets/jade.png';
import leon from '../assets/leon.png';

const TeamMembers = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBRow center>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={gabriel}/>
                  <MDBCardBody>
                    <MDBCardTitle>Gabriel Lim</MDBCardTitle>
                    <MDBCardText>
                      Cold-brew enthusiast passionate on finding the most caffeinated cup to keep him going,
                      Gabriel is part of the research & development team to source out the ideal recipe for our signature cold brew coffee.
                      His experience with business development and experience in investing puts him in the position of handling the finances of Alpaca Brewery.
                    </MDBCardText>
                    <MDBBtn color="primary">Connect</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
                <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={jade}/>
                  <MDBCardBody>
                    <MDBCardTitle>Jade</MDBCardTitle>
                    <MDBCardText>
                      A self-proclaimed foodie, Jade is passionate about the food and beverages (F&B) industry.
                      Hoping to establish the next successful cold brew business, she has done extensive on-ground research of her competitors with her cafe hopping escapades.
                      Her expertise in marketing and advertising has prepared her to establish a strong brand name for Alpaca Brewery.
                    </MDBCardText>
                    <MDBBtn color="primary">Connect</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
                <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={aditi}/>
                  <MDBCardBody>
                    <MDBCardTitle>Aditi Saini</MDBCardTitle>
                    <MDBCardText>
                      A tech geek, who likes to make a difference by merely sitting in one corner of the room with laptop and coffee.
                      Aditi is a part of the technology team who is responsible for maintaining the website of Alpaca.
                      Her experience with hackathons and overnight coding helps her to take on this role.
                      She strongly resonates with the quote, <br/><b>“Talk is cheap. Show me the code”</b>.
                    </MDBCardText>
                    <MDBBtn color="primary">Connect</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBRow center>
                <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={adnan}/>
                  <MDBCardBody>
                    <MDBCardTitle>Adnan Adzam</MDBCardTitle>
                    <MDBCardText>
                      Adnan is an engineer,  photographer, aspiring entrepreneur and traveller with many varied interests.
                      In Alpaca brewery he is part of the procurement team, helping to source the best suppliers to make the finest cold brew.
                      He is also a part of the marketing team where he hopes to make sure the excitement and enthusiasm of the brewers are channelled to the consumers.
                    </MDBCardText>
                    <MDBBtn color="primary">Connect</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
                <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={jookai} />
                  <MDBCardBody>
                    <MDBCardTitle>Joo Kai</MDBCardTitle>
                    <MDBCardText>
                      An aspiring entrepreneur who truly believes in “Ideas are cheap, execution is everything”.
                      Joo Kai is part of the procurement team that deals with suppliers negotiation,
                      sourcing activities, and the strategic selection of services and goods that are usually of more importance to an entity.
                    </MDBCardText>
                    <MDBBtn color="primary">Connect</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
                <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={leon}/>
                  <MDBCardBody>
                    <MDBCardTitle>Leon</MDBCardTitle>
                    <MDBCardText>
                      Yong Siang is part of the R&D team to research the secrets of coffee beans to deliver to the world the best and finest coffee beans.
                      With dedication and effort with making the coffee , he is determined that he will succeed.
                      We also explore ways to bring our the best from the coffee beans.
                      He also takes part in the development of the website with his coding skills.
                    </MDBCardText>
                    <MDBBtn color="primary">Connect</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default TeamMembers;
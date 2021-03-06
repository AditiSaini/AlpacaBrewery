import React from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBCard} from "mdbreact";

const PanelPage = () => {
return (
    <>
      <MDBContainer>
          <MDBCard style={{padding: '50px 50px 20px 40px'}}>
              <MDBRow center>
                <MDBCol style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h1 style ={{fontSize:'400%'}} class="quoteMe" >Meet Us...</h1>
              </MDBCol>
            </MDBRow>
          <MDBRow center>
              <MDBCol><br/>
                  <p style ={{ fontSize:'200%', color: 'black'}}>We are a group of passionate individuals, undergraduates from Nanyang Technological University Singapore, with a drive to make a change.
                      We believe that any achievement requires persistence and hard work. And we are the riders of those qualities.
                      We strongly echo with the belief
                      <br/><b>Think energy?
                      Think Alpaca!</b></p>
              </MDBCol>
          </MDBRow>
          </MDBCard>
      </MDBContainer>
      </>
);
};

export default PanelPage;
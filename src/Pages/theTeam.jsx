import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCardText, MDBCard, MDBCardTitle} from "mdbreact";
import p1 from '../assets/us.jpg';
import posed from "react-pose";
import styled from "styled-components";
import CardComponent from '../Components/CardComponent';
import TeamMembers from '../Components/TeamMembers';
import p2 from '../assets/alps.jpeg';

const Container = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Square = posed.img({
    idle: { scale: 1 },
    hovered: { scale: 1.15 },
});

const StyledSquare = styled(Square)`
  width: 80%;
`;

class theTeam extends Component {
    state = { hovering: false };
  render() {
      const container = {height: 1500};
    return (
        <>
        <MDBContainer style={container} className="text-center mt-5 pt-5">
            <MDBContainer>
                <Container>
                    <StyledSquare src={p1}
                        pose={this.state.hovering ? "hovered" : "idle"}
                        onMouseEnter={() => this.setState({ hovering: true })}
                        onMouseLeave={() => this.setState({ hovering: false })}/>
                </Container>
            </MDBContainer>
            <Container>
            <CardComponent/>
            </Container>
                <Container>
            <TeamMembers/>
                </Container>
            <Container>
            <MDBContainer>
            <MDBRow center>
                <MDBCol lg="7">
                    <div id="map-container" className="rounded z-depth-1-half map-container" style={{ height: "400px" }}>
                        <iframe src="https://maps.google.com/maps?q=nanyang%20technological%20university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                title="This is a unique title" width="100%" height="100%" frameBorder="0" style={{ border: 0 }}/>
                        <MDBCard>
                            <MDBRow center>
                                <MDBCol xs='3'>
                            <MDBCardImage className="img-fluid" src={p2} style={{ width: "15rem"}}/>
                                </MDBCol>
                                <MDBCol xs='4' className='mt-4'>
                        <MDBCardTitle>
                            <table>
                                <tbody>
                                <tr>
                                    <td className="align-middle">Contact Us</td>
                                </tr>
                                </tbody>
                            </table>
                        </MDBCardTitle>
                        <MDBCardText>
                            <MDBContainer>
                            <table style={{height: "100px"}}>
                                <tbody>
                                <tr>
                                    <td className="d-flex justify-content-between align-items-center">+65 9352 1145</td>
                                    <td className="d-flex justify-content-between align-items-center">+65 8422 1789</td>
                                    <td className="d-flex justify-content-between align-items-center">+65 9459 4132</td>
                                    <td className="d-flex justify-content-between align-items-center">+65 9328 8687</td>
                                    <td className="d-flex justify-content-between align-items-center">+65 8500 6224</td>
                                    <td className="d-flex justify-content-between align-items-center">+65 9231 7037</td>
                                </tr>
                                </tbody>
                            </table>
                            </MDBContainer>
                        </MDBCardText>
                                </MDBCol>
                            </MDBRow>
                    </MDBCard>
                    </div>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
            </Container>
        </MDBContainer>

        </>
    )
  }
}
export default theTeam;
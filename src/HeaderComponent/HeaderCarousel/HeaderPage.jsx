import {Component} from "react";
import {MDBJumbotron, MDBView} from "mdbreact";
import CarouselPage from "../../Slider/carousel";
import React from "react";

class HeaderPage extends Component {
    render() {
        return (
            <MDBView className='pt-5'>
                <MDBJumbotron style={{backgroundColor: "black"}}>
                    <div>
                        <CarouselPage/>
                    </div>
                </MDBJumbotron>
            </MDBView>
        )
    }
}
export default HeaderPage;
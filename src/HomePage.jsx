import React, { Component } from 'react';
import HeaderPage from "./HeaderComponent/HeaderCarousel/HeaderPage";
import JumbotronPage from "./Components/CoffeeCard"
import ScrollComponent from "./Components/parallex-scroll";


class HomePage extends Component {
  render() {
    return (
        <>
        <div>
            <HeaderPage/>
            <JumbotronPage/>
            <ScrollComponent/>
        </div>
        </>
    )
  }
}
export default HomePage;
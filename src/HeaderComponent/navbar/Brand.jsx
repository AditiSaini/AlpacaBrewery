import React from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom';
import logo from "../../assets/alps.jpeg";

const Brand = () => {
  return (
      <Link to="/">
      <Image src={logo} alt="Company Logo" className='mt-2'/>
      </Link>
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;
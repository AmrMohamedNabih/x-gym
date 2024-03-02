import React from 'react'
import styled from 'styled-components';
import NavBar from '../../components/store/navBar';
import Announcement from '../../components/store/announcement';
import Products3 from '../../components/store/products3';
import Footer from '../../components/store/footer';

const Container = styled.div`
background-color:white;
`;
const Title=styled.h1`
margin:20px;
`



const ProductsList3 = () => {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Title>ACCESSORIES</Title>
        <Products3/>
        <Footer/>
    </Container>
  )
}

export default ProductsList3
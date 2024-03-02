import React from 'react'
import styled from 'styled-components';
import NavBar from '../../components/store/navBar';
import Announcement from '../../components/store/announcement';
import Products2 from '../../components/store/products2';
import Footer from '../../components/store/footer';

const Container = styled.div`
background-color:white;
`;
const Title=styled.h1`
margin:20px;
`



const ProductsList2 = () => {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Title>WOMAN CLOTHES</Title>
        <Products2/>
        <Footer/>
    </Container>
  )
}

export default ProductsList2
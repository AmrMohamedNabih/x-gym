import React from 'react'
import styled from 'styled-components';
import NavBar from '../../components/store/navBar';
import Announcement from '../../components/store/announcement';
import Products from '../../components/store/products';
import Footer from '../../components/store/footer';

const Container = styled.div`
 background-color:white;
`;
const Title=styled.h1`
margin:20px;
`



const ProductsList = () => {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Title>MAN CLOTHES</Title>
        <Products/>
        <Footer/>
    </Container>
  )
}

export default ProductsList
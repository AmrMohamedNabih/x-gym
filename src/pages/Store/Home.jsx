import React from 'react'
import NavBar from '../../components/store/navBar'
import Announcement from '../../components/store/announcement'
import Slider from '../../components/store/slider'
import Categories from '../../components/store/categories'
import Products from '../../components/store/products'
import Footer from '../../components/store/footer'
import styled from "styled-components";

const Home = () => {
  console.log("Home :  ");

const Container =styled.div`
background-color: white
`

  return (
    <Container> 
      <NavBar/>
      <Announcement/>
      <Slider/>
      <Categories/>
      <Products/>
      <Footer/>
      </Container>
  )
}

export default Home
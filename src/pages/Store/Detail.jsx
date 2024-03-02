import React from 'react'
import styled from 'styled-components';
import NavBar from '../../components/store/navBar';
import Announcement from '../../components/store/announcement';
import Footer from '../../components/store/footer';
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { cartItems } from '../data';
const Container = styled.div`
 background-color: white;
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImageContainer = styled.div`

`;
const InfoContainer= styled.div`
    padding: 0px 50px;
 
`;
const Image = styled.img`
 width: 100%;
 object-fit:cover;
`;
const Title = styled.h1`
    font-weight:700;

`;
const Desc = styled.p`
 margin: 20px 0px;
 font-weight:600;
 font-size: 20px;
 
 `;
 const Price = styled.span`
    font-weight:400;
    font-size:40px;
    
`;
const AddContainer=styled.div`
    display: flex;
    align-items: center;
    width:18%;
    justify-content:space-between;
    margin-top:50px;
`
const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight:700;
`

const Amount=styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border: 1px solid teal;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button=styled.button`
        padding: 15px;
        border: 1px solid teal;
        background-color: white;
        color:black;
        cursor:pointer;
        font-weight: 700;
        &:hover {
            background-color: #f8f4f4;
        }
`

const Detail = () => {
    const [amount, setamount] = useState(0);
    const [addItem, setItem] = useState(0);
    const location = useLocation();
    const item =location.state.item;
    const add = () => {
        console.log("cccc:",cartItems.length);
            setItem(addItem+1);
            cartItems.push(item);
    }
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
            <Image src ={location.state.item?.imageSrc}/>

            </ImageContainer>
            <InfoContainer>
              <Title>{location.state.item?.Name}</Title>  
                <Desc>{location.state.item?.Description}
                </Desc>
                    <Price>{location.state.item?.Price} LE</Price>
            <AddContainer>
                <AmountContainer>
                    
                <Remove  onClick={() => setamount( amount> 0 ? amount-1 :amount )}></Remove>
                <Amount>{amount}</Amount>
                <Add onClick={() => setamount(amount+1)}></Add>
                </AmountContainer>
            <Button onClick={add}>ADD TO CART</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>


        <Footer/>
    </Container>
  )
}

export default Detail
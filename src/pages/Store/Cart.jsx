import React, { useState, useEffect } from "react";
import NavBar from "../../components/store/navBar";
import Announcement from "../../components/store/announcement";
import Footer from "../../components/store/footer";
import styled from "styled-components";

import { cartItems } from "../data";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
const Container = styled.div`
background-color:white;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 12px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
  font-size: 23px;
  font-weight: 500;
`;
const ProductId = styled.span`
  font-size: 23px;
  font-weight: 500;
`;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmouuntContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 35px;
  font-weight: 500;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 35vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.input`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Address = styled.input`
  width: 50%;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Form=styled.form`
`

const Cart = () => {
  const [Addresss,setAddress] = useState("");
  const [Phone,setPhone] = useState(0);
  const [cookies] = useCookies(['Id']);
  const isAuthenticated = cookies.Id;
  // const [soort, setSort] = useState(cartItems);
  console.log("ccc :   ", cartItems.length);
  const check = (cartItems) => {
    console.log("hbbjn");
    const temp = cartItems;
    if (temp.length === 0) {
      return <div></div>;
    } else {
      return cartItems.map((item, index) => (
        <Info key={index}>
          <Product>
            <ProductDetail>
              <Image src={item.imageSrc}></Image>
              <Details>
                <ProductName>
                  <b>Product:</b> {item.Name}
                </ProductName>
                <ProductId>
                  <b>ID:</b> {item.ProductID}
                </ProductId>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductPrice>{item.Price} L.E</ProductPrice>
            </PriceDetail>
          </Product>
          <Hr />
        </Info>
      ));
    }
  };


  const TotalPriceComponent = (clothItems) => {
    if (clothItems.length === 0) {
      var totalPrice = clothItems.reduce((sum, item) => sum +parseFloat( item.Price), 0);
    }
    else{
      var totalPrice = clothItems.reduce((sum, item) => sum + parseFloat(item.Price), 0) +30;
    }
    return (
      <>
        <SummaryItemText>Total: </SummaryItemText>
        <SummaryItemPrice>{totalPrice} L.E</SummaryItemPrice>
      </>
    );
  };
  const [addItem, setItem] = useState(0);
    const handleClearCart = (cartItems) => {
      console.log(cartItems);
      cartItems.splice(0, cartItems.length);
      console.log(cartItems);
      setItem(addItem+1);
    };
    const handlecheckout = ()=>{
      console.log("no");
      for(let i =0 ;i < cartItems.length;i++)
      {
        console.log(i);
        var Data = {
          id: isAuthenticated,
          phone: Phone,
          Address: Addresss,
          total: cartItems[i].Price,
          productId: cartItems[i].ProductID,
      }
      axios.post("http://localhost/checkOut/", { Data: Data }).then(function (response) {
        // @ts-ignore
        }).then(response => console.log(response.data)).catch(function (error) {
            console.error("Error in Axios POST request", error);
        });
      }
      
      alert("Order has been placed!");
    }
    console.log(cartItems[0]);
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
        <Link to={"/"}><TopButton>CONTINUE SHOPPING</TopButton></Link>
          <TopTexts>
            <TopText>Shopping Bag({cartItems.length})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={() => handleClearCart(cartItems)}>CLEAR CART</TopButton>
        </Top>
        <Bottom>
          <div>{check(cartItems)}</div>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>30 L.E</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>0.0 L.E</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
               {TotalPriceComponent(cartItems)}
            </SummaryItem>
            <Form>
            <Address type="text" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}></Address>
            <Address type="tel" placeholder="Phone Number +20" onChange={(e)=>setPhone(e.target.value)}></Address>
            <Button type="submit" value="CHECKOUT NOW" onClick={handlecheckout}></Button>
            </Form>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

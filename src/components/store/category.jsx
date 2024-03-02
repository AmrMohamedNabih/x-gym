import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../../pages/responsive';
import { Link } from 'react-router-dom';
const Container = styled.div`
 flex: 1 ;
 margin: 3px;
 height: 70vh;
 position: relative;
`;
const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
        ${Mobile({ height: "20vh" })}
`;
const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
`;
const Title = styled.h1`
        color:white;
        margin-bottom:20px;
        
`;
const Button = styled.button`
    border-radius: 5px;
    padding:10px;
    background-color:white;
    color:black;
    font-weight: 1000;
    cursor: pointer;
    border-color:white;
    `;

const Category = ({item})=> {
    const pages=(item)=>{
        if (item.id===1) {
           return <Link to={"/productsList"} ><Button>SHOP NOW</Button></Link>;
        }
        if (item.id===2) {
            return <Link to={"/productsList2"} ><Button>SHOP NOW</Button></Link>;
         }
         if (item.id===3) {
            return <Link to={"/productsList3"} ><Button>SHOP NOW</Button></Link>;
         }
    } 
  return (
   <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
                <>
                {pages(item)}
                </>
        </Info>
   </Container>
  )
}

export default Category
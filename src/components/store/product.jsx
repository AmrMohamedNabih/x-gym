import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Mobile2} from '../../pages/responsive'

import {Mobile3} from '../../pages/responsive'
import { Link,useNavigate } from "react-router-dom";
const Info=styled.div`
    opacity:0;
    width: 91.2%;
    height: 80%;
    position: absolute;
    top:77px;
    left:20px;
    background-color: rgba(0,0,0,0.1);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.7s ease;
    cursor: pointer;
    ${Mobile2({ width:"47.33%",left:'208px'})}
    ${Mobile3({width: "59%", left:""})}


`;
const Container = styled.div`
    flex:1;
    margin: 5px;
    height: 83vh;
    min-width:400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &:hover ${Info}{
        opacity:1;
    };
    ${Mobile2({ justifycontent: "center" })}
    
`;

const Image=styled.img`
    height: 80%;
    margin-left:0px;
    object-fit: cover;
    
    
`;

const Icon=styled.div`

    width: ${(props) => props.value === "price"? "70px": "40px"};
    height: 40px;
    border-radius:${(props) => props.value === "price"? "10%": "50%"};
    background-color: white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 10px;
    transition:all 0.5s ease;
    font-size: 20px;
    font-weight:600;
    &:hover{
        background-color: #e9f5f5;
        transform:scale(1.1);
    }
`;
const Product = ({item}) => {
    const navigate = useNavigate();
    
  return (
    <Container>
            <Image src={item.imageSrc}/>
        <Info>
            <Icon>
             <div onClick={()=>{navigate('/Detail' , {state:{item}})}}><ShoppingCartOutlinedIcon/></div> 
            </Icon>
            <Icon value="price" style = {{width:"70px"}}>
                {item.price2?item.price2:parseInt(item.Price)} L.E
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
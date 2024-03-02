import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styled from "styled-components";
import {sliderItems} from "../../pages/data";
import { Mobile } from "../../pages/responsive";
import { Link } from "react-router-dom";

const ContainerSlider = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  overflow: hidden;
  position: relative;
  ${Mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index:2;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props=>props.bg};
`;

const Imgcontainer = styled.div`
  height: 100%;
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Image = styled.img`
  height: 80%;
`;
const Title=styled.h1`
  font-size:70px;
`;
const Desc=styled.p`
  margin: 50px 0px;
  font-size: 21px;
  font-weight: 500;
  letter-spacing:3px;
`;
const Button=styled.button`
  padding: 10px;
  font-size: 20px;
  color: black;
  background-color: white;
  cursor: pointer;
`;

const Slider = () => {

  const [slideIndex,setSlideIndex] = useState(0);
   const handleClick=(direction)=>{
      if(direction==="left")
      {
          setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
      }
      else{
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
      }
   };
   
    const pages=(item)=>{
        if (item.id===1) {
           return <Link to={"/productsList"} ><Button>SHOP NOW</Button></Link>;
        }
        if (item.id===2) {
            return <Link to={"/productsList3"} ><Button>SHOP NOW</Button></Link>;
         }
         if (item.id===3) {
            return <Link to={"/productsList2"} ><Button>SHOP NOW</Button></Link>;
         }
        }
  return (
    <ContainerSlider>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosNewIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=>(

          <Slide bg={item.bg} key={item.id}>
          <Imgcontainer>
            <Image src={item.img} />
          </Imgcontainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc> {item.desc}</Desc>
          <>{pages(item)}</>
          </InfoContainer>
        </Slide >
          ))}
        
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </ContainerSlider>
  );
};

export default Slider;

import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { Payment } from "@mui/icons-material";
import { Mobile } from "../../pages/responsive";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SociaContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Container = styled.div`
  display: flex;
  ${Mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottm: 10%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${Mobile({ backgroundColor: "#fff8f8" })}
`;
const ConatctItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  const [cookies,romvecookie] = useCookies(['Email','Id']);
  return (
    <Container>
      <Left>
        <Logo>XGYM.</Logo>
        <Desc>
          XGYM is your ultimate sports destination, offering a carefully curated
          selection of cutting-edge sportswear, equipment, and accessories from
          top brands. Our store combines style with substance, providing
          athletes and fitness enthusiasts with personalized service and a
          community hub to connect and share their passion. Step into XGYM to
          elevate your game, showcase your unique style, and experience the
          difference in pursuing an active lifestyle.
        </Desc>
        <SociaContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <FitnessCenterRoundedIcon />
          </SocialIcon>
        </SociaContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Link to={"/profile"}>
            
            <ListItem>Home</ListItem>
          </Link>
          <Link to={"/Cart"}>
            <ListItem>Cart</ListItem>
          </Link>
          <Link to={"/productsList"}>
            
            <ListItem>Man Fashion</ListItem>
          </Link>
          <Link to={"/productsList2"}>
            <ListItem>Woman Fashion</ListItem>
          </Link>
          <Link to={"/productsList3"}>
            
            <ListItem>Accessories</ListItem>
          </Link>
          <Link to={"/profile"}>
            
            <ListItem>My Account</ListItem>
          </Link>
          <Link to={"/Cart"}>
            
            <ListItem>Payment</ListItem>
          </Link>
          <Link to={"/aboutUs"}>
          
            <ListItem>About us</ListItem>
          </Link>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ConatctItem>
          <FmdGoodRoundedIcon style={{ marginRight: "10px" }} />
          022 Cairo Path, Fifth Settlement 937832
        </ConatctItem>
        <ConatctItem>
          <PhoneAndroidRoundedIcon style={{ marginRight: "10px" }} />
          +20 0102 095 8617
        </ConatctItem>
        <ConatctItem>
          <EmailRoundedIcon style={{ marginRight: "10px" }} />
          contact@XGYM.com
        </ConatctItem>
        <ConatctItem>
          {" "}
          <Payment style={{ marginRight: "10px" }} />
          Visa.
        </ConatctItem>
      </Right>
    </Container>
  );
};

export default Footer;

import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: "column", backgroundColor: "#ffffff" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Image = styled.img`
  width: 40%;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  padding-top: 5px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ display: "none" })}
`;
const Title = styled.h2`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:active {
    color: #bc0000;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile()}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payments = styled.img`
  width: 50%;
  margin-left: -5px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Image src="https://i.ibb.co/kS7V2kg/Fashion-shop-logo-design-on-transparent-background-PNG.png"></Image>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          rerum, possimus ipsum voluptatibus dolorem inventore, ipsam, veritatis
          repellendus facilis nostrum omnis labore! Animi consectetur, dolores
          velit a eius doloribus rerum.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.facebook.com/ravipatil.ravipatil.526/"
            >
              <Facebook />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.instagram.com/r_a_v_i_i_i_i/"
            >
              <Instagram />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://twitter.com/home"
            >
              <Twitter />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://github.com/Ravip925"
            >
              <GitHub />
            </a>
          </SocialIcon>
          <SocialIcon>
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://in.pinterest.com/"
            >
              <Pinterest />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>UsefulLinks</Title>
        <List>
          <ListItem>
            <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
              Home
            </NavLink>
          </ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/products/men"
            >
              Men Fashion
            </NavLink>
          </ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/products/cap"
            >
              Cap Fashion
            </NavLink>
          </ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/products/women"
            >
              Women Fashion
            </NavLink>
          </ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/cart"
            >
              Cart
            </NavLink>
          </ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />H No. 47, CollegeRoad, Belgaum
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +91-4846536852
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          abcd@gmail.com
        </ContactItem>
        <Payments src="https://i.ibb.co/vCFT0mp/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png" />
      </Right>
    </Container>
  );
};

export default Footer;

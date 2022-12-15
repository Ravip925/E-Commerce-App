import React from "react";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  height: 65px;
  text-decoration: none;
  user-select: none;
  background-color: #ffffff;
  background-image: url("https://i.ibb.co/5k861B6/pexels-juan-mendez-1536619-1.jpg");
  background-position: bottom;

  ${mobile({ height: "85px", marginBottom: "10px" })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  ${mobile({
    boxSizing: "borderBox",
    justifyContent: "spaceAround",
    padding: "0px 5px",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const Input = styled.input`
  border: none;
  width: 75%;
  padding: 0px;
  font-size: 17px;
  text-align: center;
  background-color: #fffb28e6;
  &:focus {
    outline: none;
  }
  ${mobile({ width: "50px" })}
`;
const H4 = styled.h4`
  font-weight: 500;
  color: #4f4f4f;
  margin-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;
const H4a = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
  margin-left: 5px;
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;

  &::before {
    content: "";
    animation: typing 11s infinite linear;
  }
  &::after {
    content: "";
    border-right: 2px solid var(--caret);
    animation: blink 0.5s linear infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  @keyframes typing {
    0.0000%,
    27.3488% {
      content: "";
    }
    1.1395%,
    26.2093% {
      content: "m";
    }
    2.2791%,
    25.0698% {
      content: "me";
    }
    3.4186%,
    23.9302% {
      content: "men";
    }

    30.7674%,
    51.2791% {
      content: "";
    }
    31.9070%,
    50.1395% {
      content: "w";
    }
    33.0465%,
    49.0000% {
      content: "wo";
    }
    34.1860%,
    47.8605% {
      content: "wom";
    }
    35.3256%,
    46.7209% {
      content: "wome";
    }
    36.4651%,
    45.5814% {
      content: "women";
    }

    54.6977%,
    75.2093% {
      content: "";
    }
    55.8372%,
    74.0698% {
      content: "t";
    }
    56.9767%,
    72.9302% {
      content: "ts";
    }
    58.1163%,
    71.7907% {
      content: "tsh";
    }
    59.2558%,
    70.6512% {
      content: "tshi";
    }
    60.3953%,
    69.5116% {
      content: "tshir";
    }
    61.5349%,
    68.3721% {
      content: "tshirt";
    }

    78.6279%,
    96.8605% {
      content: "";
    }
    79.7674%,
    95.7209% {
      content: "c";
    }
    80.9070%,
    94.5814% {
      content: "ca";
    }
    82.0465%,
    93.4419% {
      content: "cap";
    }
  }
  --caret: currentcolor;
`;

const SearchContainer = styled.div`
  border: 1px solid;
  width: 50%;
  display: flex;
  margin-left: 5px;
  padding: 0px;
  align-items: center;
`;

const Center = styled.div`
  flex: 1.5;
  text-align: center;
`;
const Logo = styled.div`
  ${mobile({ fontSize: "24px" })}
`;
const Image = styled.img`
  width: 85px;
  ${mobile({ width: "85%" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;

  ${mobile({
    height: "70px",
    flex: 2.5,
    justifyContent: "spaceEvenly",
    marginRight: "0px",
  })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
    color: #3f3f3f;
  }
  ${mobile({ width: "100%", fontSize: "15px", marginRight: "0px" })}
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const handleSearch = () => {
    if (search) {
      navigate("/products/" + search);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search
              onClick={handleSearch}
              style={{
                width: "50px",
                color: "black",
                fontSize: 28,
                cursor: "pointer",
                backgroundColor: "teal",
              }}
            />
          </SearchContainer>
          <H4>
            Search <H4a></H4a>
          </H4>
        </Left>
        <Center>
          <Logo>
            <NavLink to="/">
              <Image src="https://i.ibb.co/kS7V2kg/Fashion-shop-logo-design-on-transparent-background-PNG.png"></Image>
            </NavLink>
          </Logo>
        </Center>
        <Right>
          {!user ? (
            <>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/register"
              >
                <MenuItem>
                  <b>REGISTER</b>
                </MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                <MenuItem>
                  <b>SIGN IN</b>
                </MenuItem>
              </NavLink>
            </>
          ) : (
            <MenuItem style={{ width: "30%" }} onClick={logout}>
              <b>LOGOUT</b>
            </MenuItem>
          )}
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/cart"
          >
            <MenuItem>
              <Badge
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                badgeContent={quantity}
                color="primary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLayoutEffect } from "react";
import { mobile } from "../Responsive";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #aed4ff75;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Square = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff8181e2;
  border-bottom-left-radius: 55px;
  text-align: center;
  box-sizing: border-box;
  font-size: 23px;
  font-weight: bold;
  color: #ffe0e0;
  padding: 10px 0;
  position: absolute;
  top: 0;
  right: 0;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 2px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Spinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 35%;
  left: 40%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${mobile({
    width: "30px",
    height: "30px",
    border: "8px solid #f3f3f3",
    borderTop: "8px solid #3498db",
    left: "46%",
    top: "30%",
  })}
`;

const Product = ({ item }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      {item ? (
        <>
          <Square>${item.price}</Square>
          <Circle />
          <Image src={item.img} />
          <Info>
            <Icon>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={`/product/${item._id}`}
              >
                <ShoppingCartOutlined />
              </NavLink>
            </Icon>
            <Icon>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={`/product/${item._id}`}
              >
                <SearchOutlined />
              </NavLink>
            </Icon>
            <Icon>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={`/product/${item._id}`}
              >
                <FavoriteBorderOutlined />
              </NavLink>
            </Icon>
          </Info>
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default Product;

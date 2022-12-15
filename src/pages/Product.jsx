import styled from "@emotion/styled";
import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import { mobile } from "../Responsive";
import { useLayoutEffect } from "react";

const Container = styled.div`
  background-color: #ffffff;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;

  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 400;

  ${mobile({ textAlign: "center" })}
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ textAlign: "center" })}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 60%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  ${mobile({ width: "100%", flexDirection: "column", height: "12vh" })}
`;
const Filter = styled.span`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 18px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  width: 100px;
  margin-left: 10px;
  padding: 5px;
  font-weight: bold;
  font-size: 16px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1.5px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #fbe8e8;
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
  top: 25%;
  left: 50%;
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

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [showText, setShowText] = useState(false);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setSpinner(true);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "inc") {
      setQuantity(quantity + 1);
    } else {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
    setShowText(!showText);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <Annoucement />
      <Navbar />
      {spinner ? (
        <>
          <Wrapper>
            <ImgContainer>
              <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{product.title}</Title>
              <Desc>{product.desc}</Desc>
              <Price>$ {product.price}</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Select Color:</FilterTitle>
                  {product.color?.map((c) => (
                    <FilterColor
                      color={c}
                      key={c}
                      onClick={() => setColor(c)}
                    />
                  ))}
                </Filter>
                <Filter>
                  <FilterTitle>Select Size:</FilterTitle>
                  <FilterSize onChange={(e) => setSize(e.target.value)}>
                    {product.size?.map((size) => (
                      <FilterSizeOption key={size}>{size}</FilterSizeOption>
                    ))}
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <Remove onClick={() => handleQuantity("dec")} />
                  <Amount>{quantity}</Amount>
                  <Add onClick={() => handleQuantity("inc")} />
                </AmountContainer>
                <Button onClick={handleClick}>
                  {showText ? "ADDED TO CART" : "ADD TO CART"}
                </Button>
              </AddContainer>
            </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer />
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default Product;

import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #ffa3a3;
  display: flex;
  // #fcf5f5
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ padding: "0 20px" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "50px" })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: teal;
  color: white;

  &:active {
    background-color: #00a2c6;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Get New Product Updates</Title>
      <Desc>Get timely update from your favorite product</Desc>
      <InputContainer>
        <Input placeholder=" Your email"></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

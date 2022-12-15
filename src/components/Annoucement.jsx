import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: 500;
  overflow: hidden;
`;
const Span = styled.span`
  color: rgb(255, 222, 222);
  transform-origin: right;
  animation-delay: 0s;
  white-space: nowrap;
  animation: annoucement 27s infinite linear;

  @keyframes annoucement {
    0% {
      transform: translateX(85vw);
    }

    100% {
      transform: translateX(-85vw);
    }
  }
  ${mobile({
    fontSize: "15px",
    wordWrap: "none",

    "@keyframes annoucement": {
      "0%": {
        transform: "translateX(95vw)",
      },

      "100%": {
        transform: "translateX(-105vw)",
      },
    },
  })}
`;
const Annoucement = () => {
  return (
    <Container>
      <Span>
        Annoucement........ Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quas eveniet architecto modi iusto voluptate impedit!
      </Span>
    </Container>
  );
};

export default Annoucement;

import styled from "styled-components";
import bgImage from "@src/assets/bg-img.png";

export const StyledMain = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #BC5C2C33;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & span {
    background-color: #BC5C2C1A;
    color: ${({ theme }) => theme.primaryColor};
    z-index: 2;
    padding: 20px;
    border-radius: 50%;
    margin-bottom: -40px;
  }

  & span svg {
    width: 32px;
    height: 32px;
  }
`
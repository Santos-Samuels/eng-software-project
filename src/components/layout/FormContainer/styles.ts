import styled from "styled-components";
import bgImage from "@src/assets/bg-img.png";

export const StyledMain = styled.main<{ width: string; height: string }>`
  width: ${({ width }) => width ? width : "100vw"};
  height: ${({ height }) => height ? height : "100vh"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #bc5c2c33;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & span {
    background-color: #bc5c2c1a;
    color: ${({ theme }) => theme.primaryColor};
    z-index: 2;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: -40px;
    display: flex;
  }

  & span svg {
    margin: auto;
    font-size: 50px;
  }

  & img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 100%;
    margin-bottom: -40px;
    z-index: 2;
  }
`;

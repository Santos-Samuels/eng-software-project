import styled from "styled-components";

export const StyledArticle = styled.article<{ isExpanded: boolean }>`
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.3);
  border-radius: 10px 0px 0px 10px;
  background-color: #ffffff;
  transition: all ease 0.3s;
  padding: 20px;
  margin: 20px 0 20px 20px;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
  }

  & div svg:nth-child(2) {
    transition: all ease 0.4s;
    ${({ isExpanded }) => isExpanded && "transform: rotate(180deg);"}
  }

  & div span {
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 10px;
    text-transform: capitalize;
  }

  & div span svg {
    font-size: 30px;
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & section {
    padding: 15px 10px;
  }

  @media only screen and (min-width: 650px) {
    padding: 20px 100px 20px 50px;
    margin: 50px 0 50px 100px;

    & div span {
      font-size: 26px;
    }
  }
`;

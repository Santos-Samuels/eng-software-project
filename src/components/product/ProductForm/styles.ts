import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: 20px 0;

  & > div h2 {
    margin-bottom: 15px;
    text-align: center;
  }

  & > div button {
    margin-top: 15px;
    width: 100%;
  }
  /* flex-direction: column; */
`;

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 100%;
    margin-bottom: -40px;
    z-index: 2;
  }

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
`;

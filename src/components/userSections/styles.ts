import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    font-size: 18px;
  }

  & div img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 100%;
  }

  & div article {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
  }

  & div article button {
    width: 100px;
  }

  & div p {
    word-wrap: nowrap;
    color: ${({ theme }) => theme.textColor};
  }

  @media only screen and (min-width: 650px) {
    flex-direction: row;
  }
`;

export const StyledAvatar = styled.div`
  background: #bc5c2c1a;
  height: 100px;
  width: 100px;
  border-radius: 100%;

  & svg {
    margin: auto;
    font-size: 50px;
  }
`;

export const StyledActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  gap: 10px;
  margin-top: 15px;

  & button {
    width: 200px;
    gap: 5px;
  }

  @media only screen and (min-width: 650px) {
    flex-direction: row;
  }
`;

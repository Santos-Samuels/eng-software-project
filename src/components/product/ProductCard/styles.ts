import styled from "styled-components";

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  width: 250px;
  height: max-content;
  background: #ffffff;
  box-shadow: 0px 4px 9px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;

  & img {
    border-radius: 10px;
  }

  & p {
    font-size: 16px;
  }

  & div p {
    color: ${({ theme }) => theme.textColor};
    text-decoration: line-through;
  }

  & div h1 {
    font-size: 30px;
    color: ${({ theme }) => theme.primaryColor};
  }

  & span {
    font-size: 12px;
    color: ${({ theme }) => theme.textColor};
  }

  & section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

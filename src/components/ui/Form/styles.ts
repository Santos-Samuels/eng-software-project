import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 350px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 50px;

  & h1 {
    font-weight: normal;
    font-size: 26px;
  }

  & button {
    width: 100%;
    margin-top: 15px;
  }

  & a {
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryColor};
  }

  & a:hover b {
    border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
  }
`;

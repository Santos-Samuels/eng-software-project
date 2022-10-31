import styled from "styled-components";

export const StyledDiv = styled.div<{ isError?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  border-bottom: 1px solid
    ${({ isError, theme }) => (isError ? theme.errorColor : theme.textColor)};

  & input {
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.secondaryColor};
    border: none;
    padding: 8px 0;
  }

  & input:focus,
  & svg {
    outline: none;
    color: ${({ theme }) => theme.secondaryColor};
  }

  & input::placeholder,
  & svg {
    color: ${({ isError, theme }) =>
      isError ? theme.errorColor : theme.textColor};
  }
`;

export const StyledArticle = styled.article<{ isError?: boolean }>`
  width: 100%;
  
  & div {
    border: 1px solid
    ${({ isError, theme }) => (isError ? theme.errorColor : theme.textColor)};
    color: ${({ isError, theme }) =>
      isError ? theme.errorColor : theme.textColor};
    padding: 6px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  & label {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 15px;
    cursor: pointer;
    font-weight: 400;
    font-size: 18px;
  }

  & input[type="file"] {
    display: none;
  }

  & input:focus,
  & svg {
    outline: none;
    color: ${({ theme }) => theme.secondaryColor};
  }

  & input::placeholder,
  & svg {
    color: ${({ isError, theme }) =>
      isError ? theme.errorColor : theme.textColor};
  }
`;

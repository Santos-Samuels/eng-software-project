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
    color: ${({ isError, theme }) =>
      isError ? theme.errorColor : theme.textColor};
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    border: 1px solid
      ${({ isError, theme }) => (isError ? theme.errorColor : theme.textColor)};
    font-weight: 400;
    font-size: 18px;
    color: ${({ isError, theme }) =>
      isError ? theme.errorColor : theme.textColor};
    padding: 6px;
    border-radius: 5px;
    cursor: pointer;
  }

  & label {
    cursor: pointer;
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

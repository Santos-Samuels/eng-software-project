import styled from "styled-components";

export const StyledDiv = styled.div<{ isError?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  border-bottom: 1px solid ${({ isError, theme }) => (isError ? theme.errorColor : theme.textColor)};

  & input {
    font-weight: 400;
  font-size: 18px;
  color: ${({ isError, theme }) => isError ? theme.errorColor : theme.textColor};
  border: none;
  padding: 8px 0;
  }

  & input:focus {
    outline: none;
  }

  & input::placeholder,
  & svg {
    color: ${({ isError, theme }) => isError ? theme.errorColor : theme.textColor};
  }
`;

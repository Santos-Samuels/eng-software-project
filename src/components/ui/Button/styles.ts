import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 10px;
  padding: 15px;
  border: 1px solid grey;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.highlightColor};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.primaryColor};
  transition: all ease 0.3s;

  &:hover {
    box-shadow: 0 0 8px ${({ theme }) => theme.primaryColor};
  }
`;

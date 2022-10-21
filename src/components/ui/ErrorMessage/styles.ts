import styled from "styled-components";

export const StyledP = styled.p<{withBackgroung?: boolean}>`
  font-size: 11px;
  color: ${({ theme, withBackgroung }) => withBackgroung ? theme.highlightColor : theme.errorColor};
  background-color: ${({ theme, withBackgroung }) => withBackgroung ? theme.errorColor : ""};
  border-radius: 5px;
  padding: 2px 5px;
`;

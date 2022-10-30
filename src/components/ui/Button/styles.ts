import styled from "styled-components";

export const StyledButton = styled.button<{
  feature: "FILL" | "OUTLINE" | "LINK";
}>`
  border-radius: 10px;
  padding: ${({ feature }) => feature === "FILL" ? "16px" : "10px"};
  border:${({ feature, theme }) => feature === "OUTLINE" ? `1px solid ${theme.secondaryColor}` : "none"};
  cursor: pointer;
  font-size: 16px;
  ${({feature}) => feature !== "LINK" && "font-weight: bold;"}
  color: ${({ feature, theme }) => feature === "FILL" ? theme.highlightColor : theme.secondaryColor};
  text-transform: ${({ feature }) => feature === "FILL" ? "uppercase" : "capitalize"};
  background-color: ${({ feature, theme }) => feature === "FILL" ? theme.primaryColor : theme.highlightColor};
  transition: all ease 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    ${({ feature, theme }) => feature === "FILL" && `box-shadow: 0 0 8px ${theme.primaryColor};`}
  }

  &:disabled {
    opacity: 0.7;
  }
`;

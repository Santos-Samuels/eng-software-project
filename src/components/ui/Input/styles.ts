import styled from "styled-components";

export const StyledInput = styled.input<{ isError?: boolean }>`
  border-radius: 10px;
  padding: 10px;
  border: 1px solid ${(props) => (props.isError ? "#c50707" : "grey")};
  background-color: ${(props) => (props.isError ? "#c5070714" : "")};
`;

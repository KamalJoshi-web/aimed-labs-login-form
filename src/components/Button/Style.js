import styled from "styled-components";
import Button from "./Button";

export const StyledButton = styled(Button)`
  background-color: #1575a7;
  color: white;
  width: 100%;
  max-width: 538px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  &:hover {
    opacity: 80%;
  }
`;

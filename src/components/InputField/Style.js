import styled from "styled-components";
import InputField from "./InputField";

export const StyledInputField = styled(InputField)`
  display: flex;
  flex-direction: ${(props) => props.direction};
  width: ${(props) => props.width};
  gap: 10px;

  & label {
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    color: ${(props) => props.labelcolor};
  }

  & input {
    padding: 10px;
    max-width: 824px;
    border-radius: 8px;
    border: 1px solid #04072f66;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    outline: ${(props) => props.outline};
  }

  & p {
    color: red;
    margin-top: -8px;
  }
`;

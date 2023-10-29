import styled from "styled-components";
import Text from "./Text";

export const StyledText = styled(Text)`
  text-decoration: ${(props) => props.textDecoration};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  text-transform: capitalize;
  cursor: pointer;
`;

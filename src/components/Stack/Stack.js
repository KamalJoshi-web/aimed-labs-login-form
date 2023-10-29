import styled from "styled-components";

export const Stack = styled.div`
  display: flex;
  width: 100%;
  max-width: ${(props) => props.maxwidth};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  margin: auto;
  flex-wrap: wrap;
`;

import { styled } from "styled-components";
import { pxToRem } from "styles/converter";

export default styled.aside`
  width: ${pxToRem(350)};
  height: 100vh;
  padding: ${pxToRem(14)};
`;

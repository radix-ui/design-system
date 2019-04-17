import styled from "styled-components";
import { theme } from "../theme";
import {
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  alignItems,
  justifyContent,
  justifyItems,
  order
} from "styled-system";

import { Box } from "./Box";

export const Flex = styled(Box)`
  display: flex;
	${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${alignContent}
  ${alignItems}
  ${justifyContent}
  ${justifyItems}
  ${order}
`;

Flex.defaultProps = {
  theme
};

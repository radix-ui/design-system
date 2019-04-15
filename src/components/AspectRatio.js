import React from "react";
import styled from "styled-components";
import { space, color } from "styled-system";
import { theme } from "../theme";

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  ${space}
  ${color}
`;

const Inner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

export function AspectRatio({ ratio, children, ...props }) {
  const paddingBottom = 100 / ratio;
  return (
    <Wrapper {...props} style={{ paddingBottom: `${paddingBottom}%` }}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
}

AspectRatio.defaultProps = { ratio: 1 / 1, theme };

import React, { FC } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { color, ColorProps, space, SpaceProps, Theme } from "styled-system";
import { theme } from "../theme";

type WrapperProps = ColorProps & SpaceProps;

const Wrapper = styled.div<WrapperProps>`
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


export const AspectRatio:FC<any> = ({ ratio = 1 / 1, children, ...props }) => {
  const paddingBottom = 100 / ratio;
  return (
    <Wrapper {...props} style={{ paddingBottom: `${paddingBottom}%` }}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

AspectRatio.defaultProps = { theme };

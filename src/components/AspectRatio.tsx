import React, { FC } from 'react';
import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps, Theme } from 'styled-system';
import { StyledSystemProps } from '../types/StyledSystemProps';
import { theme } from '../theme';

type WrapperProps = StyledSystemProps<'div', ColorProps & SpaceProps>;

const Wrapper: FC<WrapperProps> = styled.div`
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

type AspectRatioProps = WrapperProps & {
  ratio?: number;
  theme?: Theme;
};

export const AspectRatio: FC<AspectRatioProps> = ({
  ratio = 1 / 1,
  children,
  ...props
}) => {
  const paddingBottom = 100 / ratio;
  return (
    <Wrapper {...props} style={{ paddingBottom: `${paddingBottom}%` }}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

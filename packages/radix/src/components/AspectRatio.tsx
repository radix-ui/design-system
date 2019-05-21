import React, { FC } from 'react';
import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps } from 'styled-system';

type WrapperProps = ColorProps & SpaceProps;

type AspectRatioProps = WrapperProps & {
  ratio?: '1:1' | '1:2' | '2:1' | '16:9' | '4:3';
};

export const AspectRatio: FC<AspectRatioProps> = ({
  ratio = '1:1',
  children,
  ...props
}) => {
  const [n1, n2] = ratio.split(':');
  const paddingBottom = 100 / (Number(n1) / Number(n2));
  return (
    // TODO: Fix color typings
    // @ts-ignore
    <Wrapper {...props} style={{ paddingBottom: `${paddingBottom}%` }}>
      <Inner>{children}</Inner>
    </Wrapper>
  );
};

const Wrapper = styled('div')(
  { position: 'relative', width: '100%' },
  space,
  color
);

const Inner = styled('div')({
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  width: '100%',
});

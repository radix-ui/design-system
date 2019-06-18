import React, { FC } from 'react';
import styled from 'styled-components';
import { compose } from 'styled-system';
import {
  backgroundColor,
  BackgroundColorProps,
  margin,
  MarginProps,
} from '../system';

type WrapperProps = BackgroundColorProps & MarginProps;
type AspectRatioProps = WrapperProps & {
  ratio?: '1:1' | '1:2' | '2:1' | '16:9' | '4:3';
};

const styleProps = compose(
  margin,
  backgroundColor
);

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
  styleProps
);

const Inner = styled('div')({
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  width: '100%',
});

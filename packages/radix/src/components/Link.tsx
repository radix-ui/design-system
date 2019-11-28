import React from 'react';
import css from '@styled-system/css';
import { Link as LinkPrimitive, LinkProps as LinkPrimitiveProps } from 'mdlz-prmtz';

type LinkProps = LinkPrimitiveProps & { to?: string; children?: React.ReactNode; as?: any };

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <LinkPrimitive {...props} ref={ref} css={css({ color: 'blue600' })} />
));

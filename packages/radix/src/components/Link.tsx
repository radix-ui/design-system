import React from 'react';
import css from '@styled-system/css';
import { Link as LinkPrimitive, LinkProps as LinkPrimitiveProps } from 'mdlz-prmtz';

type LinkProps = LinkPrimitiveProps & { to?: string; children?: React.ReactNode; as?: any };
type Ref = HTMLAnchorElement;

export const Link = React.forwardRef<Ref, LinkProps>((props, ref) => (
  <LinkPrimitive {...props} ref={ref} css={css({ color: 'blue' })} />
));

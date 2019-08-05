import React from 'react';
import { Link as LinkPrimitive, LinkProps as LinkPrimitiveProps } from 'mdlz-prmtz';

type LinkProps = LinkPrimitiveProps;

export const Link = (props: LinkProps) => <LinkPrimitive {...props} textColor="blue" />;

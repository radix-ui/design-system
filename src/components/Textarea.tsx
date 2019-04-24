import React, { FC, ComponentProps } from 'react';
import styled from 'styled-components';
import { Input, InputProps } from './Input';

export const BaseTextarea = styled(Input)`
  min-height: 80px;
`;

type TextaereaProps = InputProps & ComponentProps<'textarea'>;

export const Textarea: FC<TextaereaProps> = props => (
  <BaseTextarea {...props} />
);

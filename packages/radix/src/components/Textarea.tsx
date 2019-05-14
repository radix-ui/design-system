import { ComponentProps } from 'react';
import styled from '@emotion/styled';
import { Input, InputProps } from './Input';

type TextaereaProps = InputProps & ComponentProps<'textarea'>;

export const Textarea = styled(Input)<TextaereaProps>({
  minHeight: 80,
});

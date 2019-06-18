import styled from 'styled-components';
import css from '@styled-system/css';
import { ResponsiveValue } from 'styled-system';
import { margin, MarginProps } from '../system';
import { variant } from '../system';

type SizeProps = 'normal' | 'medium' | 'fluid';
type PipeProps = MarginProps & { variant?: ResponsiveValue<SizeProps> };

export const Pipe = styled.div<PipeProps>(
  css({
    backgroundColor: 'grays.2',
    width: '1px',
  }),
  variant({
    variant: {
      normal: {
        height: 3,
      },
      medium: {
        height: 7,
      },
      fluid: {
        height: '100%',
      },
    },
  }),
  margin
);

Pipe.defaultProps = { variant: 'normal' };

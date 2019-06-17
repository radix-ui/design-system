import styled from 'styled-components';
import css from '@styled-system/css';
import { space, SpaceProps, ResponsiveValue } from 'styled-system';
import { variant } from '../utils/variant';

type SizeProps = 'normal' | 'medium' | 'fluid';
type PipeProps = SpaceProps & { variant?: ResponsiveValue<SizeProps> };

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
  space
);

Pipe.defaultProps = { variant: 'normal' };

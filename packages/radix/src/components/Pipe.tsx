import styled from 'styled-components';
import css from '@styled-system/css';
import { space, SpaceProps } from 'styled-system';
import { get } from '../utils/get';

type SizeProps = 'small' | 'medium' | 'fluid';
type PipeProps = SpaceProps & { variant?: SizeProps | SizeProps[] };

export const Pipe = styled.div<PipeProps>(
  ({ variant }) =>
    css({
      backgroundColor: 'grays.2',
      height: get({ medium: 7, fluid: '100%' }, variant, 3),
      width: '1px',
    }),

  space
);

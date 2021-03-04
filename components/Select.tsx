import { styled } from '../stitches.config';

export const Select = styled('select', {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  fontFamily: 'inherit',
  height: '$5',
  fontSize: '$1',
  boxShadow: 'inset 0 0 0 1px $colors$slate600',
  pl: '$1',
  borderRadius: '$2',
  color: '$hiContrast',
  outline: 'none',

  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
    zIndex: '1',
  },
});

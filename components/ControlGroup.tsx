import { styled } from '../stitches.config';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Select } from '../components/Select';

export const ControlGroup = styled('div', {
  display: 'flex',

  // Make sure ControlGroup and its children don't affect normal stacking order
  position: 'relative',
  zIndex: 0,

  [`& ${Button}`]: {
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$slate600, inset -1px 0 $colors$slate600, inset 0 -1px $colors$slate600',
    '&:hover': {
      boxShadow:
        '-1px 0 $colors$slate700, inset 0 1px $colors$slate700, inset -1px 0 $colors$slate700, inset 0 -1px $colors$slate700',
    },
    '&:focus': {
      zIndex: 1,
      boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
    },
    '&:first-child': {
      borderTopLeftRadius: '$2',
      borderBottomLeftRadius: '$2',
      boxShadow: 'inset 0 0 0 1px $colors$slate600',
      '&:hover': {
        boxShadow: 'inset 0 0 0 1px $colors$slate700',
      },
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
      },
    },
    '&:last-child': {
      borderTopRightRadius: '$2',
      borderBottomRightRadius: '$2',
      boxShadow:
        'inset 0 1px $colors$slate600, inset -1px 0 $colors$slate600, inset 0 -1px $colors$slate600',
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$slate700, 0 0 0 1px $colors$slate700',
      },
    },
  },
  [`& ${Input}`]: {
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$slate600, inset -1px 0 $colors$slate600, inset 0 -1px $colors$slate600',
    '&:focus': {
      zIndex: 1,
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
    },
    '&:first-child': {
      borderTopLeftRadius: '$2',
      borderBottomLeftRadius: '$2',
      boxShadow: 'inset 0 0 0 1px $colors$slate600',
      '&:focus': {
        boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
      },
    },
    '&:last-child': {
      borderTopRightRadius: '$2',
      borderBottomRightRadius: '$2',
      boxShadow:
        'inset 0 1px $colors$slate600, inset -1px 0 $colors$slate600, inset 0 -1px $colors$slate600',
      '&:focus': {
        boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
      },
    },
  },
  [`& ${Select}`]: {
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$slate600, inset -1px 0 $colors$slate600, inset 0 -1px $colors$slate600',
    '&:focus-within': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
    },
    '&:first-child': {
      borderTopLeftRadius: '$2',
      borderBottomLeftRadius: '$2',
      boxShadow: 'inset 0 0 0 1px $colors$slate600',
      '&:focus-within': {
        boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
      },
    },
    '&:last-child': {
      borderTopRightRadius: '$2',
      borderBottomRightRadius: '$2',
      boxShadow:
        'inset 0 1px $colors$slate600, inset -1px 0 $colors$slate600, inset 0 -1px $colors$slate600',
      '&:focus-within': {
        boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
      },
    },
  },
});

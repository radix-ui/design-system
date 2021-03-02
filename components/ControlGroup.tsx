import { styled } from '../stitches.config';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const ControlGroup = styled('div', {
  display: 'flex',

  // Make sure ControlGroup and its children don't affect normal stacking order
  position: 'relative',
  zIndex: 0,

  [`${Button}`]: {
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$gray600, inset -1px 0 $colors$gray600, inset 0 -1px $colors$gray600',
    '&:focus': {
      zIndex: 1,
      boxShadow: 'inset 0 0 0 1px $colors$gray700, 0 0 0 1px $colors$gray700',
    },
    '&:first-child': {
      borderTopLeftRadius: '$2',
      borderBottomLeftRadius: '$2',
      boxShadow: 'inset 0 0 0 1px $colors$gray600',
      '&:hover': {
        boxShadow: 'inset 0 0 0 1px $colors$gray700',
      },
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$gray700, 0 0 0 1px $colors$gray700',
      },
    },
    '&:last-child': {
      borderTopRightRadius: '$2',
      borderBottomRightRadius: '$2',
      boxShadow:
        'inset 0 1px $colors$gray600, inset -1px 0 $colors$gray600, inset 0 -1px $colors$gray600',
      '&:focus': {
        boxShadow: 'inset 0 0 0 1px $colors$gray700, 0 0 0 1px $colors$gray700',
      },
    },
    '&:hover': {
      boxShadow:
        '-1px 0 $colors$gray700, inset 0 1px $colors$gray700, inset -1px 0 $colors$gray700, inset 0 -1px $colors$gray700',
    },
  },
  [`${Input}`]: {
    borderRadius: 0,
    boxShadow:
      'inset 0 1px $colors$gray600, inset -1px 0 $colors$gray600, inset 0 -1px $colors$gray600',
    '&:focus': {
      zIndex: 1,
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
    },
    '&:first-child': {
      borderTopLeftRadius: '$2',
      borderBottomLeftRadius: '$2',
      boxShadow: 'inset 0 0 0 1px $colors$gray600',
      '&:focus': {
        boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
      },
    },
    '&:last-child': {
      borderTopRightRadius: '$2',
      borderBottomRightRadius: '$2',
      boxShadow:
        'inset 0 1px $colors$gray600, inset -1px 0 $colors$gray600, inset 0 -1px $colors$gray600',
      '&:focus': {
        boxShadow: 'inset 0px 0px 0px 1px $colors$blue700, 0px 0px 0px 1px $colors$blue700',
      },
    },
  },
});

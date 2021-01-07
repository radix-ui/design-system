import { StitchesProps, styled } from '../stitches.config';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export type ControlGroupProps = StitchesProps<typeof ControlGroup>;

export const ControlGroup = styled('div', {
  display: 'flex',

  // Make sure ControlGroup and its children don't affect normal stacking order
  position: 'relative',
  zIndex: 0,

  '& button': {
    borderRadius: 0,
    boxShadow: 'inset 0 1px $gray600, inset -1px 0 $gray600, inset 0 -1px $gray600',
    ':hover': {
      boxShadow:
        '-1px 0 $gray700, inset 0 1px $gray700, inset -1px 0 $gray700, inset 0 -1px $gray700',
    },
    ':focus': {
      zIndex: 1,
    },
    ':first-child': {
      borderTopLeftRadius: '$2',
      borderBottomLeftRadius: '$2',
      boxShadow: 'inset 0 0 0 1px $gray600',
      ':hover': {
        boxShadow: 'inset 0 0 0 1px $gray700',
      },
    },
    ':last-child': {
      borderTopRightRadius: '$2',
      borderBottomRightRadius: '$2',
      boxShadow: 'inset 0 1px $gray600, inset -1px 0 $gray600, inset 0 -1px $gray600',
    },
  },
  '& input': {
    borderRadius: 0,
    boxShadow: 'inset 0 1px $gray600, inset -1px 0 $gray600, inset 0 -1px $gray600',
    ':focus': {
      zIndex: 1,
    },
    ':first-child': {
      borderTopLeftRadius: '$2',
      borderBottomLeftRadius: '$2',
      boxShadow: 'inset 0 0 0 1px $gray600',
    },
    ':last-child': {
      borderTopRightRadius: '$2',
      borderBottomRightRadius: '$2',
      boxShadow: 'inset 0 1px $gray600, inset -1px 0 $gray600, inset 0 -1px $gray600',
    },
  },
});

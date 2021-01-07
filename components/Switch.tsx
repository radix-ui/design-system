import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import {
  Switch as SwitchPrimitive,
  SwitchProps as SwitchPrimitiveProps,
} from '@interop-ui/react-switch';

export type SwitchProps = SwitchPrimitiveProps &
  StitchesProps<typeof Track> &
  SwitchVariants;
export type SwitchVariants = StitchesVariants<typeof Track>;

const Thumb = styled('span', {
  position: 'absolute',
  left: 0,
  width: 13,
  height: 13,
  backgroundColor: 'white',
  borderRadius: '$round',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px;',
  transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  transform: 'translateX(1px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(11px)',
  },
});

const Track = styled('button', {
  width: '$5',
  height: '$3',
  backgroundColor: '$gray400',
  borderRadius: '$pill',
  position: 'relative',
  ':focus': {
    boxShadow: '0 0 0 2px $gray700',
  },
  '&[data-state="checked"]': {
    backgroundColor: '$blue800',
    ':focus': {
      boxShadow: '0 0 0 2px $blue700',
    },
  },

  variants: {
    size: {
      '2': {
        width: '$7',
        height: '$5',
        [`& ${Thumb}`]: {
          width: 21,
          height: 21,
          transform: 'translateX(2px)',
          '&[data-state="checked"]': {
            transform: 'translateX(22px)',
          },
        },
      }
    }
  }
});

export function Switch(props: SwitchProps) {
  return (
    <SwitchPrimitive as={Track} {...props}>
      <SwitchPrimitive.Thumb as={Thumb} />
    </SwitchPrimitive>
  );
}

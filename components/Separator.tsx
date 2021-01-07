import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import { Separator as SeparatorPrimitive } from '@interop-ui/react-separator';

export type SeparatorProps = StitchesProps<typeof Separator>;
export type SeparatorVariants = StitchesVariants<typeof Separator>;

export const Separator = styled(SeparatorPrimitive, {
  border: 'none',
  margin: 0,
  flexShrink: 0,
  backgroundColor: '$gray500',
  cursor: 'default',

  variants: {
    size: {
      '1': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$3',
        },
      
        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$3',
        },
      },
      '2': {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$7',
        },
      
        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$7',
        },
      },
    },
  },
});

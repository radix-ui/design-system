import React from 'react';
import { styled, StitchesProps, StitchesVariants } from '../stitches.config';
import {
  Avatar as AvatarPrimitive,
  AvatarProps as AvatarPrimitiveProps,
} from '@interop-ui/react-avatar';
import { Box } from './Box';
import { Status, StatusVariants } from './Status';

type StatusColors = Pick<StatusVariants, 'color'>;
export type AvatarProps = AvatarPrimitiveProps &
  StitchesProps<typeof StyledAvatar> & {
    alt?: string;
    src?: string;
    fallback?: React.ReactNode;
    status?: StatusColors['color'];
  };
export type AvatarVariants = StitchesVariants<typeof Avatar>;

export const StyledAvatar = styled(AvatarPrimitive, {
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  boxSizing: 'border-box',
  display: 'flex',
  position: 'relative',
  border: 'none',
  fontFamily: 'inherit',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  fontWeight: '500',
  color: '$hiContrast',

  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: '$round',
    boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)',
  },

  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3',
      },
      '2': {
        width: '$5',
        height: '$5',
      },
      '3': {
        width: '$6',
        height: '$6',
      },
      '4': {
        width: '$7',
        height: '$7',
      },
      '5': {
        width: '$8',
        height: '$8',
      },
      '6': {
        width: '$9',
        height: '$9',
      },
    },
    color: {
      hiContrast: {
        backgroundColor: '$hiContrast',
        color: '$loContrast',
      },
      gray: {
        backgroundColor: '$gray400',
      },
      red: {
        backgroundColor: '$red400',
      },
      crimson: {
        backgroundColor: '$crimson400',
      },
      pink: {
        backgroundColor: '$pink400',
      },
      purple: {
        backgroundColor: '$purple400',
      },
      violet: {
        backgroundColor: '$violet400',
      },
      indigo: {
        backgroundColor: '$indigo400',
      },
      blue: {
        backgroundColor: '$blue400',
      },
      turquoise: {
        backgroundColor: '$turquoise400',
      },
      teal: {
        backgroundColor: '$teal400',
      },
      green: {
        backgroundColor: '$green400',
      },
      lime: {
        backgroundColor: '$lime400',
      },
      yellow: {
        backgroundColor: '$yellow400',
      },
      orange: {
        backgroundColor: '$orange400',
      },
      gold: {
        backgroundColor: '$gold400',
      },
      brown: {
        backgroundColor: '$brown400',
      },
      bronze: {
        backgroundColor: '$bronze400',
      },
    },
    shape: {
      square: {
        borderRadius: '$2',
      },
      circle: {
        borderRadius: '50%',
      },
    },
    inactive: {
      true: {
        opacity: '.3',
      },
    },
    interactive: {
      true: {
        '::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          backgroundColor: 'rgba(0,0,0,.04)',
          opacity: '0',
          pointerEvents: 'none',
          transition: 'opacity 25ms linear',
        },
        ':hover': {
          '::after': {
            opacity: '1',
          },
        },
      },
    },
  },
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  display: 'flex',
  objectFit: 'cover',
  boxSizing: 'border-box',
  height: '100%',
  width: '100%',
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: 'uppercase',

  variants: {
    size: {
      '1': {
        fontSize: '10px',
        lineHeight: '15px',
      },
      '2': {
        fontSize: '$3',
      },
      '3': {
        fontSize: '$6',
      },
      '4': {
        fontSize: '$7',
      },
      '5': {
        fontSize: '$8',
      },
      '6': {
        fontSize: '$9',
      },
    },
  },
});

export const AvatarNestedItem = styled('div', {
  boxShadow: '0 0 0 2px $loContrast',
  borderRadius: '50%',
});

export const AvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  [`${AvatarNestedItem}:nth-child(n+2)`]: {
    marginRight: '-$1',
  },
});

export function Avatar({
  alt,
  src,
  fallback,
  size = '2',
  color = 'gray',
  shape = 'circle',
  css,
  status,
  ...props
}: AvatarProps) {
  return (
    <Box
      css={{
        ...(css as any),
        position: 'relative',
        height: 'fit-content',
        width: 'fit-content',
      }}
    >
      <StyledAvatar {...props} size={size} color={color} shape={shape}>
        <AvatarImage alt={alt} src={src} />
        <AvatarFallback size={size}>{fallback}</AvatarFallback>
      </StyledAvatar>
      {status && (
        <Box
          css={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            boxShadow: '0 0 0 3px $loContrast',
            borderRadius: '$round',
            mr: '-3px',
            mb: '-3px',
          }}
        >
          <Status size={size > 2 ? '2' : '1'} color={status} />
        </Box>
      )}
    </Box>
  );
}

import React from 'react';
import { styled, css } from '../stitches.config';
import {
  Tooltip as TooltipPrimitive,
  TooltipProps as TooltipPrimitiveProps,
  TooltipPopperProps,
} from '@interop-ui/react-tooltip';
import { Box } from './Box';
import { Text } from './Text';

export type TooltipProps = TooltipPrimitiveProps &
  TooltipPopperProps & {
    children: React.ReactElement;
    content: React.ReactNode;
    multiline?: boolean;
  };

const Popper = styled(TooltipPrimitive.Popper, {});

const Content = styled(TooltipPrimitive.Content, {
  backgroundColor: '$transparentExtreme',
  borderRadius: '$1',
  padding: '$1 $2',

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7
      },
    },
  },
});

export function Tooltip({
  children,
  content,
  isOpen,
  defaultIsOpen,
  onIsOpenChange,
  multiline,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive isOpen={isOpen} defaultIsOpen={defaultIsOpen} onIsOpenChange={onIsOpenChange}>
      <TooltipPrimitive.Trigger
        as={React.forwardRef((props, forwardedRef) =>
          React.cloneElement(children, { ...props, ref: forwardedRef })
        )}
      />
      <Popper side="top" align="center" {...props}>
        <Content multiline={multiline}>
          <Text
            size="2"
            as="p"
            css={{
              color: '$loContrast',
              lineHeight: multiline ? '1.5' : undefined,
            }}
          >
            {content}
          </Text>
        </Content>

        <Box css={{ color: '$transparentExtreme' }}>
          <TooltipPrimitive.Arrow
            offset={5}
            width={11}
            height={5}
            style={{
              fill: 'currentColor',
            }}
          />
        </Box>
      </Popper>
    </TooltipPrimitive>
  );
}

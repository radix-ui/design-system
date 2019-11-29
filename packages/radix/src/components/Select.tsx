import React, { ComponentProps, FC } from 'react';
import themeGet from '@styled-system/theme-get';
import pick from 'lodash.pick';
import omit from 'lodash.omit';
import styled from 'styled-components';
import { CaretSortIcon } from '@modulz/radix-icons';
import css from '@styled-system/css';
import {
  margin,
  MarginProps,
  width,
  WidthProps,
  variant,
  compose,
  Prop,
} from '@modulz/radix-system';

type Variants = 'normal' | 'ghost';
type SizeProps = 0 | 1;
type SelectProps = ComponentProps<'select'> &
  WrapperProps & {
    variant?: Prop<Variants>;
    size?: Prop<SizeProps>;
  };

const marginPropNames = margin.propNames;
const widthPropNames = width.propNames;

export const Select: FC<SelectProps> = ({ children, value, onChange, variant, size, ...props }) => {
  const systemProps = pick(props, marginPropNames, widthPropNames);
  const inputPtops = omit(props, marginPropNames, widthPropNames);

  return (
    <Wrapper {...systemProps}>
      <StyledSelect {...inputPtops} value={value} onChange={onChange} variant={variant} size={size}>
        {children}
      </StyledSelect>
      <IconWrapper size={size}>
        <CaretSortIcon size="15" />
      </IconWrapper>
    </Wrapper>
  );
};

Select.defaultProps = { variant: 'normal', size: 0 };

const ICON_SIZE = 15;

type WrapperProps = MarginProps & WidthProps;
const styleProps = compose(
  width,
  margin
);

const Wrapper = styled('div')<WrapperProps>({ position: 'relative' }, styleProps);

const StyledSelect = styled('select')<SelectProps>(
  props =>
    css({
      appearance: 'none',
      backgroundColor: 'gray100',
      fontFamily: 'normal',
      paddingY: 0,
      outline: 'none',
      width: '100%',
      borderRadius: 1,
      border: '1px solid',
      borderColor: 'gray300',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      '&:focus': {
        borderColor: 'blue500',
        boxShadow: `0 0 0 1px ${themeGet('colors.blue500')(props)}`,
      },
      '&:disabled': {
        borderColor: 'gray300',
        color: 'gray500',
        cursor: 'not-allowed',
      },
    })(props),
  { lineHeight: 1 },
  variant({
    size: {
      0: { fontSize: 1, height: 5, paddingLeft: 1, paddingRight: 3 },
      1: {
        fontSize: 2,
        height: 6,
        paddingLeft: 2,
        paddingRight: 4,
      },
    },
  }),
  variant({
    variant: {
      normal: {
        color: 'gray800',
      },
      ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&:focus': {
          borderColor: 'blue500',
        },
      },
    },
  })
);

type IconWrapperProps = { size?: Prop<SizeProps> };

const IconWrapper = styled('div')<IconWrapperProps>(props =>
  css({
    position: 'absolute',
    top: 0,
    right: props.size === 0 ? '1px' : '5px',
    width: `${ICON_SIZE}px`,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    [`${StyledSelect}:disabled + &`]: {
      color: 'gray500',
    },
  })(props)
);

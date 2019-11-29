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
type SelectProps = ComponentProps<'select'> &
  WrapperProps & {
    variant?: Prop<Variants>;
  };

const marginPropNames = margin.propNames;
const widthPropNames = width.propNames;

export const Select: FC<SelectProps> = ({ children, value, onChange, variant, ...props }) => {
  const systemProps = pick(props, marginPropNames, widthPropNames);
  const inputPtops = omit(props, marginPropNames, widthPropNames);

  return (
    <Wrapper {...systemProps}>
      <StyledSelect {...inputPtops} value={value} onChange={onChange} variant={variant}>
        {children}
      </StyledSelect>
      <IconWrapper>
        <CaretSortIcon size="15" />
      </IconWrapper>
    </Wrapper>
  );
};

Select.defaultProps = { variant: 'normal' };

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
      height: 5,
      lineHeight: 1,
      fontFamily: 'normal',
      padding: 0,
      fontSize: 1,
      paddingLeft: 1,
      paddingRight: 3,
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

const IconWrapper = styled('div')(
  css({
    position: 'absolute',
    top: 0,
    right: '1px',
    width: `${ICON_SIZE}px`,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    [`${StyledSelect}:disabled + &`]: {
      color: 'gray500',
    },
  })
);

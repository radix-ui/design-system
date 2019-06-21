import React, { ComponentProps, FC } from 'react';
import pick from 'lodash.pick';
import omit from 'lodash.omit';
import styled from 'styled-components';
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

type Variants = 'normal' | 'fade';
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={ICON_SIZE}
          height={ICON_SIZE}
          viewBox="0 0 15 15"
          fill="none"
          stroke="currentColor"
          style={{
            display: 'block',
          }}
        >
          <path d="M14.5 5.5L12.5 3.5L10.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 9.5L12.5 11.5L10.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
  css({
    appearance: 'none',
    backgroundColor: 'transparent',
    height: 5,
    lineHeight: 1,
    fontFamily: 'normal',
    padding: 0,
    fontSize: 2,
    borderRadius: 0,
    paddingRight: 3,
    border: 'none',
    outline: 'none',
    width: '100%',
    borderBottom: '1px solid',
    borderColor: 'grays.3',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    '&:focus': {
      borderColor: 'blues.4',
      outline: 'none',
    },
    '&:disabled': {
      borderColor: 'grays.2',
      color: 'grays.4',
      cursor: 'not-allowed',
    },
  }),
  variant({
    variant: {
      normal: {
        color: 'grays.8',
      },
      fade: {
        color: 'grays.5',
      },
    },
  })
);

const IconWrapper = styled('div')(
  css({
    position: 'absolute',
    top: 0,
    right: 0,
    width: `${ICON_SIZE}px`,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    [`${StyledSelect}:disabled + &`]: {
      color: 'grays.4',
    },
  })
);

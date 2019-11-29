import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { margin, MarginProps } from '@modulz/radix-system';

type CheckboxProps = MarginProps & ComponentProps<'input'>;

const marginPropNames = margin.propNames;

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ children, ...props }, ref) => {
    const marginProps = pick(props, marginPropNames);
    const inputProps = omit(props, marginPropNames);

    return (
      <CheckboxWrapper {...marginProps} ref={ref}>
        <Input type="checkbox" {...inputProps} />
        <FakeCheckbox>
          <CheckedIcon
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
          >
            <path d="M11.5 3.5L6.5 11.5L3.5 8.5" strokeLinecap="round" strokeLinejoin="round" />
          </CheckedIcon>
        </FakeCheckbox>
        {children && <TextWrapper>{children}</TextWrapper>}
      </CheckboxWrapper>
    );
  }
);

const CheckboxWrapper = styled('label')<MarginProps>(
  {
    position: 'relative',
    display: 'inline-block',
  },
  margin
);

const Input = styled('input')({
  appearance: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  outline: 'none',
  margin: 0,
  opacity: 0,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
});

const TextWrapper = styled('span')(
  css({
    lineHeight: 6,
    fontFamily: 'normal',
    fontSize: 2,
    marginLeft: 1,
    marginRight: 3,
    userSelect: 'none',
    verticalAlign: 'middle',
  })
);

const FakeCheckbox = styled('div')(
  css({
    width: 3,
    height: 3,
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'gray400',
    display: 'inline-flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'transparent',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    [`${Input}:hover + &`]: {
      borderColor: 'gray500',
    },
    [`${Input}:focus + &`]: {
      borderColor: 'blue600',
    },
    [`${Input}:checked + &`]: {
      backgroundColor: 'blue600',
      borderColor: 'blue600',
      color: 'white',
    },
  })
);

const CheckedIcon = styled('svg')({ display: 'block' });

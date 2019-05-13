import React, { ComponentProps, FC } from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { space, SpaceProps, width, WidthProps } from 'styled-system';
import pick from 'lodash.pick';

type SelectProps = ComponentProps<'select'> & WrapperProps;

// TODO: Styled System is missing some spacing props in `propTypes`
// https://github.com/styled-system/styled-system/issues/466
const spacePropNames = [
  ...Object.keys(space.propTypes || {}),
  'mx',
  'my',
  'px',
  'py',
];

const widthPropNames = Object.keys(width.propTypes || {});

export const Select: FC<SelectProps> = ({
  children,
  value,
  onChange,
  ...props
}) => {
  const systemProps = pick(props, spacePropNames, widthPropNames);

  return (
    <Wrapper {...systemProps}>
      <StyledSelect value={value} onChange={onChange}>
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
          <path
            d="M14.5 5.5L12.5 3.5L10.5 5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 9.5L12.5 11.5L10.5 9.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconWrapper>
    </Wrapper>
  );
};

const ICON_SIZE = 15;

type WrapperProps = SpaceProps & WidthProps;

const Wrapper = styled('div')<WrapperProps>(
  { position: 'relative' },
  width,
  space
);

const StyledSelect = styled('select')(
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
    '-webkitTapHighlightColor': 'rgba(0, 0, 0, 0)',
    '&:focus': {
      borderColor: 'blues.4',
    },
  })
);

const IconWrapper = styled('div')({
  position: 'absolute',
  top: 0,
  right: 0,
  width: `${ICON_SIZE}px`,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

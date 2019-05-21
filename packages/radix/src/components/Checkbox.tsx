import React, { FC, ComponentProps } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { space, SpaceProps } from 'styled-system';

type CheckboxProps = SpaceProps & ComponentProps<'input'>;

// TODO: Styled System is missing some spacing props in `propTypes`
// https://github.com/styled-system/styled-system/issues/466
const spacePropNames = [
  ...Object.keys(space.propTypes || {}),
  'mx',
  'my',
  'px',
  'py',
];

export const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => {
  const spaceProps = pick(props, spacePropNames);
  const inputProps = omit(props, spacePropNames);

  return (
    <CheckboxWrapper {...spaceProps}>
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
          <path
            d="M11.5 3.5L6.5 11.5L3.5 8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </CheckedIcon>
      </FakeCheckbox>
      {children && <TextWrapper>{children}</TextWrapper>}
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled('label')<SpaceProps>(
  {
    position: 'relative',
    display: 'inline-block',
  },
  space
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

const TextWrapper = styled('span')(() =>
  css({
    lineHeight: 5,
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
    borderColor: 'grays.3',
    display: 'inline-flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'transparent',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    [`${Input}:hover + &`]: {
      borderColor: 'grays.4',
    },
    [`${Input}:focus + &`]: {
      borderColor: 'blues.4',
    },
    [`${Input}:checked + &`]: {
      backgroundColor: 'blues.4',
      borderColor: 'blues.4',
      color: 'white',
    },
  })
);

const CheckedIcon = styled('svg')({ display: 'block' });

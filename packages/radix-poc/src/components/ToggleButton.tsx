import React, {
  ReactElement,
  ChangeEventHandler,
  FC,
  forwardRef,
  ComponentPropsWithRef,
} from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { themeGet } from 'styled-system';
import { Flex } from './Flex';

type ToggleButtonGroupProps = {
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children: ReactElement<ToggleButtonProps>[];
};

export const ToggleButtonGroup: FC<ToggleButtonGroupProps> = ({
  children,
  value,
  onChange,
  name,
  ...props
}) => {
  const isControlled = Boolean(value);

  return (
    <Flex {...props}>
      {React.Children.map(children, (child: ReactElement<ToggleButtonProps>) =>
        React.cloneElement(child, {
          name,
          onChange,
          ...(isControlled ? { checked: value === child.props.value } : {}),
        })
      )}
    </Flex>
  );
};

type Ref = HTMLInputElement;
type ToggleButtonProps = ComponentPropsWithRef<'input'>;

export const ToggleButton: FC<ToggleButtonProps> = forwardRef<
  Ref,
  ToggleButtonProps
>((props, ref) => {
  const { children, ...inputProps } = props;
  return (
    <Wrapper>
      <Radio {...inputProps} type="radio" ref={ref} />
      {children && <FakeRadio>{children}</FakeRadio>}
    </Wrapper>
  );
});

const Wrapper = styled('label')({
  display: 'inline-flex',
  position: 'relative',
  flexBasis: 0,
  flexGrow: 1,
  '-webkitTapHighlightColor': 'rgba(0, 0, 0, 0)',
  '& + &': {
    marginLeft: -1,
  },
  '&:hover': {
    zIndex: 2,
  },
});

const Radio = styled('input')({
  position: 'absolute',
  opacity: 0,
  zIndex: 0,
});

const FakeRadio = styled('span')(props =>
  css({
    height: 5,
    width: '100%',
    minWidth: 5,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'medium',
    fontWeight: 500,
    fontSize: 2,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    border: '1px solid',
    borderColor: 'grays.3',
    color: 'grays.5',
    [`${Wrapper}:first-child &`]: {
      borderTopLeftRadius: themeGet('radii.1')(props),
      borderBottomLeftRadius: themeGet('radii.1')(props),
    },
    [`${Wrapper}:last-child &`]: {
      borderTopRightRadius: themeGet('radii.1')(props),
      borderBottomRightRadius: themeGet('radii.1')(props),
    },
    [`${Radio}:checked + &`]: {
      backgroundColor: 'blues.0',
      borderColor: 'blues.2',
      color: 'blues.5',
      zIndex: 1,
    },
    '&:hover': {
      borderColor: 'grays.4',
      zIndex: 1,
    },
  })
);

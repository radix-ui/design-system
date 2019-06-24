import React, {
  ReactElement,
  ChangeEventHandler,
  FC,
  forwardRef,
  ComponentPropsWithRef,
} from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import pick from 'lodash.pick';
import { space, SpaceProps, themeGet } from 'styled-system';
import { Flex } from './Flex';
import { get } from '../utils/get';

type VariantProps = { variant?: 'fade' };

type ToggleButtonGroupProps = SpaceProps & {
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children: ReactElement<ToggleButtonProps>[];
} & VariantProps;

// TODO: Styled System is missing some spacing props in `propTypes`
// https://github.com/styled-system/styled-system/issues/466
const spacePropNames = [
  ...Object.keys(space.propTypes || {}),
  'mx',
  'my',
  'px',
  'py',
];

export const ToggleButtonGroup: FC<ToggleButtonGroupProps> = ({
  children,
  value,
  onChange,
  name,
  variant,
  ...props
}) => {
  const isControlled = value !== undefined;
  const systemProps = pick(props, spacePropNames);

  return (
    <Flex width="100%" {...systemProps}>
      {React.Children.map(children, (child: ReactElement<ToggleButtonProps>) =>
        React.cloneElement(child, {
          name,
          ...(isControlled ? { onChange } : {}),
          ...(isControlled ? { checked: value === child.props.value } : {}),
          variant,
        })
      )}
    </Flex>
  );
};

type Ref = HTMLInputElement;
type ToggleButtonProps = ComponentPropsWithRef<'input'> & VariantProps;

export const ToggleButton: FC<ToggleButtonProps> = forwardRef<
  Ref,
  ToggleButtonProps
>((props, ref) => {
  const { children, variant, ...inputProps } = props;

  return (
    <Wrapper>
      <Radio {...inputProps} type="radio" ref={ref} />
      {children && <FakeRadio variant={variant}>{children}</FakeRadio>}
    </Wrapper>
  );
});

const Wrapper = styled('label')({
  display: 'inline-flex',
  position: 'relative',
  flexBasis: 0,
  flexGrow: 1,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
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

const FakeRadio = styled('span')<ToggleButtonProps>(({ variant, ...props }) =>
  css({
    height: 5,
    width: '100%',
    minWidth: 5,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'normal',
    fontWeight: 500,
    fontSize: 2,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    border: '1px solid',
    borderColor: 'grays.3',
    color: 'grays.5',
    userSelect: 'none',
    [`${Wrapper}:first-child &`]: {
      borderTopLeftRadius: themeGet('radii.1')(props),
      borderBottomLeftRadius: themeGet('radii.1')(props),
    },
    [`${Wrapper}:last-child &`]: {
      borderTopRightRadius: themeGet('radii.1')(props),
      borderBottomRightRadius: themeGet('radii.1')(props),
    },
    [`${Wrapper}:hover &`]: {
      borderColor: 'grays.4',
      zIndex: 1,
    },
    [`${Radio}:checked + &`]: {
      backgroundColor: get({ fade: 'grays.1' }, variant, 'blues.0'),
      borderColor: get({ fade: 'grays.4' }, variant, 'blues.2'),
      color: get({ fade: 'grays.5' }, variant, 'blues.5'),
      zIndex: 1,
    },
  })
);

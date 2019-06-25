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
import themeGet from '@styled-system/theme-get';
import { margin, MarginProps, variant, Prop } from '@modulz/radix-system';
import { Flex } from './Flex';

type Variants = 'normal' | 'fade';
type VariantProps = { variant?: Prop<Variants> };
type ToggleButtonGroupProps = MarginProps & {
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children: ReactElement<ToggleButtonProps>[];
} & VariantProps;

const marginPropNames = margin.propNames;

export const ToggleButtonGroup: FC<ToggleButtonGroupProps> = ({
  children,
  value,
  onChange,
  name,
  variant,
  ...props
}) => {
  const isControlled = value !== undefined;
  const systemProps = pick(props, marginPropNames);

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

export const ToggleButton: FC<ToggleButtonProps> = forwardRef<Ref, ToggleButtonProps>(
  (props, ref) => {
    const { children, variant, ...inputProps } = props;

    return (
      <Wrapper>
        <Radio {...inputProps} type="radio" ref={ref} />
        {children && <FakeRadio variant={variant}>{children}</FakeRadio>}
      </Wrapper>
    );
  }
);

ToggleButton.defaultProps = { variant: 'normal' };

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

const FakeRadio = styled('span')<ToggleButtonProps>(
  props =>
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
        zIndex: 1,
      },
    }),
  variant({
    variant: {
      normal: {
        [`${Radio}:checked + &`]: {
          backgroundColor: 'blues.0',
          borderColor: 'blues.2',
          color: 'blues.5',
        },
      },
      fade: {
        [`${Radio}:checked + &`]: {
          backgroundColor: 'grays.1',
          borderColor: 'grays.4',
          color: 'grays.5',
        },
      },
    },
  })
);

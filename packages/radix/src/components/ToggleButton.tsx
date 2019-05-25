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

type ToggleButtonGroupProps = SpaceProps & {
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children: ReactElement<ToggleButtonProps>[];
  allowUncheck?: Boolean;
};

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
  allowUncheck,
  ...props
}) => {
  const isControlled = Boolean(value);
  const systemProps = pick(props, spacePropNames);

  if (allowUncheck && !onChange) {
    console.info(
      `ToggleButtonGroup: the "allowUncheck" prop only works when if it is a controlled component`
    );
  }

  return (
    <Flex width="100%" {...systemProps}>
      {React.Children.map(children, (child: ReactElement<ToggleButtonProps>) =>
        React.cloneElement(child, {
          name,
          onChange,
          // TODO: sort this mess out
          // a better way to allow deselect
          ...(onChange
            ? {
                onClick: (event: any) => {
                  if (onChange && allowUncheck) {
                    if (value === event.currentTarget.value) {
                      onChange({ target: { value: '' } } as any);
                    }
                  }
                },
              }
            : {}),
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
    userSelect: 'none',
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

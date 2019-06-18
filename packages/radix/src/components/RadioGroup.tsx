import React, {
  ComponentProps,
  ChangeEventHandler,
  ReactElement,
  forwardRef,
  ComponentPropsWithRef,
  FC,
} from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import { margin, MarginProps } from 'styled-system';

type RadioGroupProps = ComponentProps<'div'> & {
  name: string;
  value?: string;
  as?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  children: ReactElement<RadioProps>[];
};

export const RadioGroup = (props: RadioGroupProps) => {
  const { name, value, onChange, children, ...rootProps } = props;
  const isControlled = Boolean(value);

  return (
    <div {...rootProps}>
      {React.Children.map(children, (radio: ReactElement<RadioProps>) =>
        React.cloneElement(radio, {
          name,
          onChange,
          ...(isControlled ? { checked: value === radio.props.value } : {}),
        })
      )}
    </div>
  );
};

// @ts-ignore TODO:
const marginPropNames = margin.propNames;

type Ref = HTMLInputElement;
type RadioProps = MarginProps & ComponentPropsWithRef<'input'>;

export const Radio: FC<RadioProps> = forwardRef<Ref, RadioProps>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    const systemProps = pick(otherProps, marginPropNames);
    const inputProps = omit(otherProps, marginPropNames);

    return (
      <RadioWrapper {...systemProps}>
        <Input {...inputProps} type="radio" ref={ref} />
        <FakeRadio />
        {children && <TextWrapper>{children}</TextWrapper>}
      </RadioWrapper>
    );
  }
);

const RadioWrapper = styled('label')<MarginProps>(
  { position: 'relative' },
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
    lineHeight: 5,
    fontFamily: 'normal',
    fontSize: 2,
    marginLeft: 1,
    marginRight: 3,
    userSelect: 'none',
    verticalAlign: 'middle',
  })
);

const FakeRadio = styled('div')(
  css({
    width: 4,
    height: 4,
    color: 'transparent',
    borderRadius: '50%',
    border: '1px solid',
    borderColor: 'grays.3',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
      content: `''`,
      width: 2,
      height: 2,
      color: 'inherit',
      borderRadius: 'inherit',
      backgroundColor: 'currentColor',
    },
    [`${Input}:checked + &`]: {
      color: 'blues.4',
    },
    [`${Input}:hover + &`]: {
      borderColor: 'grays.4',
    },
    [`${Input}:focus + &`]: {
      borderColor: 'blues.4',
    },
  })
);

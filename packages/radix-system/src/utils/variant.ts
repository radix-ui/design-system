import { get, createParser } from '@styled-system/core';
import css from '@styled-system/css';

export const variant = (config: any) => (props: any) => {
  const prop = Object.keys(config)[0];
  // @ts-ignore
  const getValue = (n, scale) => get(scale, n);
  getValue.defaults = config[prop];
  return css(
    createParser({
      [prop]: getValue,
    })(props)
  ) as any;
};

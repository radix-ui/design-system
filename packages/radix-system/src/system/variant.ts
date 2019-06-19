// @ts-ignore
import { get, createParser } from 'styled-system';
import css from '@styled-system/css';

// @ts-ignore
export const variant = config => props => {
  const prop = Object.keys(config)[0];
  // @ts-ignore
  const getValue = (n, scale) => get(scale, n);
  getValue.defaults = config[prop];
  return css(
    createParser({
      [prop]: getValue,
    })(props)
  );
};

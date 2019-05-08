import { get, ObjectOrArray, StylesProps } from 'styled-system';

export function getPropsFromScale(
  scale: ObjectOrArray<number | string>,
  value: Array<string | number> | string | number
): any {
  if (Array.isArray(value)) {
    return value.map(p => getPropsFromScale(scale, p));
  }
  return get(scale, value);
}

export function bundlez(
  value?: Array<string | number> | string | number,
  ...systemProps: Array<{
    prop: string;
    scale: ObjectOrArray<number | string>;
  }>
) {
  if (value === null || value === undefined) {
    console.warn('You must provide a value argument.');
    return;
  }
  return systemProps.reduce((acc, curr) => {
    const { prop, scale } = curr;
    return { ...acc, [prop]: getPropsFromScale(scale, value) };
  }, {});
}

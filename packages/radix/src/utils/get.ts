import { ObjectOrArray, ResponsiveValue, themeGet } from 'styled-system';

export function get(
  scale: ObjectOrArray<number | string>,
  value?: ResponsiveValue<string | number | null>,
  fallback?: string | number
): any {
  if (Array.isArray(value)) {
    // @ts-ignore
    // fix typings
    return value.map(p => get(scale, p, fallback));
  }
  // @ts-ignore
  // fix typings
  return themeGet(value, fallback)({ theme: scale });
}

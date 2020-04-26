import { colors } from '../theme';

export const shadowColors = {
  gray: colors.gray500,
  grayLight: colors.gray400,
  grayVLight: colors.gray300,
  blue: colors.blue500,
  blueLight: colors.blue400,
  green: colors.green500,
  greenLight: colors.green400,
  red: colors.red500,
  redLight: colors.red400,
};
type ShadowColors = Record<keyof typeof shadowColors, string>;

export const boxShadowPlacement = `inset 0 0 0 1px`;
export const fatShadowProps = `inset 0 0 0 2px`;

export const shadow = new Proxy(shadowColors, {
  get(target: Object, prop: string) {
    // ts does not infer types correctly for Proxies
    // @ts-ignore
    return `${boxShadowPlacement} ${target[prop]}`;
  },
}) as ShadowColors;

export const fatShadow = new Proxy(shadowColors, {
  get(target: Object, prop: string) {
    // ts does not infer types correctly for Proxies
    // @ts-ignore
    return `${fatShadowProps} ${target[prop]}`;
  },
}) as ShadowColors;

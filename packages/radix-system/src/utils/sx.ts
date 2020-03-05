import css, { SystemStyleObject } from '@styled-system/css';

export type SxProp = { sx?: SystemStyleObject; theme?: Object };

export const sx = ({ sx, theme }: SxProp) => css(sx)(theme);

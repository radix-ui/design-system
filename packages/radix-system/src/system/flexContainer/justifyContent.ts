import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface JustifyContentProps {
  justifyContent?: Prop<CSS.JustifyContentProperty>;
}

export const config: Config = { justifyContent: true };

export const justifyContent = system(config);

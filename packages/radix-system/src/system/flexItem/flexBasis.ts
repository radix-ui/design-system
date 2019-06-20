import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop, Length } from '../../utils/types';

export interface FlexBasisProps {
  flexBasis?: Prop<CSS.FlexBasisProperty<Length>>;
}

export const config: Config = { flexBasis: true };

export const flexBasis = system(config);

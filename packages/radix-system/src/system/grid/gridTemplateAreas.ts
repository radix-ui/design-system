import * as CSS from 'csstype';
import { system, Config } from '@styled-system/core';
import { Prop } from '../../utils/types';

export interface GridTemplateAreasProps {
  gridTemplateAreas?: Prop<CSS.GridTemplateAreasProperty>;
}

export const config: Config = { gridTemplateAreas: true };

export const gridTemplateAreas = system(config);

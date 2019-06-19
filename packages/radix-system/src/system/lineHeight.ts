import { system, Config } from '@styled-system/core';
export { LineHeightProps } from '@styled-system/core';

const config: Config = {
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
};

export const lineHeight = system(config);

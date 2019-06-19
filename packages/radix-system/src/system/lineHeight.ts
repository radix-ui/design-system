import { system, Config } from 'styled-system';
export { LineHeightProps } from 'styled-system';

const config: Config = {
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
};

export const lineHeight = system(config);

import { system, Config } from 'styled-system';
export { MinHeightProps } from 'styled-system';

const config: Config = {
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
};

export const minHeight = system(config);

import { system, Config } from '@styled-system/core';
export { HeightProps } from '@styled-system/core';

const config: Config = {
  height: {
    property: 'height',
    scale: 'sizes',
  },
};

export const height = system(config);

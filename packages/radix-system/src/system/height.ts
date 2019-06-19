import { system, Config } from 'styled-system';
export { HeightProps } from 'styled-system';

const config: Config = {
  height: {
    property: 'height',
    scale: 'sizes',
  },
};

export const height = system(config);

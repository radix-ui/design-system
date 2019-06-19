import { system, Config } from 'styled-system';
export { MinWidthProps } from 'styled-system';

const config: Config = {
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
};

export const minWidth = system(config);

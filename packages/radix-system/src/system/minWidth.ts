import { system, Config } from '@styled-system/core';
export { MinWidthProps } from '@styled-system/core';

const config: Config = {
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
};

export const minWidth = system(config);

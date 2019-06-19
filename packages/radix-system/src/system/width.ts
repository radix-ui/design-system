import { system, Config } from '@styled-system/core';
export { WidthProps } from '@styled-system/core';

const config: Config = {
  width: {
    property: 'width',
    scale: 'sizes',
  },
};

export const width = system(config);

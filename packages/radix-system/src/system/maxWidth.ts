import { system, Config } from '@styled-system/core';
export { MaxWidthProps } from '@styled-system/core';

const config: Config = {
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
};

export const maxWidth = system(config);

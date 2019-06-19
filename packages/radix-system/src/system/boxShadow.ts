import { system, Config } from '@styled-system/core';
export { BoxShadowProps } from '@styled-system/core';

const config: Config = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
};

export const boxShadow = system(config);

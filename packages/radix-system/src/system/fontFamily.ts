import { system, Config } from '@styled-system/core';
export { FontFamilyProps } from '@styled-system/core';

const config: Config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
};

export const fontFamily = system(config);

import { system, Config } from 'styled-system';
export { FontFamilyProps } from 'styled-system';

const config: Config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
};

export const fontFamily = system(config);

import { system, Config } from 'styled-system';
export { BoxShadowProps } from 'styled-system';

const config: Config = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
};

export const boxShadow = system(config);

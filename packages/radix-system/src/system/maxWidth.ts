import { system, Config } from 'styled-system';
export { MaxWidthProps } from 'styled-system';

const config: Config = {
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
};

export const maxWidth = system(config);

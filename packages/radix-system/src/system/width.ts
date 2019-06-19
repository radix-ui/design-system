import { system, Config } from 'styled-system';
export { WidthProps } from 'styled-system';

const config: Config = {
  width: {
    property: 'width',
    scale: 'sizes',
  },
};

export const width = system(config);

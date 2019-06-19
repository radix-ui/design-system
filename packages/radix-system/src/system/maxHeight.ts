import { system, Config } from 'styled-system';
export { MaxHeightProps } from 'styled-system';

const config: Config = {
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
};

export const maxHeight = system(config);

import { system, Config } from '@styled-system/core';
export { FontSizeProps } from '@styled-system/core';

const config: Config = {
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
};

export const fontSize = system(config);

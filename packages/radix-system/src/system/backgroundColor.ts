import { system, Config } from '@styled-system/core';
export { BackgroundColorProps } from '@styled-system/core';

const config: Config = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
};
config.bg = config.backgroundColor;

export const backgroundColor = system(config);

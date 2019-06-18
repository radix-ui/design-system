import { system, Config } from 'styled-system';
export { BackgroundColorProps } from 'styled-system';

const config: Config = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
};
config.bg = config.backgroundColor;

export const backgroundColor = system(config);

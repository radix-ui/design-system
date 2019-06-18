import { system, Config } from 'styled-system';
export { FontSizeProps } from 'styled-system';

const config: Config = {
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
};

export const fontSize = system(config);

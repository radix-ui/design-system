import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadixProvider } from './RadixProvider';
import { theme } from './theme';
import { Box } from './components/Box';
import { themeGet } from 'styled-system';
import { Heading } from './components/Heading';

const colorfulTheme = {
  ...theme,
  colors: {
    purple: 'rgb(113, 20, 234)',
    brightPink: 'hotpink',
    orange: 'orange',
    turquoise: 'turquoise',
  },
  buttonSizes: {
    medium: {
      height: 50,
    },
  },
};

colorfulTheme.buttons = {
  benoit: {
    background: themeGet('colors.blue')({ theme: colorfulTheme }),
    color: themeGet('colors.blues.1')({ theme: colorfulTheme }),
  },
};

storiesOf('RadixProvider', module).add('default', () => (
  <RadixProvider theme={colorfulTheme}>
    <>
      <Box>
        <Heading color="orange">My colourful theme 🌈</Heading>
        <Heading as="h2" color="purple">
          My purple
        </Heading>
        <Heading as="h2" color="brightPink">
          My pink
        </Heading>
        <Heading as="h2" color="turquoise">
          My turquoise
        </Heading>
        <Heading as="h2" color="red">
          My red
        </Heading>
      </Box>
    </>
  </RadixProvider>
));

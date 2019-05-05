import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Input } from './Input';

const emailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    stroke="currentColor"
  >
    <path
      d="M5 8L12.5 13.5L20 8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M5 17L10.5 12.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 17L14.5 12.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M4.5 8V17C4.5 17.2761 4.72386 17.5 5 17.5H20C20.2761 17.5 20.5 17.2761 20.5 17V8C20.5 7.72386 20.2761 7.5 20 7.5H5C4.72386 7.5 4.5 7.72386 4.5 8Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
  >
    <circle cx="6.5" cy="6.5" r="4" />
    <path
      d="M9.85355 9.14645C9.65829 8.95118 9.34171 8.95118 9.14645 9.14645C8.95118 9.34171 8.95118 9.65829 9.14645 9.85355L9.85355 9.14645ZM12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L12.1464 12.8536ZM9.14645 9.85355L12.1464 12.8536L12.8536 12.1464L9.85355 9.14645L9.14645 9.85355Z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

storiesOf('Components|Input', module).add('default', () => (
  <Box maxWidth="300px">
    <Box mb="4">
      <Input placeholder="Your email" />
    </Box>

    <Box mb="4" position="relative">
      <Input placeholder="e.g. joe@example.com" type="email" paddingRight={5} />

      <Box
        position="absolute"
        height="100%"
        top={0}
        right={0}
        color="grays.5"
        style={{ pointerEvents: 'none' }}
      >
        <Flex alignItems="center" height="100%">
          {searchIcon}
        </Flex>
      </Box>
    </Box>

    <Box mb="4">
      <Input size="medium" placeholder="Your email" />
    </Box>

    <Box mb="4" position="relative">
      <Input
        size="medium"
        placeholder="e.g. joe@example.com"
        type="email"
        paddingLeft={6}
      />

      <Box
        position="absolute"
        height="100%"
        top={0}
        left={0}
        color="grays.5"
        style={{ pointerEvents: 'none' }}
      >
        <Flex alignItems="center" height="100%">
          {emailIcon}
        </Flex>
      </Box>
    </Box>

    <Box mb="4">
      <Input variant="ghost" placeholder="Ghost input" />
    </Box>

    <Box mb="4">
      <Input variant="ghost" size="medium" placeholder="Ghost input" />
    </Box>
  </Box>
));

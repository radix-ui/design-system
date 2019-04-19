import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { GhostButton } from './GhostButton';

const Bookmark = (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path
      d="M7.5 4.5V20.5L12.5 16.5L17.5 20.5V4.5H7.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7 6.5H15" />
  </svg>
);

const back = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 0L0 4L5 8"
      transform="translate(2.5 3.5)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M0 0H10" transform="translate(2.5 7.5)" strokeLinecap="round" />
  </svg>
);

storiesOf('Components|GhostButton', module).add('default', () => (
  <>
    <Box mb="4">
      <GhostButton mr="4">{back}</GhostButton>
      <GhostButton mr="4" disabled>
        {back}
      </GhostButton>
      <GhostButton mr="4" variant="active">
        {back}
      </GhostButton>
      <GhostButton mr="4" px={2}>
        <Box mr={1}>{back}</Box> Back
      </GhostButton>
      <GhostButton mr="4" px={2}>
        Back
      </GhostButton>
    </Box>

    <Box mb="4">
      <GhostButton size="medium" mr="4">
        {Bookmark}
      </GhostButton>
      <GhostButton size="medium" disabled mr="4">
        {Bookmark}
      </GhostButton>
      <GhostButton size="medium" variant="active" mr="4">
        {Bookmark}
      </GhostButton>
      <GhostButton size="medium" mr="4" px={2}>
        <Box mr={1}>{Bookmark}</Box> Bookmark
      </GhostButton>
      <GhostButton size="medium" mr="4" px={2}>
        Bookmark
      </GhostButton>
    </Box>
  </>
));

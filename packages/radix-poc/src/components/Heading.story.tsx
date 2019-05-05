import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Heading, RadixHeading } from './Heading';

storiesOf('Components|Heading', module).add('default', () => (
  <>
    <Box mb="4">
      <Heading fontSize="1" mb="3">
        Heading
      </Heading>
      <Heading fontSize="2" mb="3">
        Heading
      </Heading>
      <Heading fontSize="3" mb="3">
        Heading
      </Heading>
      <Heading fontSize="4" mb="3">
        Heading
      </Heading>
      <Heading fontSize="5" mb="3">
        Heading
      </Heading>
      <Heading fontSize="6" mb="3">
        Heading
      </Heading>
      <Heading fontSize="7" mb="3">
        Heading
      </Heading>
      <Heading fontSize="8" mb="3">
        Heading
      </Heading>
      <Heading fontSize="9" mb="3">
        Heading
      </Heading>
      <Heading fontSize="10" mb="3">
        Heading
      </Heading>
    </Box>
  </>
));

storiesOf('Components|Heading', module).add('RadixHeading', () => (
  <>
    <Box mb={4}>
      <RadixHeading size={0} mb="3">
        Heading
      </RadixHeading>
      <RadixHeading size={1} mb="3">
        Heading 2
      </RadixHeading>
      <RadixHeading size={2} mb="3">
        Heading 3
      </RadixHeading>
      <RadixHeading size={3} mb="3">
        Heading 4
      </RadixHeading>
      <RadixHeading size={4} mb="3">
        Heading 5
      </RadixHeading>
      <RadixHeading size={5} mb="3">
        Heading 6
      </RadixHeading>
    </Box>

    <Box mb={4}>
      <RadixHeading size={[1, 3, 5]} mb="3">
        Responsive
      </RadixHeading>
    </Box>

    {/* <Box mb={4}>
      <RadixHeading size="xxsmall" mb="3">
        Heading 1
      </RadixHeading>
      <RadixHeading size="xsmall" mb="3">
        Heading 2
      </RadixHeading>
      <RadixHeading size="small" mb="3">
        Heading 3
      </RadixHeading>
      <RadixHeading size="medium" mb="3">
        Heading 4
      </RadixHeading>
      <RadixHeading size="large" mb="3">
        Heading 5
      </RadixHeading>
      <RadixHeading size="xlarge" mb="3">
        Heading 6
      </RadixHeading>
    </Box>

    <Box mb={4}>
      <RadixHeading size={['xsmall', 'medium', 'large']} mb="3">
        Responsive
      </RadixHeading>
    </Box> */}
  </>
));

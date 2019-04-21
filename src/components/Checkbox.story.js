import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Text } from './Text';

import { Card } from './Card';

storiesOf('Components|Checkbox', module).add('default', () => (
  <>
    <Box mb="4">
      <Text as="p" mb={2}>
        Card style checkbox
      </Text>

      <Card p={0}>
        <Flex as="label" p={4} alignItems="center">
          <input type="checkbox" value="row" />
          Test
        </Flex>
      </Card>
    </Box>
  </>
));

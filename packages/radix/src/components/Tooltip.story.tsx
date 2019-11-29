import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { Tooltip } from './Tooltip';

storiesOf('Components|Tooltip', module).add('default', () => (
  <>
    <Tooltip label="Hello">
      <Button m={1} size={1}>
        Hover or focus me
      </Button>
    </Tooltip>
  </>
));

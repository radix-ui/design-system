import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex } from './Flex';
import { IconButton } from './IconButton';
import { DotsVerticalIcon, CrossIcon } from '@modulz/radix-icons';

import { Popover } from './Popover';

function PopoverExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  return (
    <Flex sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <IconButton type="button" ref={buttonRef} onClick={() => setIsOpen(true)}>
        <DotsVerticalIcon />
      </IconButton>

      <Popover targetRef={buttonRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Flex sx={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <IconButton type="button" onClick={() => setIsOpen(false)}>
            <CrossIcon />
          </IconButton>
        </Flex>
      </Popover>
    </Flex>
  );
}

storiesOf('Components|Popover', module).add('popover', () => <PopoverExample />);

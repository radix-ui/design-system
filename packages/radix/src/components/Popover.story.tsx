import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex } from './Flex';
import { GhostButton } from './GhostButton';
import { DotsVerticalIcon, CrossIcon } from '@modulz/radix-icons';

import { Popover } from './Popover';

function PopoverExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  return (
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <GhostButton type="button" ref={buttonRef} onClick={() => setIsOpen(true)}>
        <DotsVerticalIcon />
      </GhostButton>

      <Popover targetRef={buttonRef} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Flex width={100} height={100} alignItems="center" justifyContent="center">
          <GhostButton type="button" onClick={() => setIsOpen(false)}>
            <CrossIcon />
          </GhostButton>
        </Flex>
      </Popover>
    </div>
  );
}

storiesOf('Components|Popover', module).add('popover', () => <PopoverExample />);

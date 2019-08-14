import React from 'react';
import { storiesOf } from '@storybook/react';
import { Menu, MenuGroup, MenuItem } from './Menu';
import { Box } from './Box';
import { Text } from './Text';
import { GhostButton } from './GhostButton';
import { DotsVerticalIcon } from '@modulz/radix-icons';

import { Popover } from './Popover';

function PopoverExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  return (
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <GhostButton type="button" ref={buttonRef} onClick={() => setIsOpen(true)} size={1}>
        <DotsVerticalIcon />
      </GhostButton>

      <Popover targetRef={buttonRef} isOpen={isOpen} onDismiss={() => setIsOpen(false)}>
        <Box width={120}>
          <Menu>
            <MenuItem>
              <Text size={2}>Rename</Text>
            </MenuItem>
            <MenuItem>
              <Text size={2}>Edit</Text>
            </MenuItem>
            <MenuGroup>
              <MenuItem>
                <Text size={2}>Delete</Text>
              </MenuItem>
            </MenuGroup>
            <MenuItem>
              <Text size={2}>Copy</Text>
            </MenuItem>
          </Menu>
        </Box>
      </Popover>
    </div>
  );
}

storiesOf('Components|Popover', module).add('popover', () => <PopoverExample />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';
import {
  Menu,
  MenuItem,
  MenuItemCheckbox,
  MenuItemRadioGroup,
  MenuItemRadio,
  MenuItemLabel,
  MenuItemSeparator,
} from './Menu';
import { Button } from './Button';

function DropdownMenuStory() {
  const [isChecked, setIsChecked] = React.useState(true);
  const [value, setValue] = React.useState('2');

  return (
    <DropdownMenu
      button={<Button>Options</Button>}
      menu={
        <Menu>
          <MenuItem label="Simple item one" />
          <MenuItem label="Simple item two" />
          <MenuItem label="Simple item three" />
          <MenuItemSeparator />
          <MenuItemLabel>An item label</MenuItemLabel>
          <MenuItemSeparator />
          <MenuItemCheckbox label="Checkbox item" checked={isChecked} onChange={setIsChecked} />
          <MenuItemSeparator />
          <MenuItemRadioGroup value={value} onChange={setValue}>
            <MenuItemRadio value="1" label="Radio item one" />
            <MenuItemRadio value="2" label="Radio item two" />
            <MenuItemRadio value="3" label="Radio item three" />
          </MenuItemRadioGroup>
        </Menu>
      }
    />
  );
}

storiesOf('Components|DropdownMenu', module).add('default', () => <DropdownMenuStory />);

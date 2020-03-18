import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { RightClickMenu, RightClickable } from './RightClickMenu';
import {
  Menu,
  MenuItem,
  MenuItemCheckbox,
  MenuItemRadioGroup,
  MenuItemRadio,
  MenuItemLabel,
  MenuItemSeparator,
} from './Menu';

function RightClickMenuStory() {
  const [isChecked, setIsChecked] = React.useState(true);
  const [value, setValue] = React.useState('2');

  return (
    <RightClickMenu
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
    >
      <RightClickable>
        <Box sx={{ width: 9, height: 9, bg: 'blue600', borderRadius: 1 }} />
      </RightClickable>
    </RightClickMenu>
  );
}

storiesOf('Components|RightClickMenu', module).add('default', () => <RightClickMenuStory />);

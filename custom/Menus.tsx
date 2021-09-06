import React from 'react';
import { Box } from '../components/Box';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Flex } from '../components/Flex';
import { Heading } from '../components/Heading';

import {
  Menu,
  MenuContent,
  MenuCheckboxItem,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
} from '../components/Menu';

export function Menus() {
  return (
    <Section size="3">
      <Container size="2">
        <Heading>Menus</Heading>
        <Flex>
          <BasicMenu />
          <LabelledMenu />
          <CheckboxItemsMenu />
          <RadioItemsMenu />
        </Flex>
      </Container>
    </Section>
  );
}

const BasicMenu = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <Box ref={ref} css={{ width: 150, mt: 50, mb: 400 }} />
      <Menu open onOpenChange={() => {}}>
        <MenuContent>
          <MenuItem onSelect={() => console.log('undo')}>Undo</MenuItem>
          <MenuItem onSelect={() => console.log('redo')}>Redo</MenuItem>
          <MenuSeparator />
          <MenuItem disabled onSelect={() => console.log('cut')}>
            Cut
          </MenuItem>
          <MenuItem onSelect={() => console.log('copy')}>Copy</MenuItem>
          <MenuItem onSelect={() => console.log('paste')}>Paste</MenuItem>
        </MenuContent>
      </Menu>
    </>
  );
};

const LabelledMenu = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <Box ref={ref} css={{ width: 150, mt: 50, mb: 400 }} />
      <Menu open onOpenChange={() => {}}>
        <MenuContent>
          <MenuGroup>
            <MenuLabel>Arrange</MenuLabel>
            <MenuItem onSelect={() => console.log('Bring Forward')}>Bring Forward</MenuItem>
            <MenuItem onSelect={() => console.log('Bring to Front')}>Bring to Front</MenuItem>
            <MenuItem onSelect={() => console.log('Send Backward')}>Send Backward</MenuItem>
            <MenuItem onSelect={() => console.log('Send to Back')}>Send to Back</MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuLabel>Distribute</MenuLabel>
            <MenuItem onSelect={() => console.log('Horizontally')}>Horizontally</MenuItem>
            <MenuItem onSelect={() => console.log('Vertically')}>Vertically</MenuItem>
          </MenuGroup>
        </MenuContent>
      </Menu>
    </>
  );
};

const CheckboxItemsMenu = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const checkboxItems = [
    { label: 'Bold', state: React.useState(false) },
    { label: 'Italic', state: React.useState(true) },
    { label: 'Underline', state: React.useState(false) },
    { label: 'Strikethrough', state: React.useState(false), disabled: true },
  ];

  return (
    <>
      <Box css={{ width: 150, mt: 50, mb: 400 }} />
      <Menu open onOpenChange={() => {}}>
        <MenuContent>
          <MenuGroup>
            <MenuLabel>Cut</MenuLabel>
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
          </MenuGroup>
          <MenuSeparator />
          {checkboxItems.map(({ label, state: [checked, setChecked], disabled }) => (
            <MenuCheckboxItem
              key={label}
              checked={checked}
              onCheckedChange={setChecked}
              disabled={disabled}
            >
              {label}
            </MenuCheckboxItem>
          ))}
        </MenuContent>
      </Menu>
    </>
  );
};

const RadioItemsMenu = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const capsStyles = ['Normal', 'All Caps', 'Small Caps', 'Petite Caps', 'Titling Caps'];
  const numericStyles = ['Tabular', 'Proportional', 'Oldstyle'];
  const [caps, setCaps] = React.useState(capsStyles[0]);
  const [numeric, setNumeric] = React.useState(numericStyles[1]);

  return (
    <>
      <Box ref={ref} css={{ width: 150, mt: 50, mb: 400 }} />
      <Menu open modal>
        <MenuContent
          onCloseAutoFocus={(event) => event.preventDefault()}
          avoidCollisions={false}
          align="start"
        >
          <MenuRadioGroup value={caps} onValueChange={setCaps}>
            {capsStyles.map((style) => (
              <MenuRadioItem key={style} value={style}>
                {style}
              </MenuRadioItem>
            ))}
          </MenuRadioGroup>
          <MenuSeparator />
          <MenuRadioGroup value={numeric} onValueChange={setNumeric}>
            {numericStyles.map((style) => (
              <MenuRadioItem key={style} value={style}>
                {style}
              </MenuRadioItem>
            ))}
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    </>
  );
};

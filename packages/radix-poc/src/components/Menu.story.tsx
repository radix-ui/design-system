import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Grid } from './Grid';
import { Text } from './Text';
import { Menu, MenuItem, MenuGroup } from './Menu';
import RadixIcons from '@modulz/radix-icons';
// @ts-ignore
const Icon = RadixIcons.default as (typeof RadixIcons);

storiesOf('Components|Menu', module).add('default', () => (
  <Grid
    gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
    gridGap={4}
  >
    <Box mb="4">
      <Menu>
        <MenuItem>
          <Text fontSize={2}>Item one</Text>
        </MenuItem>
        <MenuItem>
          <Text fontSize={2}>Item two</Text>
        </MenuItem>
        <MenuItem>
          <Text fontSize={2}>Item three</Text>
        </MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Menu>
        <MenuItem>
          <ItemWithIcon>Item one</ItemWithIcon>
        </MenuItem>
        <MenuItem>
          <ItemWithIcon>Item two</ItemWithIcon>
        </MenuItem>
        <MenuItem>
          <ItemWithIcon>Item three</ItemWithIcon>
        </MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Menu>
        <MenuItem>
          <ItemWithIcon>Item one</ItemWithIcon>
        </MenuItem>
        <MenuGroup>
          <MenuItem>
            <ItemWithIcon>Item two</ItemWithIcon>
          </MenuItem>
          <MenuItem>
            <ItemWithIcon>Item three</ItemWithIcon>
          </MenuItem>
        </MenuGroup>
        <MenuItem>
          <ItemWithIcon>Item four</ItemWithIcon>
        </MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Menu>
        <MenuItem>
          <ItemWithIcon>Item one</ItemWithIcon>
        </MenuItem>
        <MenuItem active>
          <ItemWithIcon>Item two</ItemWithIcon>
        </MenuItem>
        <MenuItem>
          <ItemWithIcon>Item three</ItemWithIcon>
        </MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Menu>
        <MenuItem>
          <ItemWithIconAndDesc
            title="Archive"
            desc="This item will move to the Archives page"
          />
        </MenuItem>
        <MenuItem>
          <ItemWithIconAndDesc
            title="Archive"
            desc="This item will move to the Archives page"
          />
        </MenuItem>
        <MenuItem>
          <ItemWithIconAndDesc
            title="Archive"
            desc="This item will move to the Archives page"
          />
        </MenuItem>
      </Menu>
    </Box>
  </Grid>
));

// @ts-ignore
function ItemWithIcon({ children }) {
  return (
    <>
      <Box mr={4}>
        <Icon name="home" size="25" type="outline" />
      </Box>
      <Text fontSize={2}>{children}</Text>
    </>
  );
}

// @ts-ignore
function ItemWithIconAndDesc({ title, desc }) {
  return (
    <>
      <Box mb={1}>
        <Flex alignItems="center">
          <Box mr={4}>
            <Icon name="trash" size="25" type="outline" />
          </Box>
          <Text fontSize={3} fontWeight="bold">
            {title}
          </Text>
        </Flex>
        <Text as="p" fontSize={2} color="grays.5" ml={7}>
          {desc}
        </Text>
      </Box>
    </>
  );
}

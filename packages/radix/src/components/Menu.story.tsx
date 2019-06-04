import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Grid } from './Grid';
import { Menu, MenuGroup, MenuItem } from './Menu';
import { CircleIcon } from '@modulz/radix-icons';
import { Heading } from './Heading';
import { Text } from './Text';
import { Flex } from './Flex';
import { Hover } from './Hover';

function MenuStory() {
  const menuItemRef = useRef(null);

  function handleClick(e: React.MouseEvent) {
    console.log(menuItemRef.current);
  }

  return (
    <Grid
      gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      gridGap={4}
    >
      <Box mb="4">
        <Heading size={0} bold>
          Default
        </Heading>
        <Menu>
          <MenuItem ref={menuItemRef} onClick={handleClick}>
            <Text as="div">
              <Flex justifyContent="space-between">Item one</Flex>
            </Text>
          </MenuItem>
          <MenuItem ref={menuItemRef} onClick={handleClick} disabled>
            Item two
          </MenuItem>
          <MenuItem>Item three</MenuItem>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold>
          Menu with content on hover
        </Heading>
        <Menu>
          <Hover>
            {isHovered => (
              <MenuItem>
                Wrapped in `Hover`{' '}
                {isHovered && (
                  <Box position="absolute" right={0} mr={3}>
                    <CircleIcon />
                  </Box>
                )}
              </MenuItem>
            )}
          </Hover>
          <Hover>
            {isHovered => (
              <MenuItem variant="active">
                Wrapped in `Hover`{' '}
                {isHovered && (
                  <Box position="absolute" right={0} mr={3}>
                    <CircleIcon />
                  </Box>
                )}
              </MenuItem>
            )}
          </Hover>
          <Hover>
            {isHovered => (
              <MenuItem disabled>
                Wrapped in `Hover`{' '}
                {isHovered && (
                  <Box position="absolute" right={0} mr={3}>
                    <CircleIcon />
                  </Box>
                )}
              </MenuItem>
            )}
          </Hover>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold>
          Menu with icon
        </Heading>
        <Menu>
          <MenuItem>
            <Box mr={3}>
              <CircleIcon />
            </Box>
            Item one
          </MenuItem>
          <MenuItem variant="active">
            <Box mr={3}>
              <CircleIcon />
            </Box>
            Item two
          </MenuItem>
          <MenuItem>
            <Box mr={3}>
              <CircleIcon />
            </Box>
            Item three
          </MenuItem>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold>
          Menu with group
        </Heading>
        <Menu>
          <MenuItem>Item one</MenuItem>
          <MenuGroup>
            <MenuItem>Item two</MenuItem>
            <MenuItem>Item three</MenuItem>
          </MenuGroup>
          <MenuItem>Item four</MenuItem>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold>
          Menu with variants
        </Heading>
        <Menu>
          <MenuItem>Default</MenuItem>
          <MenuItem variant="selected">Selected</MenuItem>
          <MenuItem variant="active">Active</MenuItem>
          <MenuItem disabled>Disabled</MenuItem>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold mb={1}>
          Menu with shadow variant
        </Heading>
        <Menu variant="shadow">
          <MenuItem>
            <Box mr={3}>
              <CircleIcon />
            </Box>
            Item one
          </MenuItem>
          <MenuItem>
            <Box mr={3}>
              <CircleIcon />
            </Box>
            Item two
          </MenuItem>
          <MenuItem>
            <Box mr={3}>
              <CircleIcon />
            </Box>
            Item three
          </MenuItem>
        </Menu>
      </Box>

      <Box mb="4">
        <Heading size={0} bold>
          Custom
        </Heading>
        <Menu>
          <MenuItem>
            <Box>
              <Heading size={0} bold mb={1}>
                Heading
              </Heading>
              <Text as="div" size={1} color="grays.5">
                Some text
              </Text>
            </Box>
          </MenuItem>
          <MenuItem>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Text as="div" size={3}>
                Device
              </Text>

              <Text as="div" size={1} color="grays.5">
                200 x 400
              </Text>
            </Flex>
          </MenuItem>
        </Menu>
      </Box>
    </Grid>
  );
}

storiesOf('Components|Menu', module).add('default', () => <MenuStory />);

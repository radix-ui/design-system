import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Grid } from './Grid';
import { Button } from './Button';
import { Text } from './Text';
import { Menu, MenuItem, MenuGroup } from './Menu';

storiesOf('Components|Menu', module).add('default', () => (
  <Grid
    gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
    gridGap={4}
  >
    <Box mb="4">
      <Menu>
        <MenuItem>
          <Text fontSize={2}>one</Text>
        </MenuItem>
        <MenuItem>
          <Text fontSize={2}>two</Text>
        </MenuItem>
        <MenuItem as="a">
          <Text fontSize={2}>three</Text>
        </MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Menu>
        <MenuItem>
          <ItemWithIcon>one</ItemWithIcon>
        </MenuItem>
        <MenuItem>
          <ItemWithIcon>two</ItemWithIcon>
        </MenuItem>
        <MenuItem as="a">
          <ItemWithIcon>three</ItemWithIcon>
        </MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Menu>
        <MenuItem>
          <ItemWithIcon>one</ItemWithIcon>
        </MenuItem>
        <MenuGroup>
          <MenuItem>
            <ItemWithIcon>two</ItemWithIcon>
          </MenuItem>
          <MenuItem>
            <ItemWithIcon>three</ItemWithIcon>
          </MenuItem>
        </MenuGroup>
        <MenuItem>
          <ItemWithIcon>four</ItemWithIcon>
        </MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Menu>
        <MenuItem>
          <ItemWithIcon>one</ItemWithIcon>
        </MenuItem>
        <MenuItem active>
          <ItemWithIcon>two</ItemWithIcon>
        </MenuItem>
        <MenuItem>
          <ItemWithIcon>three</ItemWithIcon>
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

function ItemWithIcon({ children }) {
  return (
    <>
      <Box mr={4}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          stroke="currentColor"
        >
          <rect x="4.5" y="8.5" width="16" height="12" rx="1.5" />
          <path d="M7 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V8.5H5.5V8C5.5 7.17157 6.17157 6.5 7 6.5Z" />
          <path d="M8 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V6.5H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5Z" />
          <path
            d="M5 9L12.5 15.5L20 9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 20L10.5 14.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 20L14.5 14.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Text fontSize={2}>{children}</Text>
    </>
  );
}

function ItemWithIconAndDesc({ title, desc }) {
  return (
    <>
      <Box mb={1}>
        <Flex alignItems="center">
          <Box mr={4}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
            >
              <rect x="4.5" y="8.5" width="16" height="12" rx="1.5" />
              <path d="M5.5 8C5.5 7.17157 6.17157 6.5 7 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V8.5H5.5V8Z" />
              <path d="M6.5 6C6.5 5.17157 7.17157 4.5 8 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V6.5H6.5V6Z" />
              <path
                d="M9.5 17.5L15.5 11.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 17.5L9.5 11.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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

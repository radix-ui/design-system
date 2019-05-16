import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Grid } from './Grid';
import { Menu, MenuGroup, MenuItem } from './Menu';
import { CircleIcon } from '@modulz/radix-icons';
import { GhostButton } from './GhostButton';
import { Heading } from './Heading';

storiesOf('Components|Menu', module).add('default', () => (
  <Grid
    gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
    gridGap={4}
  >
    <Box mb="4">
      <Heading size={0} bold>
        Default
      </Heading>
      <Menu>
        <MenuItem>Item one</MenuItem>
        <MenuItem>Item two</MenuItem>
        <MenuItem>Item three</MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Heading size={0} bold>
        Menu with content on hover
      </Heading>
      <Menu>
        <MenuItem
          contentOnHover={
            <GhostButton>
              <CircleIcon size="15" />
            </GhostButton>
          }
        >
          Item one
        </MenuItem>
        <MenuItem
          contentOnHover={
            <GhostButton>
              <CircleIcon size="15" />
            </GhostButton>
          }
        >
          Item two
        </MenuItem>
        <MenuItem
          disabled
          contentOnHover={
            <GhostButton>
              <CircleIcon size="15" />
            </GhostButton>
          }
        >
          Item three (disabled)
        </MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Heading size={0} bold>
        Menu with icon
      </Heading>
      <Menu>
        <MenuItem icon={<CircleIcon />}>Item one</MenuItem>
        <MenuItem icon={<CircleIcon />}>Item two</MenuItem>
        <MenuItem icon={<CircleIcon />}>Item three</MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Heading size={0} bold>
        Menu with group
      </Heading>
      <Menu>
        <MenuItem icon={<CircleIcon />}>Item one</MenuItem>
        <MenuGroup>
          <MenuItem icon={<CircleIcon />}>Item two</MenuItem>
          <MenuItem icon={<CircleIcon />}>Item three</MenuItem>
        </MenuGroup>
        <MenuItem icon={<CircleIcon />}>Item four</MenuItem>
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
        <MenuItem disabled contentOnHover={<CircleIcon />}>
          Disabled
        </MenuItem>
      </Menu>
    </Box>

    <Box mb="4">
      <Heading size={0} bold mb={1}>
        Menu with shadow variant
      </Heading>
      <Menu variant="shadow">
        <MenuItem icon={<CircleIcon />}>Item one</MenuItem>
        <MenuItem icon={<CircleIcon />}>Item two</MenuItem>
        <MenuItem icon={<CircleIcon />}>Item three</MenuItem>
      </Menu>
    </Box>

    {/* <Box mb="4">
      <Menu variant="shadow">
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
    </Box> */}
  </Grid>
));

// @ts-ignore
// function ItemWithIconAndDesc({ title, desc }) {
//   return (
//     <>
//       <Box mb={1}>
//         <Flex alignItems="center">
//           <Box mr={4}>
//             <TrashIcon />
//           </Box>
//           <Text fontSize={3} fontWeight="bold">
//             {title}
//           </Text>
//         </Flex>
//         <Text as="p" fontSize={2} color="grays.5" ml={7}>
//           {desc}
//         </Text>
//       </Box>
//     </>
//   );
// }

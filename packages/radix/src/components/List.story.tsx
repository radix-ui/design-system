import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Grid } from './Grid';
import { List, ListGroup, ListItem } from './List';
import { CircleIcon } from '@modulz/radix-icons';
import { Heading } from './Heading';
import { Text } from './Text';
import { Flex } from './Flex';
import { Hover } from './Hover';

function ListStory() {
  const listItemRef = useRef(null);

  function handleClick(e: React.MouseEvent) {
    console.log(listItemRef.current);
  }

  return (
    <Grid sx={{ gridTemplateColumns: ['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)'], gap: 4 }}>
      <Box mb="4">
        <Heading size={0}>Default</Heading>
        <List>
          <ListItem ref={listItemRef} onClick={handleClick}>
            <Text size={2}>Item one</Text>
          </ListItem>
          <ListItem ref={listItemRef} onClick={handleClick} disabled>
            <Text size={2} sx={{ color: 'inherit' }}>
              Item two
            </Text>
          </ListItem>
          <ListItem>
            <Text size={2}>Item three</Text>
          </ListItem>
        </List>
      </Box>

      <Box mb="4">
        <Heading size={0}>List with content on hover</Heading>
        <List>
          <Hover>
            {isHovered => (
              <ListItem>
                <Text size={2}>Wrapped in `Hover`</Text>
                {isHovered && (
                  <Box sx={{ position: 'absolute', right: 3 }}>
                    <CircleIcon />
                  </Box>
                )}
              </ListItem>
            )}
          </Hover>
          <Hover>
            {isHovered => (
              <ListItem variant="active">
                <Text size={2} sx={{ color: 'white' }}>
                  Wrapped in `Hover`
                </Text>
                {isHovered && (
                  <Box sx={{ position: 'absolute', right: 3 }}>
                    <CircleIcon />
                  </Box>
                )}
              </ListItem>
            )}
          </Hover>
          <Hover>
            {isHovered => (
              <ListItem disabled>
                <Text size={2} sx={{ color: 'inherit' }}>
                  Wrapped in `Hover`
                </Text>
                {isHovered && (
                  <Box sx={{ position: 'absolute', right: 3 }}>
                    <CircleIcon />
                  </Box>
                )}
              </ListItem>
            )}
          </Hover>
        </List>
      </Box>

      <Box mb="4">
        <Heading size={0}>List with icon</Heading>
        <List>
          <ListItem>
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2}>Item one</Text>
          </ListItem>
          <ListItem variant="active">
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2} sx={{ color: 'white' }}>
              Item two
            </Text>
          </ListItem>
          <ListItem>
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2}>Item three</Text>
          </ListItem>
        </List>
      </Box>

      <Box mb="4">
        <Heading size={0}>List with group</Heading>
        <List>
          <ListItem>
            <Text size={2}>Item one</Text>
          </ListItem>
          <ListGroup>
            <ListItem>
              <Text size={2}>Item two</Text>
            </ListItem>
            <ListItem>
              <Text size={2}>Item three</Text>
            </ListItem>
          </ListGroup>
          <ListItem>
            <Text size={2}>Item four</Text>
          </ListItem>
        </List>
      </Box>

      <Box mb="4">
        <Heading size={0}>List with variants</Heading>
        <List>
          <ListItem>
            <Text size={2}>Default</Text>
          </ListItem>
          <ListItem variant="selected">
            <Text size={2}>Selected</Text>
          </ListItem>
          <ListItem variant="active">
            <Text size={2} sx={{ color: 'white' }}>
              Active
            </Text>
          </ListItem>
          <ListItem disabled>
            <Text size={2} sx={{ color: 'inherit' }}>
              Disabled
            </Text>
          </ListItem>
        </List>
      </Box>

      <Box mb="4">
        <Heading size={0} mb={1}>
          List with shadow variant
        </Heading>
        <List variant="shadow">
          <ListItem>
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2}>Item one</Text>
          </ListItem>
          <ListItem>
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2}>Item two</Text>
          </ListItem>
          <ListItem>
            <Box mr={3}>
              <CircleIcon size="15" />
            </Box>
            <Text size={2}>Item three</Text>
          </ListItem>
        </List>
      </Box>

      <Box mb="4">
        <Heading size={0}>Custom</Heading>
        <List>
          <ListItem>
            <Box>
              <Heading size={0} mb={1}>
                Heading
              </Heading>
              <Text as="div" size={1} sx={{ color: 'gray700' }}>
                Some text
              </Text>
            </Box>
          </ListItem>
          <ListItem>
            <Flex sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <Text as="div" size={3}>
                Device
              </Text>

              <Text size={1} sx={{ color: 'gray700' }}>
                200 x 400
              </Text>
            </Flex>
          </ListItem>
        </List>
      </Box>
    </Grid>
  );
}

storiesOf('Components|List', module).add('default', () => <ListStory />);

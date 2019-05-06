import React from 'react';
import {
  RadixProvider,
  Container,
  Box,
  Heading,
  Text,
  Divider,
  Flex,
  AspectRatio,
  Button,
  Card,
  Slider,
  ToggleButtonGroup,
  ToggleButton,
  Link,
  Grid,
  PillButtonGroup,
  PillButton,
  Menu,
  MenuItem,
} from 'radix-poc';

import RadixIcons from '@modulz/radix-icons';
const Icon = RadixIcons.default;

export default () => (
  <>
    <RadixProvider>
      <Container size="medium">
        <Box textAlign="center">
          <Heading py={7}>Radix Design System</Heading>
          <Text color="grays.5" fontSize={6} lineHeight={1.2}>
            A set of low level components used to power{' '}
            <Link href="https://modulz.app">Modulz's</Link> products
          </Text>
          <Divider my={8} maxWidth={130} mx="auto" />

          <Heading as="h2" fontSize="7" mb={5}>
            Components
          </Heading>

          <Box mb={9}>
            <Heading as="h3" fontSize={3} fontWeight="normal">
              Grid
            </Heading>
            <Box my={4}>
              <Grid gridTemplateColumns="repeat(2, 1fr)" gridGap={4} mb={2}>
                <div>
                  <Box bg="blue" p={1} />
                </div>
                <div>
                  <Box bg="blue" p={1} />
                </div>
              </Grid>
              <Grid gridTemplateColumns="repeat(5, 1fr)" gridGap={4} mb={2}>
                <div>
                  <Box bg="blue" p={1} />
                </div>
                <div>
                  <Box bg="blue" p={1} />
                </div>
                <div>
                  <Box bg="blue" p={1} />
                </div>
                <div>
                  <Box bg="blue" p={1} />
                </div>
                <div>
                  <Box bg="blue" p={1} />
                </div>
              </Grid>
              <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap={4}>
                <div>
                  <Box bg="blue" p={1} />
                </div>
                <div>
                  <Box bg="blue" p={1} />
                </div>
                <div>
                  <Box bg="blue" p={1} />
                </div>
                <div>
                  <Box bg="blue" p={1} />
                </div>
                <div>
                  <Box bg="blue" p={1} />
                </div>
                <div>
                  <Box bg="blue" p={1} />
                </div>
              </Grid>
            </Box>
          </Box>
          <Box mb={9}>
            <Heading as="h3" fontSize={3} fontWeight="normal">
              Aspect Ratio
            </Heading>
            <Flex my={4}>
              <Box flex="1" mx={4}>
                <AspectRatio bg="blue" />
              </Box>
              <Box flex="1" mx={4}>
                <AspectRatio bg="blue" ratio={4 / 5} />
              </Box>
              <Box flex="1" mx={4}>
                <AspectRatio bg="blue" ratio={16 / 9} />
              </Box>
            </Flex>
          </Box>

          <Box mb={9}>
            <Heading as="h3" fontSize={3} fontWeight="normal">
              Button
            </Heading>
            <Flex my={4}>
              <Box flex="1" mx={4}>
                <Box mb={3}>
                  <Button>Button</Button>
                </Box>
                <Box>
                  <Button size="medium">Button</Button>
                </Box>
              </Box>
              <Box flex="1" mx={4}>
                <Box mb={3}>
                  <Button variant="blue">Button</Button>
                </Box>
                <Box>
                  <Button variant="blue" size="medium">
                    Button
                  </Button>
                </Box>
              </Box>
              <Box flex="1" mx={4}>
                <Box mb={3}>
                  <Button variant="green">Button</Button>
                </Box>
                <Box>
                  <Button variant="green" size="medium">
                    Button
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box mb={9}>
            <Heading as="h3" fontSize={3} fontWeight="normal">
              Card
            </Heading>

            <Box mx="auto" textAlign="left" maxWidth={250}>
              <Card my={4}>
                <Heading fontSize="5" mb="3">
                  Card
                </Heading>
                <Text as="p" mb="3" fontSize="3">
                  China’s leadership is seeking to maintain a recent thaw with
                  the United States while lashing out at the arrest of a top
                  Chinese tech executive.
                </Text>
                <Text fontSize="2" color="grays.5">
                  Today
                </Text>
              </Card>
              <Card my={4} variant="shadow">
                <Heading fontSize="5" mb="3">
                  Card
                </Heading>
                <Text as="p" mb="3" fontSize="3">
                  China’s leadership is seeking to maintain a recent thaw with
                  the United States while lashing out at the arrest of a top
                  Chinese tech executive.
                </Text>
                <Text fontSize="2" color="grays.5">
                  Today
                </Text>
              </Card>
            </Box>
          </Box>

          <Box mb={9}>
            <Heading as="h3" fontSize={3} fontWeight="normal">
              Slider
            </Heading>
            <Box my={4} maxWidth={200} mx="auto">
              <Slider value="50" />
            </Box>
          </Box>

          <Box mb={9}>
            <Heading as="h3" fontSize={3} fontWeight="normal">
              Toggle Button
            </Heading>
            <Box my={4} mx="auto" maxWidth={200}>
              <ToggleButtonGroup name="direction">
                <ToggleButton defaultChecked>Row</ToggleButton>
                <ToggleButton>Column</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>

          <Box mb={9}>
            <Heading as="h3" fontSize={3} fontWeight="normal">
              Pill Button
            </Heading>
            <Box my={4} mx="auto" maxWidth={400}>
              <Box mb="4">
                <PillButtonGroup>
                  <PillButton>Assets</PillButton>
                  <PillButton>Components</PillButton>
                  <PillButton active>Screen</PillButton>
                </PillButtonGroup>
              </Box>
            </Box>
          </Box>

          <Box mb={9}>
            <Heading as="h3" fontSize={3} fontWeight="normal">
              Menu
            </Heading>
            <Box my={4} mx="auto" maxWidth={200}>
              <Box mb="4">
                <Menu>
                  <MenuItem>
                    <Box mr={4}>
                      <Icon name="home" size="25" type="outline" />
                    </Box>
                    <Text fontSize={2}>Item one</Text>
                  </MenuItem>
                  <MenuItem active>
                    <Box mr={4}>
                      <Icon name="home" size="25" type="outline" />
                    </Box>
                    <Text fontSize={2}>Item two</Text>
                  </MenuItem>
                  <MenuItem>
                    <Box mr={4}>
                      <Icon name="home" size="25" type="outline" />
                    </Box>
                    <Text fontSize={2}>Item three</Text>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </RadixProvider>
  </>
);

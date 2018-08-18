import React, {Component} from 'react'

// Note that it's not necessary to import before exporting
// We only need to import if we want to use these in the little demo generated below
import AspectRatio from './components/AspectRatio';
import Badge from './components/Badge';
import Box from './components/Box';
import Button from './components/Button';
import Container from './components/Container';
import Divider from './components/Divider';
import Flexbox from './components/Flexbox';
import Heading from './components/Heading';
import Image from './components/Image';
import Input from './components/Input';
import LinesButton from './components/LinesButton';
import Link from './components/Link';
import List from './components/List';
import ListItem from './components/ListItem';
import Section from './components/Section';
import Slider from './components/Slider';
import Select from './components/Select';
import Switch from './components/Switch';
import Text from './components/Text';
import ToggleButtonGroup from './components/ToggleButtonGroup';
import ToggleButton from './components/ToggleButton';
import Code from './components/Code';
import Avatar from './components/Avatar';
import Tooltip from './components/Tooltip';

// It's necessary to export any components that we want to use elsewhere
// with the "export x from 'radix'" syntax
export AspectRatio from './components/AspectRatio';
export Badge from './components/Badge';
export Box from './components/Box';
export Button from './components/Button';
export Container from './components/Container';
export Divider from './components/Divider';
export Flexbox from './components/Flexbox';
export Heading from './components/Heading';
export Image from './components/Image';
export Input from './components/Input';
export LinesButton from './components/LinesButton';
export Link from './components/Link';
export List from './components/List';
export ListItem from './components/ListItem';
export Section from './components/Section';
export Slider from './components/Slider';
export Select from './components/Select';
export Switch from './components/Switch';
export Text from './components/Text';
export ToggleButtonGroup from './components/ToggleButtonGroup';
export ToggleButton from './components/ToggleButton';
export Code from './components/Code';
export Avatar from './components/Avatar';
export Tooltip from './components/Tooltip';

import * as Theme from './theme';
export { Theme };

export default class extends Component {
  render() {
    return <div>
      <Section
        size3
      >
        <Container
          size2
        >
          <Flexbox
            wrap
            >
            <Box
              w50
              pb8
              pr4
            >
              <Flexbox
                ai_center
              >
                <Button>
                  Button
                </Button>
                <Button size2>
                  Button
                </Button>
              </Flexbox>
              <Flexbox
                mt4
              >
                <Button blue>
                  Button
                </Button>
                <Button yellow>
                  Button
                </Button>
                <Button red>
                  Button
                </Button>
                <Button green>
                  Button
                </Button>
              </Flexbox>
              <Flexbox
                mt4
              >
                <Button left>
                  Button
                </Button>
                <Button middle>
                  Button
                </Button>
                <Button right>
                  Button
                </Button>
              </Flexbox>
              <Flexbox
                mt4
              >
                <Button active>
                  Button
                </Button>
                <Button disabled>
                  Button
                </Button>
              </Flexbox>
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <ToggleButtonGroup>
                <ToggleButton
                  group="group"
                  defaultChecked="true"
                />
                <ToggleButton
                  group="group"
                />
                <ToggleButton
                  group="group"
                />
              </ToggleButtonGroup>
            </Box>
            <Box
              w50
              pb8
              pr4
            >
            <Text size8>
              Text
            </Text>
            <Text size7>
              Text
            </Text>
            <Text size6>
              Text
            </Text>
            <Text size5>
              Text
            </Text>
            <Text size4>
              Text
            </Text>
            <Text size3>
              Text
            </Text>
            <Text size2>
              Text
            </Text>
            <Text size1>
              Text
            </Text>
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <Heading size6>
                Heading
              </Heading>
              <Heading size5>
                Heading
              </Heading>
              <Heading size4>
                Heading
              </Heading>
              <Heading size3>
                Heading
              </Heading>
              <Heading size2>
                Heading
              </Heading>
              <Heading size1>
                Heading
              </Heading>
            </Box>
            <Box
              w50
              pb8
              pr4
            >
              <Badge
                gray
              >
                Badge
              </Badge>
              <Badge
                blue
              >
                Badge
              </Badge>
              <Badge
                green
              >
                Badge
              </Badge>
              <Badge
                yellow
              >
                Badge
              </Badge>
              <Badge
                red
              >
                Badge
              </Badge>
              <Badge
                size2
                gray
              >
                Badge
              </Badge>
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <Image
                src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
              />
            </Box>
            <Box
              w50
              pb8
              pr4
            >
              <Input />
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <Select>
                <option>342</option>
                <option>342</option>
                <option>342</option>
                <option>342</option>
                <option>342</option>
              </Select>
            </Box>
            <Box
              w50
              pb8
              pr4
            >
              <LinesButton>
                LinesButton
              </LinesButton>
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <Slider
                type="range"/>
            </Box>
            <Box
              w50
              pb8
              pr4
            >
              <Switch />
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <List>
                <ListItem>
                  List item 1
                </ListItem>
                <ListItem>
                  List item 2
                </ListItem>
                <ListItem>
                  List item 3
                </ListItem>
                <ListItem>
                  List item 4
                </ListItem>
              </List>
            </Box>
            <Box
              w50
              pb8
              pr4
            >
              <Text
                size3
                lh3
              >
                This really long paragraph text has a <Code>piece of code</Code> right in the middle of it. The reason the parapgraph is so long is
              so we can test how the code element affects lines below it.
              </Text>
            </Box>
            <Box
              w50
              pb8
              pl4
            >
              <Avatar>
                <Image
                  rounded
                  src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                  width="35"
                  height="35"
                />
              </Avatar>
              <Flexbox
                mt4
                ai_center
              >
                <Avatar
                  size1
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="20"
                    height="20"
                  />
                </Avatar>
                <Avatar
                  size2
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="25"
                    height="25"
                  />
                </Avatar>
                <Avatar
                  size3
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="35"
                    height="35"
                  />
                </Avatar>
                <Avatar
                  size4
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="45"
                    height="45"
                  />
                </Avatar>
                <Avatar
                  size5
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="65"
                    height="65"
                  />
                </Avatar>
                <Avatar
                  size6
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="80"
                    height="80"
                  />
                </Avatar>
              </Flexbox>
              <Flexbox
                mt4
              >
                <Avatar
                  color
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="35"
                    height="35"
                  />
                </Avatar>
                <Avatar
                  blue
                  color
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="35"
                    height="35"
                  />
                </Avatar>
                <Avatar
                  green
                  color
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="35"
                    height="35"
                  />
                </Avatar>
                <Avatar
                  yellow
                  color
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="35"
                    height="35"
                  />
                </Avatar>
                <Avatar
                  red
                  color
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="35"
                    height="35"
                  />
                </Avatar>
              </Flexbox>
              <Flexbox
                mt4
              >
                <Avatar
                  inline
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="35"
                    height="35"
                  />
                </Avatar>
                <Avatar
                  inline
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="35"
                    height="35"
                  />
                </Avatar>
                <Avatar
                  inline
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="35"
                    height="35"
                  />
                </Avatar>
                <Avatar
                  inline
                >
                  <Image
                    rounded
                    src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    width="35"
                    height="35"
                  />
                </Avatar>
              </Flexbox>
            </Box>
            <Box
              w50
              pb8
              pr4
            >
              <Tooltip
                data-tooltip="tooltip here"
                data-tooltip-position="top"
              >
                <Button>
                  Tooltip
                </Button>
              </Tooltip>
              <Tooltip
                data-tooltip="tooltip here"
                data-tooltip-position="right"
              >
                <Button>
                  Tooltip
                </Button>
              </Tooltip>
              <Tooltip
                data-tooltip="tooltip here"
                data-tooltip-position="bottom"
              >
                <Button>
                  Tooltip
                </Button>
              </Tooltip>
              <Tooltip
                data-tooltip="tooltip here"
                data-tooltip-position="left"
              >
                <Button>
                  Tooltip
                </Button>
              </Tooltip>
            </Box>
          </Flexbox>
        </Container>
      </Section>

    </div>
  }
}

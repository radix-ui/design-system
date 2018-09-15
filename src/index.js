import React, {Component} from 'react'

// Note that it's not necessary to import before exporting
// We only need to import if we want to use these in the little demo generated below
import AspectRatio from './components/AspectRatio';
import Badge from './components/Badge';
import Box from './components/Box';
import Button from './components/Button';
import Container from './components/Container';
import Divider from './components/Divider';
import Textarea from './components/Textarea';
import Flexbox from './components/Flexbox';
import Heading from './components/Heading';
import Title from './components/Title';
import Status from './components/Status';
import Image from './components/Image';
import BackgroundImage from './components/BackgroundImage';
import Input from './components/Input';
import LinesButton from './components/LinesButton';
import GhostButton from './components/GhostButton';
import Link from './components/Link';
import List from './components/List';
import ListItem from './components/ListItem';
import Section from './components/Section';
import Slider from './components/Slider';
import Select from './components/Select';
import Switch from './components/Switch';
import Text from './components/Text';
import ToggleButton from './components/ToggleButton';
import Code from './components/Code';
import Avatar from './components/Avatar';
import Tooltip from './components/Tooltip';
import Progress from './components/Progress';
import Radio from './components/Radio';
import IndicatorButton from './components/IndicatorButton';
import Grid from './components/Grid';

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
export ToggleButton from './components/ToggleButton';
export Code from './components/Code';
export Avatar from './components/Avatar';
export Tooltip from './components/Tooltip';
export Progress from './components/Progress';
export Radio from './components/Radio';
export IndicatorButton from './components/IndicatorButton';
export GhostButton from './components/GhostButton';
export Grid from './components/Grid';
export Status from './components/Status';
export BackgroundImage from './components/BackgroundImage';
export Title from './components/Title';
export Textarea from './components/Textarea';

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
          <Grid>
            <div>
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
                mt6
              >
                <Button size2 blue>
                  Blue
                </Button>
                <Button size2 green>
                  Green
                </Button>
                <Button size2 yellow>
                  Yellow
                </Button>
                <Button size2 red>
                  Red
                </Button>
              </Flexbox>
              <Flexbox
                mt6
              >
                <Button size2 left>
                  Left
                </Button>
                <Button size2 middle>
                  Middle
                </Button>
                <Button size2 right>
                  Right
                </Button>
              </Flexbox>
              <Flexbox
                mt6
              >
                <Button size2 active>
                  Active
                </Button>
                <Button size2 disabled>
                  Disabled
                </Button>
                <Button size2 waiting>
                  Waiting
                </Button>
              </Flexbox>
              <Flexbox
                ai_center
                mt6
              >
                <Button
                  blue
                >
                  <Box
                    mr1
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                      <path d="M5 0L0 4L5 8" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M0 0H10" transform="translate(2.5 7.5)" strokeLinecap="round"/>
                    </svg>
                  </Box>
                  Back
                </Button>
                <Button
                  size2
                  blue
                >
                  <Box
                    mr2
                  >
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                      <path d="M0 0H14" transform="translate(5.5 12.5)" strokeLinecap="round"/>
                      <path d="M0 14V0" transform="translate(12.5 5.5)" strokeLinecap="round"/>
                    </svg>
                  </Box>
                  Follow
                </Button>
              </Flexbox>
            </div>
            <div>
              <Flexbox
                mb6
              >
                <ToggleButton
                  left
                  group="direction"
                  defaultChecked="true"
                >
                  Row
                </ToggleButton>
                <ToggleButton
                  right
                  group="direction"
                >
                  Column
                </ToggleButton>
              </Flexbox>
              <Flexbox
                mb6
              >
                <ToggleButton
                  left
                  group="justify"
                  defaultChecked="true"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block'
                    }}
                  >
                    <path d="M4.5 4.5V20.5" strokeLinecap="round"/>
                    <rect x="4.5" y="8.5" width="4" height="8"/>
                    <rect x="8.5" y="8.5" width="4" height="8"/>
                  </svg>
                </ToggleButton>
                <ToggleButton
                  middle
                  group="justify"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block'
                    }}
                  >
                    <path d="M12.5 4.5V20.5" strokeLinecap="round"/>
                    <rect x="8.5" y="8.5" width="4" height="8"/>
                    <rect x="12.5" y="8.5" width="4" height="8"/>
                  </svg>
                </ToggleButton>
                <ToggleButton
                  middle
                  group="justify"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block'
                    }}
                  >
                    <path d="M20.5 4.5V20.5" strokeLinecap="round"/>
                    <rect x="12.5" y="8.5" width="4" height="8"/>
                    <rect x="16.5" y="8.5" width="4" height="8"/>
                  </svg>
                </ToggleButton>
                <ToggleButton
                  middle
                  group="justify"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block'
                    }}
                  >
                    <path d="M20.5 4.5V20.5" strokeLinecap="round"/>
                    <path d="M4.5 4.5V20.5" strokeLinecap="round"/>
                    <rect x="4.5" y="8.5" width="4" height="8"/>
                    <rect x="16.5" y="8.5" width="4" height="8"/>
                  </svg>
                </ToggleButton>
                <ToggleButton
                  right
                  group="justify"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block'
                    }}
                  >
                    <path d="M20.5 4.5V20.5" strokeLinecap="round"/>
                    <path d="M4.5 4.5V20.5" strokeLinecap="round"/>
                    <path d="M12.5 4.5V20.5" strokeLinecap="round"/>
                    <rect x="6.5" y="8.5" width="4" height="8"/>
                    <rect x="14.5" y="8.5" width="4" height="8"/>
                  </svg>
                </ToggleButton>
              </Flexbox>
              <Flexbox
                mb6
              >
                <ToggleButton
                  left
                  group="align"
                  defaultChecked="true"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block'
                    }}
                  >
                    <path d="M4 16.5H13"/>
                    <path d="M4 12.5H21"/>
                    <path d="M4 8.5H13"/>
                  </svg>
                </ToggleButton>
                <ToggleButton
                  middle
                  group="align"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block'
                    }}
                  >
                    <path d="M8 16.5H17"/>
                    <path d="M4 12.5H21"/>
                    <path d="M8 8.5H17"/>
                  </svg>
                </ToggleButton>
                <ToggleButton
                  middle
                  group="align"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block'
                    }}
                  >
                    <path d="M12 16.5H21"/>
                    <path d="M4 12.5H21"/>
                    <path d="M12 8.5H21"/>
                  </svg>
                </ToggleButton>
                <ToggleButton
                  right
                  group="align"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      display: 'block'
                    }}
                  >
                    <path d="M4 16.5H21"/>
                    <path d="M4 12.5H21"/>
                    <path d="M4 8.5H21"/>
                  </svg>
                </ToggleButton>
              </Flexbox>
            </div>
            <div>
              <Flexbox
                ai_center
              >
                <GhostButton>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block' }}
                  >
                    <path d="M5 0L0 4L5 8" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0 0H10" transform="translate(2.5 7.5)" strokeLinecap="round"/>
                  </svg>
                </GhostButton>
                <GhostButton
                  size2
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block' }}
                  >
                    <path d="M7.5 4.5V20.5L12.5 16.5L17.5 20.5V4.5H7.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 6.5H15"/>
                  </svg>
                </GhostButton>
              </Flexbox>
              <Flexbox
                ai_center
                mt6
              >
                <GhostButton
                  padded
                >
                  <Box
                    mr1
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: 'block' }}
                    >
                      <path d="M5 0L0 4L5 8" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M0 0H10" transform="translate(2.5 7.5)" strokeLinecap="round"/>
                    </svg>
                  </Box>
                  Button
                </GhostButton>
                <GhostButton
                  padded
                  size2
                >
                  <Box
                    mr1
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: 'block' }}
                    >
                      <path d="M7.5 4.5V20.5L12.5 16.5L17.5 20.5V4.5H7.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 6.5H15"/>
                    </svg>
                  </Box>
                  Bookmark
                </GhostButton>
              </Flexbox>
              <Flexbox
                ai_center
                mt6
              >
                <GhostButton
                  padded
                  active
                  size2
                >
                  <Box
                    mr1
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: 'block' }}
                    >
                      <path d="M7.5 4.5V20.5L12.5 16.5L17.5 20.5V4.5H7.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 6.5H15"/>
                    </svg>
                  </Box>
                  Bookmark
                </GhostButton>
                <GhostButton
                  padded
                  disabled
                  size2
                >
                  <Box
                    mr1
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: 'block' }}
                    >
                      <path d="M7.5 4.5V20.5L12.5 16.5L17.5 20.5V4.5H7.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 6.5H15"/>
                    </svg>
                  </Box>
                  Bookmark
                </GhostButton>
              </Flexbox>
            </div>
            <div>
              <Flexbox
                ai_center
              >
                <Box
                  mr4
                >
                  <Status />
                </Box>
                <Status size2 />
              </Flexbox>
              <Flexbox
                mt6
              >
                <Box
                  mr4
                >
                  <Status
                    size2
                  />
                </Box>
                <Box
                  mr4
                >
                  <Status
                    size2
                    blue
                  />
                </Box>
                <Box
                  mr4
                >
                  <Status
                    size2
                    green
                  />
                </Box>
                <Box
                  mr4
                >
                  <Status
                    size2
                    yellow
                  />
                </Box>
                <Box
                  mr4
                >
                  <Status
                    size2
                    red
                  />
                </Box>
              </Flexbox>
              <Flexbox
                mt6
              >
              <Box
                mr4
              >
                <Status
                  size2
                >
                  8
                </Status>
              </Box>
              <Box
                mr4
              >
                <Status
                  size2
                  red
                >
                  248
                </Status>
              </Box>
              <Box
                mr4
              >
                <Status
                  size2
                  green
                >
                  2k+
                </Status>
              </Box>
              </Flexbox>
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
              <Box
                mb6
              >
                <Title size1>
                  Some heading
                </Title>
              </Box>
              <Box
                mb6
              >
                <Title size2>
                  Some heading
                </Title>
              </Box>
              <Box>
                <Title size3>
                  Some heading
                </Title>
              </Box>
            </div>
            <div>
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
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
              />
            </div>
            <div>
              <AspectRatio>
                <BackgroundImage
                  src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                />
              </AspectRatio>
              <AspectRatio ratio_169>
                <BackgroundImage
                  src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                />
              </AspectRatio>
            </div>
            <div>
              <Input
                placeholder="Type something..."
                disabled
                value="45"
              />
            </div>
            <div>
              <Textarea
                placeholder="Type something..."
              />
            </div>
            <div>
              <div style={{width: '100px'}}>
                <Select>
                  <option>342 wfwef wef feew fewfew </option>
                  <option>342</option>
                  <option>342</option>
                  <option>342</option>
                  <option>342</option>
                </Select>
              </div>
            </div>
            <div>
              <LinesButton>
                LinesButton
              </LinesButton>
            </div>
            <div>
              <Slider />
            </div>
            <div>
              <Switch />
            </div>
            <div>
              <List>
                <li>
                  <ListItem highlighted>
                    <Text size2>Gray</Text>
                  </ListItem>
                </li>
                <li>
                  <ListItem active>
                    <Text size2>Orange</Text>
                  </ListItem>
                </li>
                <li>
                  <ListItem>
                    <Text size2>Gray</Text>
                  </ListItem>
                </li>
                <li>
                  <ListItem>
                    <Text size2>Gray</Text>
                  </ListItem>
                </li>
              </List>
            </div>
            <div>
              <Text
                size3
                lh3
              >
                This really long paragraph text has a <Code>piece of code</Code> right in the middle of it. The reason the parapgraph is so long is
              so we can test how the code element affects lines below it.
              </Text>
            </div>
            <div>
              <Flexbox
                mt4
                ai_center
              >
                <Box
                  mr4
                >
                  <Avatar
                    url="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    size="35"
                    initial="C"
                    caption="Text for screenreader"
                  />
                </Box>
                <Box>
                  <Avatar
                    url="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d47fe3447c889fe7857b3d14dd3ce8ad&auto=format&fit=crop&w=802&q=80"
                    size="35"
                    initial="C"
                    caption="Text for screenreader"
                  />
                </Box>
              </Flexbox>
            </div>
            <div>
              <Flexbox>
                <Tooltip
                  data-tooltip="Tooltip content"
                  data-position="top"
                >
                  <Button
                    left
                  >
                    Tooltip
                  </Button>
                </Tooltip>
                <Tooltip
                  data-tooltip="Tooltip content"
                  data-position="right"
                >
                  <Button
                    middle
                  >
                    Tooltip
                  </Button>
                </Tooltip>
                <Tooltip
                  data-tooltip="Tooltip content"
                  data-position="bottom"
                >
                  <Button
                    middle
                  >
                    Tooltip
                  </Button>
                </Tooltip>
                <Tooltip
                  data-tooltip="Tooltip content"
                  data-position="left"
                >
                  <Button
                    right
                  >
                    Tooltip
                  </Button>
                </Tooltip>
              </Flexbox>
            </div>
            <div>
              <Flexbox
                ai_center
              >
                <Box
                  fg1
                  mr4
                >
                  <Progress
                    size1
                    blue
                    currentValue="50"
                  ></Progress>
                </Box>
                <Box
                  fg1
                  mr4
                >
                  <Progress
                    size2
                    blue
                    currentValue="50"
                  ></Progress>
                </Box>
                <Box
                  fg1
                >
                  <Progress
                    size3
                    blue
                    currentValue="50"
                  ></Progress>
                </Box>
              </Flexbox>
              <Flexbox
                mt6
                ai_center
              >
                <Progress
                  size2
                  blue
                  currentValue="50"
                ></Progress>
              </Flexbox>
              <Box
                mt6
                mb2
              >
                <Progress
                  size2
                  blue
                  currentValue="75"
                ></Progress>
              </Box>
              <Flexbox
                ai_baseline
              >
                <Box
                  mr1
                  fg1
                >
                  <Text
                    size1
                    gray600
                  >
                    Uploading 1 / 10
                  </Text>
                </Box>
                <Box>
                  <Text
                    size1
                    tnum
                  >
                    75%
                  </Text>
                </Box>
              </Flexbox>
            </div>
            <div>
              <Flexbox>
                <Radio
                  defaultChecked="true"
                  group="whatever" />
                <Radio
                  group="whatever" />
              </Flexbox>
            </div>
            <div>
              <Flexbox
                ai_center
              >
                <Box
                  mr3
                >
                  <IndicatorButton
                    active
                  />
                </Box>
                <Box
                  mr3
                >
                  <IndicatorButton />
                </Box>
                <Box
                  mr3
                >
                  <IndicatorButton />
                </Box>
                <Box
                  mr3
                >
                  <IndicatorButton />
                </Box>
              </Flexbox>
            </div>
          </Grid>
        </Container>
      </Section>

    </div>
  }
}

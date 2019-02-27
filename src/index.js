import React, {Component} from 'react'

// Note that it's not necessary to import before exporting
// We only need to import if we want to use these in the little demo generated below
import AspectRatio from './components/AspectRatio';
import Alert from './components/Alert';
import Badge from './components/Badge';
import Box from './components/Box';
import Button from './components/Button';
import Card from './components/Card';
import CardLink from './components/CardLink';
import ChromelessButton from './components/ChromelessButton';
import Container from './components/Container';
import ContextMenu from './components/ContextMenu';
import Divider from './components/Divider';
import Textarea from './components/Textarea';
import Flexbox from './components/Flexbox';
import Heading from './components/Heading';
import Overlay from './components/Overlay';
import Dialog from './components/Dialog';
import { DialogRoot } from './components/DialogRoot';
import Title from './components/Title';
import Status from './components/Status';
import Image from './components/Image';
import BackgroundImage from './components/BackgroundImage';
import GhostInput from './components/GhostInput';
import Input from './components/Input';
import LinesButton from './components/LinesButton';
import GhostButton from './components/GhostButton';
import CheckboxButton from './components/CheckboxButton';
import Link from './components/Link';
import List from './components/List';
import ListItem from './components/ListItem';
import MenuItem from './components/MenuItem';
import MenuItemButton from './components/MenuItemButton';
import MenuItemLink from './components/MenuItemLink';
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
import Table from './components/Table';
import Checkbox from './components/Checkbox';
import IndicatorButton from './components/IndicatorButton';
import Grid from './components/Grid';
import PillTab from './components/PillTab';
import HoverZone from './components/HoverZone';
import HoverZonePanel from './components/HoverZonePanel';

// It's necessary to export any components that we want to use elsewhere
// with the "export x from 'radix'" syntax
export AspectRatio from './components/AspectRatio';
export Alert from './components/Alert';
export Badge from './components/Badge';
export Box from './components/Box';
export Button from './components/Button';
export Card from './components/Card';
export CardLink from './components/CardLink';
export ChromelessButton from './components/ChromelessButton';
export Container from './components/Container';
export ContextMenu from './components/ContextMenu';
export Divider from './components/Divider';
export Flexbox from './components/Flexbox';
export Heading from './components/Heading';
export Image from './components/Image';
export Input from './components/Input';
export Overlay from './components/Overlay';
export Dialog from './components/Dialog';
export { DialogRoot } from './components/DialogRoot';
export LinesButton from './components/LinesButton';
export Link from './components/Link';
export List from './components/List';
export ListItem from './components/ListItem';
export MenuItem from './components/MenuItem';
export MenuItemButton from './components/MenuItemButton';
export MenuItemLink from './components/MenuItemLink';
export Section from './components/Section';
export Slider from './components/Slider';
export Select from './components/Select';
export Switch from './components/Switch';
export Text from './components/Text';
export ToggleButton from './components/ToggleButton';
export CheckboxButton from './components/CheckboxButton';
export Code from './components/Code';
export Avatar from './components/Avatar';
export Tooltip from './components/Tooltip';
export Progress from './components/Progress';
export Radio from './components/Radio';
export Checkbox from './components/Checkbox';
export IndicatorButton from './components/IndicatorButton';
export GhostButton from './components/GhostButton';
export Grid from './components/Grid';
export Status from './components/Status';
export Table from './components/Table';
export BackgroundImage from './components/BackgroundImage';
export Title from './components/Title';
export Textarea from './components/Textarea';
export PillTab from './components/PillTab';
export HoverZone from './components/HoverZone';
export HoverZonePanel from './components/HoverZonePanel';
export GhostInput from './components/GhostInput';

import * as Theme from './theme';
export { Theme };

export default class extends Component {
  render() {
    // const demoDialog = ({ close }) => (
    //   <Flexbox fd_column height_100>
    //     <Box padding_4 fs_0>
    //       <Heading size2 bold>
    //         Heading
    //       </Heading>
    //     </Box>
    //     <Box pl_4 pr_4 oy_auto fg_1>
    //       <Text size3 lh_2>
    //         Absolutely any content can go inside the dialog. No restrictions at all.
    //       </Text>
    //     </Box>
    //     <Box padding_4 fs_0>
    //       <Flexbox jc_flexend>
    //         <Button size2 mr_4 onClick={close}>
    //           Cancel
    //         </Button>
    //         <Button size2 blue onClick={close}>
    //           Accept
    //         </Button>
    //       </Flexbox>
    //     </Box>
    //   </Flexbox>
    // );

    return <DialogRoot>
      <Tooltip />
      <Alert gray>
        <Container size1>
          <Flexbox jc_center ai_center>
            <Text>
              <Text as="strong" inline bold>
                Modulz 2.0
              </Text>
              —The next step in visual coding.
            </Text>
            <Divider vertical size1 ml_2 mr_2 />
            <Link>
              Learn more
              <Box ml_1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M7.5 3.5L12.5 7.5L7.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.5 7.5H12.5" strokeLinecap="round"/>
                </svg>
              </Box>
            </Link>
          </Flexbox>
        </Container>
      </Alert>
      <Section
        size3
      >
        <Container
          size2
        >
          <Grid cells_2 size3>
            <div>
              <Grid cells_2 size1 mb_2>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
              </Grid>
              <Grid cells_5 size1 mb_2>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
              </Grid>
              <Grid cells_3 size1>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
                <div>
                  <Box bc_blue500 padding_1></Box>
                </div>
              </Grid>
            </div>
            <div>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  width: '200px',
                  height: '200px',
                }}
              >
                <Card
                  style={{
                    position: 'absolute',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1544284381-d4043c89656e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                >
                </Card>
              </div>
            </div>
            <div>
              <Grid cells_2 size1>
                <Box>
                  <Card border padding_4>
                    <Heading size1 lh_1 color_gray600 mb_1>
                      Nona Willis Aronowitz
                    </Heading>
                    <Heading size2 bold lh_2>
                      Hate Amazon? Try Living Without It.
                    </Heading>
                    <Text size3 lh_2 mt_1>
                      My dad was a longtime labor activist. He despises what Jeff Bezos built, but he can’t quit it.
                    </Text>
                    <Text size2 color_gray600 mt_2 as="time">
                      Dec. 8
                    </Text>
                  </Card>
                </Box>
                <Box>
                  <Card perspective padding_4>
                    <Heading size1 bold lh_1>
                      China, Facing Difficult Balancing Act, Summons U.S. Envoy Over Huawei Arrest
                    </Heading>
                    <Text size2 lh_1 mt_1>
                      China’s leadership is seeking to maintain a recent thaw with the United States while lashing out at the arrest of a top Chinese tech executive.
                    </Text>
                    <Text size1 color_gray600 mt_2 as="time">
                      15m ago
                    </Text>
                  </Card>
                </Box>
              </Grid>
            </div>
            <div>
              <Grid cells_2 size1>
                <Box>
                  <CardLink as="a" href="https://www.modulz.app" border padding_4>
                    <Heading size1 lh_1 color_gray600 mb_1>
                      Nona Willis Aronowitz
                    </Heading>
                    <Heading size2 bold lh_2>
                      Hate Amazon? Try Living Without It.
                    </Heading>
                    <Text size3 lh_2 mt_1>
                      My dad was a longtime labor activist. He despises what Jeff Bezos built, but he can’t quit it.
                    </Text>
                    <Text size2 color_gray600 mt_2 as="time">
                      Dec. 8
                    </Text>
                  </CardLink>
                </Box>
                <Box>
                  <CardLink as="button" border selected padding_4>
                    <Heading size1 lh_1 color_gray600 mb_1>
                      Nona Willis Aronowitz
                    </Heading>
                    <Heading size2 bold lh_2>
                      Hate Amazon? Try Living Without It.
                    </Heading>
                    <Text size3 lh_2 mt_1>
                      My dad was a longtime labor activist. He despises what Jeff Bezos built, but he can’t quit it.
                    </Text>
                    <Text size2 color_gray600 mt_2 as="time">
                      Dec. 8
                    </Text>
                  </CardLink>
                </Box>
                <Box>
                  <CardLink as="a" href="https://www.modulz.app" perspective padding_4>
                    <Heading size1 bold lh_1>
                      China, Facing Difficult Balancing Act, Summons U.S. Envoy Over Huawei Arrest
                    </Heading>
                    <Text size2 lh_1 mt_1>
                      China’s leadership is seeking to maintain a recent thaw with the United States while lashing out at the arrest of a top Chinese tech executive.
                    </Text>
                    <Text size1 color_gray600 mt_2 as="time">
                      15m ago
                    </Text>
                  </CardLink>
                </Box>
                <Box>
                  <CardLink as="a" href="https://www.modulz.app" ghost padding_4>
                    <Heading size1 bold lh_1>
                      China, Facing Difficult Balancing Act, Summons U.S. Envoy Over Huawei Arrest
                    </Heading>
                    <Text size2 lh_1 mt_1>
                      China’s leadership is seeking to maintain a recent thaw with the United States while lashing out at the arrest of a top Chinese tech executive.
                    </Text>
                    <Text size1 color_gray600 mt_2 as="time">
                      15m ago
                    </Text>
                  </CardLink>
                </Box>
              </Grid>
            </div>
            <div>
              <Box
                ai_center
                mb_6
              >
                <Alert rounded gray>
                  <Text size2>You have been logged out.</Text>
                </Alert>
              </Box>
              <Box
                ai_center
                mb_6
              >
                <Alert rounded blue>
                  <Text size2>We have launched a new product!</Text>
                </Alert>
              </Box>
              <Box
                ai_center
                mb_6
              >
                <Alert rounded green>
                  <Text size2>Password changed successfully.</Text>
                </Alert>
              </Box>
              <Box
                ai_center
                mb_6
              >
                <Alert rounded yellow>
                  <Text size2>Mate, you messed up your password.</Text>
                </Alert>
              </Box>
              <Box
                ai_center
                mb_6
              >
                <Alert rounded red>
                  <Text size2>You have been logged out.</Text>
                </Alert>
              </Box>
            </div>
            <div>
              <Flexbox
                ai_center
              >
                <Button mr_4>
                  Button
                </Button>
                <Button size2>
                  Button
                </Button>
              </Flexbox>
              <Flexbox
                mt_6
              >
                <Button mr_4 size2 blue>
                  Blue
                </Button>
                <Button mr_4 size2 green>
                  Green
                </Button>
                <Button mr_4 size2 yellow>
                  Yellow
                </Button>
                <Button mr_4 size2 red>
                  Red
                </Button>
              </Flexbox>
              <Flexbox
                mt_6
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
                mt_6
              >
                <Button mr_4 size2 active>
                  Active
                </Button>
                <Button mr_4 size2 disabled>
                  Disabled
                </Button>
                <Button mr_4 size2 waiting>
                  Waiting
                </Button>
              </Flexbox>
              <Flexbox
                ai_center
                mt_6
              >
                <Button
                  blue
                  mr_4
                >
                  <Box
                    mr_1
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
                    mr_2
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
                ai_center
              >
                <ChromelessButton>
                  ChromelessButton
                </ChromelessButton>
              </Flexbox>
            </div>
            <div>
              <Flexbox
                mb_6
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
                mb_6
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
                mb_6
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
              <PillTab left disabled>
                Theme
              </PillTab>
              <PillTab middle active>
                Editor
              </PillTab>
              <PillTab right>
                Composer
              </PillTab>
            </div>
            <div>
              <Table>
                <Text size3 as="caption">This is a table caption</Text>
                <thead>
                  <tr>
                    <th>
                      <Text size3 bold>Movie</Text>
                    </th>
                    <th>
                      <Text size3 bold>Movie</Text>
                    </th>
                    <th>
                      <Text size3 bold>Movie</Text>
                    </th>
                    <th>
                      <Text size3 bold>Movie</Text>
                    </th>
                    <th>
                      <Text size3 bold>Movie</Text>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Text size3>Harry Potter and the Deathly Hallows—Part 2</Text>
                    </td>
                    <td>
                      <Text size3>Orange</Text>
                    </td>
                    <td>
                      <Text size3>Orange</Text>
                    </td>
                    <td>
                      <Text size3>Orange</Text>
                    </td>
                    <td>
                      <Text size3>Orange</Text>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Text size3>Harry Potter and the Deathly Hallows—Part 2</Text>
                    </td>
                    <td>
                      <Text size3>Orange</Text>
                    </td>
                    <td>
                      <Text size3>Orange</Text>
                    </td>
                    <td>
                      <Text size3>Orange</Text>
                    </td>
                    <td>
                      <Text size3>Orange</Text>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                </tfoot>
              </Table>
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
                mt_6
              >
                <GhostButton
                  padded
                >
                  <Box
                    mr_1
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
                    mr_1
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
                mt_6
              >
                <GhostButton
                  padded
                  active
                  size2
                >
                  <Box
                    mr_1
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
                    mr_1
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
              <Flexbox>
                <CheckboxButton
                  defaultChecked="true"
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
                </CheckboxButton>
              </Flexbox>
            </div>
            <div>
              <Flexbox
                ai_center
              >
                <Box
                  mr_4
                >
                  <Status />
                </Box>
                <Status size2 />
              </Flexbox>
              <Flexbox
                mt_6
              >
                <Box
                  mr_4
                >
                  <Status
                    size2
                  />
                </Box>
                <Box
                  mr_4
                >
                  <Status
                    size2
                    blue
                  />
                </Box>
                <Box
                  mr_4
                >
                  <Status
                    size2
                    green
                  />
                </Box>
                <Box
                  mr_4
                >
                  <Status
                    size2
                    yellow
                  />
                </Box>
                <Box
                  mr_4
                >
                  <Status
                    size2
                    red
                  />
                </Box>
              </Flexbox>
              <Flexbox
                mt_6
              >
              <Box
                mr_4
              >
                <Status
                  size2
                >
                  8
                </Status>
              </Box>
              <Box
                mr_4
              >
                <Status
                  size2
                  red
                >
                  248
                </Status>
              </Box>
              <Box
                mr_4
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
              <Text size8 mb_3>
                Text
              </Text>
              <Text size7 mb_3>
                Text
              </Text>
              <Text size6 mb_3>
                Text
              </Text>
              <Text size5 mb_3>
                Text
              </Text>
              <Text size4 mb_3>
                Text
              </Text>
              <Text size3 mb_3>
                Text
              </Text>
              <Text size2 mb_3>
                Text
              </Text>
              <Text size1>
                Text
              </Text>
            </div>
            <div>
              <Heading size6 bold mb_3>
                Heading
              </Heading>
              <Heading size5 bold mb_3>
                Heading
              </Heading>
              <Heading size4 mb_3>
                Heading
              </Heading>
              <Heading size3 mb_3>
                Heading
              </Heading>
              <Heading size2 mb_3>
                Heading
              </Heading>
              <Heading size1>
                Heading
              </Heading>
            </div>
            <div>
              <Box
                mb_6
              >
                <Title size1>
                  Some heading
                </Title>
              </Box>
              <Box
                mb_6
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
              <HoverZone>
                <HoverZonePanel>
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
                </HoverZonePanel>
              </HoverZone>
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
              <Box mb_6>
                <Input
                  placeholder="Type something..."
                />
              </Box>
              <Box mb_6>
                <Input
                  size2
                  placeholder="Type something..."
                />
              </Box>
              <Box mb_4>
                <Box position_relative>
                  <Input
                    size2
                    placeholder="e.g. joe@example.com"
                    paddedLeft
                    type="email"
                  />
                  <Box position_absolute height_100 width_100 color_gray600 pe_none top_0 left_0>
                    <Flexbox height_100 ai_center>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M5 8L12.5 13.5L20 8" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 17L10.5 12.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 17L14.5 12.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.5 8V17C4.5 17.2761 4.72386 17.5 5 17.5H20C20.2761 17.5 20.5 17.2761 20.5 17V8C20.5 7.72386 20.2761 7.5 20 7.5H5C4.72386 7.5 4.5 7.72386 4.5 8Z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Flexbox>
                  </Box>
                </Box>
              </Box>
              <Box mb_6>
                <Box position_relative>
                  <Input
                    size2
                    placeholder="Type something..."
                    paddedLeft
                    type="password"
                  />
                  <Box position_absolute height_100 width_100 color_gray600 pe_none top_0 left_0>
                    <Flexbox height_100 ai_center>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect x="4.5" y="11.5" width="16" height="9" rx="1.5"/>
                        <path d="M7.5 9.5C7.5 6.73858 9.73858 4.5 12.5 4.5C15.2614 4.5 17.5 6.73858 17.5 9.5V11.5H7.5V9.5Z"/>
                      </svg>
                    </Flexbox>
                  </Box>
                </Box>
              </Box>
              <Box mb_6>
                <Box position_relative>
                  <Input
                    placeholder="Search..."
                    paddedRight
                  />
                  <Box position_absolute height_100 width_100 color_gray600 pe_none top_0 left_0>
                    <Flexbox height_100 ai_center jc_flexend>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="6.5" cy="6.5" r="4" />
                        <path d="M9.85355 9.14645C9.65829 8.95118 9.34171 8.95118 9.14645 9.14645C8.95118 9.34171 8.95118 9.65829 9.14645 9.85355L9.85355 9.14645ZM12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L12.1464 12.8536ZM9.14645 9.85355L12.1464 12.8536L12.8536 12.1464L9.85355 9.14645L9.14645 9.85355Z" fill="currentColor" stroke="none"/>
                      </svg>
                    </Flexbox>
                  </Box>
                </Box>
              </Box>
              <Box mb_6>
                <Input
                  placeholder="Type something..."
                  disabled
                />
              </Box>
              <Box>
                <Input
                  placeholder="Type something..."
                  readOnly
                  defaultValue="This is selectable but not editable"
                />
              </Box>
            </div>
            <div>
              <GhostInput
                placeholder="Type something..."
                defaultValue="Ghost input"
              />
            </div>
            <div>
              <Box mb_6>
                <Textarea
                  placeholder="Type something..."
                />
              </Box>
              <Box>
                <Textarea
                  size2
                  placeholder="Type something..."
                />
              </Box>
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
              <Box mb_6>
                <LinesButton size1 gray mr_6>
                  Lines Button
                </LinesButton>
                <LinesButton gray mr_6>
                  Lines Button
                </LinesButton>
              </Box>
              <Box>
                <LinesButton blue mr_6>
                  Lines Button
                </LinesButton>
                <LinesButton green>
                  Lines Button
                </LinesButton>
              </Box>
            </div>
            <div>
              <Slider value={2} />
            </div>
            <div>
              <Switch />
            </div>
            <div>
              <Text
                size4
                lh_3
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
                  mr_4
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
              <Flexbox fw_wrap>
                <Button
                  data-tooltip-content="Tooltip content"
                  data-tooltip-direction="top"
                  data-tooltip-alignment="center"
                  mr_6
                >
                  Tooltip top
                </Button>
                <Button
                  mr_6
                  data-tooltip-content="Tooltip content"
                  data-tooltip-direction="right"
                  data-tooltip-alignment="center"
                >
                  Tooltip right
                </Button>
                <Button
                  mr_6
                  data-tooltip-content="Tooltip content"
                  data-tooltip-direction="bottom"
                  data-tooltip-alignment="center"
                >
                  Tooltip bottom
                </Button>
                <Button
                  mr_6
                  mt_6
                  data-tooltip-content="Tooltip content"
                  data-tooltip-direction="left"
                  data-tooltip-alignment="center"
                >
                  Tooltip left
                </Button>
              </Flexbox>
              <Flexbox fw_wrap mt_6>
                <Button
                  data-tooltip-content="Tooltip content"
                  data-tooltip-direction="top"
                  data-tooltip-alignment="start"
                  mr_6
                >
                  Tooltip start
                </Button>
                <Button
                  mr_6
                  data-tooltip-content="Tooltip content"
                  data-tooltip-direction="right"
                  data-tooltip-alignment="center"
                >
                  Tooltip middle
                </Button>
                <Button
                  mr_6
                  data-tooltip-content="Tooltip content"
                  data-tooltip-direction="bottom"
                  data-tooltip-alignment="end"
                >
                  Tooltip end
                </Button>
              </Flexbox>
            </div>
            <div>
              <Flexbox
                ai_center
              >
                <Box
                  fg_1
                  mr_4
                >
                  <Progress
                    size1
                    blue
                    currentValue="50"
                  ></Progress>
                </Box>
                <Box
                  fg_1
                  mr_4
                >
                  <Progress
                    size2
                    blue
                    currentValue="50"
                  ></Progress>
                </Box>
                <Box
                  fg_1
                >
                  <Progress
                    size3
                    blue
                    currentValue="50"
                  ></Progress>
                </Box>
              </Flexbox>
              <Flexbox
                mt_6
                ai_center
              >
                <Progress
                  size2
                  blue
                  currentValue="50"
                ></Progress>
              </Flexbox>
              <Box
                mt_6
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
                  mr_1
                  fg_1
                >
                  <Text
                    size2
                    gray600
                  >
                    Uploading 1 / 10
                  </Text>
                </Box>
                <Box>
                  <Text
                    size2
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
              <Flexbox>
                <Checkbox
                  defaultChecked="true"
                  group="hello" />
              </Flexbox>
            </div>
            <div>
              <Flexbox
                ai_center
              >
                <Box
                  mr_3
                >
                  <IndicatorButton
                    active
                  />
                </Box>
                <Box
                  mr_3
                >
                  <IndicatorButton />
                </Box>
                <Box
                  mr_3
                >
                  <IndicatorButton />
                </Box>
                <Box
                  mr_3
                >
                  <IndicatorButton />
                </Box>
              </Flexbox>
            </div>
            <div>
              <Dialog
                size2
                trigger={
                  <Button ml_2 size2 blue>
                    Open Dialog
                  </Button>
                }
              >
                {({ close }) => (
                  <Flexbox fd_column height_100>
                    <Box padding_4 fs_0>
                      <Heading size2 bold>
                        Heading
                      </Heading>
                    </Box>
                    <Box pl_4 pr_4 oy_auto fg_1>
                      <Text size3 lh_2>
                        Absolutely any content can go inside the dialog. No restrictions at all.
                      </Text>
                    </Box>
                    <Box padding_4 fs_0>
                      <Flexbox jc_flexend>
                        <Button size2 mr_4 onClick={close}>
                          Cancel
                        </Button>
                        <Button size2 blue onClick={close}>
                          Accept
                        </Button>
                      </Flexbox>
                    </Box>
                  </Flexbox>
                )}
              </Dialog>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section
        size3
      >
        <Container
          size2
        >
          <Flexbox ai_flexstart>

            <Box
              mr_7
              style={{
                minWidth: '180px',
                boxShadow: '0 7px 30px 0 hsla(208,25%,10%,.2)',
                borderRadius: '5px',
                zIndex: '9'
              }}
            >
              <List pt_1 pb_1>
                <li>
                  <MenuItemLink href="#">
                    <Text size2>First link</Text>
                  </MenuItemLink>
                </li>
                <li>
                  <MenuItemLink href="#">
                    <Text size2>Second link</Text>
                  </MenuItemLink>
                </li>
              </List>
            </Box>

            <Box
              mr_7
              style={{
                minWidth: '180px',
                boxShadow: '0 7px 30px 0 hsla(208,25%,10%,.2)',
                borderRadius: '5px',
                zIndex: '9'
              }}
            >
              <List pt_1 pb_1>
                <li>
                  <MenuItemLink href="#">
                    <Flexbox
                      ai_center
                    >
                      <Box mr_4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M5.5 11.9142V20.5H10.5V15C10.5 14.7239 10.7239 14.5 11 14.5H14C14.2761 14.5 14.5 14.7239 14.5 15V20.5H19.5V11.9142C19.5 11.649 19.3946 11.3946 19.2071 11.2071L12.5 4.5L5.79289 11.2071C5.60536 11.3946 5.5 11.649 5.5 11.9142Z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Box>
                      <Text size2>Back to files</Text>
                    </Flexbox>
                  </MenuItemLink>
                </li>
                <li>
                  <MenuItemLink href="#">
                    <Box mr_4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke="currentColor"
                      >
                      <circle cx="12.5" cy="12.5" r="8"/>
                      <path d="M5.5 16C9.875 17.3333 15.125 17.3333 19.5 16" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.5 9C10 7.66666 15 7.66667 19.5 9" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.5 20.5C6.5 18 6.49999 7 12.5 4.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12.5 20.5C18.5 18 18.5 7 12.5001 4.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.5 12.5H20.5"/>
                      <path d="M12.5 4.5V20.5"/>
                      </svg>
                    </Box>
                    <Text size2>Medium Partner Program</Text>
                  </MenuItemLink>
                </li>
                <li>
                  <MenuItemLink href="#">
                    <Box mr_4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke="currentColor"
                      >
                      <circle cx="12.5" cy="12.5" r="3"/>
                      <circle cx="12.5" cy="12.5" r="8"/>
                      <path d="M6.5 18.5L10.5 14.5"/>
                      <path d="M14.5 10.5L18.5 6.5"/>
                      <path d="M10.5 10.5L6.5 6.5"/>
                      <path d="M18 18L14.5 14.5"/>
                      </svg>
                    </Box>
                    <Text size2>Help & Support</Text>
                  </MenuItemLink>
                </li>
                <li>
                  <Divider
                    mt_1
                    mb_1
                  />
                </li>
                <li>
                  <MenuItemLink href="#">
                    <Box mr_4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke="currentColor"
                      >
                      <rect x="4.5" y="8.5" width="16" height="12" rx="1.5"/>
                      <path d="M5.5 8C5.5 7.17157 6.17157 6.5 7 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V8.5H5.5V8Z"/>
                      <path d="M6.5 6C6.5 5.17157 7.17157 4.5 8 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V6.5H6.5V6Z"/>
                      <path d="M9.5 17.5L15.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.5 17.5L9.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Box>
                    <Text size2>Log out</Text>
                  </MenuItemLink>
                </li>
                <li>
                  <Divider
                    mt_1
                    mb_1
                  />
                </li>
                <li>
                  <MenuItemButton pl_8>
                    <Text size2>Log out</Text>
                  </MenuItemButton>
                </li>
              </List>
            </Box>

            <Box
              mr_7
              style={{
                width: '300px',
                boxShadow: '0 7px 30px 0 hsla(208,25%,10%,.2)',
                borderRadius: '5px',
                zIndex: '9'
              }}
            >
              <List pt_1 pb_1>
                <li>
                  <MenuItemButton>
                    <Box>
                      <Box mb_1>
                        <Flexbox ai_center>
                          <Box mr_4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              stroke="currentColor"
                            >
                            <rect x="4.5" y="8.5" width="16" height="12" rx="1.5"/>
                            <path d="M5.5 8C5.5 7.17157 6.17157 6.5 7 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V8.5H5.5V8Z"/>
                            <path d="M6.5 6C6.5 5.17157 7.17157 4.5 8 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V6.5H6.5V6Z"/>
                            <path d="M9.5 17.5L15.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.5 17.5L9.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Box>
                          <Text size3 lh_1 bold>Log out</Text>
                        </Flexbox>
                      </Box>
                      <Text size2 lh_1 color_gray600 ml_7>How to scale meaningful design in a multi-device world</Text>
                    </Box>
                  </MenuItemButton>
                </li>
                <li>
                  <MenuItemButton>
                    <Box>
                      <Box mb_1>
                        <Flexbox ai_center>
                          <Box mr_4>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              stroke="currentColor"
                            >
                            <rect x="4.5" y="8.5" width="16" height="12" rx="1.5"/>
                            <path d="M5.5 8C5.5 7.17157 6.17157 6.5 7 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V8.5H5.5V8Z"/>
                            <path d="M6.5 6C6.5 5.17157 7.17157 4.5 8 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V6.5H6.5V6Z"/>
                            <path d="M9.5 17.5L15.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.5 17.5L9.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Box>
                          <Text size3 lh_1 bold>Log out</Text>
                        </Flexbox>
                      </Box>
                      <Text size2 lh_1 color_gray600 ml_7>How to scale meaningful design in a multi-device world</Text>
                    </Box>
                  </MenuItemButton>
                </li>
              </List>
            </Box>
          </Flexbox>

        </Container>
      </Section>

      <Section
        size3
      >
        <Container
          size2
        >
          <Flexbox ai_flexstart>

            <Box
              mr_7
              style={{
                minWidth: '220px'
              }}
            >
              <List pb_1>
                <li>
                  <MenuItemLink active href="#">
                    <Flexbox ai_center>
                      <Box mr_4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          stroke="currentColor"
                        >
                        <rect x="4.5" y="8.5" width="16" height="12" rx="1.5"/>
                        <path d="M7 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V8.5H5.5V8C5.5 7.17157 6.17157 6.5 7 6.5Z"/>
                        <path d="M8 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V6.5H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5Z"/>
                        <path d="M5 9L12.5 15.5L20 9" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 20L10.5 14.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 20L14.5 14.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Box>
                      <Text size3 bold>Inbox</Text>
                    </Flexbox>
                  </MenuItemLink>
                </li>
                <li>
                  <MenuItemLink href="#">
                    <Flexbox ai_center>
                      <Box mr_4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          stroke="currentColor"
                        >
                        <path d="M7.5 4.5V20.5L12.5 16.5L17.5 20.5V4.5H7.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 6.5H15"/>
                        </svg>
                      </Box>
                      <Text size3>Bookmarked</Text>
                    </Flexbox>
                  </MenuItemLink>
                </li>
                <li>
                  <MenuItemLink href="#">
                  <Flexbox ai_center>
                    <Box mr_4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="12.5" cy="12.5" r="8"/>
                        <path d="M13 7.5C13 7.22386 12.7761 7 12.5 7C12.2239 7 12 7.22386 12 7.5H13ZM12.5 12.5H12C12 12.6326 12.0527 12.7598 12.1464 12.8536L12.5 12.5ZM14.1464 14.8536C14.3417 15.0488 14.6583 15.0488 14.8536 14.8536C15.0488 14.6583 15.0488 14.3417 14.8536 14.1464L14.1464 14.8536ZM12 7.5V12.5H13V7.5H12ZM12.1464 12.8536L14.1464 14.8536L14.8536 14.1464L12.8536 12.1464L12.1464 12.8536Z" fill="black" stroke="none"/>
                      </svg>
                    </Box>
                    <Text size3>Snoozed</Text>
                  </Flexbox>
                  </MenuItemLink>
                </li>
                <li>
                  <MenuItemLink href="#">
                  <Flexbox ai_center>
                    <Box mr_4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke="currentColor"
                      >
                      <circle cx="12.5" cy="12.5" r="8"/>
                      <path d="M15.5 9.5L11.5 15.5L9.5 13.456" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Box>
                    <Text size3>Important</Text>
                  </Flexbox>
                  </MenuItemLink>
                </li>
                <li>
                  <MenuItemLink href="#">
                  <Flexbox ai_center>
                    <Box mr_4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke="currentColor"
                      >
                      <path d="M22.5 12.5L4.5 4.5V11.5L17.5 12.5L4.5 13.5V20.5L22.5 12.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Box>
                    <Text size3>Sent</Text>
                  </Flexbox>
                  </MenuItemLink>
                </li>
                <li>
                  <MenuItemLink href="#">
                  <Flexbox ai_center>
                    <Box mr_4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke="currentColor"
                      >
                      <path d="M6.5 19.5V5.5C6.5 4.94772 6.94772 4.5 7.5 4.5H13.0858C13.351 4.5 13.6054 4.60536 13.7929 4.79289L18.2071 9.20711C18.3946 9.39464 18.5 9.649 18.5 9.91421V19.5C18.5 20.0523 18.0523 20.5 17.5 20.5H7.5C6.94772 20.5 6.5 20.0523 6.5 19.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9.5 16.5H15.5" strokeLinecap="round"/>
                      <path d="M9.5 12.5H15.5" strokeLinecap="round"/>
                      <path d="M9.5 8.5H10.5" strokeLinecap="round"/>
                      <path d="M13.5 5V9.5H18" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Box>
                    <Text size3>Drafts</Text>
                  </Flexbox>
                  </MenuItemLink>
                </li>
                <li>
                  <MenuItemLink>
                  <Flexbox ai_center>
                    <Box mr_4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        stroke="currentColor"
                      >
                      <rect x="7.5" y="8.5" width="10" height="12" rx="0.5" strokeLinecap="round" strokeLinejoin="bevel"/>
                      <rect x="6.5" y="6.5" width="12" height="2" rx="1"/>
                      <path d="M10.5 4.5H14.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.5 11V18"/>
                      <path d="M12.5 11V18"/>
                      <path d="M14.5 11V18"/>
                      </svg>
                    </Box>
                    <Text size3>Trash</Text>
                  </Flexbox>
                  </MenuItemLink>
                </li>
              </List>
            </Box>

            <Box
              mr_7
              style={{
                minWidth: '220px'
              }}
            >
              <List pt_1 pb_1>
                <li>
                  <Divider
                    mt_1
                    mb_1
                  />
                </li>
                <li>
                  <HoverZone>
                    <MenuItem active>
                      <Text size3 bold>Size 1</Text>
                    </MenuItem>
                    <HoverZonePanel
                      position_absolute
                      width_100
                      height_100
                      pr_1
                      style={{
                        top: '0',
                        left: '0',
                      }}
                    >
                      <Flexbox
                        height_100
                        jc_flexend
                        ai_center
                      >
                        <GhostButton>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="currentColor"
                            stroke="none"
                          >
                            <circle cx="7.5" cy="2.5" r="1.5"/>
                            <circle cx="7.5" cy="7.5" r="1.5"/>
                            <circle cx="7.5" cy="12.5" r="1.5"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                    </HoverZonePanel>
                  </HoverZone>
                </li>
                <li>
                  <HoverZone>
                    <MenuItem>
                      <Text size3>Size 2</Text>
                    </MenuItem>
                    <HoverZonePanel
                      position_absolute
                      width_100
                      height_100
                      pr_1
                      style={{
                        top: '0',
                        left: '0',
                      }}
                    >
                      <Flexbox
                        height_100
                        jc_flexend
                        ai_center
                      >
                        <GhostButton>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="currentColor"
                            stroke="none"
                          >
                            <circle cx="7.5" cy="2.5" r="1.5"/>
                            <circle cx="7.5" cy="7.5" r="1.5"/>
                            <circle cx="7.5" cy="12.5" r="1.5"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                    </HoverZonePanel>
                  </HoverZone>
                </li>
                <li>
                  <Divider
                    mt_1
                    mb_1
                  />
                </li>
                <li>
                  <HoverZone>
                    <MenuItem>
                      <Text size3>Left</Text>
                    </MenuItem>
                    <HoverZonePanel
                      position_absolute
                      width_100
                      height_100
                      pr_1
                      style={{
                        top: '0',
                        left: '0',
                      }}
                    >
                      <Flexbox
                        height_100
                        jc_flexend
                        ai_center
                      >
                        <GhostButton>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="currentColor"
                            stroke="none"
                          >
                            <circle cx="7.5" cy="2.5" r="1.5"/>
                            <circle cx="7.5" cy="7.5" r="1.5"/>
                            <circle cx="7.5" cy="12.5" r="1.5"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                    </HoverZonePanel>
                  </HoverZone>
                </li>
                <li>
                  <HoverZone>
                    <MenuItem selected>
                      <Text size3>Middle</Text>
                    </MenuItem>
                    <HoverZonePanel
                      position_absolute
                      width_100
                      height_100
                      pr_1
                      style={{
                        top: '0',
                        left: '0',
                      }}
                    >
                      <Flexbox
                        height_100
                        jc_flexend
                        ai_center
                      >
                        <GhostButton>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="currentColor"
                            stroke="none"
                          >
                            <circle cx="7.5" cy="2.5" r="1.5"/>
                            <circle cx="7.5" cy="7.5" r="1.5"/>
                            <circle cx="7.5" cy="12.5" r="1.5"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                    </HoverZonePanel>
                  </HoverZone>
                </li>
                <li>
                  <HoverZone>
                    <MenuItem>
                      <Text size3>Right</Text>
                    </MenuItem>
                    <HoverZonePanel
                      position_absolute
                      width_100
                      height_100
                      pr_1
                      style={{
                        top: '0',
                        left: '0',
                      }}
                    >
                      <Flexbox
                        height_100
                        jc_flexend
                        ai_center
                      >
                        <GhostButton>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="currentColor"
                            stroke="none"
                          >
                            <circle cx="7.5" cy="2.5" r="1.5"/>
                            <circle cx="7.5" cy="7.5" r="1.5"/>
                            <circle cx="7.5" cy="12.5" r="1.5"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                    </HoverZonePanel>
                  </HoverZone>
                </li>
              </List>
            </Box>

          </Flexbox>

          <Flexbox ai_flexstart mt_9>

            <Box
              mr_7
              style={{
                maxWidth: '480px',
                boxShadow: '0 7px 30px 0 hsla(208,25%,10%,.2)',
                borderRadius: '5px',
                zIndex: '9'
              }}
            >
              <List pt_1 pb_1>
                <ListItem>
                  <Flexbox ai_center width_100>
                    <Box mr_2>
                      <Avatar
                        size4
                        url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                        size="45"
                        initial="C"
                        caption="Text for screenreader"
                      />
                    </Box>
                    <Box fg_1>
                      <Flexbox ai_center jc_spacebetween>
                        <Flexbox ai_baseline mb_1>
                          <Text size2 bold mr_1>Colm Tuite</Text>
                          <Text size1 color_gray600>@colmtuite</Text>
                        </Flexbox>
                        <GhostButton size1 style={{width: '15px',height: '15px'}}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M2.5 12.5L12.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.5 12.5L2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                      <Button blue>
                        Follow
                      </Button>
                    </Box>
                  </Flexbox>
                </ListItem>
                <li>
                  <Divider
                    mt_1
                    mb_1
                  />
                </li>
                <ListItem>
                  <Flexbox ai_center width_100>
                    <Box mr_2>
                      <Avatar
                        size4
                        url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                        size="45"
                        initial="C"
                        caption="Text for screenreader"
                      />
                    </Box>
                    <Box fg_1>
                      <Flexbox ai_center jc_spacebetween>
                        <Flexbox ai_baseline mb_1>
                          <Text size2 bold mr_1>Colm Tuite</Text>
                          <Text size1 color_gray600>@colmtuite</Text>
                        </Flexbox>
                        <GhostButton size1 style={{width: '15px',height: '15px'}}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M2.5 12.5L12.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.5 12.5L2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                      <Button blue>
                        Follow
                      </Button>
                    </Box>
                  </Flexbox>
                </ListItem>
              </List>
            </Box>

            <Box
              mr_7
              style={{
                maxWidth: '480px',
                boxShadow: '0 7px 30px 0 hsla(208,25%,10%,.2)',
                borderRadius: '5px',
                zIndex: '9'
              }}
            >
              <List pt_1 pb_1>
                <li>
                  <MenuItem pt_2 pb_2 pl_4 pr_4 highlighted>
                    <Flexbox ai_center width_100>
                      <Box mr_2>
                        <Avatar
                          size4
                          url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                          size="45"
                          initial="C"
                          caption="Text for screenreader"
                        />
                      </Box>
                      <Box fg_1>
                        <Flexbox ai_center jc_spacebetween>
                          <Flexbox ai_baseline mb_1>
                            <Text size2 bold mr_1>Colm Tuite</Text>
                            <Text size1 color_gray600>@colmtuite</Text>
                          </Flexbox>
                          <GhostButton size1 style={{width: '15px',height: '15px'}}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M2.5 12.5L12.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.5 12.5L2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </GhostButton>
                        </Flexbox>
                        <Text size2 lh_1 color_gray600>A little message snippet.</Text>
                      </Box>
                    </Flexbox>
                  </MenuItem>
                </li>
                <li>
                  <MenuItem pt_2 pb_2 pl_4 pr_4>
                    <Flexbox ai_center width_100>
                      <Box mr_2>
                        <Avatar
                          size4
                          url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                          size="45"
                          initial="C"
                          caption="Text for screenreader"
                        />
                      </Box>
                      <Box fg_1>
                        <Flexbox ai_center jc_spacebetween>
                          <Flexbox ai_baseline mb_1>
                            <Text size2 bold mr_1>Colm Tuite</Text>
                            <Text size1 color_gray600>@colmtuite</Text>
                          </Flexbox>
                          <GhostButton size1 style={{width: '15px',height: '15px'}}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M2.5 12.5L12.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.5 12.5L2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </GhostButton>
                        </Flexbox>
                        <Text size2 lh_1 color_gray600>A little message snippet.</Text>
                      </Box>
                    </Flexbox>
                  </MenuItem>
                </li>
                <li>
                  <MenuItem pt_2 pb_2 pl_4 pr_4>
                    <Flexbox ai_center width_100>
                      <Box mr_2>
                        <Avatar
                          size4
                          url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                          size="45"
                          initial="C"
                          caption="Text for screenreader"
                        />
                      </Box>
                      <Box fg_1>
                        <Flexbox ai_center jc_spacebetween>
                          <Flexbox ai_baseline mb_1>
                            <Text size2 bold mr_1>Colm Tuite</Text>
                            <Text size1 color_gray600>@colmtuite</Text>
                          </Flexbox>
                          <GhostButton size1 style={{width: '15px',height: '15px'}}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M2.5 12.5L12.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.5 12.5L2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </GhostButton>
                        </Flexbox>
                        <Text size2 lh_1 color_gray600>A little message snippet.</Text>
                      </Box>
                    </Flexbox>
                  </MenuItem>
                </li>
              </List>
            </Box>

            <Box
              mr_7
              style={{
                maxWidth: '480px',
                boxShadow: '0 7px 30px 0 hsla(208,25%,10%,.2)',
                borderRadius: '5px',
                zIndex: '9'
              }}
            >
              <List pt_1 pb_1>
                <li>
                  <HoverZone>
                    <MenuItem pt_2 pb_2 pr_6>
                      <Flexbox
                        ai_flexstart
                      >
                        <Box mr_4>
                          <Avatar
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                            size="35"
                            initial="C"
                            caption="Text for screenreader"
                          />
                        </Box>
                        <Box>
                          <Box mb_1>
                            <Text size3 lh_1 inline><Text inline bold>Rick Beato</Text> <Text color_gray600 inline>uploaded:</Text> What do John Mayer and Kurt Cobain have in common?</Text>
                          </Box>
                          <Text size1 color_gray600>10 hours ago</Text>
                        </Box>
                        <Box
                          mr_4
                          ml_4
                          position_relative
                          overflow_hidden
                          fs_0
                          style={{
                            width: '86px',
                            height: '48px',
                          }}
                        >
                          <Box
                            position_absolute
                            width_100
                            style={{
                              top: '50%',
                              left: '0',
                              transform: 'translateY(-50%)'
                            }}
                          >
                            <Image
                              src="https://i.ytimg.com/vi/EJyezLhvtuc/hqdefault.jpg"
                              width="86"
                              height="64.5"
                            />
                          </Box>
                        </Box>
                      </Flexbox>
                    </MenuItem>
                    <HoverZonePanel
                      position_absolute
                      width_100
                      height_100
                      pt_2
                      pr_3
                      style={{
                        top: '0',
                        left: '0',
                      }}
                    >
                      <Flexbox
                        height_100
                        jc_flexend
                      >
                        <GhostButton>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="currentColor"
                            stroke="none"
                          >
                            <circle cx="7.5" cy="2.5" r="1.5"/>
                            <circle cx="7.5" cy="7.5" r="1.5"/>
                            <circle cx="7.5" cy="12.5" r="1.5"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                    </HoverZonePanel>
                  </HoverZone>
                </li>
                <li>
                  <HoverZone>
                    <MenuItem pt_2 pb_2 pr_6>
                      <Flexbox
                        ai_flexstart
                      >
                        <Box mr_4>
                          <Avatar
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                            size="35"
                            initial="C"
                            caption="Text for screenreader"
                          />
                        </Box>
                        <Box>
                          <Box mb_1>
                            <Text size3 lh_1 inline><Text inline bold>Mateus Asato</Text> <Text color_gray600 inline>uploaded:</Text> A Aquarela De Toquinho</Text>
                          </Box>
                          <Text size1 color_gray600>20 hours ago</Text>
                        </Box>
                        <Box
                          mr_4
                          ml_4
                          position_relative
                          overflow_hidden
                          fs_0
                          style={{
                            width: '86px',
                            height: '48px',
                          }}
                        >
                          <Box
                            position_absolute
                            width_100
                            style={{
                              top: '50%',
                              left: '0',
                              transform: 'translateY(-50%)'
                            }}
                          >
                            <Image
                              src="https://i.ytimg.com/vi/EJyezLhvtuc/hqdefault.jpg"
                              width="86"
                              height="64.5"
                            />
                          </Box>
                        </Box>
                      </Flexbox>
                    </MenuItem>
                    <HoverZonePanel
                      position_absolute
                      width_100
                      height_100
                      pt_2
                      pr_3
                      style={{
                        top: '0',
                        left: '0',
                      }}
                    >
                      <Flexbox
                        height_100
                        jc_flexend
                      >
                        <GhostButton>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="currentColor"
                            stroke="none"
                          >
                            <circle cx="7.5" cy="2.5" r="1.5"/>
                            <circle cx="7.5" cy="7.5" r="1.5"/>
                            <circle cx="7.5" cy="12.5" r="1.5"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                    </HoverZonePanel>
                  </HoverZone>
                </li>
                <li>
                  <HoverZone>
                    <MenuItem pt_2 pb_2 pr_6>
                      <Flexbox
                        ai_flexstart
                      >
                        <Box mr_4>
                          <Avatar
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                            size="35"
                            initial="C"
                            caption="Text for screenreader"
                          />
                        </Box>
                        <Box>
                          <Box mb_1>
                            <Text size3 lh_1 inline><Text inline bold>Doug Polk Poker</Text> <Text color_gray600 inline>uploaded:</Text> THE CRAZIEST CALL I'VE EVER SEEN IN POKER</Text>
                          </Box>
                          <Text size1 color_gray600>9 Nov 2018</Text>
                        </Box>
                        <Box
                          mr_4
                          ml_4
                          position_relative
                          overflow_hidden
                          fs_0
                          style={{
                            width: '86px',
                            height: '48px',
                          }}
                        >
                          <Box
                            position_absolute
                            width_100
                            style={{
                              top: '50%',
                              left: '0',
                              transform: 'translateY(-50%)'
                            }}
                          >
                            <Image
                              src="https://i.ytimg.com/vi/EJyezLhvtuc/hqdefault.jpg"
                              width="86"
                              height="64.5"
                            />
                          </Box>
                        </Box>
                      </Flexbox>
                    </MenuItem>
                    <HoverZonePanel
                      position_absolute
                      width_100
                      height_100
                      pt_2
                      pr_3
                      style={{
                        top: '0',
                        left: '0',
                      }}
                    >
                      <Flexbox
                        height_100
                        jc_flexend
                      >
                        <GhostButton>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="currentColor"
                            stroke="none"
                          >
                            <circle cx="7.5" cy="2.5" r="1.5"/>
                            <circle cx="7.5" cy="7.5" r="1.5"/>
                            <circle cx="7.5" cy="12.5" r="1.5"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                    </HoverZonePanel>
                  </HoverZone>
                </li>
              </List>
            </Box>

          </Flexbox>

        </Container>
      </Section>

      <Section
        size3
      >
        <Container
          size2
        >
          <Flexbox ai_flexstart>

            <Box
              mr_7
              style={{
                minWidth: '180px',
                maxWidth: '400px',
                boxShadow: '0 7px 30px 0 hsla(208,25%,10%,.2)',
                borderRadius: '5px',
                zIndex: '9'
              }}
            >
              <List pt_1 pb_1>

                <ListItem
                  padding_2
                  highlighted
                >
                  <Flexbox
                    fd_column
                    mr_2
                  >
                    <GhostButton
                      mb_2
                      color_blue500
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="currentColor"
                        stroke="none"
                      >
                        <circle cx="7.5" cy="7.5" r="6"/>
                      </svg>
                    </GhostButton>
                    <GhostButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="currentColor"
                        stroke="none"
                      >
                        <circle cx="2.5" cy="7.5" r="1.5"/>
                        <circle cx="7.5" cy="7.5" r="1.5"/>
                        <circle cx="12.5" cy="7.5" r="1.5"/>
                      </svg>
                    </GhostButton>
                  </Flexbox>
                  <Box>
                    <Box
                      padding_2
                      bc_gray300
                    >
                      <Box
                        padding_2
                        bc_white
                      >
                        <Text
                          size3
                          lh_1
                        >
                          Editor > Radio groups need a setting so you can turn them off (italics in text)
                        </Text>
                      </Box>
                    </Box>
                    <Box
                      padding_2
                      style={{
                        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)'
                      }}
                    >
                      <button type="submit">
                        <Flexbox
                          ai_center
                        >
                          <Box pl_1 pr_3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M11.5 5.5L7.5 9.5L3.5 5.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Box>
                          <Text size1>Hide previous card activity</Text>
                        </Flexbox>
                      </button>
                      <Flexbox
                        ai_center
                        mt_2
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                            size="25"
                            initial="C"
                            caption="Text for screenreader"
                          />
                        </Box>
                        <Text size2 bold>Colm Tuite</Text>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        pl_6
                        pt_1
                      >
                        <Box mr_2>
                          <GhostButton>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              stroke="currentColor"
                            >
                            <circle cx="12.5" cy="12.5" r="8"/>
                            <path d="M13.5 9.5L16.5 12.5L13.5 15.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.5 12.5H16.5" strokeLinecap="round"/>
                            </svg>
                          </GhostButton>
                        </Box>
                        <Flexbox
                          ai_baseline
                        >
                          <Text size2 mr_2>Created card</Text>
                          <Text size1 color_gray600>8 Nov at 21:26</Text>
                        </Flexbox>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        pl_6
                        pt_1
                      >
                        <Box mr_2>
                          <GhostButton>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              stroke="currentColor"
                            >
                              <circle cx="12.5" cy="12.5" r="8"/>
                              <path d="M15.5 9.5L11.5 15.5L9.5 13.456" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </GhostButton>
                        </Box>
                        <Flexbox
                          ai_baseline
                        >
                          <Text size2 mr_2>Moved to Editor Radar</Text>
                          <Text size1 color_gray600>8 Nov at 21:51</Text>
                        </Flexbox>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        mt_2
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                            size="25"
                            initial="C"
                            caption="Text for screenreader"
                          />
                        </Box>
                        <Text size2 bold>Colm Tuite</Text>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        pl_6
                        pt_1
                      >
                        <Box mr_2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            stroke="currentColor"
                          >
                          <circle cx="12.5" cy="12.5" r="8"/>
                          <path d="M13.5 9.5L16.5 12.5L13.5 15.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8.5 12.5H16.5" strokeLinecap="round"/>
                          </svg>
                        </Box>
                        <Flexbox
                          ai_baseline
                        >
                          <Text size2 mr_2>Created card</Text>
                          <Text size1 color_gray600>8 Nov at 21:26</Text>
                        </Flexbox>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        pl_6
                        pt_1
                      >
                        <Box mr_2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            stroke="currentColor"
                          >
                            <circle cx="12.5" cy="12.5" r="8"/>
                            <path d="M15.5 9.5L11.5 15.5L9.5 13.456" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Box>
                        <Flexbox
                          ai_baseline
                        >
                          <Text size2 mr_2>Moved to Editor Radar</Text>
                          <Text size1 color_gray600>8 Nov at 21:51</Text>
                        </Flexbox>
                      </Flexbox>
                    </Box>
                  </Box>
                </ListItem>

                <ListItem
                  padding_2
                >
                  <Flexbox
                    fd_column
                    mr_2
                  >
                    <GhostButton
                      mb_2
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="7.5" cy="7.5" r="6"/>
                        <path d="M9.5 5.5L6.83333 9.5L5.5 8.13736" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </GhostButton>
                    <GhostButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="currentColor"
                        stroke="none"
                      >
                        <circle cx="2.5" cy="7.5" r="1.5"/>
                        <circle cx="7.5" cy="7.5" r="1.5"/>
                        <circle cx="12.5" cy="7.5" r="1.5"/>
                      </svg>
                    </GhostButton>
                  </Flexbox>
                  <Box>
                    <Box
                      padding_2
                      bc_gray300
                    >
                      <Box
                        padding_2
                        bc_white
                      >
                        <Text
                          size3
                          lh_1
                        >
                          Editor > Radio groups need a setting so you can turn them off (italics in text)
                        </Text>
                      </Box>
                    </Box>
                    <Box
                      padding_2
                      bc_gray200
                    >
                      <Flexbox
                        ai_center
                      >
                        <Box pl_1 pr_3>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M11.5 5.5L7.5 9.5L3.5 5.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Box>
                        <Text size1>Hide previous card activity</Text>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        mt_2
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                            size="25"
                            initial="C"
                            caption="Text for screenreader"
                          />
                        </Box>
                        <Text size2 bold>Colm Tuite</Text>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        pl_6
                        pt_1
                      >
                        <Box mr_2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            stroke="currentColor"
                          >
                          <circle cx="12.5" cy="12.5" r="8"/>
                          <path d="M13.5 9.5L16.5 12.5L13.5 15.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8.5 12.5H16.5" strokeLinecap="round"/>
                          </svg>
                        </Box>
                        <Flexbox
                          ai_baseline
                        >
                          <Text size2 mr_2>Created card</Text>
                          <Text size1 color_gray600>8 Nov at 21:26</Text>
                        </Flexbox>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        pl_6
                        pt_1
                      >
                        <Box mr_2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            stroke="currentColor"
                          >
                            <circle cx="12.5" cy="12.5" r="8"/>
                            <path d="M15.5 9.5L11.5 15.5L9.5 13.456" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Box>
                        <Flexbox
                          ai_baseline
                        >
                          <Text size2 mr_2>Moved to Editor Radar</Text>
                          <Text size1 color_gray600>8 Nov at 21:51</Text>
                        </Flexbox>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        mt_2
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                            size="25"
                            initial="C"
                            caption="Text for screenreader"
                          />
                        </Box>
                        <Text size2 bold>Colm Tuite</Text>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        pl_6
                        pt_1
                      >
                        <Box mr_2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            stroke="currentColor"
                          >
                          <circle cx="12.5" cy="12.5" r="8"/>
                          <path d="M13.5 9.5L16.5 12.5L13.5 15.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8.5 12.5H16.5" strokeLinecap="round"/>
                          </svg>
                        </Box>
                        <Flexbox
                          ai_baseline
                        >
                          <Text size2 mr_2>Created card</Text>
                          <Text size1 color_gray600>8 Nov at 21:26</Text>
                        </Flexbox>
                      </Flexbox>
                      <Flexbox
                        ai_center
                        pl_6
                        pt_1
                      >
                        <Box mr_2>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            stroke="currentColor"
                          >
                            <circle cx="12.5" cy="12.5" r="8"/>
                            <path d="M15.5 9.5L11.5 15.5L9.5 13.456" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Box>
                        <Flexbox
                          ai_baseline
                        >
                          <Text size2 mr_2>Moved to Editor Radar</Text>
                          <Text size1 color_gray600>8 Nov at 21:51</Text>
                        </Flexbox>
                      </Flexbox>
                    </Box>
                  </Box>
                </ListItem>

              </List>
            </Box>

          </Flexbox>

        </Container>
      </Section>
































      {/*
      <Box bc_gray300 pt_9 height_100>
        <Box position_fixed width_100 bc_white pt_1 pb_1 as="header" style={{top: '0', zIndex: '9'}}>
          <Container size1 height_100>
            <Flexbox jc_spacebetween>
              <Flexbox>
                <Box>Home</Box>
                <Box>Moments</Box>
                <Box>Notifications</Box>
                <Box>Messages</Box>
              </Flexbox>
              <Flexbox ai_center>
                <Box mr_4>
                  <Input placeholder="Search Twitter" />
                </Box>
                <Box mr_4>
                  <Avatar
                    url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                    size="35"
                    initial="C"
                    caption="Text for screenreader"
                  />
                </Box>
                <Box>
                  <Button size2 blue>
                    Tweet
                  </Button>
                </Box>
              </Flexbox>
            </Flexbox>
          </Container>
        </Box>
        <Container size1>
          <Flexbox nml_3>
            <Box ml_3 fg_1 fb_0>
              <Box bc_white mb_2>
                <AspectRatio ratio_169>
                  <BackgroundImage
                    src="https://images.unsplash.com/photo-1541944561160-54e0cd4a7e17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41729b83bd458d869d7f906d0635f5b5&auto=format&fit=crop&w=1500&q=80"
                  >

                  </BackgroundImage>
                </AspectRatio>
                <Box padding_2>
                  <Flexbox mb_3>
                    <Box mr_2>
                      <Box bc_white padding_1 nmt_7 position_absolute style={{borderRadius: '50%'}}>
                        <Avatar
                          size6
                          url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                          size="80"
                          initial="C"
                          caption="Text for screenreader"
                        />
                      </Box>
                    </Box>
                    <Box pl_9 ml_2>
                      <Text size5 bold mb_1>Colm Tuite</Text>
                      <Text size2 color_gray600>@colmtuite</Text>
                    </Box>
                  </Flexbox>
                  <Flexbox>
                    <Box fg_1 fb_0>
                      <Text size2 bold color_gray600 mb_1>Tweets</Text>
                      <Text size4 bold>5111</Text>
                    </Box>
                    <Box fg_1 fb_0>
                      <Text size2 bold color_gray600 mb_1>Following</Text>
                      <Text size4 bold>549</Text>
                    </Box>
                    <Box fg_1 fb_0>
                      <Text size2 bold color_gray600 mb_1>Followers</Text>
                      <Text size4 bold>2365</Text>
                    </Box>
                  </Flexbox>
                </Box>
              </Box>
              <Box padding_2 bc_white>
                wfwfe
              </Box>
            </Box>
            <Box ml_3 style={{width: '590px'}}>
              <Box bc_white>
                <Box pt_2 pb_2 pl_3 bc_gray200>
                  <Flexbox>
                    <Box mr_2>
                      <Avatar
                        url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                        size="35"
                        initial="C"
                        caption="Text for screenreader"
                      />
                    </Box>
                    <Input size3 placeholder="What's happening?" />
                  </Flexbox>
                </Box>
                <Flexbox padding_3>
                  <Box mr_2>
                    <Avatar
                      size4
                      url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                      size="45"
                      initial="C"
                      caption="Text for screenreader"
                    />
                  </Box>
                  <Box fg_1>
                    <Box>
                      <AspectRatio ratio_169>
                        <BackgroundImage
                          src="https://images.unsplash.com/photo-1541944561160-54e0cd4a7e17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41729b83bd458d869d7f906d0635f5b5&auto=format&fit=crop&w=1500&q=80"
                        >

                        </BackgroundImage>
                      </AspectRatio>
                      <Box padding_2>
                        <Text size3 lh_1 bold mb_1>Building successful design systems with a well integrated research</Text>
                        <Text size3 lh_1 mb_1>A guide for using research when (or before) starting to build a design system.</Text>
                        <Text size2 lh_1 color_gray600>publication.design.systems</Text>
                      </Box>
                    </Box>
                  </Box>
                </Flexbox>
                <Flexbox padding_2>
                  <Box mr_2>
                    <Avatar
                      size4
                      url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                      size="45"
                      initial="C"
                      caption="Text for screenreader"
                    />
                  </Box>
                  <Text size3 lh_1 as="p">As someone who both design and code, I couldn't agree more. I keep jumping from design to code, editing things back and forth, and it got me thinking that there gotta be a better way. Sadly, up until now, there isn't. And that's why I'm so looking forward to trying @Modulz</Text>
                </Flexbox>
                <Flexbox padding_2>
                  <Box mr_2>
                    <Avatar
                      size4
                      url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                      size="45"
                      initial="C"
                      caption="Text for screenreader"
                    />
                  </Box>
                  <Text size3 lh_1 as="p">As someone who both design and code, I couldn't agree more. I keep jumping from design to code, editing things back and forth, and it got me thinking that there gotta be a better way. Sadly, up until now, there isn't. And that's why I'm so looking forward to trying @Modulz</Text>
                </Flexbox>
                <Flexbox padding_2>
                  <Box mr_2>
                    <Avatar
                      size4
                      url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                      size="45"
                      initial="C"
                      caption="Text for screenreader"
                    />
                  </Box>
                  <Text size3 lh_1 as="p">As someone who both design and code, I couldn't agree more. I keep jumping from design to code, editing things back and forth, and it got me thinking that there gotta be a better way. Sadly, up until now, there isn't. And that's why I'm so looking forward to trying @Modulz</Text>
                </Flexbox>
                <Flexbox padding_2>
                  <Box mr_2>
                    <Avatar
                      size4
                      url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                      size="45"
                      initial="C"
                      caption="Text for screenreader"
                    />
                  </Box>
                  <Text size3 lh_1 as="p">As someone who both design and code, I couldn't agree more. I keep jumping from design to code, editing things back and forth, and it got me thinking that there gotta be a better way. Sadly, up until now, there isn't. And that's why I'm so looking forward to trying @Modulz</Text>
                </Flexbox>
                <Flexbox padding_2>
                  <Box mr_2>
                    <Avatar
                      size4
                      url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                      size="45"
                      initial="C"
                      caption="Text for screenreader"
                    />
                  </Box>
                  <Text size3 lh_1 as="p">As someone who both design and code, I couldn't agree more. I keep jumping from design to code, editing things back and forth, and it got me thinking that there gotta be a better way. Sadly, up until now, there isn't. And that's why I'm so looking forward to trying @Modulz</Text>
                </Flexbox>
                <Flexbox padding_2>
                  <Box mr_2>
                    <Avatar
                      size4
                      url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                      size="45"
                      initial="C"
                      caption="Text for screenreader"
                    />
                  </Box>
                  <Text size3 lh_1 as="p">As someone who both design and code, I couldn't agree more. I keep jumping from design to code, editing things back and forth, and it got me thinking that there gotta be a better way. Sadly, up until now, there isn't. And that's why I'm so looking forward to trying @Modulz</Text>
                </Flexbox>
                <Flexbox padding_2>
                  <Box mr_2>
                    <Avatar
                      size4
                      url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                      size="45"
                      initial="C"
                      caption="Text for screenreader"
                    />
                  </Box>
                  <Text size3 lh_1 as="p">As someone who both design and code, I couldn't agree more. I keep jumping from design to code, editing things back and forth, and it got me thinking that there gotta be a better way. Sadly, up until now, there isn't. And that's why I'm so looking forward to trying @Modulz</Text>
                </Flexbox>
                <Flexbox padding_2>
                  <Box mr_2>
                    <Avatar
                      size4
                      url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                      size="45"
                      initial="C"
                      caption="Text for screenreader"
                    />
                  </Box>
                  <Text size3 lh_1 as="p">As someone who both design and code, I couldn't agree more. I keep jumping from design to code, editing things back and forth, and it got me thinking that there gotta be a better way. Sadly, up until now, there isn't. And that's why I'm so looking forward to trying @Modulz</Text>
                </Flexbox>
                <Flexbox padding_2>
                  <Box mr_2>
                    <Avatar
                      size4
                      url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                      size="45"
                      initial="C"
                      caption="Text for screenreader"
                    />
                  </Box>
                  <Text size3 lh_1 as="p">As someone who both design and code, I couldn't agree more. I keep jumping from design to code, editing things back and forth, and it got me thinking that there gotta be a better way. Sadly, up until now, there isn't. And that's why I'm so looking forward to trying @Modulz</Text>
                </Flexbox>
              </Box>
            </Box>
            <Box ml_3 fg_1 fb_0>
              <Box bc_white>
                <Flexbox ai_baseline>
                  <Heading size1 bold>Who to follow</Heading>
                  <Text size1 color_gray600>Refresh</Text>
                  <Text size1 color_gray600>View all</Text>
                </Flexbox>
              <List pt_1 pb_1>
                <ListItem>
                  <Flexbox ai_center>
                    <Box mr_2>
                      <Avatar
                        size4
                        url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                        size="45"
                        initial="C"
                        caption="Text for screenreader"
                      />
                    </Box>
                    <Box fg_1>
                      <Flexbox ai_center jc_spacebetween>
                        <Flexbox ai_baseline mb_1>
                          <Text size2 bold mr_1>Colm Tuite</Text>
                          <Text size1 color_gray600>@colmtuite</Text>
                        </Flexbox>
                        <GhostButton size1 style={{width: '15px',height: '15px'}}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M2.5 12.5L12.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.5 12.5L2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                      <Button>
                        Follow
                      </Button>
                    </Box>
                  </Flexbox>
                </ListItem>
                <li>
                  <Divider
                    mt_1
                    mb_1
                  />
                </li>
                <ListItem>
                  <Flexbox ai_center>
                    <Box mr_2>
                      <Avatar
                        size4
                        url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                        size="45"
                        initial="C"
                        caption="Text for screenreader"
                      />
                    </Box>
                    <Box fg_1>
                      <Flexbox ai_center jc_spacebetween>
                        <Flexbox ai_baseline mb_1>
                          <Text size2 bold mr_1>Colm Tuite</Text>
                          <Text size1 color_gray600>@colmtuite</Text>
                        </Flexbox>
                        <GhostButton size1 style={{width: '15px',height: '15px'}}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path d="M2.5 12.5L12.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.5 12.5L2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </GhostButton>
                      </Flexbox>
                      <Button>
                        Follow
                      </Button>
                    </Box>
                  </Flexbox>
                </ListItem>
                <li>
                  <Divider
                    mt_1
                    mb_1
                  />
                </li>
                <MenuItem>
                  <Box mr_3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M5.5 11.9142V20.5H10.5V15C10.5 14.7239 10.7239 14.5 11 14.5H14C14.2761 14.5 14.5 14.7239 14.5 15V20.5H19.5V11.9142C19.5 11.649 19.3946 11.3946 19.2071 11.2071L12.5 4.5L5.79289 11.2071C5.60536 11.3946 5.5 11.649 5.5 11.9142Z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                  <Text size2>Log out</Text>
                </MenuItem>
                <MenuItem>
                  <Box mr_3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                    >
                    <circle cx="12.5" cy="12.5" r="8"/>
                    <path d="M5.5 16C9.875 17.3333 15.125 17.3333 19.5 16" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.5 9C10 7.66666 15 7.66667 19.5 9" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 20.5C6.5 18 6.49999 7 12.5 4.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 20.5C18.5 18 18.5 7 12.5001 4.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.5 12.5H20.5"/>
                    <path d="M12.5 4.5V20.5"/>
                    </svg>
                  </Box>
                  <Text size2>Log out</Text>
                </MenuItem>
                <MenuItem>
                  <Box mr_3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                    >
                    <circle cx="12.5" cy="12.5" r="3"/>
                    <circle cx="12.5" cy="12.5" r="8"/>
                    <path d="M6.5 18.5L10.5 14.5"/>
                    <path d="M14.5 10.5L18.5 6.5"/>
                    <path d="M10.5 10.5L6.5 6.5"/>
                    <path d="M18 18L14.5 14.5"/>
                    </svg>
                  </Box>
                  <Text size2>Log out</Text>
                </MenuItem>
                <li>
                  <Divider
                    mt_1
                    mb_1
                  />
                </li>
                <MenuItem>
                  <Box mr_3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                    >
                    <rect x="4.5" y="8.5" width="16" height="12" rx="1.5"/>
                    <path d="M5.5 8C5.5 7.17157 6.17157 6.5 7 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V8.5H5.5V8Z"/>
                    <path d="M6.5 6C6.5 5.17157 7.17157 4.5 8 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V6.5H6.5V6Z"/>
                    <path d="M9.5 17.5L15.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.5 17.5L9.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                  <Text size2>Log out</Text>
                </MenuItem>
                <li>
                  <Divider
                    mt_1
                    mb_1
                  />
                </li>
                <MenuItem>
                  <Box>
                    <Box mb_1>
                      <Flexbox ai_center>
                        <Box mr_4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            stroke="currentColor"
                          >
                          <rect x="4.5" y="8.5" width="16" height="12" rx="1.5"/>
                          <path d="M5.5 8C5.5 7.17157 6.17157 6.5 7 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V8.5H5.5V8Z"/>
                          <path d="M6.5 6C6.5 5.17157 7.17157 4.5 8 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V6.5H6.5V6Z"/>
                          <path d="M9.5 17.5L15.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15.5 17.5L9.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Box>
                        <Text size3 lh_1 bold>Log out</Text>
                      </Flexbox>
                    </Box>
                    <Text size2 lh_1 color_gray600 ml_7>How to scale meaningful design in a multi-device world</Text>
                  </Box>
                </MenuItem>
                <MenuItem>
                  <Box>
                    <Box mb_1>
                      <Flexbox ai_center>
                        <Box mr_4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            stroke="currentColor"
                          >
                          <rect x="4.5" y="8.5" width="16" height="12" rx="1.5"/>
                          <path d="M5.5 8C5.5 7.17157 6.17157 6.5 7 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V8.5H5.5V8Z"/>
                          <path d="M6.5 6C6.5 5.17157 7.17157 4.5 8 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V6.5H6.5V6Z"/>
                          <path d="M9.5 17.5L15.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15.5 17.5L9.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Box>
                        <Text size3 lh_1 bold>Log out</Text>
                      </Flexbox>
                    </Box>
                    <Text size2 lh_1 color_gray600 ml_7>How to scale meaningful design in a multi-device world</Text>
                  </Box>
                </MenuItem>
                <MenuItem>
                  <Box>
                    <Box mb_1>
                      <Flexbox ai_center>
                        <Box mr_4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            stroke="currentColor"
                          >
                          <rect x="4.5" y="8.5" width="16" height="12" rx="1.5"/>
                          <path d="M5.5 8C5.5 7.17157 6.17157 6.5 7 6.5H18C18.8284 6.5 19.5 7.17157 19.5 8V8.5H5.5V8Z"/>
                          <path d="M6.5 6C6.5 5.17157 7.17157 4.5 8 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V6.5H6.5V6Z"/>
                          <path d="M9.5 17.5L15.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15.5 17.5L9.5 11.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Box>
                        <Text size3 lh_1 bold>Log out</Text>
                      </Flexbox>
                    </Box>
                    <Text size2 lh_1 color_gray600 ml_7>How to scale meaningful design in a multi-device world</Text>
                  </Box>
                </MenuItem>
              </List>
              </Box>
            </Box>
          </Flexbox>
        </Container>
      </Box> */}

    </DialogRoot>
  }
}

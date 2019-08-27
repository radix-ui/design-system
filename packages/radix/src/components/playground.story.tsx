import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './Card';
import { Menu, MenuGroup, MenuItem } from './Menu';
import { Box } from './Box';
import { Flex } from './Flex';
import { Text } from './Text';
import { Input } from './Input';
import { Slider } from './Slider';
import { ToggleButtonGroup, ToggleButton } from './ToggleButton';
import { Select } from './Select';
import { Button } from './Button';
import { Heading } from './Heading';
import { GhostButton } from './GhostButton';
import {
  AlignStretchIcon,
  AlignStartIcon,
  AlignCenterIcon,
  AlignBaselineIcon,
  AlignEndIcon,
  HamburgerIcon,
  DotsVerticalIcon,
} from '@modulz/radix-icons';

import { Popover } from 'mdlz-prmtz';

function PopoverExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  return (
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <GhostButton type="button" ref={buttonRef} onClick={() => setIsOpen(true)} size={1}>
        <DotsVerticalIcon />
      </GhostButton>

      <Popover
        targetRef={buttonRef}
        isOpen={isOpen}
        side="bottom"
        align="center"
        onDismiss={() => setIsOpen(false)}
      >
        <Card variant="shadow" p={0} width={120} borderWidth={0}>
          <Menu>
            <MenuItem>
              <Text size={2}>Rename</Text>
            </MenuItem>
            <MenuItem>
              <Text size={2}>Edit</Text>
            </MenuItem>
            <MenuGroup>
              <MenuItem>
                <Text size={2}>Delete</Text>
              </MenuItem>
            </MenuGroup>
            <MenuItem>
              <Text size={2}>Copy</Text>
            </MenuItem>
          </Menu>
        </Card>
      </Popover>
    </div>
  );
}

storiesOf('Playground', module).add('popover', () => <PopoverExample />);

// storiesOf('Playground', module).add('default', () => (
//   <Box>
//     <Box my={5}>
//       <Box my={4}>
//         <Label>Default</Label>
//         <Input value="Auto" width={60} />
//       </Box>
//       <Box my={4}>
//         <Label>Disabled</Label>
//         <Input value="Auto" width={60} disabled />
//       </Box>
//       <Box my={4}>
//         <Label>Fade</Label>
//         <Input value="50%" width={60} variant="fade" />
//       </Box>
//     </Box>

//     <Box my={5}>
//       <Flex my={4} alignItems="center">
//         <Label>Default</Label>
//         <Box width={350}>
//           <Select width="100px">
//             <option value="option1">Option 1</option>
//             <option value="option2">Option 2</option>
//             <option value="option3">Option 3</option>
//           </Select>
//         </Box>
//       </Flex>
//       <Flex my={4} alignItems="center">
//         <Label>Fade</Label>
//         <Box width={350}>
//           <Select width="100px" variant="fade">
//             <option value="option1">Option 1</option>
//             <option value="option2">Option 2</option>
//             <option value="option3">Option 3</option>
//           </Select>
//         </Box>
//       </Flex>
//     </Box>

//     <Box my={5}>
//       <Flex my={4} alignItems="center">
//         <Label>Default</Label>
//         <Box width={350}>
//           <ToggleButtonGroup name="align">
//             <ToggleButton defaultChecked>
//               <AlignStretchIcon size="25" />
//             </ToggleButton>
//             <ToggleButton>
//               <AlignStartIcon size="25" />
//             </ToggleButton>
//             <ToggleButton>
//               <AlignCenterIcon size="25" />
//             </ToggleButton>
//             <ToggleButton>
//               <AlignBaselineIcon size="25" />
//             </ToggleButton>
//             <ToggleButton>
//               <AlignEndIcon size="25" />
//             </ToggleButton>
//           </ToggleButtonGroup>
//         </Box>
//       </Flex>
//       <Flex my={4} alignItems="center">
//         <Label>Fade</Label>
//         <Box width={350}>
//           <ToggleButtonGroup name="align2" variant="fade">
//             <ToggleButton defaultChecked>
//               <AlignStretchIcon size="25" />
//             </ToggleButton>
//             <ToggleButton>
//               <AlignStartIcon size="25" />
//             </ToggleButton>
//             <ToggleButton>
//               <AlignCenterIcon size="25" />
//             </ToggleButton>
//             <ToggleButton>
//               <AlignBaselineIcon size="25" />
//             </ToggleButton>
//             <ToggleButton>
//               <AlignEndIcon size="25" />
//             </ToggleButton>
//           </ToggleButtonGroup>
//         </Box>
//       </Flex>
//     </Box>

//     <Box my={5}>
//       <Flex my={4} alignItems="center">
//         <Label>Default</Label>
//         <Box width={350}>
//           <Slider />
//         </Box>
//       </Flex>
//       <Flex my={4} alignItems="center">
//         <Label>Fade</Label>
//         <Box width={350}>
//           <Slider variant="fade" />
//         </Box>
//       </Flex>
//     </Box>
//   </Box>
// ));

// const Label = (props: any) => (
//   <Text
//     mr={3}
//     textAlign="right"
//     color="grays.5"
//     size={2}
//     style={{ width: 60, display: 'inline-block' }}
//     {...props}
//   />
// );

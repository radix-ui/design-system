import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { Flex } from './Flex';
import { Text } from './Text';
import { ToggleButton } from './ToggleButton';
import { Tooltip } from './Tooltip';
import { TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from '@modulz/radix-icons';

function ToggleButtonStory() {
  const [value, setValue] = useState('center');

  return (
    <>
      <Box my={6} sx={{ width: '135px' }}>
        <Flex role="group" sx={{ '& > * + *': { ml: '-1px !important' } }}>
          <ToggleButton
            size={0}
            isToggled={value === 'left'}
            onToggle={isToggled => isToggled && setValue('left')}
          >
            <TextAlignLeftIcon />
          </ToggleButton>
          <ToggleButton
            size={0}
            isToggled={value === 'center'}
            onToggle={isToggled => isToggled && setValue('center')}
          >
            <TextAlignCenterIcon />
          </ToggleButton>
          <ToggleButton
            size={0}
            isToggled={value === 'right'}
            onToggle={isToggled => isToggled && setValue('right')}
          >
            <TextAlignRightIcon />
          </ToggleButton>
        </Flex>
      </Box>

      <Box my={6} sx={{ width: '135px' }}>
        <Flex role="group" sx={{ '& > * + *': { ml: '-1px !important' } }}>
          <ToggleButton
            size={0}
            isToggled={value === 'left'}
            onToggle={isToggled => isToggled && setValue('left')}
          >
            Left
          </ToggleButton>
          <ToggleButton
            size={0}
            isToggled={value === 'center'}
            onToggle={isToggled => isToggled && setValue('center')}
          >
            Center
          </ToggleButton>
          <ToggleButton
            size={0}
            isToggled={value === 'right'}
            onToggle={isToggled => isToggled && setValue('right')}
          >
            Right
          </ToggleButton>
        </Flex>
      </Box>

      <Box my={6} sx={{ width: '135px' }}>
        <Flex role="group" sx={{ '& > * + *': { ml: '-1px !important' } }}>
          <ToggleButton
            size={0}
            variant="fade"
            isToggled={value === 'left'}
            onToggle={isToggled => isToggled && setValue('left')}
          >
            Left
          </ToggleButton>
          <ToggleButton
            size={0}
            variant="fade"
            isToggled={value === 'center'}
            onToggle={isToggled => isToggled && setValue('center')}
          >
            Center
          </ToggleButton>
          <ToggleButton
            size={0}
            variant="fade"
            isToggled={value === 'right'}
            onToggle={isToggled => isToggled && setValue('right')}
          >
            Right
          </ToggleButton>
        </Flex>
      </Box>

      <Box my={6} sx={{ width: '180px' }}>
        <Flex role="group" sx={{ '& > * + *': { ml: '-1px !important' } }}>
          <ToggleButton
            isToggled={value === 'left'}
            onToggle={isToggled => isToggled && setValue('left')}
          >
            <TextAlignLeftIcon />
          </ToggleButton>
          <ToggleButton
            isToggled={value === 'center'}
            onToggle={isToggled => isToggled && setValue('center')}
          >
            <TextAlignCenterIcon />
          </ToggleButton>
          <ToggleButton
            isToggled={value === 'right'}
            onToggle={isToggled => isToggled && setValue('right')}
          >
            <TextAlignRightIcon />
          </ToggleButton>
        </Flex>
      </Box>

      <Box my={6} sx={{ width: '180px' }}>
        <Flex role="group" sx={{ '& > * + *': { ml: '-1px !important' } }}>
          <ToggleButton
            isToggled={value === 'left'}
            onToggle={isToggled => isToggled && setValue('left')}
          >
            Left
          </ToggleButton>
          <ToggleButton
            isToggled={value === 'center'}
            onToggle={isToggled => isToggled && setValue('center')}
          >
            Center
          </ToggleButton>
          <ToggleButton
            isToggled={value === 'right'}
            onToggle={isToggled => isToggled && setValue('right')}
          >
            Right
          </ToggleButton>
        </Flex>
      </Box>

      <Box my={6} sx={{ width: '180px' }}>
        <Flex role="group" sx={{ '& > * + *': { ml: '-1px !important' } }}>
          <ToggleButton
            variant="fade"
            isToggled={value === 'left'}
            onToggle={isToggled => isToggled && setValue('left')}
          >
            Left
          </ToggleButton>
          <ToggleButton
            variant="fade"
            isToggled={value === 'center'}
            onToggle={isToggled => isToggled && setValue('center')}
          >
            Center
          </ToggleButton>
          <ToggleButton
            variant="fade"
            isToggled={value === 'right'}
            onToggle={isToggled => isToggled && setValue('right')}
          >
            Right
          </ToggleButton>
        </Flex>
      </Box>

      <Box my={6} sx={{ width: '180px' }}>
        <Text size={1} my={1} as="p">
          With Tooltip
        </Text>
        <Flex role="group" sx={{ '& > * + *': { ml: '-1px !important' } }}>
          <Tooltip label="Left" align="center">
            <ToggleButton
              isToggled={value === 'left'}
              onToggle={isToggled => isToggled && setValue('left')}
            >
              Left
            </ToggleButton>
          </Tooltip>
          <Tooltip label="Center" align="center">
            <ToggleButton
              isToggled={value === 'center'}
              onToggle={isToggled => isToggled && setValue('center')}
            >
              Center
            </ToggleButton>
          </Tooltip>
          <Tooltip label="Right" align="center">
            <ToggleButton
              isToggled={value === 'right'}
              onToggle={isToggled => isToggled && setValue('right')}
            >
              Right
            </ToggleButton>
          </Tooltip>
        </Flex>
      </Box>
    </>
  );
}

storiesOf('Components|ToggleButton', module).add('default', () => <ToggleButtonStory />);

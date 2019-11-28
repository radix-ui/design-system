import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from './Grid';
import { Flex } from './Flex';
import { Button } from './Button';
import { Tooltip } from './Tooltip';
import {
  PinTopIcon,
  PinRightIcon,
  PinBottomIcon,
  PinLeftIcon,
  AlignStartIcon,
  AlignCenterIcon,
  AlignEndIcon,
  JustifyStartIcon,
  JustifyCenterIcon,
  JustifyEndIcon,
} from '@modulz/radix-icons';

storiesOf('Components|Tooltip', module).add('default', () => (
  <>
    <Flex width="100vw" height="100vh" alignItems="center" justifyContent="center">
      <Grid gridTemplateColumns="repeat(5, 1fr)" gridTemplateRows="repeat(5, 1fr)">
        <Tooltip isOpen label="Top start" side="top" align="start">
          <Button css={{ gridColumn: '2', gridRow: '1', justifyContent: 'center' }} m={1} size={1}>
            <PinTopIcon size="25" /> <JustifyStartIcon size="25" />
          </Button>
        </Tooltip>
        <Tooltip label="Top center" side="top" align="center">
          <Button css={{ gridColumn: '3', gridRow: '1', justifyContent: 'center' }} m={1} size={1}>
            <PinTopIcon size="25" /> <JustifyCenterIcon size="25" />
          </Button>
        </Tooltip>
        <Tooltip label="Top end" side="top" align="end">
          <Button css={{ gridColumn: '4', gridRow: '1', justifyContent: 'center' }} m={1} size={1}>
            <PinTopIcon size="25" /> <JustifyEndIcon size="25" />
          </Button>
        </Tooltip>

        <Tooltip label="Right start" side="right" align="start">
          <Button css={{ gridColumn: '5', gridRow: '2', justifyContent: 'center' }} m={1} size={1}>
            <PinRightIcon size="25" /> <AlignStartIcon size="25" />
          </Button>
        </Tooltip>
        <Tooltip label="Right center" side="right" align="center">
          <Button css={{ gridColumn: '5', gridRow: '3', justifyContent: 'center' }} m={1} size={1}>
            <PinRightIcon size="25" /> <AlignCenterIcon size="25" />
          </Button>
        </Tooltip>
        <Tooltip label="Right end" side="right" align="end">
          <Button css={{ gridColumn: '5', gridRow: '4', justifyContent: 'center' }} m={1} size={1}>
            <PinRightIcon size="25" /> <AlignEndIcon size="25" />
          </Button>
        </Tooltip>

        <Tooltip label="Bottom end" side="bottom" align="end">
          <Button css={{ gridColumn: '4', gridRow: '5', justifyContent: 'center' }} m={1} size={1}>
            <PinBottomIcon size="25" /> <JustifyEndIcon size="25" />
          </Button>
        </Tooltip>
        <Tooltip label="Bottom center" side="bottom" align="center">
          <Button css={{ gridColumn: '3', gridRow: '5', justifyContent: 'center' }} m={1} size={1}>
            <PinBottomIcon size="25" /> <JustifyCenterIcon size="25" />
          </Button>
        </Tooltip>
        <Tooltip label="Bottom start" side="bottom" align="start">
          <Button css={{ gridColumn: '2', gridRow: '5', justifyContent: 'center' }} m={1} size={1}>
            <PinBottomIcon size="25" /> <JustifyEndIcon size="25" />
          </Button>
        </Tooltip>

        <Tooltip label="Left end" side="left" align="end">
          <Button css={{ gridColumn: '1', gridRow: '4', justifyContent: 'center' }} m={1} size={1}>
            <PinLeftIcon size="25" /> <AlignEndIcon size="25" />
          </Button>
        </Tooltip>
        <Tooltip label="Left center" side="left" align="center">
          <Button css={{ gridColumn: '1', gridRow: '3', justifyContent: 'center' }} m={1} size={1}>
            <PinLeftIcon size="25" /> <AlignCenterIcon size="25" />
          </Button>
        </Tooltip>
        <Tooltip label="Left start" side="left" align="start">
          <Button css={{ gridColumn: '1', gridRow: '2', justifyContent: 'center' }} m={1} size={1}>
            <PinLeftIcon size="25" /> <AlignStartIcon size="25" />
          </Button>
        </Tooltip>
      </Grid>
    </Flex>
  </>
));

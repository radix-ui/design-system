import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Box from './Box';
import Flexbox from './Flexbox';
import GhostButton from './GhostButton';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme.SPACING_700};
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  zIndex: 9;
`;

const Panel = styled.div`
  background-color: white;
  border-radius: ${theme.BORDERRADIUS_200};
  box-shadow:
    0 10px 38px -10px hsla(208,24%,7%,.35),
    0 10px 20px -15px hsla(208,24%,7%,.2);
  max-height: 100%;
  opacity: 0;
  overflow: hidden;
  transition-duration: 80ms;
  transition-property: opacity, transform;
  transition-timing-function: linear;
  transform: translateY(-5px);
  width: 100%;
  z-index: 8;

  ${p => p.size1 && css`
    max-width: 800px;
  `}

  ${p => p.size2 && css`
    max-width: 400px;
  `}

  ${p => p.expanded && css`
    height: 100%;
  `}

  ${p => p.active && css`
    opacity: 1;
    transform: translateY(0);
  `}
`;

const Dialog = () => (
  <Container>
    <Box
      position_absolute
      pt_1
      pr_1
      style={{
        top: '0',
        right: '0'
      }}
    >
      <GhostButton size2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          stroke="currentColor"
        >
          <path d="M7.5 17.5L17.5 7.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 17.5L7.5 7.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </GhostButton>
    </Box>
    <Panel size2 expanded active>
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
          <Text size3 lh_2>
            Absolutely any content can go inside the dialog. No restrictions at all.
          </Text>
          <Text size3 lh_2>
            Absolutely any content can go inside the dialog. No restrictions at all.
          </Text>
          <Text size3 lh_2>
            Absolutely any content can go inside the dialog. No restrictions at all.
          </Text>
          <Text size3 lh_2>
            Absolutely any content can go inside the dialog. No restrictions at all.
          </Text>
          <Text size3 lh_2>
            Absolutely any content can go inside the dialog. No restrictions at all.
          </Text>
          <Text size3 lh_2>
            Absolutely any content can go inside the dialog. No restrictions at all.
          </Text>
          <Text size3 lh_2>
            Absolutely any content can go inside the dialog. No restrictions at all.
          </Text>
          <Text size3 lh_2>
            Absolutely any content can go inside the dialog. No restrictions at all.
          </Text>
          <Text size3 lh_2>
            Absolutely any content can go inside the dialog. No restrictions at all.
          </Text>
          <Text size3 lh_2>
            Absolutely any content can go inside the dialog. No restrictions at all.
          </Text>
        </Box>
        <Box padding_4 fs_0>
          <Flexbox jc_flexend>
            <Button size2 mr_4>
              Cancel
            </Button>
            <Button size2 blue>
              Accept
            </Button>
          </Flexbox>
        </Box>
      </Flexbox>
    </Panel>
  </Container>
);

export default Dialog;

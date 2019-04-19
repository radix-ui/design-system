import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from './Box';
import { ToggleButtonGroup, ToggleButton } from './ToggleButton';

storiesOf('Components|ToggleButton', module).add('default', () => (
  <>
    <Box width="500px" mb="4">
      <ToggleButtonGroup name="direction">
        <ToggleButton defaultChecked="true">Row</ToggleButton>
        <ToggleButton>Column</ToggleButton>
      </ToggleButtonGroup>
    </Box>

    <Box width="500px">
      <ToggleButtonGroup name="align">
        <ToggleButton defaultChecked="true">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block',
            }}
          >
            <path d="M4.5 4.5V20.5" strokeLinecap="round" />
            <rect x="4.5" y="8.5" width="4" height="8" />
            <rect x="8.5" y="8.5" width="4" height="8" />
          </svg>
        </ToggleButton>
        <ToggleButton>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block',
            }}
          >
            <path d="M12.5 4.5V20.5" strokeLinecap="round" />
            <rect x="8.5" y="8.5" width="4" height="8" />
            <rect x="12.5" y="8.5" width="4" height="8" />
          </svg>
        </ToggleButton>
        <ToggleButton>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block',
            }}
          >
            <path d="M20.5 4.5V20.5" strokeLinecap="round" />
            <rect x="12.5" y="8.5" width="4" height="8" />
            <rect x="16.5" y="8.5" width="4" height="8" />
          </svg>
        </ToggleButton>
        <ToggleButton>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block',
            }}
          >
            <path d="M20.5 4.5V20.5" strokeLinecap="round" />
            <path d="M4.5 4.5V20.5" strokeLinecap="round" />
            <rect x="4.5" y="8.5" width="4" height="8" />
            <rect x="16.5" y="8.5" width="4" height="8" />
          </svg>
        </ToggleButton>
        <ToggleButton>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: 'block',
            }}
          >
            <path d="M20.5 4.5V20.5" strokeLinecap="round" />
            <path d="M4.5 4.5V20.5" strokeLinecap="round" />
            <path d="M12.5 4.5V20.5" strokeLinecap="round" />
            <rect x="6.5" y="8.5" width="4" height="8" />
            <rect x="14.5" y="8.5" width="4" height="8" />
          </svg>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  </>
));

import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const ToggleButtonGroup = styled.div`
  display: flex;

  > label div {
    border-radius: 0;
    margin-left: -1px;
    z-index: 1;
  }

  > label:first-child div {
    border-radius: ${theme.BORDERRADIUS_100} 0 0 ${theme.BORDERRADIUS_100};
    margin-left: 0;
    z-index: 2;
  }

  > label:last-child div {
    border-radius: 0 ${theme.BORDERRADIUS_100} ${theme.BORDERRADIUS_100} 0;
    margin-left: -2px;
    z-index: 0;
  }

  > label div:hover {
    z-index: 3;
  }
`;

export default ToggleButtonGroup;

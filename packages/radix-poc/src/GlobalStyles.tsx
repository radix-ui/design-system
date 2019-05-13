import React from 'react';
import { Global } from '@emotion/core';
import css from '@styled-system/css';
import {
  UntitledSansWoff,
  UntitledSansWoff2,
  UntitledSansMediumWoff,
  UntitledSansMediumWoff2,
} from './fonts';
import merge from 'lodash.merge';

export const GlobalStyles = () => {
  return (
    <Global
      styles={merge(
        css({
          '*': {
            boxSizing: 'border-box',
          },
          html: {
            fontSize: '100%',
            fontFamily: 'normal',
            color: 'grays.7',
            backgroundColor: 'white',
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            textRendering: 'optimizeLegibility',
          },
          body: {
            margin: 0,
          },
          'input, button, select, textarea': {
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'normal',
            color: 'inherit',
          },
          svg: {
            verticalAlign: 'middle',
          },
          '@font-face': [
            {
              fontFamily: 'UntitledSans',
              src: `local('UntitledSans'), url(${UntitledSansWoff}) format('woff2'),
            local('UntitledSans'), url(${UntitledSansWoff2}) format('woff')`,
            },
            {
              fontFamily: 'UntitledSans-Medium',
              src: `local('UntitledSans-Medium'),
            url(${UntitledSansMediumWoff}) format('woff2'),
            local('UntitledSans-Medium'),
            url(${UntitledSansMediumWoff2}) format('woff')`,
            },
          ],
        }),
        {
          html: { lineHeight: 1.2 },
        }
      )}
    />
  );
};

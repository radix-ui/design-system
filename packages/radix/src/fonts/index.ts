import { css } from 'styled-components';
import { default as UntitledSansWoff } from './UntitledSansWeb-Regular.woff';
import { default as UntitledSansWoff2 } from './UntitledSansWeb-Regular.woff2';
import { default as UntitledSansMediumWoff } from './UntitledSansWeb-Medium.woff';
import { default as UntitledSansMediumWoff2 } from './UntitledSansWeb-Medium.woff2';
import { default as RadixDuoBoldWoff } from './RadixDuo-Bold.woff';
import { default as RadixDuoBoldWoff2 } from './RadixDuo-Bold.woff2';
import { default as RadixDuoBoldItalicWoff } from './RadixDuo-BoldItalic.woff';
import { default as RadixDuoBoldItalicWoff2 } from './RadixDuo-BoldItalic.woff2';
import { default as RadixDuoItalicWoff } from './RadixDuo-Italic.woff';
import { default as RadixDuoItalicWoff2 } from './RadixDuo-Italic.woff2';
import { default as RadixDuoRegularWoff } from './RadixDuo-Regular.woff';
import { default as RadixDuoRegularWoff2 } from './RadixDuo-Regular.woff2';

export const fontStyles = css`
  @font-face {
    font-family: 'UntitledSans';
    font-weight: 400;
    font-display: swap;
    src: local('UntitledSans'), url(${UntitledSansWoff2}) format('woff2'),
      url(${UntitledSansWoff}) format('woff');
  }

  @font-face {
    font-family: 'UntitledSans';
    font-weight: 500;
    font-display: swap;
    src: local('UntitledSans-Medium'), url(${UntitledSansMediumWoff2}) format('woff2'),
      url(${UntitledSansMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'RadixDuo';
    font-weight: 400;
    font-display: swap;
    src: local('RadixDuo-Regular'), url(${RadixDuoRegularWoff2}) format('woff2'),
      url(${RadixDuoRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'RadixDuo';
    font-weight: 400;
    font-style: italic;
    font-display: swap;
    src: local('RadixDuo-Italic'), url(${RadixDuoItalicWoff2}) format('woff2'),
      url(${RadixDuoItalicWoff}) format('woff');
  }

  @font-face {
    font-family: 'RadixDuo';
    font-weight: 700;
    font-display: swap;
    src: local('RadixDuo-Bold'), url(${RadixDuoBoldWoff2}) format('woff2'),
      url(${RadixDuoBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'RadixDuo';
    font-weight: 700;
    font-style: italic;
    font-display: swap;
    src: local('RadixDuo-BoldItalic'), url(${RadixDuoBoldItalicWoff2}) format('woff2'),
      url(${RadixDuoBoldItalicWoff}) format('woff');
  }
`;

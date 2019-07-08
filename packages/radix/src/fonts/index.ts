import { css } from 'styled-components';
import { default as UntitledSansWoff } from './UntitledSansWeb-Regular.woff';
import { default as UntitledSansWoff2 } from './UntitledSansWeb-Regular.woff2';
import { default as UntitledSansMediumWoff } from './UntitledSansWeb-Medium.woff';
import { default as UntitledSansMediumWoff2 } from './UntitledSansWeb-Medium.woff2';
import { default as OperatorMonoBookWoff } from './OperatorMonoSSm-Book.woff';
import { default as OperatorMonoBookWoff2 } from './OperatorMonoSSm-Book.woff2';
import { default as OperatorMonoBookItalicWoff } from './OperatorMonoSSm-BookItalic.woff';
import { default as OperatorMonoBookItalicWoff2 } from './OperatorMonoSSm-BookItalic.woff2';
import { default as OperatorMonoMediumWoff } from './OperatorMonoSSm-Medium.woff';
import { default as OperatorMonoMediumWoff2 } from './OperatorMonoSSm-Medium.woff2';
import { default as OperatorMonoMediumItalicWoff } from './OperatorMonoSSm-MediumItalic.woff';
import { default as OperatorMonoMediumItalicWoff2 } from './OperatorMonoSSm-MediumItalic.woff2';

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
    font-family: 'UntitledSans-Medium';
    font-weight: 500;
    font-display: swap;
    src: local('UntitledSans-Medium'), url(${UntitledSansMediumWoff2}) format('woff2'),
      url(${UntitledSansMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'OperatorMono-Book';
    font-display: swap;
    src: local('OperatorMonoSSm-Book'), url(${OperatorMonoBookWoff2}) format('woff2'),
      url(${OperatorMonoBookWoff}) format('woff');
  }

  @font-face {
    font-family: 'OperatorMono-BookItalic';
    font-display: swap;
    src: local('OperatorMonoSSm-BookItalic'), url(${OperatorMonoBookItalicWoff2}) format('woff2'),
      url(${OperatorMonoBookItalicWoff}) format('woff');
  }

  @font-face {
    font-family: 'OperatorMono-Medium';
    font-display: swap;
    src: local('OperatorMonoSSm-Medium'), url(${OperatorMonoMediumWoff2}) format('woff2'),
      url(${OperatorMonoMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'OperatorMono-MediumItalic';
    font-display: swap;
    src: local('OperatorMonoSSm-MediumItalic'),
      url(${OperatorMonoMediumItalicWoff2}) format('woff2'),
      url(${OperatorMonoMediumItalicWoff}) format('woff');
  }
`;

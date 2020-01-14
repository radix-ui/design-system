import { css } from 'styled-components';

const fontPath = 'https://unpkg.com/@modulz/radix-fonts@1.0.0';

export const fontStyles = css`
  @font-face {
    font-family: 'UntitledSans';
    font-weight: 400;
    font-display: swap;
    src: local('UntitledSans-Regular'),
      url(${fontPath}/UntitledSansWeb-Regular.woff2) format('woff2'),
      url(${fontPath}/UntitledSansWeb-Regular.woff) format('woff');
  }

  @font-face {
    font-family: 'UntitledSans';
    font-weight: 500;
    font-display: swap;
    src: local('UntitledSans-Medium'), url(${fontPath}/UntitledSansWeb-Medium.woff2) format('woff2'),
      url(${fontPath}/UntitledSansWeb-Medium.woff) format('woff');
  }

  @font-face {
    font-family: 'RadixDuo';
    font-weight: 400;
    font-display: swap;
    src: local('RadixDuo-Regular'), url(${fontPath}/RadixDuo-Regular.woff2) format('woff2'),
      url(${fontPath}/RadixDuo-Regular.woff) format('woff');
  }

  @font-face {
    font-family: 'RadixDuo';
    font-weight: 400;
    font-style: italic;
    font-display: swap;
    src: local('RadixDuo-Italic'), url(${fontPath}/RadixDuo-Italic.woff2) format('woff2'),
      url(${fontPath}/RadixDuo-Italic.woff) format('woff');
  }

  @font-face {
    font-family: 'RadixDuo';
    font-weight: 700;
    font-display: swap;
    src: local('RadixDuo-Bold'), url(${fontPath}/RadixDuo-Bold.woff2) format('woff2'),
      url(${fontPath}/RadixDuo-Bold.woff) format('woff');
  }

  @font-face {
    font-family: 'RadixDuo';
    font-weight: 700;
    font-style: italic;
    font-display: swap;
    src: local('RadixDuo-BoldItalic'), url(${fontPath}/RadixDuo-Bold-Italic.woff2) format('woff2'),
      url(${fontPath}/RadixDuo-Bold-Italic.woff) format('woff');
  }
`;

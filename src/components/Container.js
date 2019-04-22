import styled from 'styled-components';
import {
  alignSelf,
  flex,
  justifySelf,
  maxWidth,
  space,
  themeGet,
  variant,
} from 'styled-system';
import { theme } from '../theme';

theme.containerSizes = {
  small: {
    paddingLeft: themeGet('space.5')({ theme }),
    paddingRight: themeGet('space.5')({ theme }),
    maxWidth: '25rem',
  },
  medium: {
    paddingLeft: themeGet('space.5')({ theme }),
    paddingRight: themeGet('space.5')({ theme }),
    maxWidth: '45rem',
  },
  large: {
    paddingLeft: themeGet('space.5')({ theme }),
    paddingRight: themeGet('space.5')({ theme }),
    maxWidth: '65rem',
  },
  fluid: {
    paddingLeft: themeGet('space.5')({ theme }),
    paddingRight: themeGet('space.5')({ theme }),
    maxWidth: '100%',
  },
};

const containerStyle = variant({ key: 'containerSizes', prop: 'size' });

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  flex: 1;

  ${alignSelf}
  ${flex}
  ${justifySelf}
  ${maxWidth}
  ${space}
  ${containerStyle}
`;

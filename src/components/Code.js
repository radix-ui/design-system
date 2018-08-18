import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Code = styled.code`
  background-color: ${theme.GRAY_100};
  border: 1px solid ${theme.GRAY_400};
  border-radius: ${theme.BORDERRADIUS_100};
  color: ${theme.BLUE_500};
  font-family: ${theme.MONOSPACE};
  font-size: ${theme.FONTSIZE_400};
  letter-spacing: 0;
  line-height: 1;
  padding: ${theme.SPACING_100};
  white-space: nowrap;
`;

export default Code;

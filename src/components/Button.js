import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${theme.GRAY_100};
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  border: none;
  border-radius: ${theme.BORDERRADIUS_100};
  color: ${theme.GRAY_600};
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-family: 'UntitledSans-Medium',apple-system,BlinkMacSystemFont;
  font-size: ${theme.FONTSIZE_200};
  font-weight: 400;
  height: ${theme.SPACING_500};
  justify-content: center;
  line-height: 1;
  min-width: ${theme.SPACING_500};
  outline: none;
  padding: 0 ${theme.SPACING_200};
  pointer-events: auto;
  text-align: center;
  text-decoration: none;
  transition-property: all;
  transition-duration: 80ms;
  transition-timing-function: ease;
  user-select: none;
  white-space: nowrap;
`;

export default Button;

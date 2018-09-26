import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Input = styled.input.attrs({
  type: 'text',
})`
  background-color: transparent;
  border: none;
  border-radius: 0;
  box-shadow: inset 0 -1px 0 0 ${theme.GRAY_400};
  font-family: inherit;
  font-size: ${theme.FONTSIZE_200};
  height: ${theme.SPACING_500};
  line-height: ${theme.SPACING_500};
  outline: none;
  padding: 0;
  vertical-align: middle;
  width: 100%;

  &::-webkit-input-placeholder {
    color: ${theme.GRAY_500};
    opacity:  1;
  }
  &::-moz-placeholder {
    color: ${theme.GRAY_500};
    opacity:  1;
  }
  &:-ms-input-placeholder {
    color: ${theme.GRAY_500};
    opacity:  1;
  }

  &:focus {
    box-shadow: inset 0 -1px 0 0 ${theme.BLUE_500};
  }

  &:read-only {
    box-shadow: inset 0 -1px 0 0 ${theme.GRAY_300};
    color: ${theme.GRAY_600};
  }

  &:disabled {
    box-shadow: inset 0 -1px 0 0 ${theme.GRAY_300};
    color: ${theme.GRAY_500};
    cursor: not-allowed;
  }

  ${p => p.ta_center && css`
    text-align: center;
  `}

  ${p => p.tnum && css`
    font-feature-settings: 'tnum';
  `}
`;

export default Input;

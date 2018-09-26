import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const GhostInput = styled.input.attrs({
  type: 'text',
})`
  background-color: transparent;
  font-family: inherit;
  height: ${theme.SPACING_500};
  line-height: ${theme.SPACING_500};
  padding: 0;
  font-size: ${theme.FONTSIZE_200};
  border-radius: 0;
  border: none;
  outline: none;
  box-shadow: none;
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

  &:read-only {
    color: ${theme.GRAY_600};
  }

  &:disabled {
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

export default GhostInput;

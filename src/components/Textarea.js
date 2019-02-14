import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Textarea = styled.textarea`
  background-color: transparent;
  font-family: inherit;
  height: ${theme.SPACING_500};
  line-height: ${theme.SPACING_500};
  padding: 0;
  font-size: ${theme.FONTSIZE_300};
  border-radius: 0;
  border: none;
  min-height: 80px;
  outline: none;
  box-shadow: inset 0 -1px 0 0 ${theme.GRAY_400};
  vertical-align: middle;
  width: 100%;
  resize: vertical;

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

  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_500};
  `}
`;

export default Textarea;

import styled from 'styled-components';
import * as theme from './../theme/';

const Textarea = styled.textarea`
  background-color: transparent;
  font-family: inherit;
  height: ${theme.SPACING_500};
  line-height: ${theme.SPACING_500};
  padding: 0;
  font-size: ${theme.FONTSIZE_200};
  border-radius: 0;
  border: none;
  outline: none;
  box-shadow: inset 0 -1px 0 0 ${theme.GRAY_400};
  vertical-align: middle;
  min-height: ${theme.SPACING_500};
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
`;

export default Textarea;

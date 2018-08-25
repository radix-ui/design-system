import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Link = styled.a`
  font-size: ${theme.FONTSIZE_400};
  color: ${theme.BLUE_500};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${props => props.size2 && css`
    font-size: ${theme.FONTSIZE_500};
  `}

  ${props => props.light && css`
    color: ${theme.GRAY_500};
  `}
`;

export default Link;

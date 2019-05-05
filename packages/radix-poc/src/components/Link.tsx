import styled from 'styled-components';
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  themeGet,
} from 'styled-system';

type LinkProps = ColorProps & FontSizeProps;

export const Link = styled.a<LinkProps>`
  color: ${themeGet('colors.blue')};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${color}
  ${fontSize}
`;

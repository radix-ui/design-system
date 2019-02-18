import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Card from './Card';

const CardLink = styled(Card)`
  display: block;
  text-decoration: none;
  color: inherit;
  user-select: none;

  ${props => props.border && css`
    &:hover {
      box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
    }
  `}

  ${props => props.perspective && css`
    &:hover {
      transform: translateY(-1px);
      box-shadow:
        0 10px 38px -10px hsla(208,24%,7%,.35),
        0 10px 20px -15px hsla(208,24%,7%,.2);
    }
    &:active {
      background-color: ${theme.GRAY_100};
      transform: translateY(0);
    }
  `}

  ${props => props.ghost && css`
    &:hover {
      box-shadow:
        0 10px 38px -10px hsla(208,24%,7%,.35),
        0 10px 20px -15px hsla(208,24%,7%,.2);
    }
    &:active {
      background-color: ${theme.GRAY_100};
      transform: translateY(0);
    }
  `}
`;

export default CardLink;

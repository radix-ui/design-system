import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';
import Padding from './../utilities/Padding';
import BackgroundColor from './../utilities/BackgroundColor';

const Card = styled.div`
  border-radius: ${theme.BORDERRADIUS_200};

  ${props => props.border && css`
    box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
    &:hover {
      box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
    }
  `}

  ${props => props.perspective && css`
    box-shadow:
      0 10px 38px -10px hsla(208,24%,7%,.35),
      0 10px 20px -15px hsla(208,24%,7%,.2);
    transition-property: transform;
    transition-duration: 100ms;
    transition-timing-function: ease;
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
    transition-property: box-shadow;
    transition-duration: 100ms;
    transition-timing-function: ease;
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

  ${BackgroundColor}
  ${Padding}
  ${Margin}
`;

export default Card;

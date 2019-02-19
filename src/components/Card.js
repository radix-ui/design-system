import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';
import Padding from './../utilities/Padding';
import BackgroundColor from './../utilities/BackgroundColor';

const Card = styled.div`
  position: relative;

  ${props => props.border && css`
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
      border-radius: ${theme.BORDERRADIUS_200};
      pointer-events: none;
    }
  `}

  ${props => props.perspective && css`
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow:
        0 10px 38px -10px hsla(208,24%,7%,.35),
        0 10px 20px -15px hsla(208,24%,7%,.2);
      border-radius: ${theme.BORDERRADIUS_200};
      pointer-events: none;
    }
  `}

  ${BackgroundColor}
  ${Padding}
  ${Margin}
`;

export default Card;

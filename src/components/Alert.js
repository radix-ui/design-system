import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';

const Alert = styled.div`
  align-items: center;
  display: flex;
  min-height: ${theme.SPACING_600};


  ${props => props.rounded && css`
    border-radius: 9999px;
    padding-left: ${theme.SPACING_400};
    padding-right: ${theme.SPACING_400};
    display: inline-flex;

    ${props => props.gray && css`
      background-color: ${theme.GRAY_100};
      box-shadow: inset 0 0 0 1px ${theme.GRAY_300};
      color: ${theme.GRAY_600};
    `}

    ${props => props.blue && css`
      background-color: ${theme.BLUE_100};
      box-shadow: inset 0 0 0 1px ${theme.BLUE_300};
      color: ${theme.BLUE_600};
    `}

    ${props => props.green && css`
      background-color: ${theme.GREEN_100};
      box-shadow: inset 0 0 0 1px ${theme.GREEN_300};
      color: ${theme.GREEN_600};
    `}

    ${props => props.yellow && css`
      background-color: ${theme.YELLOW_100};
      box-shadow: inset 0 0 0 1px ${theme.YELLOW_300};
      color: ${theme.YELLOW_600};
    `}

    ${props => props.red && css`
      background-color: ${theme.RED_100};
      box-shadow: inset 0 0 0 1px ${theme.RED_300};
      color: ${theme.RED_600};
    `}
  `}

  ${Margin}
`;

export default Alert;

import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Status = styled.div`
  display: inline-flex;
  align-items: center;
  text-align: center;
  min-height: ${theme.SPACING_200};
  min-width: ${theme.SPACING_200};
  font-size: ${theme.FONTSIZE_200};
  line-height: 1;
  border-radius: 9999px;
  padding: 0 ${theme.SPACING_100};
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  font-feature-settings: 'tnum';
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-weight: 500;

  ${p => p.size2 && css`
    min-height: ${theme.SPACING_300};
    min-width: ${theme.SPACING_300};
  `}

  ${p => p.blue && css`
    background-color: ${theme.BLUE_500};
    box-shadow: none;
    color: white;
  `}

  ${p => p.green && css`
    background-color: ${theme.GREEN_500};
    box-shadow: none;
    color: white;
  `}

  ${p => p.yellow && css`
    background-color: ${theme.YELLOW_500};
    box-shadow: none;
    color: white;
  `}

  ${p => p.red && css`
    background-color: ${theme.RED_500};
    box-shadow: none;
    color: white;
  `}
`;

export default Status;

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';

const Badge = styled.span`
  align-items: center;
  background-color: transparent;
  border-radius: 9999px;
  display: inline-flex;
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-size: ${theme.FONTSIZE_100};
  font-weight: 500;
  height: ${theme.SPACING_300};
  letter-spacing: .134em;
  padding: 0 ${theme.SPACING_200};
  text-transform: uppercase;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  ${props => props.size2 && css`
    height: ${theme.SPACING_500};
    font-size: ${theme.FONTSIZE_200};
    padding: 0 ${theme.SPACING_300};
  `}

  ${props => props.gray && css`
    box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
    color: ${theme.GRAY_600};
  `}

  ${props => props.blue && css`
    box-shadow: inset 0 0 0 1px ${theme.BLUE_400};
    color: ${theme.BLUE_600};
  `}

  ${props => props.green && css`
    box-shadow: inset 0 0 0 1px ${theme.GREEN_400};
    color: ${theme.GREEN_600};
  `}

  ${props => props.yellow && css`
    box-shadow: inset 0 0 0 1px ${theme.YELLOW_400};
    color: ${theme.YELLOW_600};
  `}

  ${props => props.red && css`
    box-shadow: inset 0 0 0 1px ${theme.RED_500};
    color: ${theme.RED_500};
  `}

  ${Margin}
`;

Badge.propTypes = {
  color: PropTypes.oneOf([
    'gray',
    'blue',
    'green',
    'yellow',
    'red'
  ])
}

Badge.defaultProps = {
  color: 'gray'
};

export default Badge;

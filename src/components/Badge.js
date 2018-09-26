import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  font-family: ${theme.UNTITLEDSANSMEDIUM};
  font-size: ${theme.FONTSIZE_100};
  font-weight: 500;
  height: ${theme.SPACING_300};
  padding: 0 ${theme.SPACING_200};
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 9999px;
  letter-spacing: .134em;
  white-space: nowrap;
  user-select: none;
  vertical-align: middle;

  ${props => props.size2 && css`
    font-size: ${theme.FONTSIZE_200};
    height: ${theme.SPACING_400};
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

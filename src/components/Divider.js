import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Divider = styled.div`
  background-color: ${theme.GRAY_300};
  height: 1px;

  ${props => props.size1 && css`
    width: ${theme.SPACING_300};
  `}
  ${props => props.size2 && css`
    width: ${theme.SPACING_600};
  `}
  ${props => props.size3 && css`
    width: ${theme.SPACING_900};
  `}
  ${props => props.expanded && css`
    width: 100%;
  `}

  ${props => props.vertical && css`
    width: 1px;

    ${props => props.size1 && css`
      height: ${theme.SPACING_300};
    `}
    ${props => props.size2 && css`
      height: ${theme.SPACING_600};
    `}
    ${props => props.size3 && css`
      height: ${theme.SPACING_900};
    `}
    ${props => props.expanded && css`
      height: 100%;
    `}
  `}
`;

export default Divider;

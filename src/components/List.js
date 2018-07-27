import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const List = styled.ul`
  list-style: none;
  padding: ${theme.SPACING_200} 0;

  ${props => props.rounded && css`
    border-radius: ${theme.BORDERRADIUS_200};
  `}
`;

export default List;

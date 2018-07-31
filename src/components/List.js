import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const List = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 0;
  min-width: 100%;

  ${props => props.rounded && css`
    border-radius: ${theme.BORDERRADIUS_200};
  `}

  ${props => props.size1 && css`
    padding: ${theme.SPACING_200} 0;
  `}
`;

export default List;

import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';

const List = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 0;
  min-width: 100%;

  ${Margin}
`;

export default List;

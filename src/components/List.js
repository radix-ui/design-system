import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';
import Padding from './../utilities/Padding';

const List = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 0;
  min-width: 100%;

  ${Margin}
  ${Padding}
`;

export default List;

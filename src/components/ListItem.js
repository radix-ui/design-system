import styled, { css } from 'styled-components';
import * as theme from './../theme/';

import Padding from './../utilities/Padding';

const ListItem = styled.li`
  box-sizing: border-box;
  display: flex;
  line-height: 1;
  width: 100%;
  min-height: 31px;
  padding-bottom: ${theme.SPACING_100};
  padding-left: ${theme.SPACING_400};
  padding-right: ${theme.SPACING_400};
  padding-top: ${theme.SPACING_100};

  ${props => props.highlighted && css`
    background-color: ${theme.BLUE_200};
  `}

  ${Padding}
`;

export default ListItem;

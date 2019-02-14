import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';
import NegativeMargin from './../utilities/NegativeMargin';
import Padding from './../utilities/Padding';
import TextAlign from './../utilities/TextAlign';
import Height from './../utilities/Height';
import Width from './../utilities/Width';
import Overflow from './../utilities/Overflow';
import Position from './../utilities/Position';
import FlexItem from './../utilities/FlexItem';
import BackgroundColor from './../utilities/BackgroundColor';
import PointerEvents from './../utilities/PointerEvents';
import Offset from './../utilities/Offset';

const Box = styled.div`
  ${p => p.border && css` border: 1px solid; `}
  ${p => p.bt && css` border-top: 1px solid; `}
  ${p => p.br && css` border-right: 1px solid; `}
  ${p => p.bb && css` border-bottom: 1px solid; `}
  ${p => p.bl && css` border-left: 1px solid; `}

  ${p => p.bcgray300 && css` border-color: ${theme.GRAY_300}; `}
  ${p => p.bcgray400 && css` border-color: ${theme.GRAY_400}; `}

  ${p => p.table && css` display: table; `}
  ${p => p.tablerow && css` display: table-row; `}
  ${p => p.tablecell && css` display: table-cell; `}

  ${p => p.alignmiddle && css` vertical-align: middle; `}

  ${BackgroundColor}
  ${Margin}
  ${NegativeMargin}
  ${Padding}
  ${TextAlign}
  ${Height}
  ${Width}
  ${Overflow}
  ${Position}
  ${FlexItem}
  ${PointerEvents}
  ${Offset}
`;

export default Box;

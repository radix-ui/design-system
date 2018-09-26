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

const Box = styled.div`
  ${Margin}
  ${NegativeMargin}
  ${Padding}
  ${TextAlign}
  ${Height}
  ${Width}
  ${Overflow}
  ${Position}
  ${FlexItem}

  ${p => p.white && css` background-color: white; `}
  ${p => p.black && css` background-color: black; `}

  ${p => p.gray100 && css` background-color: ${theme.GRAY_100}; `}
  ${p => p.gray200 && css` background-color: ${theme.GRAY_200}; `}
  ${p => p.gray300 && css` background-color: ${theme.GRAY_300}; `}
  ${p => p.gray400 && css` background-color: ${theme.GRAY_400}; `}
  ${p => p.gray500 && css` background-color: ${theme.GRAY_500}; `}
  ${p => p.gray600 && css` background-color: ${theme.GRAY_600}; `}
  ${p => p.gray700 && css` background-color: ${theme.GRAY_700}; `}
  ${p => p.gray800 && css` background-color: ${theme.GRAY_800}; `}
  ${p => p.gray900 && css` background-color: ${theme.GRAY_900}; `}

  ${p => p.blue100 && css` background-color: ${theme.BLUE_100}; `}
  ${p => p.blue200 && css` background-color: ${theme.BLUE_200}; `}
  ${p => p.blue300 && css` background-color: ${theme.BLUE_300}; `}
  ${p => p.blue400 && css` background-color: ${theme.BLUE_400}; `}
  ${p => p.blue500 && css` background-color: ${theme.BLUE_500}; `}
  ${p => p.blue600 && css` background-color: ${theme.BLUE_600}; `}
  ${p => p.blue700 && css` background-color: ${theme.BLUE_700}; `}
  ${p => p.blue800 && css` background-color: ${theme.BLUE_800}; `}
  ${p => p.blue900 && css` background-color: ${theme.BLUE_900}; `}

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
`;

export default Box;

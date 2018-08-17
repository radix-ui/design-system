import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Box = styled.div`
  ${p => p.m1 && css` margin: ${theme.SPACING_100}; `}
  ${p => p.mt1 && css` margin-top: ${theme.SPACING_100}; `}
  ${p => p.mr1 && css` margin-right: ${theme.SPACING_100}; `}
  ${p => p.mb1 && css` margin-bottom: ${theme.SPACING_100}; `}
  ${p => p.ml1 && css` margin-left: ${theme.SPACING_100}; `}

  ${p => p.m2 && css` margin: ${theme.SPACING_200}; `}
  ${p => p.mt2 && css` margin-top: ${theme.SPACING_200}; `}
  ${p => p.mr2 && css` margin-right: ${theme.SPACING_200}; `}
  ${p => p.mb2 && css` margin-bottom: ${theme.SPACING_200}; `}
  ${p => p.ml2 && css` margin-left: ${theme.SPACING_200}; `}

  ${p => p.m3 && css` margin: ${theme.SPACING_300}; `}
  ${p => p.mt3 && css` margin-top: ${theme.SPACING_300}; `}
  ${p => p.mr3 && css` margin-right: ${theme.SPACING_300}; `}
  ${p => p.mb3 && css` margin-bottom: ${theme.SPACING_300}; `}
  ${p => p.ml3 && css` margin-left: ${theme.SPACING_300}; `}

  ${p => p.m4 && css` margin: ${theme.SPACING_400}; `}
  ${p => p.mt4 && css` margin-top: ${theme.SPACING_400}; `}
  ${p => p.mr4 && css` margin-right: ${theme.SPACING_400}; `}
  ${p => p.mb4 && css` margin-bottom: ${theme.SPACING_400}; `}
  ${p => p.ml4 && css` margin-left: ${theme.SPACING_400}; `}

  ${p => p.m5 && css` margin: ${theme.SPACING_500}; `}
  ${p => p.mt5 && css` margin-top: ${theme.SPACING_500}; `}
  ${p => p.mr5 && css` margin-right: ${theme.SPACING_500}; `}
  ${p => p.mb5 && css` margin-bottom: ${theme.SPACING_500}; `}
  ${p => p.ml5 && css` margin-left: ${theme.SPACING_500}; `}

  ${p => p.m6 && css` margin: ${theme.SPACING_600}; `}
  ${p => p.mt6 && css` margin-top: ${theme.SPACING_600}; `}
  ${p => p.mr6 && css` margin-right: ${theme.SPACING_600}; `}
  ${p => p.mb6 && css` margin-bottom: ${theme.SPACING_600}; `}
  ${p => p.ml6 && css` margin-left: ${theme.SPACING_600}; `}

  ${p => p.m7 && css` margin: ${theme.SPACING_700}; `}
  ${p => p.mt7 && css` margin-top: ${theme.SPACING_700}; `}
  ${p => p.mr7 && css` margin-right: ${theme.SPACING_700}; `}
  ${p => p.mb7 && css` margin-bottom: ${theme.SPACING_700}; `}
  ${p => p.ml7 && css` margin-left: ${theme.SPACING_700}; `}

  ${p => p.m8 && css` margin: ${theme.SPACING_800}; `}
  ${p => p.mt8 && css` margin-top: ${theme.SPACING_800}; `}
  ${p => p.mr8 && css` margin-right: ${theme.SPACING_800}; `}
  ${p => p.mb8 && css` margin-bottom: ${theme.SPACING_800}; `}
  ${p => p.ml8 && css` margin-left: ${theme.SPACING_800}; `}

  ${p => p.m9 && css` margin: ${theme.SPACING_900}; `}
  ${p => p.mt9 && css` margin-top: ${theme.SPACING_900}; `}
  ${p => p.mr9 && css` margin-right: ${theme.SPACING_900}; `}
  ${p => p.mb9 && css` margin-bottom: ${theme.SPACING_900}; `}
  ${p => p.ml9 && css` margin-left: ${theme.SPACING_900}; `}

  ${p => p.p1 && css` padding: ${theme.SPACING_100}; `}
  ${p => p.pt1 && css` padding-top: ${theme.SPACING_100}; `}
  ${p => p.pr1 && css` padding-right: ${theme.SPACING_100}; `}
  ${p => p.pb1 && css` padding-bottom: ${theme.SPACING_100}; `}
  ${p => p.pl1 && css` padding-left: ${theme.SPACING_100}; `}

  ${p => p.p2 && css` padding: ${theme.SPACING_200}; `}
  ${p => p.pt2 && css` padding-top: ${theme.SPACING_200}; `}
  ${p => p.pr2 && css` padding-right: ${theme.SPACING_200}; `}
  ${p => p.pb2 && css` padding-bottom: ${theme.SPACING_200}; `}
  ${p => p.pl2 && css` padding-left: ${theme.SPACING_200}; `}

  ${p => p.p3 && css` padding: ${theme.SPACING_300}; `}
  ${p => p.pt3 && css` padding-top: ${theme.SPACING_300}; `}
  ${p => p.pr3 && css` padding-right: ${theme.SPACING_300}; `}
  ${p => p.pb3 && css` padding-bottom: ${theme.SPACING_300}; `}
  ${p => p.pl3 && css` padding-left: ${theme.SPACING_300}; `}

  ${p => p.p4 && css` padding: ${theme.SPACING_400}; `}
  ${p => p.pt4 && css` padding-top: ${theme.SPACING_400}; `}
  ${p => p.pr4 && css` padding-right: ${theme.SPACING_400}; `}
  ${p => p.pb4 && css` padding-bottom: ${theme.SPACING_400}; `}
  ${p => p.pl4 && css` padding-left: ${theme.SPACING_400}; `}

  ${p => p.p5 && css` padding: ${theme.SPACING_500}; `}
  ${p => p.pt5 && css` padding-top: ${theme.SPACING_500}; `}
  ${p => p.pr5 && css` padding-right: ${theme.SPACING_500}; `}
  ${p => p.pb5 && css` padding-bottom: ${theme.SPACING_500}; `}
  ${p => p.pl5 && css` padding-left: ${theme.SPACING_500}; `}

  ${p => p.p6 && css` padding: ${theme.SPACING_600}; `}
  ${p => p.pt6 && css` padding-top: ${theme.SPACING_600}; `}
  ${p => p.pr6 && css` padding-right: ${theme.SPACING_600}; `}
  ${p => p.pb6 && css` padding-bottom: ${theme.SPACING_600}; `}
  ${p => p.pl6 && css` padding-left: ${theme.SPACING_600}; `}

  ${p => p.p7 && css` padding: ${theme.SPACING_700}; `}
  ${p => p.pt7 && css` padding-top: ${theme.SPACING_700}; `}
  ${p => p.pr7 && css` padding-right: ${theme.SPACING_700}; `}
  ${p => p.pb7 && css` padding-bottom: ${theme.SPACING_700}; `}
  ${p => p.pl7 && css` padding-left: ${theme.SPACING_700}; `}

  ${p => p.p8 && css` padding: ${theme.SPACING_800}; `}
  ${p => p.pt8 && css` padding-top: ${theme.SPACING_800}; `}
  ${p => p.pr8 && css` padding-right: ${theme.SPACING_800}; `}
  ${p => p.pb8 && css` padding-bottom: ${theme.SPACING_800}; `}
  ${p => p.pl8 && css` padding-left: ${theme.SPACING_800}; `}

  ${p => p.p9 && css` padding: ${theme.SPACING_900}; `}
  ${p => p.pt9 && css` padding-top: ${theme.SPACING_900}; `}
  ${p => p.pr9 && css` padding-right: ${theme.SPACING_900}; `}
  ${p => p.pb9 && css` padding-bottom: ${theme.SPACING_900}; `}
  ${p => p.pl9 && css` padding-left: ${theme.SPACING_900}; `}

  ${p => p.left && css` text-align: left; `}
  ${p => p.center && css` text-align: center; `}
  ${p => p.right && css` text-align: right; `}

  ${p => p.white && css` background-color: white; `}
  ${p => p.gray100 && css` background-color: ${theme.GRAY_100}; `}
  ${p => p.gray200 && css` background-color: ${theme.GRAY_200}; `}
  ${p => p.gray300 && css` background-color: ${theme.GRAY_300}; `}
  ${p => p.gray900 && css` background-color: ${theme.GRAY_900}; `}
  ${p => p.blue500 && css` background-color: ${theme.BLUE_500}; `}

  ${p => p.h100 && css` height: 100%; `}

  ${p => p.w50 && css` width: 50%; `}
  ${p => p.w100 && css` width: 100%; `}

  ${p => p.border && css` border: 1px solid; `}
  ${p => p.bt && css` border-top: 1px solid; `}
  ${p => p.br && css` border-right: 1px solid; `}
  ${p => p.bb && css` border-bottom: 1px solid; `}
  ${p => p.bl && css` border-left: 1px solid; `}

  ${p => p.bcgray300 && css` border-color: ${theme.GRAY_300}; `}
  ${p => p.bcgray400 && css` border-color: ${theme.GRAY_400}; `}

  ${p => p.fg0 && css` flex-grow: 0; `}
  ${p => p.fg1 && css` flex-grow: 1; `}
  ${p => p.fs0 && css` flex-shrink: 0; `}
  ${p => p.fs1 && css` flex-shrink: 1; `}
  ${p => p.fb0 && css` flex-basis: 0; `}
  ${p => p.fb_auto && css` flex-basis: auto; `}

  ${p => p.table && css` display: table; `}
  ${p => p.tablerow && css` display: table-row; `}
  ${p => p.tablecell && css` display: table-cell; `}

  ${p => p.alignmiddle && css` vertical-align: middle; `}

  ${p => p.oyauto && css` overflow-y: auto; `}

  ${p => p.relative && css` position: relative; `}
`;

export default Box;

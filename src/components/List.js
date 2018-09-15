import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const List = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 0;
  min-width: 100%;

  ${p => p.mt1 && css` margin-top: ${theme.SPACING_100}; `}
  ${p => p.mb1 && css` margin-bottom: ${theme.SPACING_100}; `}

  ${p => p.mt2 && css` margin-top: ${theme.SPACING_200}; `}
  ${p => p.mb2 && css` margin-bottom: ${theme.SPACING_200}; `}

  ${p => p.mt3 && css` margin-top: ${theme.SPACING_300}; `}
  ${p => p.mb3 && css` margin-bottom: ${theme.SPACING_300}; `}

  ${p => p.mt4 && css` margin-top: ${theme.SPACING_400}; `}
  ${p => p.mb4 && css` margin-bottom: ${theme.SPACING_400}; `}

  ${p => p.mt5 && css` margin-top: ${theme.SPACING_500}; `}
  ${p => p.mb5 && css` margin-bottom: ${theme.SPACING_500}; `}

  ${p => p.mt6 && css` margin-top: ${theme.SPACING_600}; `}
  ${p => p.mb6 && css` margin-bottom: ${theme.SPACING_600}; `}

  ${p => p.mt7 && css` margin-top: ${theme.SPACING_700}; `}
  ${p => p.mb7 && css` margin-bottom: ${theme.SPACING_700}; `}

  ${p => p.mt8 && css` margin-top: ${theme.SPACING_800}; `}
  ${p => p.mb8 && css` margin-bottom: ${theme.SPACING_800}; `}

  ${p => p.mt9 && css` margin-top: ${theme.SPACING_900}; `}
  ${p => p.mb9 && css` margin-bottom: ${theme.SPACING_900}; `}
`;

export default List;

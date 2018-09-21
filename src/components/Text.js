import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Text = styled.span`
  display: block;
  font-family: 'UntitledSans',apple-system,BlinkMacSystemFont;
  ${p => p.size1 && css`
    font-size: ${theme.FONTSIZE_200};
  `}
  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_300};
  `}
  ${p => p.size3 && css`
    font-size: ${theme.FONTSIZE_400};
    letter-spacing: -.001em;
    margin-left: -.05em;
  `}
  ${p => p.size4 && css`
    font-size: ${theme.FONTSIZE_500};
    letter-spacing: -.005em;
    margin-left: -.06em;
  `}
  ${p => p.size5 && css`
    font-size: ${theme.FONTSIZE_600};
    letter-spacing: -.012em;
    margin-left: -.075em;
  `}
  ${p => p.size6 && css`
    font-size: ${theme.FONTSIZE_700};
    letter-spacing: -.028em;
    margin-left: -.085em;
  `}
  ${p => p.size7 && css`
    font-size: ${theme.FONTSIZE_800};
    letter-spacing: -.038em;
    margin-left: -.088em;
  `}
  ${p => p.size8 && css`
    font-size: ${theme.FONTSIZE_900};
    letter-spacing: -.042em;
    margin-left: -.09em;
  `}
  ${p => p.lh1 && css`line-height: ${theme.LEADING_100};`}
  ${p => p.lh2 && css`line-height: ${theme.LEADING_200};`}
  ${p => p.lh3 && css`line-height: ${theme.LEADING_300};`}
  ${p => p.lh4 && css`line-height: ${theme.LEADING_400};`}
  ${p => p.lh5 && css`line-height: ${theme.LEADING_500};`}
  ${p => p.lh6 && css`line-height: ${theme.LEADING_600};`}
  ${p => p.lh7 && css`line-height: ${theme.LEADING_700};`}
  ${p => p.lh8 && css`line-height: ${theme.LEADING_800};`}
  ${p => p.lh9 && css`line-height: ${theme.LEADING_900};`}
  ${p => p.mt1 && css`margin-top: ${theme.SPACING_100};`}
  ${p => p.mt2 && css`margin-top: ${theme.SPACING_200};`}
  ${p => p.mt3 && css`margin-top: ${theme.SPACING_300};`}
  ${p => p.mt4 && css`margin-top: ${theme.SPACING_400};`}
  ${p => p.mt5 && css`margin-top: ${theme.SPACING_500};`}
  ${p => p.mt6 && css`margin-top: ${theme.SPACING_600};`}
  ${p => p.mt7 && css`margin-top: ${theme.SPACING_700};`}
  ${p => p.mt8 && css`margin-top: ${theme.SPACING_800};`}
  ${p => p.mt9 && css`margin-top: ${theme.SPACING_900};`}
  ${p => p.mr1 && css`margin-right: ${theme.SPACING_100};`}
  ${p => p.mr2 && css`margin-right: ${theme.SPACING_200};`}
  ${p => p.mr3 && css`margin-right: ${theme.SPACING_300};`}
  ${p => p.mr4 && css`margin-right: ${theme.SPACING_400};`}
  ${p => p.mr5 && css`margin-right: ${theme.SPACING_500};`}
  ${p => p.mr6 && css`margin-right: ${theme.SPACING_600};`}
  ${p => p.mr7 && css`margin-right: ${theme.SPACING_700};`}
  ${p => p.mr8 && css`margin-right: ${theme.SPACING_800};`}
  ${p => p.mr9 && css`margin-right: ${theme.SPACING_900};`}
  ${p => p.mb1 && css`margin-bottom: ${theme.SPACING_100};`}
  ${p => p.mb2 && css`margin-bottom: ${theme.SPACING_200};`}
  ${p => p.mb3 && css`margin-bottom: ${theme.SPACING_300};`}
  ${p => p.mb4 && css`margin-bottom: ${theme.SPACING_400};`}
  ${p => p.mb5 && css`margin-bottom: ${theme.SPACING_500};`}
  ${p => p.mb6 && css`margin-bottom: ${theme.SPACING_600};`}
  ${p => p.mb7 && css`margin-bottom: ${theme.SPACING_700};`}
  ${p => p.mb8 && css`margin-bottom: ${theme.SPACING_800};`}
  ${p => p.mb9 && css`margin-bottom: ${theme.SPACING_900};`}
  ${p => p.ml1 && css`margin-left: ${theme.SPACING_100};`}
  ${p => p.ml2 && css`margin-left: ${theme.SPACING_200};`}
  ${p => p.ml3 && css`margin-left: ${theme.SPACING_300};`}
  ${p => p.ml4 && css`margin-left: ${theme.SPACING_400};`}
  ${p => p.ml5 && css`margin-left: ${theme.SPACING_500};`}
  ${p => p.ml6 && css`margin-left: ${theme.SPACING_600};`}
  ${p => p.ml7 && css`margin-left: ${theme.SPACING_700};`}
  ${p => p.ml8 && css`margin-left: ${theme.SPACING_800};`}
  ${p => p.ml9 && css`margin-left: ${theme.SPACING_900};`}
  ${p => p.white && css`color: ${theme.WHITE};`}
  ${p => p.black && css`color: ${theme.BLACK};`}
  ${p => p.gray500 && css`color: ${theme.GRAY_500};`}
  ${p => p.gray600 && css`color: ${theme.GRAY_600};`}
  ${p => p.gray900 && css`color: ${theme.GRAY_900};`}

  ${p => p.left && css`text-align: left;`}
  ${p => p.center && css`text-align: center;`}
  ${p => p.right && css`text-align: right;`}

  ${p => p.nowrap && css`white-space: nowrap;`}

  ${p => p.tnum && css`font-feature-settings: 'tnum';`}

  ${p => p.us_none && css`user-select: none;`}
`;

export default Text;

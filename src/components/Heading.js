import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Heading = styled.h3`
  color: ${theme.GRAY_900};
  margin: 0;
  font-family: 'UntitledSans',apple-system,BlinkMacSystemFont;

  ${p => p.size1 && css`
    font-size: ${theme.FONTSIZE_300};
    letter-spacing: -.0125em;
    margin-left: -.05em;
  `}

  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_500};
    letter-spacing: -.005em;
    margin-left: -.06em;
  `}

  ${p => p.size3 && css`
    font-size: ${theme.FONTSIZE_600};
    letter-spacing: -.012em;
    margin-left: -.075em;
  `}

  ${p => p.size4 && css`
    font-size: ${theme.FONTSIZE_700};
    letter-spacing: -.028em;
    margin-left: -.085em;
  `}

  ${p => p.size5 && css`
    font-size: ${theme.FONTSIZE_800};
    letter-spacing: -.038em;
    margin-left: -.088em;
  `}

  ${p => p.size6 && css`
    font-size: ${theme.FONTSIZE_900};
    letter-spacing: -.042em;
    margin-left: -.09em;
  `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_size1 && css`
      font-size: ${theme.FONTSIZE_300};
      letter-spacing: -.0125em;
      margin-left: -.05em;
    `}

    ${p => p.bp1_size2 && css`
      font-size: ${theme.FONTSIZE_500};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}

    ${p => p.bp1_size3 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}

    ${p => p.bp1_size4 && css`
      font-size: ${theme.FONTSIZE_700};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}

    ${p => p.bp1_size5 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.038em;
      margin-left: -.088em;
    `}

    ${p => p.bp1_size6 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.042em;
      margin-left: -.09em;
    `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_size1 && css`
      font-size: ${theme.FONTSIZE_300};
      letter-spacing: -.0125em;
      margin-left: -.05em;
    `}

    ${p => p.bp2_size2 && css`
      font-size: ${theme.FONTSIZE_500};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}

    ${p => p.bp2_size3 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}

    ${p => p.bp2_size4 && css`
      font-size: ${theme.FONTSIZE_700};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}

    ${p => p.bp2_size5 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.038em;
      margin-left: -.088em;
    `}

    ${p => p.bp2_size6 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.042em;
      margin-left: -.09em;
    `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_size1 && css`
      font-size: ${theme.FONTSIZE_300};
      letter-spacing: -.0125em;
      margin-left: -.05em;
    `}

    ${p => p.bp3_size2 && css`
      font-size: ${theme.FONTSIZE_500};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}

    ${p => p.bp3_size3 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}

    ${p => p.bp3_size4 && css`
      font-size: ${theme.FONTSIZE_700};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}

    ${p => p.bp3_size5 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.038em;
      margin-left: -.088em;
    `}

    ${p => p.bp3_size6 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.042em;
      margin-left: -.09em;
    `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_size1 && css`
      font-size: ${theme.FONTSIZE_300};
      letter-spacing: -.0125em;
      margin-left: -.05em;
    `}

    ${p => p.bp4_size2 && css`
      font-size: ${theme.FONTSIZE_500};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}

    ${p => p.bp4_size3 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}

    ${p => p.bp4_size4 && css`
      font-size: ${theme.FONTSIZE_700};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}

    ${p => p.bp4_size5 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.038em;
      margin-left: -.088em;
    `}

    ${p => p.bp4_size6 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.042em;
      margin-left: -.09em;
    `}
  }

  ${p => p.lh1 && css`line-height: ${theme.LEADING_100};`}
  ${p => p.lh2 && css`line-height: ${theme.LEADING_200};`}
  ${p => p.lh3 && css`line-height: ${theme.LEADING_300};`}
  ${p => p.lh4 && css`line-height: ${theme.LEADING_400};`}
  ${p => p.lh5 && css`line-height: ${theme.LEADING_500};`}
  ${p => p.lh6 && css`line-height: ${theme.LEADING_600};`}
  ${p => p.lh7 && css`line-height: ${theme.LEADING_700};`}
  ${p => p.lh8 && css`line-height: ${theme.LEADING_800};`}
  ${p => p.lh9 && css`line-height: ${theme.LEADING_900};`}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_lh1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp1_lh2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp1_lh3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp1_lh4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp1_lh5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp1_lh6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp1_lh7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp1_lh8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp1_lh9 && css`line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_lh1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp2_lh2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp2_lh3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp2_lh4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp2_lh5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp2_lh6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp2_lh7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp2_lh8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp2_lh9 && css`line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_lh1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp3_lh2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp3_lh3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp3_lh4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp3_lh5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp3_lh6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp3_lh7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp3_lh8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp3_lh9 && css`line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_lh1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp4_lh2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp4_lh3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp4_lh4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp4_lh5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp4_lh6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp4_lh7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp4_lh8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp4_lh9 && css`line-height: ${theme.LEADING_900};`}
  }

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

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_m1 && css` margin: ${theme.SPACING_100}; `}
    ${p => p.bp1_mt1 && css` margin-top: ${theme.SPACING_100}; `}
    ${p => p.bp1_mr1 && css` margin-right: ${theme.SPACING_100}; `}
    ${p => p.bp1_mb1 && css` margin-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp1_ml1 && css` margin-left: ${theme.SPACING_100}; `}

    ${p => p.bp1_m2 && css` margin: ${theme.SPACING_200}; `}
    ${p => p.bp1_mt2 && css` margin-top: ${theme.SPACING_200}; `}
    ${p => p.bp1_mr2 && css` margin-right: ${theme.SPACING_200}; `}
    ${p => p.bp1_mb2 && css` margin-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp1_ml2 && css` margin-left: ${theme.SPACING_200}; `}

    ${p => p.bp1_m3 && css` margin: ${theme.SPACING_300}; `}
    ${p => p.bp1_mt3 && css` margin-top: ${theme.SPACING_300}; `}
    ${p => p.bp1_mr3 && css` margin-right: ${theme.SPACING_300}; `}
    ${p => p.bp1_mb3 && css` margin-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp1_ml3 && css` margin-left: ${theme.SPACING_300}; `}

    ${p => p.bp1_m4 && css` margin: ${theme.SPACING_400}; `}
    ${p => p.bp1_mt4 && css` margin-top: ${theme.SPACING_400}; `}
    ${p => p.bp1_mr4 && css` margin-right: ${theme.SPACING_400}; `}
    ${p => p.bp1_mb4 && css` margin-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp1_ml4 && css` margin-left: ${theme.SPACING_400}; `}

    ${p => p.bp1_m5 && css` margin: ${theme.SPACING_500}; `}
    ${p => p.bp1_mt5 && css` margin-top: ${theme.SPACING_500}; `}
    ${p => p.bp1_mr5 && css` margin-right: ${theme.SPACING_500}; `}
    ${p => p.bp1_mb5 && css` margin-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp1_ml5 && css` margin-left: ${theme.SPACING_500}; `}

    ${p => p.bp1_m6 && css` margin: ${theme.SPACING_600}; `}
    ${p => p.bp1_mt6 && css` margin-top: ${theme.SPACING_600}; `}
    ${p => p.bp1_mr6 && css` margin-right: ${theme.SPACING_600}; `}
    ${p => p.bp1_mb6 && css` margin-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp1_ml6 && css` margin-left: ${theme.SPACING_600}; `}

    ${p => p.bp1_m7 && css` margin: ${theme.SPACING_700}; `}
    ${p => p.bp1_mt7 && css` margin-top: ${theme.SPACING_700}; `}
    ${p => p.bp1_mr7 && css` margin-right: ${theme.SPACING_700}; `}
    ${p => p.bp1_mb7 && css` margin-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp1_ml7 && css` margin-left: ${theme.SPACING_700}; `}

    ${p => p.bp1_m8 && css` margin: ${theme.SPACING_800}; `}
    ${p => p.bp1_mt8 && css` margin-top: ${theme.SPACING_800}; `}
    ${p => p.bp1_mr8 && css` margin-right: ${theme.SPACING_800}; `}
    ${p => p.bp1_mb8 && css` margin-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp1_ml8 && css` margin-left: ${theme.SPACING_800}; `}

    ${p => p.bp1_m9 && css` margin: ${theme.SPACING_900}; `}
    ${p => p.bp1_mt9 && css` margin-top: ${theme.SPACING_900}; `}
    ${p => p.bp1_mr9 && css` margin-right: ${theme.SPACING_900}; `}
    ${p => p.bp1_mb9 && css` margin-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp1_ml9 && css` margin-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_m1 && css` margin: ${theme.SPACING_100}; `}
    ${p => p.bp2_mt1 && css` margin-top: ${theme.SPACING_100}; `}
    ${p => p.bp2_mr1 && css` margin-right: ${theme.SPACING_100}; `}
    ${p => p.bp2_mb1 && css` margin-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp2_ml1 && css` margin-left: ${theme.SPACING_100}; `}

    ${p => p.bp2_m2 && css` margin: ${theme.SPACING_200}; `}
    ${p => p.bp2_mt2 && css` margin-top: ${theme.SPACING_200}; `}
    ${p => p.bp2_mr2 && css` margin-right: ${theme.SPACING_200}; `}
    ${p => p.bp2_mb2 && css` margin-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp2_ml2 && css` margin-left: ${theme.SPACING_200}; `}

    ${p => p.bp2_m3 && css` margin: ${theme.SPACING_300}; `}
    ${p => p.bp2_mt3 && css` margin-top: ${theme.SPACING_300}; `}
    ${p => p.bp2_mr3 && css` margin-right: ${theme.SPACING_300}; `}
    ${p => p.bp2_mb3 && css` margin-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp2_ml3 && css` margin-left: ${theme.SPACING_300}; `}

    ${p => p.bp2_m4 && css` margin: ${theme.SPACING_400}; `}
    ${p => p.bp2_mt4 && css` margin-top: ${theme.SPACING_400}; `}
    ${p => p.bp2_mr4 && css` margin-right: ${theme.SPACING_400}; `}
    ${p => p.bp2_mb4 && css` margin-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp2_ml4 && css` margin-left: ${theme.SPACING_400}; `}

    ${p => p.bp2_m5 && css` margin: ${theme.SPACING_500}; `}
    ${p => p.bp2_mt5 && css` margin-top: ${theme.SPACING_500}; `}
    ${p => p.bp2_mr5 && css` margin-right: ${theme.SPACING_500}; `}
    ${p => p.bp2_mb5 && css` margin-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp2_ml5 && css` margin-left: ${theme.SPACING_500}; `}

    ${p => p.bp2_m6 && css` margin: ${theme.SPACING_600}; `}
    ${p => p.bp2_mt6 && css` margin-top: ${theme.SPACING_600}; `}
    ${p => p.bp2_mr6 && css` margin-right: ${theme.SPACING_600}; `}
    ${p => p.bp2_mb6 && css` margin-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp2_ml6 && css` margin-left: ${theme.SPACING_600}; `}

    ${p => p.bp2_m7 && css` margin: ${theme.SPACING_700}; `}
    ${p => p.bp2_mt7 && css` margin-top: ${theme.SPACING_700}; `}
    ${p => p.bp2_mr7 && css` margin-right: ${theme.SPACING_700}; `}
    ${p => p.bp2_mb7 && css` margin-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp2_ml7 && css` margin-left: ${theme.SPACING_700}; `}

    ${p => p.bp2_m8 && css` margin: ${theme.SPACING_800}; `}
    ${p => p.bp2_mt8 && css` margin-top: ${theme.SPACING_800}; `}
    ${p => p.bp2_mr8 && css` margin-right: ${theme.SPACING_800}; `}
    ${p => p.bp2_mb8 && css` margin-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp2_ml8 && css` margin-left: ${theme.SPACING_800}; `}

    ${p => p.bp2_m9 && css` margin: ${theme.SPACING_900}; `}
    ${p => p.bp2_mt9 && css` margin-top: ${theme.SPACING_900}; `}
    ${p => p.bp2_mr9 && css` margin-right: ${theme.SPACING_900}; `}
    ${p => p.bp2_mb9 && css` margin-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp2_ml9 && css` margin-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_m1 && css` margin: ${theme.SPACING_100}; `}
    ${p => p.bp3_mt1 && css` margin-top: ${theme.SPACING_100}; `}
    ${p => p.bp3_mr1 && css` margin-right: ${theme.SPACING_100}; `}
    ${p => p.bp3_mb1 && css` margin-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp3_ml1 && css` margin-left: ${theme.SPACING_100}; `}

    ${p => p.bp3_m2 && css` margin: ${theme.SPACING_200}; `}
    ${p => p.bp3_mt2 && css` margin-top: ${theme.SPACING_200}; `}
    ${p => p.bp3_mr2 && css` margin-right: ${theme.SPACING_200}; `}
    ${p => p.bp3_mb2 && css` margin-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp3_ml2 && css` margin-left: ${theme.SPACING_200}; `}

    ${p => p.bp3_m3 && css` margin: ${theme.SPACING_300}; `}
    ${p => p.bp3_mt3 && css` margin-top: ${theme.SPACING_300}; `}
    ${p => p.bp3_mr3 && css` margin-right: ${theme.SPACING_300}; `}
    ${p => p.bp3_mb3 && css` margin-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp3_ml3 && css` margin-left: ${theme.SPACING_300}; `}

    ${p => p.bp3_m4 && css` margin: ${theme.SPACING_400}; `}
    ${p => p.bp3_mt4 && css` margin-top: ${theme.SPACING_400}; `}
    ${p => p.bp3_mr4 && css` margin-right: ${theme.SPACING_400}; `}
    ${p => p.bp3_mb4 && css` margin-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp3_ml4 && css` margin-left: ${theme.SPACING_400}; `}

    ${p => p.bp3_m5 && css` margin: ${theme.SPACING_500}; `}
    ${p => p.bp3_mt5 && css` margin-top: ${theme.SPACING_500}; `}
    ${p => p.bp3_mr5 && css` margin-right: ${theme.SPACING_500}; `}
    ${p => p.bp3_mb5 && css` margin-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp3_ml5 && css` margin-left: ${theme.SPACING_500}; `}

    ${p => p.bp3_m6 && css` margin: ${theme.SPACING_600}; `}
    ${p => p.bp3_mt6 && css` margin-top: ${theme.SPACING_600}; `}
    ${p => p.bp3_mr6 && css` margin-right: ${theme.SPACING_600}; `}
    ${p => p.bp3_mb6 && css` margin-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp3_ml6 && css` margin-left: ${theme.SPACING_600}; `}

    ${p => p.bp3_m7 && css` margin: ${theme.SPACING_700}; `}
    ${p => p.bp3_mt7 && css` margin-top: ${theme.SPACING_700}; `}
    ${p => p.bp3_mr7 && css` margin-right: ${theme.SPACING_700}; `}
    ${p => p.bp3_mb7 && css` margin-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp3_ml7 && css` margin-left: ${theme.SPACING_700}; `}

    ${p => p.bp3_m8 && css` margin: ${theme.SPACING_800}; `}
    ${p => p.bp3_mt8 && css` margin-top: ${theme.SPACING_800}; `}
    ${p => p.bp3_mr8 && css` margin-right: ${theme.SPACING_800}; `}
    ${p => p.bp3_mb8 && css` margin-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp3_ml8 && css` margin-left: ${theme.SPACING_800}; `}

    ${p => p.bp3_m9 && css` margin: ${theme.SPACING_900}; `}
    ${p => p.bp3_mt9 && css` margin-top: ${theme.SPACING_900}; `}
    ${p => p.bp3_mr9 && css` margin-right: ${theme.SPACING_900}; `}
    ${p => p.bp3_mb9 && css` margin-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp3_ml9 && css` margin-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_m1 && css` margin: ${theme.SPACING_100}; `}
    ${p => p.bp4_mt1 && css` margin-top: ${theme.SPACING_100}; `}
    ${p => p.bp4_mr1 && css` margin-right: ${theme.SPACING_100}; `}
    ${p => p.bp4_mb1 && css` margin-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp4_ml1 && css` margin-left: ${theme.SPACING_100}; `}

    ${p => p.bp4_m2 && css` margin: ${theme.SPACING_200}; `}
    ${p => p.bp4_mt2 && css` margin-top: ${theme.SPACING_200}; `}
    ${p => p.bp4_mr2 && css` margin-right: ${theme.SPACING_200}; `}
    ${p => p.bp4_mb2 && css` margin-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp4_ml2 && css` margin-left: ${theme.SPACING_200}; `}

    ${p => p.bp4_m3 && css` margin: ${theme.SPACING_300}; `}
    ${p => p.bp4_mt3 && css` margin-top: ${theme.SPACING_300}; `}
    ${p => p.bp4_mr3 && css` margin-right: ${theme.SPACING_300}; `}
    ${p => p.bp4_mb3 && css` margin-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp4_ml3 && css` margin-left: ${theme.SPACING_300}; `}

    ${p => p.bp4_m4 && css` margin: ${theme.SPACING_400}; `}
    ${p => p.bp4_mt4 && css` margin-top: ${theme.SPACING_400}; `}
    ${p => p.bp4_mr4 && css` margin-right: ${theme.SPACING_400}; `}
    ${p => p.bp4_mb4 && css` margin-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp4_ml4 && css` margin-left: ${theme.SPACING_400}; `}

    ${p => p.bp4_m5 && css` margin: ${theme.SPACING_500}; `}
    ${p => p.bp4_mt5 && css` margin-top: ${theme.SPACING_500}; `}
    ${p => p.bp4_mr5 && css` margin-right: ${theme.SPACING_500}; `}
    ${p => p.bp4_mb5 && css` margin-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp4_ml5 && css` margin-left: ${theme.SPACING_500}; `}

    ${p => p.bp4_m6 && css` margin: ${theme.SPACING_600}; `}
    ${p => p.bp4_mt6 && css` margin-top: ${theme.SPACING_600}; `}
    ${p => p.bp4_mr6 && css` margin-right: ${theme.SPACING_600}; `}
    ${p => p.bp4_mb6 && css` margin-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp4_ml6 && css` margin-left: ${theme.SPACING_600}; `}

    ${p => p.bp4_m7 && css` margin: ${theme.SPACING_700}; `}
    ${p => p.bp4_mt7 && css` margin-top: ${theme.SPACING_700}; `}
    ${p => p.bp4_mr7 && css` margin-right: ${theme.SPACING_700}; `}
    ${p => p.bp4_mb7 && css` margin-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp4_ml7 && css` margin-left: ${theme.SPACING_700}; `}

    ${p => p.bp4_m8 && css` margin: ${theme.SPACING_800}; `}
    ${p => p.bp4_mt8 && css` margin-top: ${theme.SPACING_800}; `}
    ${p => p.bp4_mr8 && css` margin-right: ${theme.SPACING_800}; `}
    ${p => p.bp4_mb8 && css` margin-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp4_ml8 && css` margin-left: ${theme.SPACING_800}; `}

    ${p => p.bp4_m9 && css` margin: ${theme.SPACING_900}; `}
    ${p => p.bp4_mt9 && css` margin-top: ${theme.SPACING_900}; `}
    ${p => p.bp4_mr9 && css` margin-right: ${theme.SPACING_900}; `}
    ${p => p.bp4_mb9 && css` margin-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp4_ml9 && css` margin-left: ${theme.SPACING_900}; `}
  }

  ${p => p.white && css`color: ${theme.WHITE};`}
  ${p => p.black && css`color: ${theme.BLACK};`}

  ${p => p.gray500 && css`color: ${theme.GRAY_500};`}
  ${p => p.gray600 && css`color: ${theme.GRAY_600};`}
  ${p => p.gray900 && css`color: ${theme.GRAY_900};`}

  ${p => p.left && css`text-align: left;`}
  ${p => p.center && css`text-align: center;`}
  ${p => p.right && css`text-align: right;`}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_left && css`text-align: left;`}
    ${p => p.bp1_center && css`text-align: center;`}
    ${p => p.bp1_right && css`text-align: right;`}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_left && css`text-align: left;`}
    ${p => p.bp2_center && css`text-align: center;`}
    ${p => p.bp2_right && css`text-align: right;`}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_left && css`text-align: left;`}
    ${p => p.bp3_center && css`text-align: center;`}
    ${p => p.bp3_right && css`text-align: right;`}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_left && css`text-align: left;`}
    ${p => p.bp4_center && css`text-align: center;`}
    ${p => p.bp4_right && css`text-align: right;`}
  }

  ${p => p.nowrap && css`white-space: nowrap;`}

  ${p => p.tnum && css`font-feature-settings: 'tnum';`}

  ${p => p.us_none && css`user-select: none;`}
`;

Heading.propTypes = {
  mode: PropTypes.oneOf([
    'size1',
    'size2',
    'size3',
    'size4',
    'size5',
    'size6'
  ])
}

export default Heading;

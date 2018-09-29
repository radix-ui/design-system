import { css } from 'styled-components';
import * as theme from './../theme/';

const Margin = css`
  ${p => p.margin_0 && css` margin: 0; `}
  ${p => p.mt_0 && css` margin-top: 0; `}
  ${p => p.mr_0 && css` margin-right: 0; `}
  ${p => p.mb_0 && css` margin-bottom: 0; `}
  ${p => p.ml_0 && css` margin-left: 0; `}

  ${p => p.margin_1 && css` margin: ${theme.SPACING_100}; `}
  ${p => p.mt_1 && css` margin-top: ${theme.SPACING_100}; `}
  ${p => p.mr_1 && css` margin-right: ${theme.SPACING_100}; `}
  ${p => p.mb_1 && css` margin-bottom: ${theme.SPACING_100}; `}
  ${p => p.ml_1 && css` margin-left: ${theme.SPACING_100}; `}

  ${p => p.margin_2 && css` margin: ${theme.SPACING_200}; `}
  ${p => p.mt_2 && css` margin-top: ${theme.SPACING_200}; `}
  ${p => p.mr_2 && css` margin-right: ${theme.SPACING_200}; `}
  ${p => p.mb_2 && css` margin-bottom: ${theme.SPACING_200}; `}
  ${p => p.ml_2 && css` margin-left: ${theme.SPACING_200}; `}

  ${p => p.margin_3 && css` margin: ${theme.SPACING_300}; `}
  ${p => p.mt_3 && css` margin-top: ${theme.SPACING_300}; `}
  ${p => p.mr_3 && css` margin-right: ${theme.SPACING_300}; `}
  ${p => p.mb_3 && css` margin-bottom: ${theme.SPACING_300}; `}
  ${p => p.ml_3 && css` margin-left: ${theme.SPACING_300}; `}

  ${p => p.margin_4 && css` margin: ${theme.SPACING_400}; `}
  ${p => p.mt_4 && css` margin-top: ${theme.SPACING_400}; `}
  ${p => p.mr_4 && css` margin-right: ${theme.SPACING_400}; `}
  ${p => p.mb_4 && css` margin-bottom: ${theme.SPACING_400}; `}
  ${p => p.ml_4 && css` margin-left: ${theme.SPACING_400}; `}

  ${p => p.margin_5 && css` margin: ${theme.SPACING_500}; `}
  ${p => p.mt_5 && css` margin-top: ${theme.SPACING_500}; `}
  ${p => p.mr_5 && css` margin-right: ${theme.SPACING_500}; `}
  ${p => p.mb_5 && css` margin-bottom: ${theme.SPACING_500}; `}
  ${p => p.ml_5 && css` margin-left: ${theme.SPACING_500}; `}

  ${p => p.margin_6 && css` margin: ${theme.SPACING_600}; `}
  ${p => p.mt_6 && css` margin-top: ${theme.SPACING_600}; `}
  ${p => p.mr_6 && css` margin-right: ${theme.SPACING_600}; `}
  ${p => p.mb_6 && css` margin-bottom: ${theme.SPACING_600}; `}
  ${p => p.ml_6 && css` margin-left: ${theme.SPACING_600}; `}

  ${p => p.margin_7 && css` margin: ${theme.SPACING_700}; `}
  ${p => p.mt_7 && css` margin-top: ${theme.SPACING_700}; `}
  ${p => p.mr_7 && css` margin-right: ${theme.SPACING_700}; `}
  ${p => p.mb_7 && css` margin-bottom: ${theme.SPACING_700}; `}
  ${p => p.ml_7 && css` margin-left: ${theme.SPACING_700}; `}

  ${p => p.margin_8 && css` margin: ${theme.SPACING_800}; `}
  ${p => p.mt_8 && css` margin-top: ${theme.SPACING_800}; `}
  ${p => p.mr_8 && css` margin-right: ${theme.SPACING_800}; `}
  ${p => p.mb_8 && css` margin-bottom: ${theme.SPACING_800}; `}
  ${p => p.ml_8 && css` margin-left: ${theme.SPACING_800}; `}

  ${p => p.margin_9 && css` margin: ${theme.SPACING_900}; `}
  ${p => p.mt_9 && css` margin-top: ${theme.SPACING_900}; `}
  ${p => p.mr_9 && css` margin-right: ${theme.SPACING_900}; `}
  ${p => p.mb_9 && css` margin-bottom: ${theme.SPACING_900}; `}
  ${p => p.ml_9 && css` margin-left: ${theme.SPACING_900}; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_margin_0 && css` margin: 0; `}
    ${p => p.bp1_mt_0 && css` margin-top: 0; `}
    ${p => p.bp1_mr_0 && css` margin-right: 0; `}
    ${p => p.bp1_mb_0 && css` margin-bottom: 0; `}
    ${p => p.bp1_ml_0 && css` margin-left: 0; `}

    ${p => p.bp1_margin_1 && css` margin: ${theme.SPACING_100}; `}
    ${p => p.bp1_mt_1 && css` margin-top: ${theme.SPACING_100}; `}
    ${p => p.bp1_mr_1 && css` margin-right: ${theme.SPACING_100}; `}
    ${p => p.bp1_mb_1 && css` margin-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp1_ml_1 && css` margin-left: ${theme.SPACING_100}; `}

    ${p => p.bp1_margin_2 && css` margin: ${theme.SPACING_200}; `}
    ${p => p.bp1_mt_2 && css` margin-top: ${theme.SPACING_200}; `}
    ${p => p.bp1_mr_2 && css` margin-right: ${theme.SPACING_200}; `}
    ${p => p.bp1_mb_2 && css` margin-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp1_ml_2 && css` margin-left: ${theme.SPACING_200}; `}

    ${p => p.bp1_margin_3 && css` margin: ${theme.SPACING_300}; `}
    ${p => p.bp1_mt_3 && css` margin-top: ${theme.SPACING_300}; `}
    ${p => p.bp1_mr_3 && css` margin-right: ${theme.SPACING_300}; `}
    ${p => p.bp1_mb_3 && css` margin-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp1_ml_3 && css` margin-left: ${theme.SPACING_300}; `}

    ${p => p.bp1_margin_4 && css` margin: ${theme.SPACING_400}; `}
    ${p => p.bp1_mt_4 && css` margin-top: ${theme.SPACING_400}; `}
    ${p => p.bp1_mr_4 && css` margin-right: ${theme.SPACING_400}; `}
    ${p => p.bp1_mb_4 && css` margin-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp1_ml_4 && css` margin-left: ${theme.SPACING_400}; `}

    ${p => p.bp1_margin_5 && css` margin: ${theme.SPACING_500}; `}
    ${p => p.bp1_mt_5 && css` margin-top: ${theme.SPACING_500}; `}
    ${p => p.bp1_mr_5 && css` margin-right: ${theme.SPACING_500}; `}
    ${p => p.bp1_mb_5 && css` margin-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp1_ml_5 && css` margin-left: ${theme.SPACING_500}; `}

    ${p => p.bp1_margin_6 && css` margin: ${theme.SPACING_600}; `}
    ${p => p.bp1_mt_6 && css` margin-top: ${theme.SPACING_600}; `}
    ${p => p.bp1_mr_6 && css` margin-right: ${theme.SPACING_600}; `}
    ${p => p.bp1_mb_6 && css` margin-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp1_ml_6 && css` margin-left: ${theme.SPACING_600}; `}

    ${p => p.bp1_margin_7 && css` margin: ${theme.SPACING_700}; `}
    ${p => p.bp1_mt_7 && css` margin-top: ${theme.SPACING_700}; `}
    ${p => p.bp1_mr_7 && css` margin-right: ${theme.SPACING_700}; `}
    ${p => p.bp1_mb_7 && css` margin-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp1_ml_7 && css` margin-left: ${theme.SPACING_700}; `}

    ${p => p.bp1_margin_8 && css` margin: ${theme.SPACING_800}; `}
    ${p => p.bp1_mt_8 && css` margin-top: ${theme.SPACING_800}; `}
    ${p => p.bp1_mr_8 && css` margin-right: ${theme.SPACING_800}; `}
    ${p => p.bp1_mb_8 && css` margin-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp1_ml_8 && css` margin-left: ${theme.SPACING_800}; `}

    ${p => p.bp1_margin_9 && css` margin: ${theme.SPACING_900}; `}
    ${p => p.bp1_mt_9 && css` margin-top: ${theme.SPACING_900}; `}
    ${p => p.bp1_mr_9 && css` margin-right: ${theme.SPACING_900}; `}
    ${p => p.bp1_mb_9 && css` margin-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp1_ml_9 && css` margin-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_margin_0 && css` margin: 0; `}
    ${p => p.bp2_mt_0 && css` margin-top: 0; `}
    ${p => p.bp2_mr_0 && css` margin-right: 0; `}
    ${p => p.bp2_mb_0 && css` margin-bottom: 0; `}
    ${p => p.bp2_ml_0 && css` margin-left: 0; `}

    ${p => p.bp2_margin_1 && css` margin: ${theme.SPACING_100}; `}
    ${p => p.bp2_mt_1 && css` margin-top: ${theme.SPACING_100}; `}
    ${p => p.bp2_mr_1 && css` margin-right: ${theme.SPACING_100}; `}
    ${p => p.bp2_mb_1 && css` margin-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp2_ml_1 && css` margin-left: ${theme.SPACING_100}; `}

    ${p => p.bp2_margin_2 && css` margin: ${theme.SPACING_200}; `}
    ${p => p.bp2_mt_2 && css` margin-top: ${theme.SPACING_200}; `}
    ${p => p.bp2_mr_2 && css` margin-right: ${theme.SPACING_200}; `}
    ${p => p.bp2_mb_2 && css` margin-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp2_ml_2 && css` margin-left: ${theme.SPACING_200}; `}

    ${p => p.bp2_margin_3 && css` margin: ${theme.SPACING_300}; `}
    ${p => p.bp2_mt_3 && css` margin-top: ${theme.SPACING_300}; `}
    ${p => p.bp2_mr_3 && css` margin-right: ${theme.SPACING_300}; `}
    ${p => p.bp2_mb_3 && css` margin-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp2_ml_3 && css` margin-left: ${theme.SPACING_300}; `}

    ${p => p.bp2_margin_4 && css` margin: ${theme.SPACING_400}; `}
    ${p => p.bp2_mt_4 && css` margin-top: ${theme.SPACING_400}; `}
    ${p => p.bp2_mr_4 && css` margin-right: ${theme.SPACING_400}; `}
    ${p => p.bp2_mb_4 && css` margin-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp2_ml_4 && css` margin-left: ${theme.SPACING_400}; `}

    ${p => p.bp2_margin_5 && css` margin: ${theme.SPACING_500}; `}
    ${p => p.bp2_mt_5 && css` margin-top: ${theme.SPACING_500}; `}
    ${p => p.bp2_mr_5 && css` margin-right: ${theme.SPACING_500}; `}
    ${p => p.bp2_mb_5 && css` margin-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp2_ml_5 && css` margin-left: ${theme.SPACING_500}; `}

    ${p => p.bp2_margin_6 && css` margin: ${theme.SPACING_600}; `}
    ${p => p.bp2_mt_6 && css` margin-top: ${theme.SPACING_600}; `}
    ${p => p.bp2_mr_6 && css` margin-right: ${theme.SPACING_600}; `}
    ${p => p.bp2_mb_6 && css` margin-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp2_ml_6 && css` margin-left: ${theme.SPACING_600}; `}

    ${p => p.bp2_margin_7 && css` margin: ${theme.SPACING_700}; `}
    ${p => p.bp2_mt_7 && css` margin-top: ${theme.SPACING_700}; `}
    ${p => p.bp2_mr_7 && css` margin-right: ${theme.SPACING_700}; `}
    ${p => p.bp2_mb_7 && css` margin-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp2_ml_7 && css` margin-left: ${theme.SPACING_700}; `}

    ${p => p.bp2_margin_8 && css` margin: ${theme.SPACING_800}; `}
    ${p => p.bp2_mt_8 && css` margin-top: ${theme.SPACING_800}; `}
    ${p => p.bp2_mr_8 && css` margin-right: ${theme.SPACING_800}; `}
    ${p => p.bp2_mb_8 && css` margin-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp2_ml_8 && css` margin-left: ${theme.SPACING_800}; `}

    ${p => p.bp2_margin_9 && css` margin: ${theme.SPACING_900}; `}
    ${p => p.bp2_mt_9 && css` margin-top: ${theme.SPACING_900}; `}
    ${p => p.bp2_mr_9 && css` margin-right: ${theme.SPACING_900}; `}
    ${p => p.bp2_mb_9 && css` margin-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp2_ml_9 && css` margin-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_margin_0 && css` margin: 0; `}
    ${p => p.bp3_mt_0 && css` margin-top: 0; `}
    ${p => p.bp3_mr_0 && css` margin-right: 0; `}
    ${p => p.bp3_mb_0 && css` margin-bottom: 0; `}
    ${p => p.bp3_ml_0 && css` margin-left: 0; `}

    ${p => p.bp3_margin_1 && css` margin: ${theme.SPACING_100}; `}
    ${p => p.bp3_mt_1 && css` margin-top: ${theme.SPACING_100}; `}
    ${p => p.bp3_mr_1 && css` margin-right: ${theme.SPACING_100}; `}
    ${p => p.bp3_mb_1 && css` margin-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp3_ml_1 && css` margin-left: ${theme.SPACING_100}; `}

    ${p => p.bp3_margin_2 && css` margin: ${theme.SPACING_200}; `}
    ${p => p.bp3_mt_2 && css` margin-top: ${theme.SPACING_200}; `}
    ${p => p.bp3_mr_2 && css` margin-right: ${theme.SPACING_200}; `}
    ${p => p.bp3_mb_2 && css` margin-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp3_ml_2 && css` margin-left: ${theme.SPACING_200}; `}

    ${p => p.bp3_margin_3 && css` margin: ${theme.SPACING_300}; `}
    ${p => p.bp3_mt_3 && css` margin-top: ${theme.SPACING_300}; `}
    ${p => p.bp3_mr_3 && css` margin-right: ${theme.SPACING_300}; `}
    ${p => p.bp3_mb_3 && css` margin-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp3_ml_3 && css` margin-left: ${theme.SPACING_300}; `}

    ${p => p.bp3_margin_4 && css` margin: ${theme.SPACING_400}; `}
    ${p => p.bp3_mt_4 && css` margin-top: ${theme.SPACING_400}; `}
    ${p => p.bp3_mr_4 && css` margin-right: ${theme.SPACING_400}; `}
    ${p => p.bp3_mb_4 && css` margin-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp3_ml_4 && css` margin-left: ${theme.SPACING_400}; `}

    ${p => p.bp3_margin_5 && css` margin: ${theme.SPACING_500}; `}
    ${p => p.bp3_mt_5 && css` margin-top: ${theme.SPACING_500}; `}
    ${p => p.bp3_mr_5 && css` margin-right: ${theme.SPACING_500}; `}
    ${p => p.bp3_mb_5 && css` margin-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp3_ml_5 && css` margin-left: ${theme.SPACING_500}; `}

    ${p => p.bp3_margin_6 && css` margin: ${theme.SPACING_600}; `}
    ${p => p.bp3_mt_6 && css` margin-top: ${theme.SPACING_600}; `}
    ${p => p.bp3_mr_6 && css` margin-right: ${theme.SPACING_600}; `}
    ${p => p.bp3_mb_6 && css` margin-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp3_ml_6 && css` margin-left: ${theme.SPACING_600}; `}

    ${p => p.bp3_margin_7 && css` margin: ${theme.SPACING_700}; `}
    ${p => p.bp3_mt_7 && css` margin-top: ${theme.SPACING_700}; `}
    ${p => p.bp3_mr_7 && css` margin-right: ${theme.SPACING_700}; `}
    ${p => p.bp3_mb_7 && css` margin-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp3_ml_7 && css` margin-left: ${theme.SPACING_700}; `}

    ${p => p.bp3_margin_8 && css` margin: ${theme.SPACING_800}; `}
    ${p => p.bp3_mt_8 && css` margin-top: ${theme.SPACING_800}; `}
    ${p => p.bp3_mr_8 && css` margin-right: ${theme.SPACING_800}; `}
    ${p => p.bp3_mb_8 && css` margin-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp3_ml_8 && css` margin-left: ${theme.SPACING_800}; `}

    ${p => p.bp3_margin_9 && css` margin: ${theme.SPACING_900}; `}
    ${p => p.bp3_mt_9 && css` margin-top: ${theme.SPACING_900}; `}
    ${p => p.bp3_mr_9 && css` margin-right: ${theme.SPACING_900}; `}
    ${p => p.bp3_mb_9 && css` margin-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp3_ml_9 && css` margin-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_margin_0 && css` margin: 0; `}
    ${p => p.bp4_mt_0 && css` margin-top: 0; `}
    ${p => p.bp4_mr_0 && css` margin-right: 0; `}
    ${p => p.bp4_mb_0 && css` margin-bottom: 0; `}
    ${p => p.bp4_ml_0 && css` margin-left: 0; `}

    ${p => p.bp4_margin_1 && css` margin: ${theme.SPACING_100}; `}
    ${p => p.bp4_mt_1 && css` margin-top: ${theme.SPACING_100}; `}
    ${p => p.bp4_mr_1 && css` margin-right: ${theme.SPACING_100}; `}
    ${p => p.bp4_mb_1 && css` margin-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp4_ml_1 && css` margin-left: ${theme.SPACING_100}; `}

    ${p => p.bp4_margin_2 && css` margin: ${theme.SPACING_200}; `}
    ${p => p.bp4_mt_2 && css` margin-top: ${theme.SPACING_200}; `}
    ${p => p.bp4_mr_2 && css` margin-right: ${theme.SPACING_200}; `}
    ${p => p.bp4_mb_2 && css` margin-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp4_ml_2 && css` margin-left: ${theme.SPACING_200}; `}

    ${p => p.bp4_margin_3 && css` margin: ${theme.SPACING_300}; `}
    ${p => p.bp4_mt_3 && css` margin-top: ${theme.SPACING_300}; `}
    ${p => p.bp4_mr_3 && css` margin-right: ${theme.SPACING_300}; `}
    ${p => p.bp4_mb_3 && css` margin-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp4_ml_3 && css` margin-left: ${theme.SPACING_300}; `}

    ${p => p.bp4_margin_4 && css` margin: ${theme.SPACING_400}; `}
    ${p => p.bp4_mt_4 && css` margin-top: ${theme.SPACING_400}; `}
    ${p => p.bp4_mr_4 && css` margin-right: ${theme.SPACING_400}; `}
    ${p => p.bp4_mb_4 && css` margin-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp4_ml_4 && css` margin-left: ${theme.SPACING_400}; `}

    ${p => p.bp4_margin_5 && css` margin: ${theme.SPACING_500}; `}
    ${p => p.bp4_mt_5 && css` margin-top: ${theme.SPACING_500}; `}
    ${p => p.bp4_mr_5 && css` margin-right: ${theme.SPACING_500}; `}
    ${p => p.bp4_mb_5 && css` margin-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp4_ml_5 && css` margin-left: ${theme.SPACING_500}; `}

    ${p => p.bp4_margin_6 && css` margin: ${theme.SPACING_600}; `}
    ${p => p.bp4_mt_6 && css` margin-top: ${theme.SPACING_600}; `}
    ${p => p.bp4_mr_6 && css` margin-right: ${theme.SPACING_600}; `}
    ${p => p.bp4_mb_6 && css` margin-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp4_ml_6 && css` margin-left: ${theme.SPACING_600}; `}

    ${p => p.bp4_margin_7 && css` margin: ${theme.SPACING_700}; `}
    ${p => p.bp4_mt_7 && css` margin-top: ${theme.SPACING_700}; `}
    ${p => p.bp4_mr_7 && css` margin-right: ${theme.SPACING_700}; `}
    ${p => p.bp4_mb_7 && css` margin-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp4_ml_7 && css` margin-left: ${theme.SPACING_700}; `}

    ${p => p.bp4_margin_8 && css` margin: ${theme.SPACING_800}; `}
    ${p => p.bp4_mt_8 && css` margin-top: ${theme.SPACING_800}; `}
    ${p => p.bp4_mr_8 && css` margin-right: ${theme.SPACING_800}; `}
    ${p => p.bp4_mb_8 && css` margin-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp4_ml_8 && css` margin-left: ${theme.SPACING_800}; `}

    ${p => p.bp4_margin_9 && css` margin: ${theme.SPACING_900}; `}
    ${p => p.bp4_mt_9 && css` margin-top: ${theme.SPACING_900}; `}
    ${p => p.bp4_mr_9 && css` margin-right: ${theme.SPACING_900}; `}
    ${p => p.bp4_mb_9 && css` margin-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp4_ml_9 && css` margin-left: ${theme.SPACING_900}; `}
  }
`;

export default Margin;

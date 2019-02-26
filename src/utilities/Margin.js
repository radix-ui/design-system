import { css } from 'styled-components';
import * as theme from './../theme/';

const marginPropsKeys = [
  'margin_0', 'mt_0', 'mr_0', 'mb_0', 'ml_0',
  'margin_1', 'mt_1', 'mr_1', 'mb_1', ' ml_1',
  'margin_2', 'mt_2', 'mr_2', 'mb_2', 'ml_2',
  'margin_3', 'mt_3', 'mr_3', 'mb_3', 'ml_3',
  'margin_4', 'mt_4', 'mr_4', 'mb_4', 'ml_4',
  'margin_5', 'mt_5', 'mr_5', 'mb_5', 'ml_5',
  'margin_6', 'mt_6', 'mr_6', 'mb_6', 'ml_6',
  'margin_7', 'mt_7', 'mr_7', 'mb_7', 'ml_7',
  'margin_8', 'mt_8', 'mr_8', 'mb_8', 'ml_8',
  'margin_9', 'mt_9', 'mr_9', 'mb_9', 'ml_9']

const Margin = p => css`

  ${p.margin_0 && ` margin: 0; `}
  ${p.mt_0 && ` margin-top: 0; `}
  ${p.mr_0 && ` margin-right: 0; `}
  ${p.mb_0 && ` margin-bottom: 0; `}
  ${p.ml_0 && ` margin-left: 0; `}
  
  ${p.margin_1 && ` margin: ${theme.SPACING_100}; `}
  ${p.mt_1 && ` margin-top: ${theme.SPACING_100}; `}
  ${p.mr_1 && ` margin-right: ${theme.SPACING_100}; `}
  ${p.mb_1 && ` margin-bottom: ${theme.SPACING_100}; `}
  ${p.ml_1 && ` margin-left: ${theme.SPACING_100}; `}

  ${p.margin_2 && ` margin: ${theme.SPACING_200}; `}
  ${p.mt_2 && ` margin-top: ${theme.SPACING_200}; `}
  ${p.mr_2 && ` margin-right: ${theme.SPACING_200}; `}
  ${p.mb_2 && ` margin-bottom: ${theme.SPACING_200}; `}
  ${p.ml_2 && ` margin-left: ${theme.SPACING_200}; `}

  ${p.margin_3 && ` margin: ${theme.SPACING_300}; `}
  ${p.mt_3 && ` margin-top: ${theme.SPACING_300}; `}
  ${p.mr_3 && ` margin-right: ${theme.SPACING_300}; `}
  ${p.mb_3 && ` margin-bottom: ${theme.SPACING_300}; `}
  ${p.ml_3 && ` margin-left: ${theme.SPACING_300}; `}

  ${p.margin_4 && ` margin: ${theme.SPACING_400}; `}
  ${p.mt_4 && ` margin-top: ${theme.SPACING_400}; `}
  ${p.mr_4 && ` margin-right: ${theme.SPACING_400}; `}
  ${p.mb_4 && ` margin-bottom: ${theme.SPACING_400}; `}
  ${p.ml_4 && ` margin-left: ${theme.SPACING_400}; `}

  ${p.margin_5 && ` margin: ${theme.SPACING_500}; `}
  ${p.mt_5 && ` margin-top: ${theme.SPACING_500}; `}
  ${p.mr_5 && ` margin-right: ${theme.SPACING_500}; `}
  ${p.mb_5 && ` margin-bottom: ${theme.SPACING_500}; `}
  ${p.ml_5 && ` margin-left: ${theme.SPACING_500}; `}

  ${p.margin_6 && ` margin: ${theme.SPACING_600}; `}
  ${p.mt_6 && ` margin-top: ${theme.SPACING_600}; `}
  ${p.mr_6 && ` margin-right: ${theme.SPACING_600}; `}
  ${p.mb_6 && ` margin-bottom: ${theme.SPACING_600}; `}
  ${p.ml_6 && ` margin-left: ${theme.SPACING_600}; `}

  ${p.margin_7 && ` margin: ${theme.SPACING_700}; `}
  ${p.mt_7 && ` margin-top: ${theme.SPACING_700}; `}
  ${p.mr_7 && ` margin-right: ${theme.SPACING_700}; `}
  ${p.mb_7 && ` margin-bottom: ${theme.SPACING_700}; `}
  ${p.ml_7 && ` margin-left: ${theme.SPACING_700}; `}

  ${p.margin_8 && ` margin: ${theme.SPACING_800}; `}
  ${p.mt_8 && ` margin-top: ${theme.SPACING_800}; `}
  ${p.mr_8 && ` margin-right: ${theme.SPACING_800}; `}
  ${p.mb_8 && ` margin-bottom: ${theme.SPACING_800}; `}
  ${p.ml_8 && ` margin-left: ${theme.SPACING_800}; `}

  ${p.margin_9 && ` margin: ${theme.SPACING_900}; `}
  ${p.mt_9 && ` margin-top: ${theme.SPACING_900}; `}
  ${p.mr_9 && ` margin-right: ${theme.SPACING_900}; `}
  ${p.mb_9 && ` margin-bottom: ${theme.SPACING_900}; `}
  ${p.ml_9 && ` margin-left: ${theme.SPACING_900}; `}

  ${p => marginPropsKeys.some(prop => p[`bp1_${prop}`])  && css`
    @media (min-width: ${theme.BREAKPOINT_100}) {
      ${p.bp1_margin_0 && ` margin: 0; `}
      ${p.bp1_mt_0 && ` margin-top: 0; `}
      ${p.bp1_mr_0 && ` margin-right: 0; `}
      ${p.bp1_mb_0 && ` margin-bottom: 0; `}
      ${p.bp1_ml_0 && ` margin-left: 0; `}

      ${p.bp1_margin_1 && ` margin: ${theme.SPACING_100}; `}
      ${p.bp1_mt_1 && ` margin-top: ${theme.SPACING_100}; `}
      ${p.bp1_mr_1 && ` margin-right: ${theme.SPACING_100}; `}
      ${p.bp1_mb_1 && ` margin-bottom: ${theme.SPACING_100}; `}
      ${p.bp1_ml_1 && ` margin-left: ${theme.SPACING_100}; `}

      ${p.bp1_margin_2 && ` margin: ${theme.SPACING_200}; `}
      ${p.bp1_mt_2 && ` margin-top: ${theme.SPACING_200}; `}
      ${p.bp1_mr_2 && ` margin-right: ${theme.SPACING_200}; `}
      ${p.bp1_mb_2 && ` margin-bottom: ${theme.SPACING_200}; `}
      ${p.bp1_ml_2 && ` margin-left: ${theme.SPACING_200}; `}

      ${p.bp1_margin_3 && ` margin: ${theme.SPACING_300}; `}
      ${p.bp1_mt_3 && ` margin-top: ${theme.SPACING_300}; `}
      ${p.bp1_mr_3 && ` margin-right: ${theme.SPACING_300}; `}
      ${p.bp1_mb_3 && ` margin-bottom: ${theme.SPACING_300}; `}
      ${p.bp1_ml_3 && ` margin-left: ${theme.SPACING_300}; `}

      ${p.bp1_margin_4 && ` margin: ${theme.SPACING_400}; `}
      ${p.bp1_mt_4 && ` margin-top: ${theme.SPACING_400}; `}
      ${p.bp1_mr_4 && ` margin-right: ${theme.SPACING_400}; `}
      ${p.bp1_mb_4 && ` margin-bottom: ${theme.SPACING_400}; `}
      ${p.bp1_ml_4 && ` margin-left: ${theme.SPACING_400}; `}

      ${p.bp1_margin_5 && ` margin: ${theme.SPACING_500}; `}
      ${p.bp1_mt_5 && ` margin-top: ${theme.SPACING_500}; `}
      ${p.bp1_mr_5 && ` margin-right: ${theme.SPACING_500}; `}
      ${p.bp1_mb_5 && ` margin-bottom: ${theme.SPACING_500}; `}
      ${p.bp1_ml_5 && ` margin-left: ${theme.SPACING_500}; `}

      ${p.bp1_margin_6 && ` margin: ${theme.SPACING_600}; `}
      ${p.bp1_mt_6 && ` margin-top: ${theme.SPACING_600}; `}
      ${p.bp1_mr_6 && ` margin-right: ${theme.SPACING_600}; `}
      ${p.bp1_mb_6 && ` margin-bottom: ${theme.SPACING_600}; `}
      ${p.bp1_ml_6 && ` margin-left: ${theme.SPACING_600}; `}

      ${p.bp1_margin_7 && ` margin: ${theme.SPACING_700}; `}
      ${p.bp1_mt_7 && ` margin-top: ${theme.SPACING_700}; `}
      ${p.bp1_mr_7 && ` margin-right: ${theme.SPACING_700}; `}
      ${p.bp1_mb_7 && ` margin-bottom: ${theme.SPACING_700}; `}
      ${p.bp1_ml_7 && ` margin-left: ${theme.SPACING_700}; `}

      ${p.bp1_margin_8 && ` margin: ${theme.SPACING_800}; `}
      ${p.bp1_mt_8 && ` margin-top: ${theme.SPACING_800}; `}
      ${p.bp1_mr_8 && ` margin-right: ${theme.SPACING_800}; `}
      ${p.bp1_mb_8 && ` margin-bottom: ${theme.SPACING_800}; `}
      ${p.bp1_ml_8 && ` margin-left: ${theme.SPACING_800}; `}

      ${p.bp1_margin_9 && ` margin: ${theme.SPACING_900}; `}
      ${p.bp1_mt_9 && ` margin-top: ${theme.SPACING_900}; `}
      ${p.bp1_mr_9 && ` margin-right: ${theme.SPACING_900}; `}
      ${p.bp1_mb_9 && ` margin-bottom: ${theme.SPACING_900}; `}
      ${p.bp1_ml_9 && ` margin-left: ${theme.SPACING_900}; `}
    }
  `}

  ${p => marginPropsKeys.some(prop => p[`bp2_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_200}) {
      ${p.bp2_margin_0 && ` margin: 0; `}
      ${p.bp2_mt_0 && ` margin-top: 0; `}
      ${p.bp2_mr_0 && ` margin-right: 0; `}
      ${p.bp2_mb_0 && ` margin-bottom: 0; `}
      ${p.bp2_ml_0 && ` margin-left: 0; `}

      ${p.bp2_margin_1 && ` margin: ${theme.SPACING_100}; `}
      ${p.bp2_mt_1 && ` margin-top: ${theme.SPACING_100}; `}
      ${p.bp2_mr_1 && ` margin-right: ${theme.SPACING_100}; `}
      ${p.bp2_mb_1 && ` margin-bottom: ${theme.SPACING_100}; `}
      ${p.bp2_ml_1 && ` margin-left: ${theme.SPACING_100}; `}

      ${p.bp2_margin_2 && ` margin: ${theme.SPACING_200}; `}
      ${p.bp2_mt_2 && ` margin-top: ${theme.SPACING_200}; `}
      ${p.bp2_mr_2 && ` margin-right: ${theme.SPACING_200}; `}
      ${p.bp2_mb_2 && ` margin-bottom: ${theme.SPACING_200}; `}
      ${p.bp2_ml_2 && ` margin-left: ${theme.SPACING_200}; `}

      ${p.bp2_margin_3 && ` margin: ${theme.SPACING_300}; `}
      ${p.bp2_mt_3 && ` margin-top: ${theme.SPACING_300}; `}
      ${p.bp2_mr_3 && ` margin-right: ${theme.SPACING_300}; `}
      ${p.bp2_mb_3 && ` margin-bottom: ${theme.SPACING_300}; `}
      ${p.bp2_ml_3 && ` margin-left: ${theme.SPACING_300}; `}

      ${p.bp2_margin_4 && ` margin: ${theme.SPACING_400}; `}
      ${p.bp2_mt_4 && ` margin-top: ${theme.SPACING_400}; `}
      ${p.bp2_mr_4 && ` margin-right: ${theme.SPACING_400}; `}
      ${p.bp2_mb_4 && ` margin-bottom: ${theme.SPACING_400}; `}
      ${p.bp2_ml_4 && ` margin-left: ${theme.SPACING_400}; `}

      ${p.bp2_margin_5 && ` margin: ${theme.SPACING_500}; `}
      ${p.bp2_mt_5 && ` margin-top: ${theme.SPACING_500}; `}
      ${p.bp2_mr_5 && ` margin-right: ${theme.SPACING_500}; `}
      ${p.bp2_mb_5 && ` margin-bottom: ${theme.SPACING_500}; `}
      ${p.bp2_ml_5 && ` margin-left: ${theme.SPACING_500}; `}

      ${p.bp2_margin_6 && ` margin: ${theme.SPACING_600}; `}
      ${p.bp2_mt_6 && ` margin-top: ${theme.SPACING_600}; `}
      ${p.bp2_mr_6 && ` margin-right: ${theme.SPACING_600}; `}
      ${p.bp2_mb_6 && ` margin-bottom: ${theme.SPACING_600}; `}
      ${p.bp2_ml_6 && ` margin-left: ${theme.SPACING_600}; `}

      ${p.bp2_margin_7 && ` margin: ${theme.SPACING_700}; `}
      ${p.bp2_mt_7 && ` margin-top: ${theme.SPACING_700}; `}
      ${p.bp2_mr_7 && ` margin-right: ${theme.SPACING_700}; `}
      ${p.bp2_mb_7 && ` margin-bottom: ${theme.SPACING_700}; `}
      ${p.bp2_ml_7 && ` margin-left: ${theme.SPACING_700}; `}

      ${p.bp2_margin_8 && ` margin: ${theme.SPACING_800}; `}
      ${p.bp2_mt_8 && ` margin-top: ${theme.SPACING_800}; `}
      ${p.bp2_mr_8 && ` margin-right: ${theme.SPACING_800}; `}
      ${p.bp2_mb_8 && ` margin-bottom: ${theme.SPACING_800}; `}
      ${p.bp2_ml_8 && ` margin-left: ${theme.SPACING_800}; `}

      ${p.bp2_margin_9 && ` margin: ${theme.SPACING_900}; `}
      ${p.bp2_mt_9 && ` margin-top: ${theme.SPACING_900}; `}
      ${p.bp2_mr_9 && ` margin-right: ${theme.SPACING_900}; `}
      ${p.bp2_mb_9 && ` margin-bottom: ${theme.SPACING_900}; `}
      ${p.bp2_ml_9 && ` margin-left: ${theme.SPACING_900}; `}
    }
  `}

  ${p => marginPropsKeys.some(prop => p[`bp3_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_300}) {
      ${p.bp3_margin_0 && ` margin: 0; `}
      ${p.bp3_mt_0 && ` margin-top: 0; `}
      ${p.bp3_mr_0 && ` margin-right: 0; `}
      ${p.bp3_mb_0 && ` margin-bottom: 0; `}
      ${p.bp3_ml_0 && ` margin-left: 0; `}

      ${p.bp3_margin_1 && ` margin: ${theme.SPACING_100}; `}
      ${p.bp3_mt_1 && ` margin-top: ${theme.SPACING_100}; `}
      ${p.bp3_mr_1 && ` margin-right: ${theme.SPACING_100}; `}
      ${p.bp3_mb_1 && ` margin-bottom: ${theme.SPACING_100}; `}
      ${p.bp3_ml_1 && ` margin-left: ${theme.SPACING_100}; `}

      ${p.bp3_margin_2 && ` margin: ${theme.SPACING_200}; `}
      ${p.bp3_mt_2 && ` margin-top: ${theme.SPACING_200}; `}
      ${p.bp3_mr_2 && ` margin-right: ${theme.SPACING_200}; `}
      ${p.bp3_mb_2 && ` margin-bottom: ${theme.SPACING_200}; `}
      ${p.bp3_ml_2 && ` margin-left: ${theme.SPACING_200}; `}

      ${p.bp3_margin_3 && ` margin: ${theme.SPACING_300}; `}
      ${p.bp3_mt_3 && ` margin-top: ${theme.SPACING_300}; `}
      ${p.bp3_mr_3 && ` margin-right: ${theme.SPACING_300}; `}
      ${p.bp3_mb_3 && ` margin-bottom: ${theme.SPACING_300}; `}
      ${p.bp3_ml_3 && ` margin-left: ${theme.SPACING_300}; `}

      ${p.bp3_margin_4 && ` margin: ${theme.SPACING_400}; `}
      ${p.bp3_mt_4 && ` margin-top: ${theme.SPACING_400}; `}
      ${p.bp3_mr_4 && ` margin-right: ${theme.SPACING_400}; `}
      ${p.bp3_mb_4 && ` margin-bottom: ${theme.SPACING_400}; `}
      ${p.bp3_ml_4 && ` margin-left: ${theme.SPACING_400}; `}

      ${p.bp3_margin_5 && ` margin: ${theme.SPACING_500}; `}
      ${p.bp3_mt_5 && ` margin-top: ${theme.SPACING_500}; `}
      ${p.bp3_mr_5 && ` margin-right: ${theme.SPACING_500}; `}
      ${p.bp3_mb_5 && ` margin-bottom: ${theme.SPACING_500}; `}
      ${p.bp3_ml_5 && ` margin-left: ${theme.SPACING_500}; `}

      ${p.bp3_margin_6 && ` margin: ${theme.SPACING_600}; `}
      ${p.bp3_mt_6 && ` margin-top: ${theme.SPACING_600}; `}
      ${p.bp3_mr_6 && ` margin-right: ${theme.SPACING_600}; `}
      ${p.bp3_mb_6 && ` margin-bottom: ${theme.SPACING_600}; `}
      ${p.bp3_ml_6 && ` margin-left: ${theme.SPACING_600}; `}

      ${p.bp3_margin_7 && ` margin: ${theme.SPACING_700}; `}
      ${p.bp3_mt_7 && ` margin-top: ${theme.SPACING_700}; `}
      ${p.bp3_mr_7 && ` margin-right: ${theme.SPACING_700}; `}
      ${p.bp3_mb_7 && ` margin-bottom: ${theme.SPACING_700}; `}
      ${p.bp3_ml_7 && ` margin-left: ${theme.SPACING_700}; `}

      ${p.bp3_margin_8 && ` margin: ${theme.SPACING_800}; `}
      ${p.bp3_mt_8 && ` margin-top: ${theme.SPACING_800}; `}
      ${p.bp3_mr_8 && ` margin-right: ${theme.SPACING_800}; `}
      ${p.bp3_mb_8 && ` margin-bottom: ${theme.SPACING_800}; `}
      ${p.bp3_ml_8 && ` margin-left: ${theme.SPACING_800}; `}

      ${p.bp3_margin_9 && ` margin: ${theme.SPACING_900}; `}
      ${p.bp3_mt_9 && ` margin-top: ${theme.SPACING_900}; `}
      ${p.bp3_mr_9 && ` margin-right: ${theme.SPACING_900}; `}
      ${p.bp3_mb_9 && ` margin-bottom: ${theme.SPACING_900}; `}
      ${p.bp3_ml_9 && ` margin-left: ${theme.SPACING_900}; `}
    }
  `}

  ${p => marginPropsKeys.some(prop => p[`bp4_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_400}) {
      ${p.bp4_margin_0 && ` margin: 0; `}
      ${p.bp4_mt_0 && ` margin-top: 0; `}
      ${p.bp4_mr_0 && ` margin-right: 0; `}
      ${p.bp4_mb_0 && ` margin-bottom: 0; `}
      ${p.bp4_ml_0 && ` margin-left: 0; `}

      ${p.bp4_margin_1 && ` margin: ${theme.SPACING_100}; `}
      ${p.bp4_mt_1 && ` margin-top: ${theme.SPACING_100}; `}
      ${p.bp4_mr_1 && ` margin-right: ${theme.SPACING_100}; `}
      ${p.bp4_mb_1 && ` margin-bottom: ${theme.SPACING_100}; `}
      ${p.bp4_ml_1 && ` margin-left: ${theme.SPACING_100}; `}

      ${p.bp4_margin_2 && ` margin: ${theme.SPACING_200}; `}
      ${p.bp4_mt_2 && ` margin-top: ${theme.SPACING_200}; `}
      ${p.bp4_mr_2 && ` margin-right: ${theme.SPACING_200}; `}
      ${p.bp4_mb_2 && ` margin-bottom: ${theme.SPACING_200}; `}
      ${p.bp4_ml_2 && ` margin-left: ${theme.SPACING_200}; `}

      ${p.bp4_margin_3 && ` margin: ${theme.SPACING_300}; `}
      ${p.bp4_mt_3 && ` margin-top: ${theme.SPACING_300}; `}
      ${p.bp4_mr_3 && ` margin-right: ${theme.SPACING_300}; `}
      ${p.bp4_mb_3 && ` margin-bottom: ${theme.SPACING_300}; `}
      ${p.bp4_ml_3 && ` margin-left: ${theme.SPACING_300}; `}

      ${p.bp4_margin_4 && ` margin: ${theme.SPACING_400}; `}
      ${p.bp4_mt_4 && ` margin-top: ${theme.SPACING_400}; `}
      ${p.bp4_mr_4 && ` margin-right: ${theme.SPACING_400}; `}
      ${p.bp4_mb_4 && ` margin-bottom: ${theme.SPACING_400}; `}
      ${p.bp4_ml_4 && ` margin-left: ${theme.SPACING_400}; `}

      ${p.bp4_margin_5 && ` margin: ${theme.SPACING_500}; `}
      ${p.bp4_mt_5 && ` margin-top: ${theme.SPACING_500}; `}
      ${p.bp4_mr_5 && ` margin-right: ${theme.SPACING_500}; `}
      ${p.bp4_mb_5 && ` margin-bottom: ${theme.SPACING_500}; `}
      ${p.bp4_ml_5 && ` margin-left: ${theme.SPACING_500}; `}

      ${p.bp4_margin_6 && ` margin: ${theme.SPACING_600}; `}
      ${p.bp4_mt_6 && ` margin-top: ${theme.SPACING_600}; `}
      ${p.bp4_mr_6 && ` margin-right: ${theme.SPACING_600}; `}
      ${p.bp4_mb_6 && ` margin-bottom: ${theme.SPACING_600}; `}
      ${p.bp4_ml_6 && ` margin-left: ${theme.SPACING_600}; `}

      ${p.bp4_margin_7 && ` margin: ${theme.SPACING_700}; `}
      ${p.bp4_mt_7 && ` margin-top: ${theme.SPACING_700}; `}
      ${p.bp4_mr_7 && ` margin-right: ${theme.SPACING_700}; `}
      ${p.bp4_mb_7 && ` margin-bottom: ${theme.SPACING_700}; `}
      ${p.bp4_ml_7 && ` margin-left: ${theme.SPACING_700}; `}

      ${p.bp4_margin_8 && ` margin: ${theme.SPACING_800}; `}
      ${p.bp4_mt_8 && ` margin-top: ${theme.SPACING_800}; `}
      ${p.bp4_mr_8 && ` margin-right: ${theme.SPACING_800}; `}
      ${p.bp4_mb_8 && ` margin-bottom: ${theme.SPACING_800}; `}
      ${p.bp4_ml_8 && ` margin-left: ${theme.SPACING_800}; `}

      ${p.bp4_margin_9 && ` margin: ${theme.SPACING_900}; `}
      ${p.bp4_mt_9 && ` margin-top: ${theme.SPACING_900}; `}
      ${p.bp4_mr_9 && ` margin-right: ${theme.SPACING_900}; `}
      ${p.bp4_mb_9 && ` margin-bottom: ${theme.SPACING_900}; `}
      ${p.bp4_ml_9 && ` margin-left: ${theme.SPACING_900}; `}
    }
  `}
`;

export default Margin;

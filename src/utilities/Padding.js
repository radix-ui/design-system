import { css } from 'styled-components';
import * as theme from './../theme/';

const paddingPropsKeys = [
  'padding_0', 'pt_0', 'pr_0', 'pb_0', 'pl_0', 
  'padding_1', 'pt_1', 'pr_1', 'pb_1', 'pl_1',
  'padding_2', 'pt_2', 'pr_2', 'pb_2', 'pl_2',
  'padding_3', 'pt_3', 'pr_3', 'pb_3', 'pl_3',
  'padding_4', 'pt_4', 'pr_4', 'pb_4', 'pl_4',
  'padding_5', 'pt_5', 'pr_5', 'pb_5', 'pl_5',
  'padding_6', 'pt_6', 'pr_6', 'pb_6', 'pl_6',
  'padding_7', 'pt_7', 'pr_7', 'pb_7', 'pl_7',
  'padding_8', 'pt_8', 'pr_8', 'pb_8', 'pl_8',
  'padding_9', 'pt_9', 'pr_9', 'pb_9', 'pl_9'
  ]
const Padding = p => css`

  ${p.padding_0 && ` padding: 0; `}
  ${p.pt_0 && ` padding-top: 0; `}
  ${p.pr_0 && ` padding-right: 0; `}
  ${p.pb_0 && ` padding-bottom: 0; `}
  ${p.pl_0 && ` padding-left: 0; `}

  ${p.padding_1 && ` padding: ${theme.SPACING_100}; `}
  ${p.pt_1 && ` padding-top: ${theme.SPACING_100}; `}
  ${p.pr_1 && ` padding-right: ${theme.SPACING_100}; `}
  ${p.pb_1 && ` padding-bottom: ${theme.SPACING_100}; `}
  ${p.pl_1 && ` padding-left: ${theme.SPACING_100}; `}

  ${p.padding_2 && ` padding: ${theme.SPACING_200}; `}
  ${p.pt_2 && ` padding-top: ${theme.SPACING_200}; `}
  ${p.pr_2 && ` padding-right: ${theme.SPACING_200}; `}
  ${p.pb_2 && ` padding-bottom: ${theme.SPACING_200}; `}
  ${p.pl_2 && ` padding-left: ${theme.SPACING_200}; `}

  ${p.padding_3 && ` padding: ${theme.SPACING_300}; `}
  ${p.pt_3 && ` padding-top: ${theme.SPACING_300}; `}
  ${p.pr_3 && ` padding-right: ${theme.SPACING_300}; `}
  ${p.pb_3 && ` padding-bottom: ${theme.SPACING_300}; `}
  ${p.pl_3 && ` padding-left: ${theme.SPACING_300}; `}

  ${p.padding_4 && ` padding: ${theme.SPACING_400}; `}
  ${p.pt_4 && ` padding-top: ${theme.SPACING_400}; `}
  ${p.pr_4 && ` padding-right: ${theme.SPACING_400}; `}
  ${p.pb_4 && ` padding-bottom: ${theme.SPACING_400}; `}
  ${p.pl_4 && ` padding-left: ${theme.SPACING_400}; `}

  ${p.padding_5 && ` padding: ${theme.SPACING_500}; `}
  ${p.pt_5 && ` padding-top: ${theme.SPACING_500}; `}
  ${p.pr_5 && ` padding-right: ${theme.SPACING_500}; `}
  ${p.pb_5 && ` padding-bottom: ${theme.SPACING_500}; `}
  ${p.pl_5 && ` padding-left: ${theme.SPACING_500}; `}

  ${p.padding_6 && ` padding: ${theme.SPACING_600}; `}
  ${p.pt_6 && ` padding-top: ${theme.SPACING_600}; `}
  ${p.pr_6 && ` padding-right: ${theme.SPACING_600}; `}
  ${p.pb_6 && ` padding-bottom: ${theme.SPACING_600}; `}
  ${p.pl_6 && ` padding-left: ${theme.SPACING_600}; `}

  ${p.padding_7 && ` padding: ${theme.SPACING_700}; `}
  ${p.pt_7 && ` padding-top: ${theme.SPACING_700}; `}
  ${p.pr_7 && ` padding-right: ${theme.SPACING_700}; `}
  ${p.pb_7 && ` padding-bottom: ${theme.SPACING_700}; `}
  ${p.pl_7 && ` padding-left: ${theme.SPACING_700}; `}

  ${p.padding_8 && ` padding: ${theme.SPACING_800}; `}
  ${p.pt_8 && ` padding-top: ${theme.SPACING_800}; `}
  ${p.pr_8 && ` padding-right: ${theme.SPACING_800}; `}
  ${p.pb_8 && ` padding-bottom: ${theme.SPACING_800}; `}
  ${p.pl_8 && ` padding-left: ${theme.SPACING_800}; `}

  ${p.padding_9 && ` padding: ${theme.SPACING_900}; `}
  ${p.pt_9 && ` padding-top: ${theme.SPACING_900}; `}
  ${p.pr_9 && ` padding-right: ${theme.SPACING_900}; `}
  ${p.pb_9 && ` padding-bottom: ${theme.SPACING_900}; `}
  ${p.pl_9 && ` padding-left: ${theme.SPACING_900}; `}

  ${paddingPropsKeys.some(prop => p[`bp1_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_100}) {
      ${p.bp1_padding_0 && ` padding: 0; `}
      ${p.bp1_pt_0 && ` padding-top: 0; `}
      ${p.bp1_pr_0 && ` padding-right: 0; `}
      ${p.bp1_pb_0 && ` padding-bottom: 0; `}
      ${p.bp1_pl_0 && ` padding-left: 0; `}

      ${p.bp1_padding_1 && ` padding: ${theme.SPACING_100}; `}
      ${p.bp1_pt_1 && ` padding-top: ${theme.SPACING_100}; `}
      ${p.bp1_pr_1 && ` padding-right: ${theme.SPACING_100}; `}
      ${p.bp1_pb_1 && ` padding-bottom: ${theme.SPACING_100}; `}
      ${p.bp1_pl_1 && ` padding-left: ${theme.SPACING_100}; `}

      ${p.bp1_padding_2 && ` padding: ${theme.SPACING_200}; `}
      ${p.bp1_pt_2 && ` padding-top: ${theme.SPACING_200}; `}
      ${p.bp1_pr_2 && ` padding-right: ${theme.SPACING_200}; `}
      ${p.bp1_pb_2 && ` padding-bottom: ${theme.SPACING_200}; `}
      ${p.bp1_pl_2 && ` padding-left: ${theme.SPACING_200}; `}

      ${p.bp1_padding_3 && ` padding: ${theme.SPACING_300}; `}
      ${p.bp1_pt_3 && ` padding-top: ${theme.SPACING_300}; `}
      ${p.bp1_pr_3 && ` padding-right: ${theme.SPACING_300}; `}
      ${p.bp1_pb_3 && ` padding-bottom: ${theme.SPACING_300}; `}
      ${p.bp1_pl_3 && ` padding-left: ${theme.SPACING_300}; `}

      ${p.bp1_padding_4 && ` padding: ${theme.SPACING_400}; `}
      ${p.bp1_pt_4 && ` padding-top: ${theme.SPACING_400}; `}
      ${p.bp1_pr_4 && ` padding-right: ${theme.SPACING_400}; `}
      ${p.bp1_pb_4 && ` padding-bottom: ${theme.SPACING_400}; `}
      ${p.bp1_pl_4 && ` padding-left: ${theme.SPACING_400}; `}

      ${p.bp1_padding_5 && ` padding: ${theme.SPACING_500}; `}
      ${p.bp1_pt_5 && ` padding-top: ${theme.SPACING_500}; `}
      ${p.bp1_pr_5 && ` padding-right: ${theme.SPACING_500}; `}
      ${p.bp1_pb_5 && ` padding-bottom: ${theme.SPACING_500}; `}
      ${p.bp1_pl_5 && ` padding-left: ${theme.SPACING_500}; `}

      ${p.bp1_padding_6 && ` padding: ${theme.SPACING_600}; `}
      ${p.bp1_pt_6 && ` padding-top: ${theme.SPACING_600}; `}
      ${p.bp1_pr_6 && ` padding-right: ${theme.SPACING_600}; `}
      ${p.bp1_pb_6 && ` padding-bottom: ${theme.SPACING_600}; `}
      ${p.bp1_pl_6 && ` padding-left: ${theme.SPACING_600}; `}

      ${p.bp1_padding_7 && ` padding: ${theme.SPACING_700}; `}
      ${p.bp1_pt_7 && ` padding-top: ${theme.SPACING_700}; `}
      ${p.bp1_pr_7 && ` padding-right: ${theme.SPACING_700}; `}
      ${p.bp1_pb_7 && ` padding-bottom: ${theme.SPACING_700}; `}
      ${p.bp1_pl_7 && ` padding-left: ${theme.SPACING_700}; `}

      ${p.bp1_padding_8 && ` padding: ${theme.SPACING_800}; `}
      ${p.bp1_pt_8 && ` padding-top: ${theme.SPACING_800}; `}
      ${p.bp1_pr_8 && ` padding-right: ${theme.SPACING_800}; `}
      ${p.bp1_pb_8 && ` padding-bottom: ${theme.SPACING_800}; `}
      ${p.bp1_pl_8 && ` padding-left: ${theme.SPACING_800}; `}

      ${p.bp1_padding_9 && ` padding: ${theme.SPACING_900}; `}
      ${p.bp1_pt_9 && ` padding-top: ${theme.SPACING_900}; `}
      ${p.bp1_pr_9 && ` padding-right: ${theme.SPACING_900}; `}
      ${p.bp1_pb_9 && ` padding-bottom: ${theme.SPACING_900}; `}
      ${p.bp1_pl_9 && ` padding-left: ${theme.SPACING_900}; `}
    }
  `}

  ${paddingPropsKeys.some(prop => p[`bp2_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_200}) {
      ${p.bp2_padding_0 && ` padding: 0; `}
      ${p.bp2_pt_0 && ` padding-top: 0; `}
      ${p.bp2_pr_0 && ` padding-right: 0; `}
      ${p.bp2_pb_0 && ` padding-bottom: 0; `}
      ${p.bp2_pl_0 && ` padding-left: 0; `}

      ${p.bp2_padding_1 && ` padding: ${theme.SPACING_100}; `}
      ${p.bp2_pt_1 && ` padding-top: ${theme.SPACING_100}; `}
      ${p.bp2_pr_1 && ` padding-right: ${theme.SPACING_100}; `}
      ${p.bp2_pb_1 && ` padding-bottom: ${theme.SPACING_100}; `}
      ${p.bp2_pl_1 && ` padding-left: ${theme.SPACING_100}; `}

      ${p.bp2_padding_2 && ` padding: ${theme.SPACING_200}; `}
      ${p.bp2_pt_2 && ` padding-top: ${theme.SPACING_200}; `}
      ${p.bp2_pr_2 && ` padding-right: ${theme.SPACING_200}; `}
      ${p.bp2_pb_2 && ` padding-bottom: ${theme.SPACING_200}; `}
      ${p.bp2_pl_2 && ` padding-left: ${theme.SPACING_200}; `}

      ${p.bp2_padding_3 && ` padding: ${theme.SPACING_300}; `}
      ${p.bp2_pt_3 && ` padding-top: ${theme.SPACING_300}; `}
      ${p.bp2_pr_3 && ` padding-right: ${theme.SPACING_300}; `}
      ${p.bp2_pb_3 && ` padding-bottom: ${theme.SPACING_300}; `}
      ${p.bp2_pl_3 && ` padding-left: ${theme.SPACING_300}; `}

      ${p.bp2_padding_4 && ` padding: ${theme.SPACING_400}; `}
      ${p.bp2_pt_4 && ` padding-top: ${theme.SPACING_400}; `}
      ${p.bp2_pr_4 && ` padding-right: ${theme.SPACING_400}; `}
      ${p.bp2_pb_4 && ` padding-bottom: ${theme.SPACING_400}; `}
      ${p.bp2_pl_4 && ` padding-left: ${theme.SPACING_400}; `}

      ${p.bp2_padding_5 && ` padding: ${theme.SPACING_500}; `}
      ${p.bp2_pt_5 && ` padding-top: ${theme.SPACING_500}; `}
      ${p.bp2_pr_5 && ` padding-right: ${theme.SPACING_500}; `}
      ${p.bp2_pb_5 && ` padding-bottom: ${theme.SPACING_500}; `}
      ${p.bp2_pl_5 && ` padding-left: ${theme.SPACING_500}; `}

      ${p.bp2_padding_6 && ` padding: ${theme.SPACING_600}; `}
      ${p.bp2_pt_6 && ` padding-top: ${theme.SPACING_600}; `}
      ${p.bp2_pr_6 && ` padding-right: ${theme.SPACING_600}; `}
      ${p.bp2_pb_6 && ` padding-bottom: ${theme.SPACING_600}; `}
      ${p.bp2_pl_6 && ` padding-left: ${theme.SPACING_600}; `}

      ${p.bp2_padding_7 && ` padding: ${theme.SPACING_700}; `}
      ${p.bp2_pt_7 && ` padding-top: ${theme.SPACING_700}; `}
      ${p.bp2_pr_7 && ` padding-right: ${theme.SPACING_700}; `}
      ${p.bp2_pb_7 && ` padding-bottom: ${theme.SPACING_700}; `}
      ${p.bp2_pl_7 && ` padding-left: ${theme.SPACING_700}; `}

      ${p.bp2_padding_8 && ` padding: ${theme.SPACING_800}; `}
      ${p.bp2_pt_8 && ` padding-top: ${theme.SPACING_800}; `}
      ${p.bp2_pr_8 && ` padding-right: ${theme.SPACING_800}; `}
      ${p.bp2_pb_8 && ` padding-bottom: ${theme.SPACING_800}; `}
      ${p.bp2_pl_8 && ` padding-left: ${theme.SPACING_800}; `}

      ${p.bp2_padding_9 && ` padding: ${theme.SPACING_900}; `}
      ${p.bp2_pt_9 && ` padding-top: ${theme.SPACING_900}; `}
      ${p.bp2_pr_9 && ` padding-right: ${theme.SPACING_900}; `}
      ${p.bp2_pb_9 && ` padding-bottom: ${theme.SPACING_900}; `}
      ${p.bp2_pl_9 && ` padding-left: ${theme.SPACING_900}; `}
    }
  `}

  ${paddingPropsKeys.some(prop => p[`bp3_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_300}) {
      ${p.bp3_padding_0 && ` padding: 0; `}
      ${p.bp3_pt_0 && ` padding-top: 0; `}
      ${p.bp3_pr_0 && ` padding-right: 0; `}
      ${p.bp3_pb_0 && ` padding-bottom: 0; `}
      ${p.bp3_pl_0 && ` padding-left: 0; `}

      ${p.bp3_padding_1 && ` padding: ${theme.SPACING_100}; `}
      ${p.bp3_pt_1 && ` padding-top: ${theme.SPACING_100}; `}
      ${p.bp3_pr_1 && ` padding-right: ${theme.SPACING_100}; `}
      ${p.bp3_pb_1 && ` padding-bottom: ${theme.SPACING_100}; `}
      ${p.bp3_pl_1 && ` padding-left: ${theme.SPACING_100}; `}

      ${p.bp3_padding_2 && ` padding: ${theme.SPACING_200}; `}
      ${p.bp3_pt_2 && ` padding-top: ${theme.SPACING_200}; `}
      ${p.bp3_pr_2 && ` padding-right: ${theme.SPACING_200}; `}
      ${p.bp3_pb_2 && ` padding-bottom: ${theme.SPACING_200}; `}
      ${p.bp3_pl_2 && ` padding-left: ${theme.SPACING_200}; `}

      ${p.bp3_padding_3 && ` padding: ${theme.SPACING_300}; `}
      ${p.bp3_pt_3 && ` padding-top: ${theme.SPACING_300}; `}
      ${p.bp3_pr_3 && ` padding-right: ${theme.SPACING_300}; `}
      ${p.bp3_pb_3 && ` padding-bottom: ${theme.SPACING_300}; `}
      ${p.bp3_pl_3 && ` padding-left: ${theme.SPACING_300}; `}

      ${p.bp3_padding_4 && ` padding: ${theme.SPACING_400}; `}
      ${p.bp3_pt_4 && ` padding-top: ${theme.SPACING_400}; `}
      ${p.bp3_pr_4 && ` padding-right: ${theme.SPACING_400}; `}
      ${p.bp3_pb_4 && ` padding-bottom: ${theme.SPACING_400}; `}
      ${p.bp3_pl_4 && ` padding-left: ${theme.SPACING_400}; `}

      ${p.bp3_padding_5 && ` padding: ${theme.SPACING_500}; `}
      ${p.bp3_pt_5 && ` padding-top: ${theme.SPACING_500}; `}
      ${p.bp3_pr_5 && ` padding-right: ${theme.SPACING_500}; `}
      ${p.bp3_pb_5 && ` padding-bottom: ${theme.SPACING_500}; `}
      ${p.bp3_pl_5 && ` padding-left: ${theme.SPACING_500}; `}

      ${p.bp3_padding_6 && ` padding: ${theme.SPACING_600}; `}
      ${p.bp3_pt_6 && ` padding-top: ${theme.SPACING_600}; `}
      ${p.bp3_pr_6 && ` padding-right: ${theme.SPACING_600}; `}
      ${p.bp3_pb_6 && ` padding-bottom: ${theme.SPACING_600}; `}
      ${p.bp3_pl_6 && ` padding-left: ${theme.SPACING_600}; `}

      ${p.bp3_padding_7 && ` padding: ${theme.SPACING_700}; `}
      ${p.bp3_pt_7 && ` padding-top: ${theme.SPACING_700}; `}
      ${p.bp3_pr_7 && ` padding-right: ${theme.SPACING_700}; `}
      ${p.bp3_pb_7 && ` padding-bottom: ${theme.SPACING_700}; `}
      ${p.bp3_pl_7 && ` padding-left: ${theme.SPACING_700}; `}

      ${p.bp3_padding_8 && ` padding: ${theme.SPACING_800}; `}
      ${p.bp3_pt_8 && ` padding-top: ${theme.SPACING_800}; `}
      ${p.bp3_pr_8 && ` padding-right: ${theme.SPACING_800}; `}
      ${p.bp3_pb_8 && ` padding-bottom: ${theme.SPACING_800}; `}
      ${p.bp3_pl_8 && ` padding-left: ${theme.SPACING_800}; `}

      ${p.bp3_padding_9 && ` padding: ${theme.SPACING_900}; `}
      ${p.bp3_pt_9 && ` padding-top: ${theme.SPACING_900}; `}
      ${p.bp3_pr_9 && ` padding-right: ${theme.SPACING_900}; `}
      ${p.bp3_pb_9 && ` padding-bottom: ${theme.SPACING_900}; `}
      ${p.bp3_pl_9 && ` padding-left: ${theme.SPACING_900}; `}
    }
  `}

  ${paddingPropsKeys.some(prop => p[`bp4_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_400}) {
      ${p.bp4_padding_0 && ` padding: 0; `}
      ${p.bp4_pt_0 && ` padding-top: 0; `}
      ${p.bp4_pr_0 && ` padding-right: 0; `}
      ${p.bp4_pb_0 && ` padding-bottom: 0; `}
      ${p.bp4_pl_0 && ` padding-left: 0; `}

      ${p.bp4_padding_1 && ` padding: ${theme.SPACING_100}; `}
      ${p.bp4_pt_1 && ` padding-top: ${theme.SPACING_100}; `}
      ${p.bp4_pr_1 && ` padding-right: ${theme.SPACING_100}; `}
      ${p.bp4_pb_1 && ` padding-bottom: ${theme.SPACING_100}; `}
      ${p.bp4_pl_1 && ` padding-left: ${theme.SPACING_100}; `}

      ${p.bp4_padding_2 && ` padding: ${theme.SPACING_200}; `}
      ${p.bp4_pt_2 && ` padding-top: ${theme.SPACING_200}; `}
      ${p.bp4_pr_2 && ` padding-right: ${theme.SPACING_200}; `}
      ${p.bp4_pb_2 && ` padding-bottom: ${theme.SPACING_200}; `}
      ${p.bp4_pl_2 && ` padding-left: ${theme.SPACING_200}; `}

      ${p.bp4_padding_3 && ` padding: ${theme.SPACING_300}; `}
      ${p.bp4_pt_3 && ` padding-top: ${theme.SPACING_300}; `}
      ${p.bp4_pr_3 && ` padding-right: ${theme.SPACING_300}; `}
      ${p.bp4_pb_3 && ` padding-bottom: ${theme.SPACING_300}; `}
      ${p.bp4_pl_3 && ` padding-left: ${theme.SPACING_300}; `}

      ${p.bp4_padding_4 && ` padding: ${theme.SPACING_400}; `}
      ${p.bp4_pt_4 && ` padding-top: ${theme.SPACING_400}; `}
      ${p.bp4_pr_4 && ` padding-right: ${theme.SPACING_400}; `}
      ${p.bp4_pb_4 && ` padding-bottom: ${theme.SPACING_400}; `}
      ${p.bp4_pl_4 && ` padding-left: ${theme.SPACING_400}; `}

      ${p.bp4_padding_5 && ` padding: ${theme.SPACING_500}; `}
      ${p.bp4_pt_5 && ` padding-top: ${theme.SPACING_500}; `}
      ${p.bp4_pr_5 && ` padding-right: ${theme.SPACING_500}; `}
      ${p.bp4_pb_5 && ` padding-bottom: ${theme.SPACING_500}; `}
      ${p.bp4_pl_5 && ` padding-left: ${theme.SPACING_500}; `}

      ${p.bp4_padding_6 && ` padding: ${theme.SPACING_600}; `}
      ${p.bp4_pt_6 && ` padding-top: ${theme.SPACING_600}; `}
      ${p.bp4_pr_6 && ` padding-right: ${theme.SPACING_600}; `}
      ${p.bp4_pb_6 && ` padding-bottom: ${theme.SPACING_600}; `}
      ${p.bp4_pl_6 && ` padding-left: ${theme.SPACING_600}; `}

      ${p.bp4_padding_7 && ` padding: ${theme.SPACING_700}; `}
      ${p.bp4_pt_7 && ` padding-top: ${theme.SPACING_700}; `}
      ${p.bp4_pr_7 && ` padding-right: ${theme.SPACING_700}; `}
      ${p.bp4_pb_7 && ` padding-bottom: ${theme.SPACING_700}; `}
      ${p.bp4_pl_7 && ` padding-left: ${theme.SPACING_700}; `}

      ${p.bp4_padding_8 && ` padding: ${theme.SPACING_800}; `}
      ${p.bp4_pt_8 && ` padding-top: ${theme.SPACING_800}; `}
      ${p.bp4_pr_8 && ` padding-right: ${theme.SPACING_800}; `}
      ${p.bp4_pb_8 && ` padding-bottom: ${theme.SPACING_800}; `}
      ${p.bp4_pl_8 && ` padding-left: ${theme.SPACING_800}; `}

      ${p.bp4_padding_9 && ` padding: ${theme.SPACING_900}; `}
      ${p.bp4_pt_9 && ` padding-top: ${theme.SPACING_900}; `}
      ${p.bp4_pr_9 && ` padding-right: ${theme.SPACING_900}; `}
      ${p.bp4_pb_9 && ` padding-bottom: ${theme.SPACING_900}; `}
      ${p.bp4_pl_9 && ` padding-left: ${theme.SPACING_900}; `}
    }
  `}
`;

export default Padding;

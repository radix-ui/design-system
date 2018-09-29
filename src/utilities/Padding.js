import { css } from 'styled-components';
import * as theme from './../theme/';

const Padding = css`
  ${p => p.padding_0 && css` padding: 0; `}
  ${p => p.pt_0 && css` padding-top: 0; `}
  ${p => p.pr_0 && css` padding-right: 0; `}
  ${p => p.pb_0 && css` padding-bottom: 0; `}
  ${p => p.pl_0 && css` padding-left: 0; `}

  ${p => p.padding_1 && css` padding: ${theme.SPACING_100}; `}
  ${p => p.pt_1 && css` padding-top: ${theme.SPACING_100}; `}
  ${p => p.pr_1 && css` padding-right: ${theme.SPACING_100}; `}
  ${p => p.pb_1 && css` padding-bottom: ${theme.SPACING_100}; `}
  ${p => p.pl_1 && css` padding-left: ${theme.SPACING_100}; `}

  ${p => p.padding_2 && css` padding: ${theme.SPACING_200}; `}
  ${p => p.pt_2 && css` padding-top: ${theme.SPACING_200}; `}
  ${p => p.pr_2 && css` padding-right: ${theme.SPACING_200}; `}
  ${p => p.pb_2 && css` padding-bottom: ${theme.SPACING_200}; `}
  ${p => p.pl_2 && css` padding-left: ${theme.SPACING_200}; `}

  ${p => p.padding_3 && css` padding: ${theme.SPACING_300}; `}
  ${p => p.pt_3 && css` padding-top: ${theme.SPACING_300}; `}
  ${p => p.pr_3 && css` padding-right: ${theme.SPACING_300}; `}
  ${p => p.pb_3 && css` padding-bottom: ${theme.SPACING_300}; `}
  ${p => p.pl_3 && css` padding-left: ${theme.SPACING_300}; `}

  ${p => p.padding_4 && css` padding: ${theme.SPACING_400}; `}
  ${p => p.pt_4 && css` padding-top: ${theme.SPACING_400}; `}
  ${p => p.pr_4 && css` padding-right: ${theme.SPACING_400}; `}
  ${p => p.pb_4 && css` padding-bottom: ${theme.SPACING_400}; `}
  ${p => p.pl_4 && css` padding-left: ${theme.SPACING_400}; `}

  ${p => p.padding_5 && css` padding: ${theme.SPACING_500}; `}
  ${p => p.pt_5 && css` padding-top: ${theme.SPACING_500}; `}
  ${p => p.pr_5 && css` padding-right: ${theme.SPACING_500}; `}
  ${p => p.pb_5 && css` padding-bottom: ${theme.SPACING_500}; `}
  ${p => p.pl_5 && css` padding-left: ${theme.SPACING_500}; `}

  ${p => p.padding_6 && css` padding: ${theme.SPACING_600}; `}
  ${p => p.pt_6 && css` padding-top: ${theme.SPACING_600}; `}
  ${p => p.pr_6 && css` padding-right: ${theme.SPACING_600}; `}
  ${p => p.pb_6 && css` padding-bottom: ${theme.SPACING_600}; `}
  ${p => p.pl_6 && css` padding-left: ${theme.SPACING_600}; `}

  ${p => p.padding_7 && css` padding: ${theme.SPACING_700}; `}
  ${p => p.pt_7 && css` padding-top: ${theme.SPACING_700}; `}
  ${p => p.pr_7 && css` padding-right: ${theme.SPACING_700}; `}
  ${p => p.pb_7 && css` padding-bottom: ${theme.SPACING_700}; `}
  ${p => p.pl_7 && css` padding-left: ${theme.SPACING_700}; `}

  ${p => p.padding_8 && css` padding: ${theme.SPACING_800}; `}
  ${p => p.pt_8 && css` padding-top: ${theme.SPACING_800}; `}
  ${p => p.pr_8 && css` padding-right: ${theme.SPACING_800}; `}
  ${p => p.pb_8 && css` padding-bottom: ${theme.SPACING_800}; `}
  ${p => p.pl_8 && css` padding-left: ${theme.SPACING_800}; `}

  ${p => p.padding_9 && css` padding: ${theme.SPACING_900}; `}
  ${p => p.pt_9 && css` padding-top: ${theme.SPACING_900}; `}
  ${p => p.pr_9 && css` padding-right: ${theme.SPACING_900}; `}
  ${p => p.pb_9 && css` padding-bottom: ${theme.SPACING_900}; `}
  ${p => p.pl_9 && css` padding-left: ${theme.SPACING_900}; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_p_0 && css` padding: 0; `}
    ${p => p.bp1_pt_0 && css` padding-top: 0; `}
    ${p => p.bp1_pr_0 && css` padding-right: 0; `}
    ${p => p.bp1_pb_0 && css` padding-bottom: 0; `}
    ${p => p.bp1_pl_0 && css` padding-left: 0; `}

    ${p => p.bp1_p_1 && css` padding: ${theme.SPACING_100}; `}
    ${p => p.bp1_pt_1 && css` padding-top: ${theme.SPACING_100}; `}
    ${p => p.bp1_pr_1 && css` padding-right: ${theme.SPACING_100}; `}
    ${p => p.bp1_pb_1 && css` padding-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp1_pl_1 && css` padding-left: ${theme.SPACING_100}; `}

    ${p => p.bp1_p_2 && css` padding: ${theme.SPACING_200}; `}
    ${p => p.bp1_pt_2 && css` padding-top: ${theme.SPACING_200}; `}
    ${p => p.bp1_pr_2 && css` padding-right: ${theme.SPACING_200}; `}
    ${p => p.bp1_pb_2 && css` padding-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp1_pl_2 && css` padding-left: ${theme.SPACING_200}; `}

    ${p => p.bp1_p_3 && css` padding: ${theme.SPACING_300}; `}
    ${p => p.bp1_pt_3 && css` padding-top: ${theme.SPACING_300}; `}
    ${p => p.bp1_pr_3 && css` padding-right: ${theme.SPACING_300}; `}
    ${p => p.bp1_pb_3 && css` padding-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp1_pl_3 && css` padding-left: ${theme.SPACING_300}; `}

    ${p => p.bp1_p_4 && css` padding: ${theme.SPACING_400}; `}
    ${p => p.bp1_pt_4 && css` padding-top: ${theme.SPACING_400}; `}
    ${p => p.bp1_pr_4 && css` padding-right: ${theme.SPACING_400}; `}
    ${p => p.bp1_pb_4 && css` padding-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp1_pl_4 && css` padding-left: ${theme.SPACING_400}; `}

    ${p => p.bp1_p_5 && css` padding: ${theme.SPACING_500}; `}
    ${p => p.bp1_pt_5 && css` padding-top: ${theme.SPACING_500}; `}
    ${p => p.bp1_pr_5 && css` padding-right: ${theme.SPACING_500}; `}
    ${p => p.bp1_pb_5 && css` padding-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp1_pl_5 && css` padding-left: ${theme.SPACING_500}; `}

    ${p => p.bp1_p_6 && css` padding: ${theme.SPACING_600}; `}
    ${p => p.bp1_pt_6 && css` padding-top: ${theme.SPACING_600}; `}
    ${p => p.bp1_pr_6 && css` padding-right: ${theme.SPACING_600}; `}
    ${p => p.bp1_pb_6 && css` padding-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp1_pl_6 && css` padding-left: ${theme.SPACING_600}; `}

    ${p => p.bp1_p_7 && css` padding: ${theme.SPACING_700}; `}
    ${p => p.bp1_pt_7 && css` padding-top: ${theme.SPACING_700}; `}
    ${p => p.bp1_pr_7 && css` padding-right: ${theme.SPACING_700}; `}
    ${p => p.bp1_pb_7 && css` padding-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp1_pl_7 && css` padding-left: ${theme.SPACING_700}; `}

    ${p => p.bp1_p_8 && css` padding: ${theme.SPACING_800}; `}
    ${p => p.bp1_pt_8 && css` padding-top: ${theme.SPACING_800}; `}
    ${p => p.bp1_pr_8 && css` padding-right: ${theme.SPACING_800}; `}
    ${p => p.bp1_pb_8 && css` padding-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp1_pl_8 && css` padding-left: ${theme.SPACING_800}; `}

    ${p => p.bp1_p_9 && css` padding: ${theme.SPACING_900}; `}
    ${p => p.bp1_pt_9 && css` padding-top: ${theme.SPACING_900}; `}
    ${p => p.bp1_pr_9 && css` padding-right: ${theme.SPACING_900}; `}
    ${p => p.bp1_pb_9 && css` padding-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp1_pl_9 && css` padding-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_p_0 && css` padding: 0; `}
    ${p => p.bp2_pt_0 && css` padding-top: 0; `}
    ${p => p.bp2_pr_0 && css` padding-right: 0; `}
    ${p => p.bp2_pb_0 && css` padding-bottom: 0; `}
    ${p => p.bp2_pl_0 && css` padding-left: 0; `}

    ${p => p.bp2_p_1 && css` padding: ${theme.SPACING_100}; `}
    ${p => p.bp2_pt_1 && css` padding-top: ${theme.SPACING_100}; `}
    ${p => p.bp2_pr_1 && css` padding-right: ${theme.SPACING_100}; `}
    ${p => p.bp2_pb_1 && css` padding-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp2_pl_1 && css` padding-left: ${theme.SPACING_100}; `}

    ${p => p.bp2_p_2 && css` padding: ${theme.SPACING_200}; `}
    ${p => p.bp2_pt_2 && css` padding-top: ${theme.SPACING_200}; `}
    ${p => p.bp2_pr_2 && css` padding-right: ${theme.SPACING_200}; `}
    ${p => p.bp2_pb_2 && css` padding-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp2_pl_2 && css` padding-left: ${theme.SPACING_200}; `}

    ${p => p.bp2_p_3 && css` padding: ${theme.SPACING_300}; `}
    ${p => p.bp2_pt_3 && css` padding-top: ${theme.SPACING_300}; `}
    ${p => p.bp2_pr_3 && css` padding-right: ${theme.SPACING_300}; `}
    ${p => p.bp2_pb_3 && css` padding-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp2_pl_3 && css` padding-left: ${theme.SPACING_300}; `}

    ${p => p.bp2_p_4 && css` padding: ${theme.SPACING_400}; `}
    ${p => p.bp2_pt_4 && css` padding-top: ${theme.SPACING_400}; `}
    ${p => p.bp2_pr_4 && css` padding-right: ${theme.SPACING_400}; `}
    ${p => p.bp2_pb_4 && css` padding-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp2_pl_4 && css` padding-left: ${theme.SPACING_400}; `}

    ${p => p.bp2_p_5 && css` padding: ${theme.SPACING_500}; `}
    ${p => p.bp2_pt_5 && css` padding-top: ${theme.SPACING_500}; `}
    ${p => p.bp2_pr_5 && css` padding-right: ${theme.SPACING_500}; `}
    ${p => p.bp2_pb_5 && css` padding-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp2_pl_5 && css` padding-left: ${theme.SPACING_500}; `}

    ${p => p.bp2_p_6 && css` padding: ${theme.SPACING_600}; `}
    ${p => p.bp2_pt_6 && css` padding-top: ${theme.SPACING_600}; `}
    ${p => p.bp2_pr_6 && css` padding-right: ${theme.SPACING_600}; `}
    ${p => p.bp2_pb_6 && css` padding-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp2_pl_6 && css` padding-left: ${theme.SPACING_600}; `}

    ${p => p.bp2_p_7 && css` padding: ${theme.SPACING_700}; `}
    ${p => p.bp2_pt_7 && css` padding-top: ${theme.SPACING_700}; `}
    ${p => p.bp2_pr_7 && css` padding-right: ${theme.SPACING_700}; `}
    ${p => p.bp2_pb_7 && css` padding-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp2_pl_7 && css` padding-left: ${theme.SPACING_700}; `}

    ${p => p.bp2_p_8 && css` padding: ${theme.SPACING_800}; `}
    ${p => p.bp2_pt_8 && css` padding-top: ${theme.SPACING_800}; `}
    ${p => p.bp2_pr_8 && css` padding-right: ${theme.SPACING_800}; `}
    ${p => p.bp2_pb_8 && css` padding-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp2_pl_8 && css` padding-left: ${theme.SPACING_800}; `}

    ${p => p.bp2_p_9 && css` padding: ${theme.SPACING_900}; `}
    ${p => p.bp2_pt_9 && css` padding-top: ${theme.SPACING_900}; `}
    ${p => p.bp2_pr_9 && css` padding-right: ${theme.SPACING_900}; `}
    ${p => p.bp2_pb_9 && css` padding-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp2_pl_9 && css` padding-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_p_0 && css` padding: 0; `}
    ${p => p.bp3_pt_0 && css` padding-top: 0; `}
    ${p => p.bp3_pr_0 && css` padding-right: 0; `}
    ${p => p.bp3_pb_0 && css` padding-bottom: 0; `}
    ${p => p.bp3_pl_0 && css` padding-left: 0; `}

    ${p => p.bp3_p_1 && css` padding: ${theme.SPACING_100}; `}
    ${p => p.bp3_pt_1 && css` padding-top: ${theme.SPACING_100}; `}
    ${p => p.bp3_pr_1 && css` padding-right: ${theme.SPACING_100}; `}
    ${p => p.bp3_pb_1 && css` padding-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp3_pl_1 && css` padding-left: ${theme.SPACING_100}; `}

    ${p => p.bp3_p_2 && css` padding: ${theme.SPACING_200}; `}
    ${p => p.bp3_pt_2 && css` padding-top: ${theme.SPACING_200}; `}
    ${p => p.bp3_pr_2 && css` padding-right: ${theme.SPACING_200}; `}
    ${p => p.bp3_pb_2 && css` padding-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp3_pl_2 && css` padding-left: ${theme.SPACING_200}; `}

    ${p => p.bp3_p_3 && css` padding: ${theme.SPACING_300}; `}
    ${p => p.bp3_pt_3 && css` padding-top: ${theme.SPACING_300}; `}
    ${p => p.bp3_pr_3 && css` padding-right: ${theme.SPACING_300}; `}
    ${p => p.bp3_pb_3 && css` padding-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp3_pl_3 && css` padding-left: ${theme.SPACING_300}; `}

    ${p => p.bp3_p_4 && css` padding: ${theme.SPACING_400}; `}
    ${p => p.bp3_pt_4 && css` padding-top: ${theme.SPACING_400}; `}
    ${p => p.bp3_pr_4 && css` padding-right: ${theme.SPACING_400}; `}
    ${p => p.bp3_pb_4 && css` padding-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp3_pl_4 && css` padding-left: ${theme.SPACING_400}; `}

    ${p => p.bp3_p_5 && css` padding: ${theme.SPACING_500}; `}
    ${p => p.bp3_pt_5 && css` padding-top: ${theme.SPACING_500}; `}
    ${p => p.bp3_pr_5 && css` padding-right: ${theme.SPACING_500}; `}
    ${p => p.bp3_pb_5 && css` padding-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp3_pl_5 && css` padding-left: ${theme.SPACING_500}; `}

    ${p => p.bp3_p_6 && css` padding: ${theme.SPACING_600}; `}
    ${p => p.bp3_pt_6 && css` padding-top: ${theme.SPACING_600}; `}
    ${p => p.bp3_pr_6 && css` padding-right: ${theme.SPACING_600}; `}
    ${p => p.bp3_pb_6 && css` padding-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp3_pl_6 && css` padding-left: ${theme.SPACING_600}; `}

    ${p => p.bp3_p_7 && css` padding: ${theme.SPACING_700}; `}
    ${p => p.bp3_pt_7 && css` padding-top: ${theme.SPACING_700}; `}
    ${p => p.bp3_pr_7 && css` padding-right: ${theme.SPACING_700}; `}
    ${p => p.bp3_pb_7 && css` padding-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp3_pl_7 && css` padding-left: ${theme.SPACING_700}; `}

    ${p => p.bp3_p_8 && css` padding: ${theme.SPACING_800}; `}
    ${p => p.bp3_pt_8 && css` padding-top: ${theme.SPACING_800}; `}
    ${p => p.bp3_pr_8 && css` padding-right: ${theme.SPACING_800}; `}
    ${p => p.bp3_pb_8 && css` padding-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp3_pl_8 && css` padding-left: ${theme.SPACING_800}; `}

    ${p => p.bp3_p_9 && css` padding: ${theme.SPACING_900}; `}
    ${p => p.bp3_pt_9 && css` padding-top: ${theme.SPACING_900}; `}
    ${p => p.bp3_pr_9 && css` padding-right: ${theme.SPACING_900}; `}
    ${p => p.bp3_pb_9 && css` padding-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp3_pl_9 && css` padding-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_p_0 && css` padding: 0; `}
    ${p => p.bp4_pt_0 && css` padding-top: 0; `}
    ${p => p.bp4_pr_0 && css` padding-right: 0; `}
    ${p => p.bp4_pb_0 && css` padding-bottom: 0; `}
    ${p => p.bp4_pl_0 && css` padding-left: 0; `}

    ${p => p.bp4_p_1 && css` padding: ${theme.SPACING_100}; `}
    ${p => p.bp4_pt_1 && css` padding-top: ${theme.SPACING_100}; `}
    ${p => p.bp4_pr_1 && css` padding-right: ${theme.SPACING_100}; `}
    ${p => p.bp4_pb_1 && css` padding-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp4_pl_1 && css` padding-left: ${theme.SPACING_100}; `}

    ${p => p.bp4_p_2 && css` padding: ${theme.SPACING_200}; `}
    ${p => p.bp4_pt_2 && css` padding-top: ${theme.SPACING_200}; `}
    ${p => p.bp4_pr_2 && css` padding-right: ${theme.SPACING_200}; `}
    ${p => p.bp4_pb_2 && css` padding-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp4_pl_2 && css` padding-left: ${theme.SPACING_200}; `}

    ${p => p.bp4_p_3 && css` padding: ${theme.SPACING_300}; `}
    ${p => p.bp4_pt_3 && css` padding-top: ${theme.SPACING_300}; `}
    ${p => p.bp4_pr_3 && css` padding-right: ${theme.SPACING_300}; `}
    ${p => p.bp4_pb_3 && css` padding-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp4_pl_3 && css` padding-left: ${theme.SPACING_300}; `}

    ${p => p.bp4_p_4 && css` padding: ${theme.SPACING_400}; `}
    ${p => p.bp4_pt_4 && css` padding-top: ${theme.SPACING_400}; `}
    ${p => p.bp4_pr_4 && css` padding-right: ${theme.SPACING_400}; `}
    ${p => p.bp4_pb_4 && css` padding-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp4_pl_4 && css` padding-left: ${theme.SPACING_400}; `}

    ${p => p.bp4_p_5 && css` padding: ${theme.SPACING_500}; `}
    ${p => p.bp4_pt_5 && css` padding-top: ${theme.SPACING_500}; `}
    ${p => p.bp4_pr_5 && css` padding-right: ${theme.SPACING_500}; `}
    ${p => p.bp4_pb_5 && css` padding-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp4_pl_5 && css` padding-left: ${theme.SPACING_500}; `}

    ${p => p.bp4_p_6 && css` padding: ${theme.SPACING_600}; `}
    ${p => p.bp4_pt_6 && css` padding-top: ${theme.SPACING_600}; `}
    ${p => p.bp4_pr_6 && css` padding-right: ${theme.SPACING_600}; `}
    ${p => p.bp4_pb_6 && css` padding-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp4_pl_6 && css` padding-left: ${theme.SPACING_600}; `}

    ${p => p.bp4_p_7 && css` padding: ${theme.SPACING_700}; `}
    ${p => p.bp4_pt_7 && css` padding-top: ${theme.SPACING_700}; `}
    ${p => p.bp4_pr_7 && css` padding-right: ${theme.SPACING_700}; `}
    ${p => p.bp4_pb_7 && css` padding-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp4_pl_7 && css` padding-left: ${theme.SPACING_700}; `}

    ${p => p.bp4_p_8 && css` padding: ${theme.SPACING_800}; `}
    ${p => p.bp4_pt_8 && css` padding-top: ${theme.SPACING_800}; `}
    ${p => p.bp4_pr_8 && css` padding-right: ${theme.SPACING_800}; `}
    ${p => p.bp4_pb_8 && css` padding-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp4_pl_8 && css` padding-left: ${theme.SPACING_800}; `}

    ${p => p.bp4_p_9 && css` padding: ${theme.SPACING_900}; `}
    ${p => p.bp4_pt_9 && css` padding-top: ${theme.SPACING_900}; `}
    ${p => p.bp4_pr_9 && css` padding-right: ${theme.SPACING_900}; `}
    ${p => p.bp4_pb_9 && css` padding-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp4_pl_9 && css` padding-left: ${theme.SPACING_900}; `}
  }
`;

export default Padding;

import { css } from 'styled-components';
import * as theme from './../theme/';

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

${(p.bp1_padding_0 || p.bp1_pt_0 || p.bp1_pr_0 || p.bp1_pb_0 || p.bp1_pl_0 || p.bp1_padding_1 || p.bp1_pt_1 || p.bp1_pr_1 || p.bp1_pb_1 || 
  p.bp1_pl_1 || p.bp1_padding_2 || p.bp1_pt_2 || p.bp1_pr_2 || p.bp1_pb_2 || p.bp1_pl_2 || p.bp1_padding_3 || p.bp1_pt_3 || 
  p.bp1_pr_3 || p.bp1_pb_3 || p.bp1_pl_3 || p.bp1_padding_4 || p.bp1_pt_4 || p.bp1_pr_4 || p.bp1_pb_4 || p.bp1_pl_4 || p.bp1_padding_5 || p.bp1_pt_5 ||
  p.bp1_pr_5 || p.bp1_pb_5 || p.bp1_pl_5 || p.bp1_padding_6 || p.bp1_pt_6 || p.bp1_pr_6 || p.bp1_pb_6 || p.bp1_pl_6 ||
  p.bp1_padding_7 || p.bp1_pt_7 || p.bp1_pr_7 || p.bp1_pb_7 || p.bp1_pl_7 || 
  p.bp1_padding_8 || p.bp1_pt_8 || p.bp1_pr_8 || p.bp1_pb_8 || p.bp1_pl_8 || 
  p.bp1_padding_9 || p.bp1_pt_9 || p.bp1_pr_9 || p.bp1_pb_9 || p.bp1_pl_9) && css`
  
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

  ${(p.bp2_padding_0 || p.bp2_pt_0 || p.bp2_pr_0 || p.bp2_pb_0 || p.bp2_pl_0 || p.bp2_padding_1 || p.bp2_pt_1 || p.bp2_pr_1 || p.bp2_pb_1 || 
  p.bp2_pl_1 || p.bp2_padding_2 || p.bp2_pt_2 || p.bp2_pr_2 || p.bp2_pb_2 || p.bp2_pl_2 || p.bp2_padding_3 || p.bp2_pt_3 || 
  p.bp2_pr_3 || p.bp2_pb_3 || p.bp2_pl_3 || p.bp2_padding_4 || p.bp2_pt_4 || p.bp2_pr_4 || p.bp2_pb_4 || p.bp2_pl_4 || p.bp2_padding_5 || p.bp2_pt_5 ||
  p.bp2_pr_5 || p.bp2_pb_5 || p.bp2_pl_5 || p.bp2_padding_6 || p.bp2_pt_6 || p.bp2_pr_6 || p.bp2_pb_6 || p.bp2_pl_6 ||
  p.bp2_padding_7 || p.bp2_pt_7 || p.bp2_pr_7 || p.bp2_pb_7 || p.bp2_pl_7 || 
  p.bp2_padding_8 || p.bp2_pt_8 || p.bp2_pr_8 || p.bp2_pb_8 || p.bp2_pl_8 || 
  p.bp2_padding_9 || p.bp2_pt_9 || p.bp2_pr_9 || p.bp2_pb_9 || p.bp2_pl_9) && css`
  
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

  ${(p.bp3_padding_0 || p.bp3_pt_0 || p.bp3_pr_0 || p.bp3_pb_0 || p.bp3_pl_0 || p.bp3_padding_1 || p.bp3_pt_1 || p.bp3_pr_1 || p.bp3_pb_1 || 
  p.bp3_pl_1 || p.bp3_padding_2 || p.bp3_pt_2 || p.bp3_pr_2 || p.bp3_pb_2 || p.bp3_pl_2 || p.bp3_padding_3 || p.bp3_pt_3 || 
  p.bp3_pr_3 || p.bp3_pb_3 || p.bp3_pl_3 || p.bp3_padding_4 || p.bp3_pt_4 || p.bp3_pr_4 || p.bp3_pb_4 || p.bp3_pl_4 || p.bp3_padding_5 || p.bp3_pt_5 ||
  p.bp3_pr_5 || p.bp3_pb_5 || p.bp3_pl_5 || p.bp3_padding_6 || p.bp3_pt_6 || p.bp3_pr_6 || p.bp3_pb_6 || p.bp3_pl_6 ||
  p.bp3_padding_7 || p.bp3_pt_7 || p.bp3_pr_7 || p.bp3_pb_7 || p.bp3_pl_7 || 
  p.bp3_padding_8 || p.bp3_pt_8 || p.bp3_pr_8 || p.bp3_pb_8 || p.bp3_pl_8 || 
  p.bp3_padding_9 || p.bp3_pt_9 || p.bp3_pr_9 || p.bp3_pb_9 || p.bp3_pl_9) && css`
  
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

  ${(p.bp4_padding_0 || p.bp4_pt_0 || p.bp4_pr_0 || p.bp4_pb_0 || p.bp4_pl_0 || p.bp4_padding_1 || p.bp4_pt_1 || p.bp4_pr_1 || p.bp4_pb_1 || 
  p.bp4_pl_1 || p.bp4_padding_2 || p.bp4_pt_2 || p.bp4_pr_2 || p.bp4_pb_2 || p.bp4_pl_2 || p.bp4_padding_3 || p.bp4_pt_3 || 
  p.bp4_pr_3 || p.bp4_pb_3 || p.bp4_pl_3 || p.bp4_padding_4 || p.bp4_pt_4 || p.bp4_pr_4 || p.bp4_pb_4 || p.bp4_pl_4 || p.bp4_padding_5 || p.bp4_pt_5 ||
  p.bp4_pr_5 || p.bp4_pb_5 || p.bp4_pl_5 || p.bp4_padding_6 || p.bp4_pt_6 || p.bp4_pr_6 || p.bp4_pb_6 || p.bp4_pl_6 ||
  p.bp4_padding_7 || p.bp4_pt_7 || p.bp4_pr_7 || p.bp4_pb_7 || p.bp4_pl_7 || 
  p.bp4_padding_8 || p.bp4_pt_8 || p.bp4_pr_8 || p.bp4_pb_8 || p.bp4_pl_8 || 
  p.bp4_padding_9 || p.bp4_pt_9 || p.bp4_pr_9 || p.bp4_pb_9 || p.bp4_pl_9) && css`
  
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

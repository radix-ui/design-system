import { css } from 'styled-components';
import * as theme from './../theme/';

const NegativeMargin = css`
  ${p => p.nmt_1 && css` margin-top: -${theme.SPACING_100}; `}
  ${p => p.nmr_1 && css` margin-right: -${theme.SPACING_100}; `}
  ${p => p.nmb_1 && css` margin-bottom: -${theme.SPACING_100}; `}
  ${p => p.nml_1 && css` margin-left: -${theme.SPACING_100}; `}

  ${p => p.nmt_2 && css` margin-top: -${theme.SPACING_200}; `}
  ${p => p.nmr_2 && css` margin-right: -${theme.SPACING_200}; `}
  ${p => p.nmb_2 && css` margin-bottom: -${theme.SPACING_200}; `}
  ${p => p.nml_2 && css` margin-left: -${theme.SPACING_200}; `}

  ${p => p.nmt_3 && css` margin-top: -${theme.SPACING_300}; `}
  ${p => p.nmr_3 && css` margin-right: -${theme.SPACING_300}; `}
  ${p => p.nmb_3 && css` margin-bottom: -${theme.SPACING_300}; `}
  ${p => p.nml_3 && css` margin-left: -${theme.SPACING_300}; `}

  ${p => p.nmt_4 && css` margin-top: -${theme.SPACING_400}; `}
  ${p => p.nmr_4 && css` margin-right: -${theme.SPACING_400}; `}
  ${p => p.nmb_4 && css` margin-bottom: -${theme.SPACING_400}; `}
  ${p => p.nml_4 && css` margin-left: -${theme.SPACING_400}; `}

  ${p => p.nmt_5 && css` margin-top: -${theme.SPACING_500}; `}
  ${p => p.nmr_5 && css` margin-right: -${theme.SPACING_500}; `}
  ${p => p.nmb_5 && css` margin-bottom: -${theme.SPACING_500}; `}
  ${p => p.nml_5 && css` margin-left: -${theme.SPACING_500}; `}

  ${p => p.nmt_6 && css` margin-top: -${theme.SPACING_600}; `}
  ${p => p.nmr_6 && css` margin-right: -${theme.SPACING_600}; `}
  ${p => p.nmb_6 && css` margin-bottom: -${theme.SPACING_600}; `}
  ${p => p.nml_6 && css` margin-left: -${theme.SPACING_600}; `}

  ${p => p.nmt_7 && css` margin-top: -${theme.SPACING_700}; `}
  ${p => p.nmr_7 && css` margin-right: -${theme.SPACING_700}; `}
  ${p => p.nmb_7 && css` margin-bottom: -${theme.SPACING_700}; `}
  ${p => p.nml_7 && css` margin-left: -${theme.SPACING_700}; `}

  ${p => p.nmt_8 && css` margin-top: -${theme.SPACING_800}; `}
  ${p => p.nmr_8 && css` margin-right: -${theme.SPACING_800}; `}
  ${p => p.nmb_8 && css` margin-bottom: -${theme.SPACING_800}; `}
  ${p => p.nml_8 && css` margin-left: -${theme.SPACING_800}; `}

  ${p => p.nmt_9 && css` margin-top: -${theme.SPACING_900}; `}
  ${p => p.nmr_9 && css` margin-right: -${theme.SPACING_900}; `}
  ${p => p.nmb_9 && css` margin-bottom: -${theme.SPACING_900}; `}
  ${p => p.nml_9 && css` margin-left: -${theme.SPACING_900}; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_nmt_1 && css` margin-top: -${theme.SPACING_100}; `}
    ${p => p.bp1_nmr_1 && css` margin-right: -${theme.SPACING_100}; `}
    ${p => p.bp1_nmb_1 && css` margin-bottom: -${theme.SPACING_100}; `}
    ${p => p.bp1_nml_1 && css` margin-left: -${theme.SPACING_100}; `}

    ${p => p.bp1_nmt_2 && css` margin-top: -${theme.SPACING_200}; `}
    ${p => p.bp1_nmr_2 && css` margin-right: -${theme.SPACING_200}; `}
    ${p => p.bp1_nmb_2 && css` margin-bottom: -${theme.SPACING_200}; `}
    ${p => p.bp1_nml_2 && css` margin-left: -${theme.SPACING_200}; `}

    ${p => p.bp1_nmt_3 && css` margin-top: -${theme.SPACING_300}; `}
    ${p => p.bp1_nmr_3 && css` margin-right: -${theme.SPACING_300}; `}
    ${p => p.bp1_nmb_3 && css` margin-bottom: -${theme.SPACING_300}; `}
    ${p => p.bp1_nml_3 && css` margin-left: -${theme.SPACING_300}; `}

    ${p => p.bp1_nmt_4 && css` margin-top: -${theme.SPACING_400}; `}
    ${p => p.bp1_nmr_4 && css` margin-right: -${theme.SPACING_400}; `}
    ${p => p.bp1_nmb_4 && css` margin-bottom: -${theme.SPACING_400}; `}
    ${p => p.bp1_nml_4 && css` margin-left: -${theme.SPACING_400}; `}

    ${p => p.bp1_nmt_5 && css` margin-top: -${theme.SPACING_500}; `}
    ${p => p.bp1_nmr_5 && css` margin-right: -${theme.SPACING_500}; `}
    ${p => p.bp1_nmb_5 && css` margin-bottom: -${theme.SPACING_500}; `}
    ${p => p.bp1_nml_5 && css` margin-left: -${theme.SPACING_500}; `}

    ${p => p.bp1_nmt_6 && css` margin-top: -${theme.SPACING_600}; `}
    ${p => p.bp1_nmr_6 && css` margin-right: -${theme.SPACING_600}; `}
    ${p => p.bp1_nmb_6 && css` margin-bottom: -${theme.SPACING_600}; `}
    ${p => p.bp1_nml_6 && css` margin-left: -${theme.SPACING_600}; `}

    ${p => p.bp1_nmt_7 && css` margin-top: -${theme.SPACING_700}; `}
    ${p => p.bp1_nmr_7 && css` margin-right: -${theme.SPACING_700}; `}
    ${p => p.bp1_nmb_7 && css` margin-bottom: -${theme.SPACING_700}; `}
    ${p => p.bp1_nml_7 && css` margin-left: -${theme.SPACING_700}; `}

    ${p => p.bp1_nmt_8 && css` margin-top: -${theme.SPACING_800}; `}
    ${p => p.bp1_nmr_8 && css` margin-right: -${theme.SPACING_800}; `}
    ${p => p.bp1_nmb_8 && css` margin-bottom: -${theme.SPACING_800}; `}
    ${p => p.bp1_nml_8 && css` margin-left: -${theme.SPACING_800}; `}

    ${p => p.bp1_nmt_9 && css` margin-top: -${theme.SPACING_900}; `}
    ${p => p.bp1_nmr_9 && css` margin-right: -${theme.SPACING_900}; `}
    ${p => p.bp1_nmb_9 && css` margin-bottom: -${theme.SPACING_900}; `}
    ${p => p.bp1_nml_9 && css` margin-left: -${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_nmt_1 && css` margin-top: -${theme.SPACING_100}; `}
    ${p => p.bp2_nmr_1 && css` margin-right: -${theme.SPACING_100}; `}
    ${p => p.bp2_nmb_1 && css` margin-bottom: -${theme.SPACING_100}; `}
    ${p => p.bp2_nml_1 && css` margin-left: -${theme.SPACING_100}; `}

    ${p => p.bp2_nmt_2 && css` margin-top: -${theme.SPACING_200}; `}
    ${p => p.bp2_nmr_2 && css` margin-right: -${theme.SPACING_200}; `}
    ${p => p.bp2_nmb_2 && css` margin-bottom: -${theme.SPACING_200}; `}
    ${p => p.bp2_nml_2 && css` margin-left: -${theme.SPACING_200}; `}

    ${p => p.bp2_nmt_3 && css` margin-top: -${theme.SPACING_300}; `}
    ${p => p.bp2_nmr_3 && css` margin-right: -${theme.SPACING_300}; `}
    ${p => p.bp2_nmb_3 && css` margin-bottom: -${theme.SPACING_300}; `}
    ${p => p.bp2_nml_3 && css` margin-left: -${theme.SPACING_300}; `}

    ${p => p.bp2_nmt_4 && css` margin-top: -${theme.SPACING_400}; `}
    ${p => p.bp2_nmr_4 && css` margin-right: -${theme.SPACING_400}; `}
    ${p => p.bp2_nmb_4 && css` margin-bottom: -${theme.SPACING_400}; `}
    ${p => p.bp2_nml_4 && css` margin-left: -${theme.SPACING_400}; `}

    ${p => p.bp2_nmt_5 && css` margin-top: -${theme.SPACING_500}; `}
    ${p => p.bp2_nmr_5 && css` margin-right: -${theme.SPACING_500}; `}
    ${p => p.bp2_nmb_5 && css` margin-bottom: -${theme.SPACING_500}; `}
    ${p => p.bp2_nml_5 && css` margin-left: -${theme.SPACING_500}; `}

    ${p => p.bp2_nmt_6 && css` margin-top: -${theme.SPACING_600}; `}
    ${p => p.bp2_nmr_6 && css` margin-right: -${theme.SPACING_600}; `}
    ${p => p.bp2_nmb_6 && css` margin-bottom: -${theme.SPACING_600}; `}
    ${p => p.bp2_nml_6 && css` margin-left: -${theme.SPACING_600}; `}

    ${p => p.bp2_nmt_7 && css` margin-top: -${theme.SPACING_700}; `}
    ${p => p.bp2_nmr_7 && css` margin-right: -${theme.SPACING_700}; `}
    ${p => p.bp2_nmb_7 && css` margin-bottom: -${theme.SPACING_700}; `}
    ${p => p.bp2_nml_7 && css` margin-left: -${theme.SPACING_700}; `}

    ${p => p.bp2_nmt_8 && css` margin-top: -${theme.SPACING_800}; `}
    ${p => p.bp2_nmr_8 && css` margin-right: -${theme.SPACING_800}; `}
    ${p => p.bp2_nmb_8 && css` margin-bottom: -${theme.SPACING_800}; `}
    ${p => p.bp2_nml_8 && css` margin-left: -${theme.SPACING_800}; `}

    ${p => p.bp2_nmt_9 && css` margin-top: -${theme.SPACING_900}; `}
    ${p => p.bp2_nmr_9 && css` margin-right: -${theme.SPACING_900}; `}
    ${p => p.bp2_nmb_9 && css` margin-bottom: -${theme.SPACING_900}; `}
    ${p => p.bp2_nml_9 && css` margin-left: -${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_nmt_1 && css` margin-top: -${theme.SPACING_100}; `}
    ${p => p.bp3_nmr_1 && css` margin-right: -${theme.SPACING_100}; `}
    ${p => p.bp3_nmb_1 && css` margin-bottom: -${theme.SPACING_100}; `}
    ${p => p.bp3_nml_1 && css` margin-left: -${theme.SPACING_100}; `}

    ${p => p.bp3_nmt_2 && css` margin-top: -${theme.SPACING_200}; `}
    ${p => p.bp3_nmr_2 && css` margin-right: -${theme.SPACING_200}; `}
    ${p => p.bp3_nmb_2 && css` margin-bottom: -${theme.SPACING_200}; `}
    ${p => p.bp3_nml_2 && css` margin-left: -${theme.SPACING_200}; `}

    ${p => p.bp3_nmt_3 && css` margin-top: -${theme.SPACING_300}; `}
    ${p => p.bp3_nmr_3 && css` margin-right: -${theme.SPACING_300}; `}
    ${p => p.bp3_nmb_3 && css` margin-bottom: -${theme.SPACING_300}; `}
    ${p => p.bp3_nml_3 && css` margin-left: -${theme.SPACING_300}; `}

    ${p => p.bp3_nmt_4 && css` margin-top: -${theme.SPACING_400}; `}
    ${p => p.bp3_nmr_4 && css` margin-right: -${theme.SPACING_400}; `}
    ${p => p.bp3_nmb_4 && css` margin-bottom: -${theme.SPACING_400}; `}
    ${p => p.bp3_nml_4 && css` margin-left: -${theme.SPACING_400}; `}

    ${p => p.bp3_nmt_5 && css` margin-top: -${theme.SPACING_500}; `}
    ${p => p.bp3_nmr_5 && css` margin-right: -${theme.SPACING_500}; `}
    ${p => p.bp3_nmb_5 && css` margin-bottom: -${theme.SPACING_500}; `}
    ${p => p.bp3_nml_5 && css` margin-left: -${theme.SPACING_500}; `}

    ${p => p.bp3_nmt_6 && css` margin-top: -${theme.SPACING_600}; `}
    ${p => p.bp3_nmr_6 && css` margin-right: -${theme.SPACING_600}; `}
    ${p => p.bp3_nmb_6 && css` margin-bottom: -${theme.SPACING_600}; `}
    ${p => p.bp3_nml_6 && css` margin-left: -${theme.SPACING_600}; `}

    ${p => p.bp3_nmt_7 && css` margin-top: -${theme.SPACING_700}; `}
    ${p => p.bp3_nmr_7 && css` margin-right: -${theme.SPACING_700}; `}
    ${p => p.bp3_nmb_7 && css` margin-bottom: -${theme.SPACING_700}; `}
    ${p => p.bp3_nml_7 && css` margin-left: -${theme.SPACING_700}; `}

    ${p => p.bp3_nmt_8 && css` margin-top: -${theme.SPACING_800}; `}
    ${p => p.bp3_nmr_8 && css` margin-right: -${theme.SPACING_800}; `}
    ${p => p.bp3_nmb_8 && css` margin-bottom: -${theme.SPACING_800}; `}
    ${p => p.bp3_nml_8 && css` margin-left: -${theme.SPACING_800}; `}

    ${p => p.bp3_nmt_9 && css` margin-top: -${theme.SPACING_900}; `}
    ${p => p.bp3_nmr_9 && css` margin-right: -${theme.SPACING_900}; `}
    ${p => p.bp3_nmb_9 && css` margin-bottom: -${theme.SPACING_900}; `}
    ${p => p.bp3_nml_9 && css` margin-left: -${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_nmt_1 && css` margin-top: -${theme.SPACING_100}; `}
    ${p => p.bp4_nmr_1 && css` margin-right: -${theme.SPACING_100}; `}
    ${p => p.bp4_nmb_1 && css` margin-bottom: -${theme.SPACING_100}; `}
    ${p => p.bp4_nml_1 && css` margin-left: -${theme.SPACING_100}; `}

    ${p => p.bp4_nmt_2 && css` margin-top: -${theme.SPACING_200}; `}
    ${p => p.bp4_nmr_2 && css` margin-right: -${theme.SPACING_200}; `}
    ${p => p.bp4_nmb_2 && css` margin-bottom: -${theme.SPACING_200}; `}
    ${p => p.bp4_nml_2 && css` margin-left: -${theme.SPACING_200}; `}

    ${p => p.bp4_nmt_3 && css` margin-top: -${theme.SPACING_300}; `}
    ${p => p.bp4_nmr_3 && css` margin-right: -${theme.SPACING_300}; `}
    ${p => p.bp4_nmb_3 && css` margin-bottom: -${theme.SPACING_300}; `}
    ${p => p.bp4_nml_3 && css` margin-left: -${theme.SPACING_300}; `}

    ${p => p.bp4_nmt_4 && css` margin-top: -${theme.SPACING_400}; `}
    ${p => p.bp4_nmr_4 && css` margin-right: -${theme.SPACING_400}; `}
    ${p => p.bp4_nmb_4 && css` margin-bottom: -${theme.SPACING_400}; `}
    ${p => p.bp4_nml_4 && css` margin-left: -${theme.SPACING_400}; `}

    ${p => p.bp4_nmt_5 && css` margin-top: -${theme.SPACING_500}; `}
    ${p => p.bp4_nmr_5 && css` margin-right: -${theme.SPACING_500}; `}
    ${p => p.bp4_nmb_5 && css` margin-bottom: -${theme.SPACING_500}; `}
    ${p => p.bp4_nml_5 && css` margin-left: -${theme.SPACING_500}; `}

    ${p => p.bp4_nmt_6 && css` margin-top: -${theme.SPACING_600}; `}
    ${p => p.bp4_nmr_6 && css` margin-right: -${theme.SPACING_600}; `}
    ${p => p.bp4_nmb_6 && css` margin-bottom: -${theme.SPACING_600}; `}
    ${p => p.bp4_nml_6 && css` margin-left: -${theme.SPACING_600}; `}

    ${p => p.bp4_nmt_7 && css` margin-top: -${theme.SPACING_700}; `}
    ${p => p.bp4_nmr_7 && css` margin-right: -${theme.SPACING_700}; `}
    ${p => p.bp4_nmb_7 && css` margin-bottom: -${theme.SPACING_700}; `}
    ${p => p.bp4_nml_7 && css` margin-left: -${theme.SPACING_700}; `}

    ${p => p.bp4_nmt_8 && css` margin-top: -${theme.SPACING_800}; `}
    ${p => p.bp4_nmr_8 && css` margin-right: -${theme.SPACING_800}; `}
    ${p => p.bp4_nmb_8 && css` margin-bottom: -${theme.SPACING_800}; `}
    ${p => p.bp4_nml_8 && css` margin-left: -${theme.SPACING_800}; `}

    ${p => p.bp4_nmt_9 && css` margin-top: -${theme.SPACING_900}; `}
    ${p => p.bp4_nmr_9 && css` margin-right: -${theme.SPACING_900}; `}
    ${p => p.bp4_nmb_9 && css` margin-bottom: -${theme.SPACING_900}; `}
    ${p => p.bp4_nml_9 && css` margin-left: -${theme.SPACING_900}; `}
  }
`;

export default NegativeMargin;

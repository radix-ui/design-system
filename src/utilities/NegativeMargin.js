import { css } from 'styled-components';
import * as theme from './../theme/';

const NegativeMargin = p => css`
  ${p.nmt_1 && ` margin-top: -${theme.SPACING_100}; `}
  ${p.nmr_1 && ` margin-right: -${theme.SPACING_100}; `}
  ${p.nmb_1 && ` margin-bottom: -${theme.SPACING_100}; `}
  ${p.nml_1 && ` margin-left: -${theme.SPACING_100}; `}

  ${p.nmt_2 && ` margin-top: -${theme.SPACING_200}; `}
  ${p.nmr_2 && ` margin-right: -${theme.SPACING_200}; `}
  ${p.nmb_2 && ` margin-bottom: -${theme.SPACING_200}; `}
  ${p.nml_2 && ` margin-left: -${theme.SPACING_200}; `}

  ${p.nmt_3 && ` margin-top: -${theme.SPACING_300}; `}
  ${p.nmr_3 && ` margin-right: -${theme.SPACING_300}; `}
  ${p.nmb_3 && ` margin-bottom: -${theme.SPACING_300}; `}
  ${p.nml_3 && ` margin-left: -${theme.SPACING_300}; `}

  ${p.nmt_4 && ` margin-top: -${theme.SPACING_400}; `}
  ${p.nmr_4 && ` margin-right: -${theme.SPACING_400}; `}
  ${p.nmb_4 && ` margin-bottom: -${theme.SPACING_400}; `}
  ${p.nml_4 && ` margin-left: -${theme.SPACING_400}; `}

  ${p.nmt_5 && ` margin-top: -${theme.SPACING_500}; `}
  ${p.nmr_5 && ` margin-right: -${theme.SPACING_500}; `}
  ${p.nmb_5 && ` margin-bottom: -${theme.SPACING_500}; `}
  ${p.nml_5 && ` margin-left: -${theme.SPACING_500}; `}

  ${p.nmt_6 && ` margin-top: -${theme.SPACING_600}; `}
  ${p.nmr_6 && ` margin-right: -${theme.SPACING_600}; `}
  ${p.nmb_6 && ` margin-bottom: -${theme.SPACING_600}; `}
  ${p.nml_6 && ` margin-left: -${theme.SPACING_600}; `}

  ${p.nmt_7 && ` margin-top: -${theme.SPACING_700}; `}
  ${p.nmr_7 && ` margin-right: -${theme.SPACING_700}; `}
  ${p.nmb_7 && ` margin-bottom: -${theme.SPACING_700}; `}
  ${p.nml_7 && ` margin-left: -${theme.SPACING_700}; `}

  ${p.nmt_8 && ` margin-top: -${theme.SPACING_800}; `}
  ${p.nmr_8 && ` margin-right: -${theme.SPACING_800}; `}
  ${p.nmb_8 && ` margin-bottom: -${theme.SPACING_800}; `}
  ${p.nml_8 && ` margin-left: -${theme.SPACING_800}; `}

  ${p.nmt_9 && ` margin-top: -${theme.SPACING_900}; `}
  ${p.nmr_9 && ` margin-right: -${theme.SPACING_900}; `}
  ${p.nmb_9 && ` margin-bottom: -${theme.SPACING_900}; `}
  ${p.nml_9 && ` margin-left: -${theme.SPACING_900}; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p.bp1_nmt_1 && ` margin-top: -${theme.SPACING_100}; `}
    ${p.bp1_nmr_1 && ` margin-right: -${theme.SPACING_100}; `}
    ${p.bp1_nmb_1 && ` margin-bottom: -${theme.SPACING_100}; `}
    ${p.bp1_nml_1 && ` margin-left: -${theme.SPACING_100}; `}

    ${p.bp1_nmt_2 && ` margin-top: -${theme.SPACING_200}; `}
    ${p.bp1_nmr_2 && ` margin-right: -${theme.SPACING_200}; `}
    ${p.bp1_nmb_2 && ` margin-bottom: -${theme.SPACING_200}; `}
    ${p.bp1_nml_2 && ` margin-left: -${theme.SPACING_200}; `}

    ${p.bp1_nmt_3 && ` margin-top: -${theme.SPACING_300}; `}
    ${p.bp1_nmr_3 && ` margin-right: -${theme.SPACING_300}; `}
    ${p.bp1_nmb_3 && ` margin-bottom: -${theme.SPACING_300}; `}
    ${p.bp1_nml_3 && ` margin-left: -${theme.SPACING_300}; `}

    ${p.bp1_nmt_4 && ` margin-top: -${theme.SPACING_400}; `}
    ${p.bp1_nmr_4 && ` margin-right: -${theme.SPACING_400}; `}
    ${p.bp1_nmb_4 && ` margin-bottom: -${theme.SPACING_400}; `}
    ${p.bp1_nml_4 && ` margin-left: -${theme.SPACING_400}; `}

    ${p.bp1_nmt_5 && ` margin-top: -${theme.SPACING_500}; `}
    ${p.bp1_nmr_5 && ` margin-right: -${theme.SPACING_500}; `}
    ${p.bp1_nmb_5 && ` margin-bottom: -${theme.SPACING_500}; `}
    ${p.bp1_nml_5 && ` margin-left: -${theme.SPACING_500}; `}

    ${p.bp1_nmt_6 && ` margin-top: -${theme.SPACING_600}; `}
    ${p.bp1_nmr_6 && ` margin-right: -${theme.SPACING_600}; `}
    ${p.bp1_nmb_6 && ` margin-bottom: -${theme.SPACING_600}; `}
    ${p.bp1_nml_6 && ` margin-left: -${theme.SPACING_600}; `}

    ${p.bp1_nmt_7 && ` margin-top: -${theme.SPACING_700}; `}
    ${p.bp1_nmr_7 && ` margin-right: -${theme.SPACING_700}; `}
    ${p.bp1_nmb_7 && ` margin-bottom: -${theme.SPACING_700}; `}
    ${p.bp1_nml_7 && ` margin-left: -${theme.SPACING_700}; `}

    ${p.bp1_nmt_8 && ` margin-top: -${theme.SPACING_800}; `}
    ${p.bp1_nmr_8 && ` margin-right: -${theme.SPACING_800}; `}
    ${p.bp1_nmb_8 && ` margin-bottom: -${theme.SPACING_800}; `}
    ${p.bp1_nml_8 && ` margin-left: -${theme.SPACING_800}; `}

    ${p.bp1_nmt_9 && ` margin-top: -${theme.SPACING_900}; `}
    ${p.bp1_nmr_9 && ` margin-right: -${theme.SPACING_900}; `}
    ${p.bp1_nmb_9 && ` margin-bottom: -${theme.SPACING_900}; `}
    ${p.bp1_nml_9 && ` margin-left: -${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p.bp2_nmt_1 && ` margin-top: -${theme.SPACING_100}; `}
    ${p.bp2_nmr_1 && ` margin-right: -${theme.SPACING_100}; `}
    ${p.bp2_nmb_1 && ` margin-bottom: -${theme.SPACING_100}; `}
    ${p.bp2_nml_1 && ` margin-left: -${theme.SPACING_100}; `}

    ${p.bp2_nmt_2 && ` margin-top: -${theme.SPACING_200}; `}
    ${p.bp2_nmr_2 && ` margin-right: -${theme.SPACING_200}; `}
    ${p.bp2_nmb_2 && ` margin-bottom: -${theme.SPACING_200}; `}
    ${p.bp2_nml_2 && ` margin-left: -${theme.SPACING_200}; `}

    ${p.bp2_nmt_3 && ` margin-top: -${theme.SPACING_300}; `}
    ${p.bp2_nmr_3 && ` margin-right: -${theme.SPACING_300}; `}
    ${p.bp2_nmb_3 && ` margin-bottom: -${theme.SPACING_300}; `}
    ${p.bp2_nml_3 && ` margin-left: -${theme.SPACING_300}; `}

    ${p.bp2_nmt_4 && ` margin-top: -${theme.SPACING_400}; `}
    ${p.bp2_nmr_4 && ` margin-right: -${theme.SPACING_400}; `}
    ${p.bp2_nmb_4 && ` margin-bottom: -${theme.SPACING_400}; `}
    ${p.bp2_nml_4 && ` margin-left: -${theme.SPACING_400}; `}

    ${p.bp2_nmt_5 && ` margin-top: -${theme.SPACING_500}; `}
    ${p.bp2_nmr_5 && ` margin-right: -${theme.SPACING_500}; `}
    ${p.bp2_nmb_5 && ` margin-bottom: -${theme.SPACING_500}; `}
    ${p.bp2_nml_5 && ` margin-left: -${theme.SPACING_500}; `}

    ${p.bp2_nmt_6 && ` margin-top: -${theme.SPACING_600}; `}
    ${p.bp2_nmr_6 && ` margin-right: -${theme.SPACING_600}; `}
    ${p.bp2_nmb_6 && ` margin-bottom: -${theme.SPACING_600}; `}
    ${p.bp2_nml_6 && ` margin-left: -${theme.SPACING_600}; `}

    ${p.bp2_nmt_7 && ` margin-top: -${theme.SPACING_700}; `}
    ${p.bp2_nmr_7 && ` margin-right: -${theme.SPACING_700}; `}
    ${p.bp2_nmb_7 && ` margin-bottom: -${theme.SPACING_700}; `}
    ${p.bp2_nml_7 && ` margin-left: -${theme.SPACING_700}; `}

    ${p.bp2_nmt_8 && ` margin-top: -${theme.SPACING_800}; `}
    ${p.bp2_nmr_8 && ` margin-right: -${theme.SPACING_800}; `}
    ${p.bp2_nmb_8 && ` margin-bottom: -${theme.SPACING_800}; `}
    ${p.bp2_nml_8 && ` margin-left: -${theme.SPACING_800}; `}

    ${p.bp2_nmt_9 && ` margin-top: -${theme.SPACING_900}; `}
    ${p.bp2_nmr_9 && ` margin-right: -${theme.SPACING_900}; `}
    ${p.bp2_nmb_9 && ` margin-bottom: -${theme.SPACING_900}; `}
    ${p.bp2_nml_9 && ` margin-left: -${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p.bp3_nmt_1 && ` margin-top: -${theme.SPACING_100}; `}
    ${p.bp3_nmr_1 && ` margin-right: -${theme.SPACING_100}; `}
    ${p.bp3_nmb_1 && ` margin-bottom: -${theme.SPACING_100}; `}
    ${p.bp3_nml_1 && ` margin-left: -${theme.SPACING_100}; `}

    ${p.bp3_nmt_2 && ` margin-top: -${theme.SPACING_200}; `}
    ${p.bp3_nmr_2 && ` margin-right: -${theme.SPACING_200}; `}
    ${p.bp3_nmb_2 && ` margin-bottom: -${theme.SPACING_200}; `}
    ${p.bp3_nml_2 && ` margin-left: -${theme.SPACING_200}; `}

    ${p.bp3_nmt_3 && ` margin-top: -${theme.SPACING_300}; `}
    ${p.bp3_nmr_3 && ` margin-right: -${theme.SPACING_300}; `}
    ${p.bp3_nmb_3 && ` margin-bottom: -${theme.SPACING_300}; `}
    ${p.bp3_nml_3 && ` margin-left: -${theme.SPACING_300}; `}

    ${p.bp3_nmt_4 && ` margin-top: -${theme.SPACING_400}; `}
    ${p.bp3_nmr_4 && ` margin-right: -${theme.SPACING_400}; `}
    ${p.bp3_nmb_4 && ` margin-bottom: -${theme.SPACING_400}; `}
    ${p.bp3_nml_4 && ` margin-left: -${theme.SPACING_400}; `}

    ${p.bp3_nmt_5 && ` margin-top: -${theme.SPACING_500}; `}
    ${p.bp3_nmr_5 && ` margin-right: -${theme.SPACING_500}; `}
    ${p.bp3_nmb_5 && ` margin-bottom: -${theme.SPACING_500}; `}
    ${p.bp3_nml_5 && ` margin-left: -${theme.SPACING_500}; `}

    ${p.bp3_nmt_6 && ` margin-top: -${theme.SPACING_600}; `}
    ${p.bp3_nmr_6 && ` margin-right: -${theme.SPACING_600}; `}
    ${p.bp3_nmb_6 && ` margin-bottom: -${theme.SPACING_600}; `}
    ${p.bp3_nml_6 && ` margin-left: -${theme.SPACING_600}; `}

    ${p.bp3_nmt_7 && ` margin-top: -${theme.SPACING_700}; `}
    ${p.bp3_nmr_7 && ` margin-right: -${theme.SPACING_700}; `}
    ${p.bp3_nmb_7 && ` margin-bottom: -${theme.SPACING_700}; `}
    ${p.bp3_nml_7 && ` margin-left: -${theme.SPACING_700}; `}

    ${p.bp3_nmt_8 && ` margin-top: -${theme.SPACING_800}; `}
    ${p.bp3_nmr_8 && ` margin-right: -${theme.SPACING_800}; `}
    ${p.bp3_nmb_8 && ` margin-bottom: -${theme.SPACING_800}; `}
    ${p.bp3_nml_8 && ` margin-left: -${theme.SPACING_800}; `}

    ${p.bp3_nmt_9 && ` margin-top: -${theme.SPACING_900}; `}
    ${p.bp3_nmr_9 && ` margin-right: -${theme.SPACING_900}; `}
    ${p.bp3_nmb_9 && ` margin-bottom: -${theme.SPACING_900}; `}
    ${p.bp3_nml_9 && ` margin-left: -${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p.bp4_nmt_1 && ` margin-top: -${theme.SPACING_100}; `}
    ${p.bp4_nmr_1 && ` margin-right: -${theme.SPACING_100}; `}
    ${p.bp4_nmb_1 && ` margin-bottom: -${theme.SPACING_100}; `}
    ${p.bp4_nml_1 && ` margin-left: -${theme.SPACING_100}; `}

    ${p.bp4_nmt_2 && ` margin-top: -${theme.SPACING_200}; `}
    ${p.bp4_nmr_2 && ` margin-right: -${theme.SPACING_200}; `}
    ${p.bp4_nmb_2 && ` margin-bottom: -${theme.SPACING_200}; `}
    ${p.bp4_nml_2 && ` margin-left: -${theme.SPACING_200}; `}

    ${p.bp4_nmt_3 && ` margin-top: -${theme.SPACING_300}; `}
    ${p.bp4_nmr_3 && ` margin-right: -${theme.SPACING_300}; `}
    ${p.bp4_nmb_3 && ` margin-bottom: -${theme.SPACING_300}; `}
    ${p.bp4_nml_3 && ` margin-left: -${theme.SPACING_300}; `}

    ${p.bp4_nmt_4 && ` margin-top: -${theme.SPACING_400}; `}
    ${p.bp4_nmr_4 && ` margin-right: -${theme.SPACING_400}; `}
    ${p.bp4_nmb_4 && ` margin-bottom: -${theme.SPACING_400}; `}
    ${p.bp4_nml_4 && ` margin-left: -${theme.SPACING_400}; `}

    ${p.bp4_nmt_5 && ` margin-top: -${theme.SPACING_500}; `}
    ${p.bp4_nmr_5 && ` margin-right: -${theme.SPACING_500}; `}
    ${p.bp4_nmb_5 && ` margin-bottom: -${theme.SPACING_500}; `}
    ${p.bp4_nml_5 && ` margin-left: -${theme.SPACING_500}; `}

    ${p.bp4_nmt_6 && ` margin-top: -${theme.SPACING_600}; `}
    ${p.bp4_nmr_6 && ` margin-right: -${theme.SPACING_600}; `}
    ${p.bp4_nmb_6 && ` margin-bottom: -${theme.SPACING_600}; `}
    ${p.bp4_nml_6 && ` margin-left: -${theme.SPACING_600}; `}

    ${p.bp4_nmt_7 && ` margin-top: -${theme.SPACING_700}; `}
    ${p.bp4_nmr_7 && ` margin-right: -${theme.SPACING_700}; `}
    ${p.bp4_nmb_7 && ` margin-bottom: -${theme.SPACING_700}; `}
    ${p.bp4_nml_7 && ` margin-left: -${theme.SPACING_700}; `}

    ${p.bp4_nmt_8 && ` margin-top: -${theme.SPACING_800}; `}
    ${p.bp4_nmr_8 && ` margin-right: -${theme.SPACING_800}; `}
    ${p.bp4_nmb_8 && ` margin-bottom: -${theme.SPACING_800}; `}
    ${p.bp4_nml_8 && ` margin-left: -${theme.SPACING_800}; `}

    ${p.bp4_nmt_9 && ` margin-top: -${theme.SPACING_900}; `}
    ${p.bp4_nmr_9 && ` margin-right: -${theme.SPACING_900}; `}
    ${p.bp4_nmb_9 && ` margin-bottom: -${theme.SPACING_900}; `}
    ${p.bp4_nml_9 && ` margin-left: -${theme.SPACING_900}; `}
  }
`;

export default NegativeMargin;

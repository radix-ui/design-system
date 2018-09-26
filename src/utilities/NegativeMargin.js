import { css } from 'styled-components';
import * as theme from './../theme/';

const NegativeMargin = css`
  ${p => p.nmt1 && css` margin-top: -${theme.SPACING_100}; `}
  ${p => p.nmr1 && css` margin-right: -${theme.SPACING_100}; `}
  ${p => p.nmb1 && css` margin-bottom: -${theme.SPACING_100}; `}
  ${p => p.nml1 && css` margin-left: -${theme.SPACING_100}; `}

  ${p => p.nmt2 && css` margin-top: -${theme.SPACING_200}; `}
  ${p => p.nmr2 && css` margin-right: -${theme.SPACING_200}; `}
  ${p => p.nmb2 && css` margin-bottom: -${theme.SPACING_200}; `}
  ${p => p.nml2 && css` margin-left: -${theme.SPACING_200}; `}

  ${p => p.nmt3 && css` margin-top: -${theme.SPACING_300}; `}
  ${p => p.nmr3 && css` margin-right: -${theme.SPACING_300}; `}
  ${p => p.nmb3 && css` margin-bottom: -${theme.SPACING_300}; `}
  ${p => p.nml3 && css` margin-left: -${theme.SPACING_300}; `}

  ${p => p.nmt4 && css` margin-top: -${theme.SPACING_400}; `}
  ${p => p.nmr4 && css` margin-right: -${theme.SPACING_400}; `}
  ${p => p.nmb4 && css` margin-bottom: -${theme.SPACING_400}; `}
  ${p => p.nml4 && css` margin-left: -${theme.SPACING_400}; `}

  ${p => p.nmt5 && css` margin-top: -${theme.SPACING_500}; `}
  ${p => p.nmr5 && css` margin-right: -${theme.SPACING_500}; `}
  ${p => p.nmb5 && css` margin-bottom: -${theme.SPACING_500}; `}
  ${p => p.nml5 && css` margin-left: -${theme.SPACING_500}; `}

  ${p => p.nmt6 && css` margin-top: -${theme.SPACING_600}; `}
  ${p => p.nmr6 && css` margin-right: -${theme.SPACING_600}; `}
  ${p => p.nmb6 && css` margin-bottom: -${theme.SPACING_600}; `}
  ${p => p.nml6 && css` margin-left: -${theme.SPACING_600}; `}

  ${p => p.nmt7 && css` margin-top: -${theme.SPACING_700}; `}
  ${p => p.nmr7 && css` margin-right: -${theme.SPACING_700}; `}
  ${p => p.nmb7 && css` margin-bottom: -${theme.SPACING_700}; `}
  ${p => p.nml7 && css` margin-left: -${theme.SPACING_700}; `}

  ${p => p.nmt8 && css` margin-top: -${theme.SPACING_800}; `}
  ${p => p.nmr8 && css` margin-right: -${theme.SPACING_800}; `}
  ${p => p.nmb8 && css` margin-bottom: -${theme.SPACING_800}; `}
  ${p => p.nml8 && css` margin-left: -${theme.SPACING_800}; `}

  ${p => p.nmt9 && css` margin-top: -${theme.SPACING_900}; `}
  ${p => p.nmr9 && css` margin-right: -${theme.SPACING_900}; `}
  ${p => p.nmb9 && css` margin-bottom: -${theme.SPACING_900}; `}
  ${p => p.nml9 && css` margin-left: -${theme.SPACING_900}; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_nmt1 && css` margin-top: -${theme.SPACING_100}; `}
    ${p => p.bp1_nmr1 && css` margin-right: -${theme.SPACING_100}; `}
    ${p => p.bp1_nmb1 && css` margin-bottom: -${theme.SPACING_100}; `}
    ${p => p.bp1_nml1 && css` margin-left: -${theme.SPACING_100}; `}

    ${p => p.bp1_nmt2 && css` margin-top: -${theme.SPACING_200}; `}
    ${p => p.bp1_nmr2 && css` margin-right: -${theme.SPACING_200}; `}
    ${p => p.bp1_nmb2 && css` margin-bottom: -${theme.SPACING_200}; `}
    ${p => p.bp1_nml2 && css` margin-left: -${theme.SPACING_200}; `}

    ${p => p.bp1_nmt3 && css` margin-top: -${theme.SPACING_300}; `}
    ${p => p.bp1_nmr3 && css` margin-right: -${theme.SPACING_300}; `}
    ${p => p.bp1_nmb3 && css` margin-bottom: -${theme.SPACING_300}; `}
    ${p => p.bp1_nml3 && css` margin-left: -${theme.SPACING_300}; `}

    ${p => p.bp1_nmt4 && css` margin-top: -${theme.SPACING_400}; `}
    ${p => p.bp1_nmr4 && css` margin-right: -${theme.SPACING_400}; `}
    ${p => p.bp1_nmb4 && css` margin-bottom: -${theme.SPACING_400}; `}
    ${p => p.bp1_nml4 && css` margin-left: -${theme.SPACING_400}; `}

    ${p => p.bp1_nmt5 && css` margin-top: -${theme.SPACING_500}; `}
    ${p => p.bp1_nmr5 && css` margin-right: -${theme.SPACING_500}; `}
    ${p => p.bp1_nmb5 && css` margin-bottom: -${theme.SPACING_500}; `}
    ${p => p.bp1_nml5 && css` margin-left: -${theme.SPACING_500}; `}

    ${p => p.bp1_nmt6 && css` margin-top: -${theme.SPACING_600}; `}
    ${p => p.bp1_nmr6 && css` margin-right: -${theme.SPACING_600}; `}
    ${p => p.bp1_nmb6 && css` margin-bottom: -${theme.SPACING_600}; `}
    ${p => p.bp1_nml6 && css` margin-left: -${theme.SPACING_600}; `}

    ${p => p.bp1_nmt7 && css` margin-top: -${theme.SPACING_700}; `}
    ${p => p.bp1_nmr7 && css` margin-right: -${theme.SPACING_700}; `}
    ${p => p.bp1_nmb7 && css` margin-bottom: -${theme.SPACING_700}; `}
    ${p => p.bp1_nml7 && css` margin-left: -${theme.SPACING_700}; `}

    ${p => p.bp1_nmt8 && css` margin-top: -${theme.SPACING_800}; `}
    ${p => p.bp1_nmr8 && css` margin-right: -${theme.SPACING_800}; `}
    ${p => p.bp1_nmb8 && css` margin-bottom: -${theme.SPACING_800}; `}
    ${p => p.bp1_nml8 && css` margin-left: -${theme.SPACING_800}; `}

    ${p => p.bp1_nmt9 && css` margin-top: -${theme.SPACING_900}; `}
    ${p => p.bp1_nmr9 && css` margin-right: -${theme.SPACING_900}; `}
    ${p => p.bp1_nmb9 && css` margin-bottom: -${theme.SPACING_900}; `}
    ${p => p.bp1_nml9 && css` margin-left: -${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_nmt1 && css` margin-top: -${theme.SPACING_100}; `}
    ${p => p.bp2_nmr1 && css` margin-right: -${theme.SPACING_100}; `}
    ${p => p.bp2_nmb1 && css` margin-bottom: -${theme.SPACING_100}; `}
    ${p => p.bp2_nml1 && css` margin-left: -${theme.SPACING_100}; `}

    ${p => p.bp2_nmt2 && css` margin-top: -${theme.SPACING_200}; `}
    ${p => p.bp2_nmr2 && css` margin-right: -${theme.SPACING_200}; `}
    ${p => p.bp2_nmb2 && css` margin-bottom: -${theme.SPACING_200}; `}
    ${p => p.bp2_nml2 && css` margin-left: -${theme.SPACING_200}; `}

    ${p => p.bp2_nmt3 && css` margin-top: -${theme.SPACING_300}; `}
    ${p => p.bp2_nmr3 && css` margin-right: -${theme.SPACING_300}; `}
    ${p => p.bp2_nmb3 && css` margin-bottom: -${theme.SPACING_300}; `}
    ${p => p.bp2_nml3 && css` margin-left: -${theme.SPACING_300}; `}

    ${p => p.bp2_nmt4 && css` margin-top: -${theme.SPACING_400}; `}
    ${p => p.bp2_nmr4 && css` margin-right: -${theme.SPACING_400}; `}
    ${p => p.bp2_nmb4 && css` margin-bottom: -${theme.SPACING_400}; `}
    ${p => p.bp2_nml4 && css` margin-left: -${theme.SPACING_400}; `}

    ${p => p.bp2_nmt5 && css` margin-top: -${theme.SPACING_500}; `}
    ${p => p.bp2_nmr5 && css` margin-right: -${theme.SPACING_500}; `}
    ${p => p.bp2_nmb5 && css` margin-bottom: -${theme.SPACING_500}; `}
    ${p => p.bp2_nml5 && css` margin-left: -${theme.SPACING_500}; `}

    ${p => p.bp2_nmt6 && css` margin-top: -${theme.SPACING_600}; `}
    ${p => p.bp2_nmr6 && css` margin-right: -${theme.SPACING_600}; `}
    ${p => p.bp2_nmb6 && css` margin-bottom: -${theme.SPACING_600}; `}
    ${p => p.bp2_nml6 && css` margin-left: -${theme.SPACING_600}; `}

    ${p => p.bp2_nmt7 && css` margin-top: -${theme.SPACING_700}; `}
    ${p => p.bp2_nmr7 && css` margin-right: -${theme.SPACING_700}; `}
    ${p => p.bp2_nmb7 && css` margin-bottom: -${theme.SPACING_700}; `}
    ${p => p.bp2_nml7 && css` margin-left: -${theme.SPACING_700}; `}

    ${p => p.bp2_nmt8 && css` margin-top: -${theme.SPACING_800}; `}
    ${p => p.bp2_nmr8 && css` margin-right: -${theme.SPACING_800}; `}
    ${p => p.bp2_nmb8 && css` margin-bottom: -${theme.SPACING_800}; `}
    ${p => p.bp2_nml8 && css` margin-left: -${theme.SPACING_800}; `}

    ${p => p.bp2_nmt9 && css` margin-top: -${theme.SPACING_900}; `}
    ${p => p.bp2_nmr9 && css` margin-right: -${theme.SPACING_900}; `}
    ${p => p.bp2_nmb9 && css` margin-bottom: -${theme.SPACING_900}; `}
    ${p => p.bp2_nml9 && css` margin-left: -${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_nmt1 && css` margin-top: -${theme.SPACING_100}; `}
    ${p => p.bp3_nmr1 && css` margin-right: -${theme.SPACING_100}; `}
    ${p => p.bp3_nmb1 && css` margin-bottom: -${theme.SPACING_100}; `}
    ${p => p.bp3_nml1 && css` margin-left: -${theme.SPACING_100}; `}

    ${p => p.bp3_nmt2 && css` margin-top: -${theme.SPACING_200}; `}
    ${p => p.bp3_nmr2 && css` margin-right: -${theme.SPACING_200}; `}
    ${p => p.bp3_nmb2 && css` margin-bottom: -${theme.SPACING_200}; `}
    ${p => p.bp3_nml2 && css` margin-left: -${theme.SPACING_200}; `}

    ${p => p.bp3_nmt3 && css` margin-top: -${theme.SPACING_300}; `}
    ${p => p.bp3_nmr3 && css` margin-right: -${theme.SPACING_300}; `}
    ${p => p.bp3_nmb3 && css` margin-bottom: -${theme.SPACING_300}; `}
    ${p => p.bp3_nml3 && css` margin-left: -${theme.SPACING_300}; `}

    ${p => p.bp3_nmt4 && css` margin-top: -${theme.SPACING_400}; `}
    ${p => p.bp3_nmr4 && css` margin-right: -${theme.SPACING_400}; `}
    ${p => p.bp3_nmb4 && css` margin-bottom: -${theme.SPACING_400}; `}
    ${p => p.bp3_nml4 && css` margin-left: -${theme.SPACING_400}; `}

    ${p => p.bp3_nmt5 && css` margin-top: -${theme.SPACING_500}; `}
    ${p => p.bp3_nmr5 && css` margin-right: -${theme.SPACING_500}; `}
    ${p => p.bp3_nmb5 && css` margin-bottom: -${theme.SPACING_500}; `}
    ${p => p.bp3_nml5 && css` margin-left: -${theme.SPACING_500}; `}

    ${p => p.bp3_nmt6 && css` margin-top: -${theme.SPACING_600}; `}
    ${p => p.bp3_nmr6 && css` margin-right: -${theme.SPACING_600}; `}
    ${p => p.bp3_nmb6 && css` margin-bottom: -${theme.SPACING_600}; `}
    ${p => p.bp3_nml6 && css` margin-left: -${theme.SPACING_600}; `}

    ${p => p.bp3_nmt7 && css` margin-top: -${theme.SPACING_700}; `}
    ${p => p.bp3_nmr7 && css` margin-right: -${theme.SPACING_700}; `}
    ${p => p.bp3_nmb7 && css` margin-bottom: -${theme.SPACING_700}; `}
    ${p => p.bp3_nml7 && css` margin-left: -${theme.SPACING_700}; `}

    ${p => p.bp3_nmt8 && css` margin-top: -${theme.SPACING_800}; `}
    ${p => p.bp3_nmr8 && css` margin-right: -${theme.SPACING_800}; `}
    ${p => p.bp3_nmb8 && css` margin-bottom: -${theme.SPACING_800}; `}
    ${p => p.bp3_nml8 && css` margin-left: -${theme.SPACING_800}; `}

    ${p => p.bp3_nmt9 && css` margin-top: -${theme.SPACING_900}; `}
    ${p => p.bp3_nmr9 && css` margin-right: -${theme.SPACING_900}; `}
    ${p => p.bp3_nmb9 && css` margin-bottom: -${theme.SPACING_900}; `}
    ${p => p.bp3_nml9 && css` margin-left: -${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_nmt1 && css` margin-top: -${theme.SPACING_100}; `}
    ${p => p.bp4_nmr1 && css` margin-right: -${theme.SPACING_100}; `}
    ${p => p.bp4_nmb1 && css` margin-bottom: -${theme.SPACING_100}; `}
    ${p => p.bp4_nml1 && css` margin-left: -${theme.SPACING_100}; `}

    ${p => p.bp4_nmt2 && css` margin-top: -${theme.SPACING_200}; `}
    ${p => p.bp4_nmr2 && css` margin-right: -${theme.SPACING_200}; `}
    ${p => p.bp4_nmb2 && css` margin-bottom: -${theme.SPACING_200}; `}
    ${p => p.bp4_nml2 && css` margin-left: -${theme.SPACING_200}; `}

    ${p => p.bp4_nmt3 && css` margin-top: -${theme.SPACING_300}; `}
    ${p => p.bp4_nmr3 && css` margin-right: -${theme.SPACING_300}; `}
    ${p => p.bp4_nmb3 && css` margin-bottom: -${theme.SPACING_300}; `}
    ${p => p.bp4_nml3 && css` margin-left: -${theme.SPACING_300}; `}

    ${p => p.bp4_nmt4 && css` margin-top: -${theme.SPACING_400}; `}
    ${p => p.bp4_nmr4 && css` margin-right: -${theme.SPACING_400}; `}
    ${p => p.bp4_nmb4 && css` margin-bottom: -${theme.SPACING_400}; `}
    ${p => p.bp4_nml4 && css` margin-left: -${theme.SPACING_400}; `}

    ${p => p.bp4_nmt5 && css` margin-top: -${theme.SPACING_500}; `}
    ${p => p.bp4_nmr5 && css` margin-right: -${theme.SPACING_500}; `}
    ${p => p.bp4_nmb5 && css` margin-bottom: -${theme.SPACING_500}; `}
    ${p => p.bp4_nml5 && css` margin-left: -${theme.SPACING_500}; `}

    ${p => p.bp4_nmt6 && css` margin-top: -${theme.SPACING_600}; `}
    ${p => p.bp4_nmr6 && css` margin-right: -${theme.SPACING_600}; `}
    ${p => p.bp4_nmb6 && css` margin-bottom: -${theme.SPACING_600}; `}
    ${p => p.bp4_nml6 && css` margin-left: -${theme.SPACING_600}; `}

    ${p => p.bp4_nmt7 && css` margin-top: -${theme.SPACING_700}; `}
    ${p => p.bp4_nmr7 && css` margin-right: -${theme.SPACING_700}; `}
    ${p => p.bp4_nmb7 && css` margin-bottom: -${theme.SPACING_700}; `}
    ${p => p.bp4_nml7 && css` margin-left: -${theme.SPACING_700}; `}

    ${p => p.bp4_nmt8 && css` margin-top: -${theme.SPACING_800}; `}
    ${p => p.bp4_nmr8 && css` margin-right: -${theme.SPACING_800}; `}
    ${p => p.bp4_nmb8 && css` margin-bottom: -${theme.SPACING_800}; `}
    ${p => p.bp4_nml8 && css` margin-left: -${theme.SPACING_800}; `}

    ${p => p.bp4_nmt9 && css` margin-top: -${theme.SPACING_900}; `}
    ${p => p.bp4_nmr9 && css` margin-right: -${theme.SPACING_900}; `}
    ${p => p.bp4_nmb9 && css` margin-bottom: -${theme.SPACING_900}; `}
    ${p => p.bp4_nml9 && css` margin-left: -${theme.SPACING_900}; `}
  }
`;

export default NegativeMargin;

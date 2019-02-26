import { css } from 'styled-components';
import * as theme from './../theme/';

const pointereventPropsKeys = ['pe_none', 'pe_auto']

const PointerEvents = p => css`
  ${p.pe_none && ` pointer-events: none; `}
  ${p.pe_auto && ` pointer-events: auto; `}

  ${pointereventPropsKeys.some(prop => p[`bp1_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_100}) {
      ${p.bp1_pe_none && ` pointer-events: none; `}
      ${p.bp1_pe_auto && ` pointer-events: auto; `}
    }
  `}


  ${pointereventPropsKeys.some(prop => p[`bp2_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_200}) {
      ${p.bp2_pe_none && ` pointer-events: none; `}
      ${p.bp2_pe_auto && ` pointer-events: auto; `}
    }
  `}

  ${pointereventPropsKeys.some(prop => p[`bp3_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_300}) {
      ${p.bp3_pe_none && ` pointer-events: none; `}
      ${p.bp3_pe_auto && ` pointer-events: auto; `}
    }
  `}

  ${pointereventPropsKeys.some(prop => p[`bp4_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_400}) {
      ${p.bp4_pe_none && ` pointer-events: none; `}
      ${p.bp4_pe_auto && ` pointer-events: auto; `}
    }
  `}
`;

export default PointerEvents;

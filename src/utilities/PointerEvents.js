import { css } from 'styled-components';
import * as theme from './../theme/';

const PointerEvents = p => css`
  ${p.pe_none && ` pointer-events: none; `}
  ${p.pe_auto && ` pointer-events: auto; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p.bp1_pe_none && ` pointer-events: none; `}
    ${p.bp1_pe_auto && ` pointer-events: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p.bp2_pe_none && ` pointer-events: none; `}
    ${p.bp2_pe_auto && ` pointer-events: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p.bp3_pe_none && ` pointer-events: none; `}
    ${p.bp3_pe_auto && ` pointer-events: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p.bp4_pe_none && ` pointer-events: none; `}
    ${p.bp4_pe_auto && ` pointer-events: auto; `}
  }
`;

export default PointerEvents;

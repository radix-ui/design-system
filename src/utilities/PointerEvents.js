import { css } from 'styled-components';
import * as theme from './../theme/';

const PointerEvents = css`
  ${p => p.pe_none && css` pointer-events: none; `}
  ${p => p.pe_auto && css` pointer-events: auto; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_pe_none && css` pointer-events: none; `}
    ${p => p.bp1_pe_auto && css` pointer-events: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_pe_none && css` pointer-events: none; `}
    ${p => p.bp2_pe_auto && css` pointer-events: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_pe_none && css` pointer-events: none; `}
    ${p => p.bp3_pe_auto && css` pointer-events: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_pe_none && css` pointer-events: none; `}
    ${p => p.bp4_pe_auto && css` pointer-events: auto; `}
  }
`;

export default PointerEvents;

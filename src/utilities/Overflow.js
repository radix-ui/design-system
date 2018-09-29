import { css } from 'styled-components';
import * as theme from './../theme/';

const Overflow = css`
  ${p => p.overflow_visible && css` overflow: visible; `}
  ${p => p.overflow_hidden && css` overflow: hidden; `}
  ${p => p.overflow_scroll && css` overflow: scroll; `}
  ${p => p.overflow_auto && css` overflow: auto; `}

  ${p => p.ox_visible && css` overflow-x: visible; `}
  ${p => p.ox_hidden && css` overflow-x: hidden; `}
  ${p => p.ox_scroll && css` overflow-x: scroll; `}
  ${p => p.ox_auto && css` overflow-x: auto; `}

  ${p => p.oy_visible && css` overflow-x: visible; `}
  ${p => p.oy_hidden && css` overflow-y: hidden; `}
  ${p => p.oy_scroll && css` overflow-y: scroll; `}
  ${p => p.oy_auto && css` overflow-y: auto; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_overflow_visible && css` overflow: visible; `}
    ${p => p.bp1_overflow_hidden && css` overflow: hidden; `}
    ${p => p.bp1_overflow_scroll && css` overflow: scroll; `}
    ${p => p.bp1_overflow_auto && css` overflow: auto; `}

    ${p => p.bp1_ox_visible && css` overflow-x: visible; `}
    ${p => p.bp1_ox_hidden && css` overflow-x: hidden; `}
    ${p => p.bp1_ox_scroll && css` overflow-x: scroll; `}
    ${p => p.bp1_ox_auto && css` overflow-x: auto; `}

    ${p => p.bp1_oy_visible && css` overflow-x: visible; `}
    ${p => p.bp1_oy_hidden && css` overflow-y: hidden; `}
    ${p => p.bp1_oy_scroll && css` overflow-y: scroll; `}
    ${p => p.bp1_oy_auto && css` overflow-y: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_overflow_visible && css` overflow: visible; `}
    ${p => p.bp2_overflow_hidden && css` overflow: hidden; `}
    ${p => p.bp2_overflow_scroll && css` overflow: scroll; `}
    ${p => p.bp2_overflow_auto && css` overflow: auto; `}

    ${p => p.bp2_ox_visible && css` overflow-x: visible; `}
    ${p => p.bp2_ox_hidden && css` overflow-x: hidden; `}
    ${p => p.bp2_ox_scroll && css` overflow-x: scroll; `}
    ${p => p.bp2_ox_auto && css` overflow-x: auto; `}

    ${p => p.bp2_oy_visible && css` overflow-x: visible; `}
    ${p => p.bp2_oy_hidden && css` overflow-y: hidden; `}
    ${p => p.bp2_oy_scroll && css` overflow-y: scroll; `}
    ${p => p.bp2_oy_auto && css` overflow-y: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_overflow_visible && css` overflow: visible; `}
    ${p => p.bp3_overflow_hidden && css` overflow: hidden; `}
    ${p => p.bp3_overflow_scroll && css` overflow: scroll; `}
    ${p => p.bp3_overflow_auto && css` overflow: auto; `}

    ${p => p.bp3_ox_visible && css` overflow-x: visible; `}
    ${p => p.bp3_ox_hidden && css` overflow-x: hidden; `}
    ${p => p.bp3_ox_scroll && css` overflow-x: scroll; `}
    ${p => p.bp3_ox_auto && css` overflow-x: auto; `}

    ${p => p.bp3_oy_visible && css` overflow-x: visible; `}
    ${p => p.bp3_oy_hidden && css` overflow-y: hidden; `}
    ${p => p.bp3_oy_scroll && css` overflow-y: scroll; `}
    ${p => p.bp3_oy_auto && css` overflow-y: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_overflow_visible && css` overflow: visible; `}
    ${p => p.bp4_overflow_hidden && css` overflow: hidden; `}
    ${p => p.bp4_overflow_scroll && css` overflow: scroll; `}
    ${p => p.bp4_overflow_auto && css` overflow: auto; `}

    ${p => p.bp4_ox_visible && css` overflow-x: visible; `}
    ${p => p.bp4_ox_hidden && css` overflow-x: hidden; `}
    ${p => p.bp4_ox_scroll && css` overflow-x: scroll; `}
    ${p => p.bp4_ox_auto && css` overflow-x: auto; `}

    ${p => p.bp4_oy_visible && css` overflow-x: visible; `}
    ${p => p.bp4_oy_hidden && css` overflow-y: hidden; `}
    ${p => p.bp4_oy_scroll && css` overflow-y: scroll; `}
    ${p => p.bp4_oy_auto && css` overflow-y: auto; `}
  }
`;

export default Overflow;

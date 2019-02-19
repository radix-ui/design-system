import { css } from 'styled-components';
import * as theme from './../theme/';

const Overflow = p => css`
  ${p.overflow_visible && ` overflow: visible; `}
  ${p.overflow_hidden && ` overflow: hidden; `}
  ${p.overflow_scroll && ` overflow: scroll; `}
  ${p.overflow_auto && ` overflow: auto; `}

  ${p.ox_visible && ` overflow-x: visible; `}
  ${p.ox_hidden && ` overflow-x: hidden; `}
  ${p.ox_scroll && ` overflow-x: scroll; `}
  ${p.ox_auto && ` overflow-x: auto; `}

  ${p.oy_visible && ` overflow-x: visible; `}
  ${p.oy_hidden && ` overflow-y: hidden; `}
  ${p.oy_scroll && ` overflow-y: scroll; `}
  ${p.oy_auto && ` overflow-y: auto; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p.bp1_overflow_visible && ` overflow: visible; `}
    ${p.bp1_overflow_hidden && ` overflow: hidden; `}
    ${p.bp1_overflow_scroll && ` overflow: scroll; `}
    ${p.bp1_overflow_auto && ` overflow: auto; `}

    ${p.bp1_ox_visible && ` overflow-x: visible; `}
    ${p.bp1_ox_hidden && ` overflow-x: hidden; `}
    ${p.bp1_ox_scroll && ` overflow-x: scroll; `}
    ${p.bp1_ox_auto && ` overflow-x: auto; `}

    ${p.bp1_oy_visible && ` overflow-x: visible; `}
    ${p.bp1_oy_hidden && ` overflow-y: hidden; `}
    ${p.bp1_oy_scroll && ` overflow-y: scroll; `}
    ${p.bp1_oy_auto && ` overflow-y: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p.bp2_overflow_visible && ` overflow: visible; `}
    ${p.bp2_overflow_hidden && ` overflow: hidden; `}
    ${p.bp2_overflow_scroll && ` overflow: scroll; `}
    ${p.bp2_overflow_auto && ` overflow: auto; `}

    ${p.bp2_ox_visible && ` overflow-x: visible; `}
    ${p.bp2_ox_hidden && ` overflow-x: hidden; `}
    ${p.bp2_ox_scroll && ` overflow-x: scroll; `}
    ${p.bp2_ox_auto && ` overflow-x: auto; `}

    ${p.bp2_oy_visible && ` overflow-x: visible; `}
    ${p.bp2_oy_hidden && ` overflow-y: hidden; `}
    ${p.bp2_oy_scroll && ` overflow-y: scroll; `}
    ${p.bp2_oy_auto && ` overflow-y: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p.bp3_overflow_visible && ` overflow: visible; `}
    ${p.bp3_overflow_hidden && ` overflow: hidden; `}
    ${p.bp3_overflow_scroll && ` overflow: scroll; `}
    ${p.bp3_overflow_auto && ` overflow: auto; `}

    ${p.bp3_ox_visible && ` overflow-x: visible; `}
    ${p.bp3_ox_hidden && ` overflow-x: hidden; `}
    ${p.bp3_ox_scroll && ` overflow-x: scroll; `}
    ${p.bp3_ox_auto && ` overflow-x: auto; `}

    ${p.bp3_oy_visible && ` overflow-x: visible; `}
    ${p.bp3_oy_hidden && ` overflow-y: hidden; `}
    ${p.bp3_oy_scroll && ` overflow-y: scroll; `}
    ${p.bp3_oy_auto && ` overflow-y: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p.bp4_overflow_visible && ` overflow: visible; `}
    ${p.bp4_overflow_hidden && ` overflow: hidden; `}
    ${p.bp4_overflow_scroll && ` overflow: scroll; `}
    ${p.bp4_overflow_auto && ` overflow: auto; `}

    ${p.bp4_ox_visible && ` overflow-x: visible; `}
    ${p.bp4_ox_hidden && ` overflow-x: hidden; `}
    ${p.bp4_ox_scroll && ` overflow-x: scroll; `}
    ${p.bp4_ox_auto && ` overflow-x: auto; `}

    ${p.bp4_oy_visible && ` overflow-x: visible; `}
    ${p.bp4_oy_hidden && ` overflow-y: hidden; `}
    ${p.bp4_oy_scroll && ` overflow-y: scroll; `}
    ${p.bp4_oy_auto && ` overflow-y: auto; `}
  }
`;

export default Overflow;

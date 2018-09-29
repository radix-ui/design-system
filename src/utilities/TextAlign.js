import { css } from 'styled-components';
import * as theme from './../theme/';

const TextAlign = css`
  ${p => p.ta_left && css` text-align: left; `}
  ${p => p.ta_center && css` text-align: center; `}
  ${p => p.ta_right && css` text-align: right; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_ta_left && css` text-align: left; `}
    ${p => p.bp1_ta_center && css` text-align: center; `}
    ${p => p.bp1_ta_right && css` text-align: right; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_ta_left && css` text-align: left; `}
    ${p => p.bp2_ta_center && css` text-align: center; `}
    ${p => p.bp2_ta_right && css` text-align: right; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_ta_left && css` text-align: left; `}
    ${p => p.bp3_ta_center && css` text-align: center; `}
    ${p => p.bp3_ta_right && css` text-align: right; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_ta_left && css` text-align: left; `}
    ${p => p.bp4_ta_center && css` text-align: center; `}
    ${p => p.bp4_ta_right && css` text-align: right; `}
  }
`;

export default TextAlign;

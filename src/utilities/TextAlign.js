import { css } from 'styled-components';
import * as theme from './../theme/';

const TextAlign = css`
  ${p => p.left && css` text-align: left; `}
  ${p => p.center && css` text-align: center; `}
  ${p => p.right && css` text-align: right; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_left && css` text-align: left; `}
    ${p => p.bp1_center && css` text-align: center; `}
    ${p => p.bp1_right && css` text-align: right; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_left && css` text-align: left; `}
    ${p => p.bp2_center && css` text-align: center; `}
    ${p => p.bp2_right && css` text-align: right; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_left && css` text-align: left; `}
    ${p => p.bp3_center && css` text-align: center; `}
    ${p => p.bp3_right && css` text-align: right; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_left && css` text-align: left; `}
    ${p => p.bp4_center && css` text-align: center; `}
    ${p => p.bp4_right && css` text-align: right; `}
  }
`;

export default TextAlign;

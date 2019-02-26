import { css } from 'styled-components';
import * as theme from './../theme/';
const TextAlignPropsKeys = ['left', 'center', 'right']
const TextAlign = p => css`
  ${p.ta_left && ` text-align: left; `}
  ${p.ta_center && ` text-align: center; `}
  ${p.ta_right && ` text-align: right; `}

  ${TextAlignPropsKeys.some(prop => p[`bp1_ta_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_100}) {
      ${p.bp1_ta_left && ` text-align: left; `}
      ${p.bp1_ta_center && ` text-align: center; `}
      ${p.bp1_ta_right && ` text-align: right; `}
    }
  `}

  ${TextAlignPropsKeys.some(prop => p[`bp2_ta_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_200}) {
      ${p.bp2_ta_left && ` text-align: left; `}
      ${p.bp2_ta_center && ` text-align: center; `}
      ${p.bp2_ta_right && ` text-align: right; `}
    }
  `}

  ${TextAlignPropsKeys.some(prop => p[`bp3_ta_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_300}) {
      ${p.bp3_ta_left && ` text-align: left; `}
      ${p.bp3_ta_center && ` text-align: center; `}
      ${p.bp3_ta_right && ` text-align: right; `}
    }
  `}

  ${TextAlignPropsKeys.some(prop => p[`bp4_ta_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_400}) {
      ${p.bp4_ta_left && ` text-align: left; `}
      ${p.bp4_ta_center && ` text-align: center; `}
      ${p.bp4_ta_right && ` text-align: right; `}
    }
  `}
`;

export default TextAlign;

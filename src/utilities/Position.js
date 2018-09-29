import { css } from 'styled-components';
import * as theme from './../theme/';

const Position = css`
  ${p => p.position_static && css` position: static; `}
  ${p => p.position_relative && css` position: relative; `}
  ${p => p.position_absolute && css` position: absolute; `}
  ${p => p.position_fixed && css` position: fixed; `}
  ${p => p.position_sticky && css` position: sticky; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_position_static && css` position: static; `}
    ${p => p.bp1_position_relative && css` position: relative; `}
    ${p => p.bp1_position_absolute && css` position: absolute; `}
    ${p => p.bp1_position_fixed && css` position: fixed; `}
    ${p => p.bp1_position_sticky && css` position: sticky; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_position_static && css` position: static; `}
    ${p => p.bp2_position_relative && css` position: relative; `}
    ${p => p.bp2_position_absolute && css` position: absolute; `}
    ${p => p.bp2_position_fixed && css` position: fixed; `}
    ${p => p.bp2_position_sticky && css` position: sticky; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_position_static && css` position: static; `}
    ${p => p.bp3_position_relative && css` position: relative; `}
    ${p => p.bp3_position_absolute && css` position: absolute; `}
    ${p => p.bp3_position_fixed && css` position: fixed; `}
    ${p => p.bp3_position_sticky && css` position: sticky; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_position_static && css` position: static; `}
    ${p => p.bp4_position_relative && css` position: relative; `}
    ${p => p.bp4_position_absolute && css` position: absolute; `}
    ${p => p.bp4_position_fixed && css` position: fixed; `}
    ${p => p.bp4_position_sticky && css` position: sticky; `}
  }
`;

export default Position;

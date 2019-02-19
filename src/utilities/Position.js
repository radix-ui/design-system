import { css } from 'styled-components';
import * as theme from './../theme/';

const Position = p => css`
  ${p.position_static && ` position: static; `}
  ${p.position_relative && ` position: relative; `}
  ${p.position_absolute && ` position: absolute; `}
  ${p.position_fixed && ` position: fixed; `}
  ${p.position_sticky && ` position: sticky; `}

  ${(p.bp1_position_static || p.bp1_position_relative || p.bp1_position_absolute || p.bp1_position_fixed ||p.bp1_position_sticky) && css`
    @media (min-width: ${theme.BREAKPOINT_100}) {
      ${p.bp1_position_static && ` position: static; `}
      ${p.bp1_position_relative && ` position: relative; `}
      ${p.bp1_position_absolute && ` position: absolute; `}
      ${p.bp1_position_fixed && ` position: fixed; `}
      ${p.bp1_position_sticky && ` position: sticky; `}
    }
  `}
  ${(p.bp2_position_static || p.bp2_position_relative || p.bp2_position_absolute || p.bp2_position_fixed ||p.bp2_position_sticky) && css`
    @media (min-width: ${theme.BREAKPOINT_200}) {
      ${p.bp2_position_static && ` position: static; `}
      ${p.bp2_position_relative && ` position: relative; `}
      ${p.bp2_position_absolute && ` position: absolute; `}
      ${p.bp2_position_fixed && ` position: fixed; `}
      ${p.bp2_position_sticky && ` position: sticky; `}
    }
  `}

  ${(p.bp3_position_static || p.bp3_position_relative || p.bp3_position_absolute || p.bp3_position_fixed ||p.bp3_position_sticky) && css`
    @media (min-width: ${theme.BREAKPOINT_300}) {
      ${p.bp3_position_static && ` position: static; `}
      ${p.bp3_position_relative && ` position: relative; `}
      ${p.bp3_position_absolute && ` position: absolute; `}
      ${p.bp3_position_fixed && ` position: fixed; `}
      ${p.bp3_position_sticky && ` position: sticky; `}
    }
  `}

  ${(p.bp4_position_static || p.bp4_position_relative || p.bp4_position_absolute || p.bp4_position_fixed ||p.bp4_position_sticky) && css`
    @media (min-width: ${theme.BREAKPOINT_400}) { 
        ${p.bp4_position_static && ` position: static; `}
        ${p.bp4_position_relative && ` position: relative; `}
        ${p.bp4_position_absolute && ` position: absolute; `}
        ${p.bp4_position_fixed && ` position: fixed; `}
        ${p.bp4_position_sticky && ` position: sticky; `}
      } 
  `}
  
`;

export default Position;

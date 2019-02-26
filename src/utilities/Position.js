import { css } from 'styled-components';
import * as theme from './../theme/';

const positionPropsKeys = ['position_static', 'position_relative', 'position_absolute', 'position_fixed', 'position_sticky']

const Position = p => css`
  ${p.position_static && ` position: static; `}
  ${p.position_relative && ` position: relative; `}
  ${p.position_absolute && ` position: absolute; `}
  ${p.position_fixed && ` position: fixed; `}
  ${p.position_sticky && ` position: sticky; `}

  ${positionPropsKeys.some(prop=> p[`bp1_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_100}) {
      ${p.bp1_position_static && ` position: static; `}
      ${p.bp1_position_relative && ` position: relative; `}
      ${p.bp1_position_absolute && ` position: absolute; `}
      ${p.bp1_position_fixed && ` position: fixed; `}
      ${p.bp1_position_sticky && ` position: sticky; `}
    }
  `}

  ${positionPropsKeys.some(prop=> p[`bp2_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_200}) {
      ${p.bp2_position_static && ` position: static; `}
      ${p.bp2_position_relative && ` position: relative; `}
      ${p.bp2_position_absolute && ` position: absolute; `}
      ${p.bp2_position_fixed && ` position: fixed; `}
      ${p.bp2_position_sticky && ` position: sticky; `}
    }
  `}

  ${positionPropsKeys.some(prop=> p[`bp3_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_300}) {
      ${p.bp3_position_static && ` position: static; `}
      ${p.bp3_position_relative && ` position: relative; `}
      ${p.bp3_position_absolute && ` position: absolute; `}
      ${p.bp3_position_fixed && ` position: fixed; `}
      ${p.bp3_position_sticky && ` position: sticky; `}
    }
  `}

  ${positionPropsKeys.some(prop=> p[`bp4_${prop}`]) && css`
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

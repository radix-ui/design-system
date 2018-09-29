import { css } from 'styled-components';
import * as theme from './../theme/';

const Position = css`
  ${p => p.position_static && css` position: static; `}
  ${p => p.position_relative && css` position: relative; `}
  ${p => p.position_absolute && css` position: absolute; `}
  ${p => p.position_fixed && css` position: fixed; `}
  ${p => p.position_sticky && css` position: sticky; `}
`;

export default Position;

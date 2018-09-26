import { css } from 'styled-components';
import * as theme from './../theme/';

const Position = css`
  ${p => p.static && css` position: static; `}
  ${p => p.relative && css` position: relative; `}
  ${p => p.absolute && css` position: absolute; `}
  ${p => p.fixed && css` position: fixed; `}
  ${p => p.sticky && css` position: sticky; `}
`;

export default Position;

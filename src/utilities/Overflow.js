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
`;

export default Overflow;

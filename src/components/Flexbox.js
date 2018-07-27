import { css } from 'styled-components';
import Box from './Box.js';

const Flexbox = Box.extend`
  display: flex;

  ${p => p.row && css` flex-direction: row `}
  ${p => p.column && css` flex-direction: column `}

  ${p => p.wrap && css` flex-wrap: wrap `}

  ${p => p.ai_center && css` align-items: center `}
  ${p => p.ai_stretch && css` align-items: stretch `}
  ${p => p.ai_flexstart && css` align-items: flex-start `}
  ${p => p.ai_flexend && css` align-items: flex-end `}

  ${p => p.jc_center && css` justify-content: center `}
  ${p => p.jc_spacebetween && css` justify-content: space-between `}
  ${p => p.jc_spacearound && css` justify-content: space-around `}
  ${p => p.jc_flexstart && css` justify-content: flex-start `}
  ${p => p.jc_flexend && css` justify-content: flex-end `}
`;

export default Flexbox;

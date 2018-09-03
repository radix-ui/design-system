import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${theme.SPACING_900};

  ${p => p.ai_center && css` align-items: center `}
  ${p => p.ai_end && css` align-items: end `}
  ${p => p.ai_start && css` align-items: start `}
  ${p => p.ai_stretch && css` align-items: stretch `}

  ${p => p.ji_center && css` justify-items: center `}
  ${p => p.ji_end && css` justify-items: end `}
  ${p => p.ji_start && css` justify-items: start `}
  ${p => p.ji_stretch && css` justify-items: stretch `}

  ${p => p.ac_center && css` align-content: center `}
  ${p => p.ac_spacebetween && css` align-content: space-between `}
  ${p => p.ac_spacearound && css` align-content: space-around `}
  ${p => p.ac_spaceevenly && css` align-content: space-evenly `}
  ${p => p.ac_flexstart && css` align-content: flex-start `}
  ${p => p.ac_flexend && css` align-content: flex-end `}

  ${p => p.jc_center && css` justify-content: center `}
  ${p => p.jc_spacebetween && css` justify-content: space-between `}
  ${p => p.jc_spacearound && css` justify-content: space-around `}
  ${p => p.jc_spaceevenly && css` justify-content: space-evenly `}
  ${p => p.jc_flexstart && css` justify-content: flex-start `}
  ${p => p.jc_flexend && css` justify-content: flex-end `}
`;

export default Grid;

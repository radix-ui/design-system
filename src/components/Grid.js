import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';

const Grid = styled.div`
  display: grid;

  ${p => p.size0 && css` grid-gap: 0; `}
  ${p => p.size1 && css` grid-gap: ${theme.SPACING_400}; `}
  ${p => p.size2 && css` grid-gap: ${theme.SPACING_700}; `}
  ${p => p.size3 && css` grid-gap: ${theme.SPACING_900}; `}

  ${p => p.cells_1 && css` grid-template-columns: repeat(1, 1fr); `}
  ${p => p.cells_2 && css` grid-template-columns: repeat(2, 1fr); `}
  ${p => p.cells_3 && css` grid-template-columns: repeat(3, 1fr); `}
  ${p => p.cells_4 && css` grid-template-columns: repeat(4, 1fr); `}
  ${p => p.cells_5 && css` grid-template-columns: repeat(5, 1fr); `}
  ${p => p.cells_6 && css` grid-template-columns: repeat(6, 1fr); `}
  ${p => p.cells_7 && css` grid-template-columns: repeat(7, 1fr); `}
  ${p => p.cells_8 && css` grid-template-columns: repeat(8, 1fr); `}
  ${p => p.cells_9 && css` grid-template-columns: repeat(9, 1fr); `}
  ${p => p.cells_10 && css` grid-template-columns: repeat(10, 1fr); `}
  ${p => p.cells_11 && css` grid-template-columns: repeat(11, 1fr); `}
  ${p => p.cells_12 && css` grid-template-columns: repeat(12, 1fr); `}

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

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_size1 && css` grid-gap: ${theme.SPACING_400}; `}
    ${p => p.bp1_size2 && css` grid-gap: ${theme.SPACING_700}; `}
    ${p => p.bp1_size3 && css` grid-gap: ${theme.SPACING_900}; `}

    ${p => p.bp1_cells_1 && css` grid-template-columns: repeat(1, 1fr); `}
    ${p => p.bp1_cells_2 && css` grid-template-columns: repeat(2, 1fr); `}
    ${p => p.bp1_cells_3 && css` grid-template-columns: repeat(3, 1fr); `}
    ${p => p.bp1_cells_4 && css` grid-template-columns: repeat(4, 1fr); `}
    ${p => p.bp1_cells_5 && css` grid-template-columns: repeat(5, 1fr); `}
    ${p => p.bp1_cells_6 && css` grid-template-columns: repeat(6, 1fr); `}
    ${p => p.bp1_cells_7 && css` grid-template-columns: repeat(7, 1fr); `}
    ${p => p.bp1_cells_8 && css` grid-template-columns: repeat(8, 1fr); `}
    ${p => p.bp1_cells_9 && css` grid-template-columns: repeat(9, 1fr); `}
    ${p => p.bp1_cells_10 && css` grid-template-columns: repeat(10, 1fr); `}
    ${p => p.bp1_cells_11 && css` grid-template-columns: repeat(11, 1fr); `}
    ${p => p.bp1_cells_12 && css` grid-template-columns: repeat(12, 1fr); `}

    ${p => p.bp1_ai_center && css` align-items: center `}
    ${p => p.bp1_ai_end && css` align-items: end `}
    ${p => p.bp1_ai_start && css` align-items: start `}
    ${p => p.bp1_ai_stretch && css` align-items: stretch `}

    ${p => p.bp1_ji_center && css` justify-items: center `}
    ${p => p.bp1_ji_end && css` justify-items: end `}
    ${p => p.bp1_ji_start && css` justify-items: start `}
    ${p => p.bp1_ji_stretch && css` justify-items: stretch `}

    ${p => p.bp1_ac_center && css` align-content: center `}
    ${p => p.bp1_ac_spacebetween && css` align-content: space-between `}
    ${p => p.bp1_ac_spacearound && css` align-content: space-around `}
    ${p => p.bp1_ac_spaceevenly && css` align-content: space-evenly `}
    ${p => p.bp1_ac_flexstart && css` align-content: flex-start `}
    ${p => p.bp1_ac_flexend && css` align-content: flex-end `}

    ${p => p.bp1_jc_center && css` justify-content: center `}
    ${p => p.bp1_jc_spacebetween && css` justify-content: space-between `}
    ${p => p.bp1_jc_spacearound && css` justify-content: space-around `}
    ${p => p.bp1_jc_spaceevenly && css` justify-content: space-evenly `}
    ${p => p.bp1_jc_flexstart && css` justify-content: flex-start `}
    ${p => p.bp1_jc_flexend && css` justify-content: flex-end `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_size1 && css` grid-gap: ${theme.SPACING_400}; `}
    ${p => p.bp2_size2 && css` grid-gap: ${theme.SPACING_700}; `}
    ${p => p.bp2_size3 && css` grid-gap: ${theme.SPACING_900}; `}

    ${p => p.bp2_cells_1 && css` grid-template-columns: repeat(1, 1fr); `}
    ${p => p.bp2_cells_2 && css` grid-template-columns: repeat(2, 1fr); `}
    ${p => p.bp2_cells_3 && css` grid-template-columns: repeat(3, 1fr); `}
    ${p => p.bp2_cells_4 && css` grid-template-columns: repeat(4, 1fr); `}
    ${p => p.bp2_cells_5 && css` grid-template-columns: repeat(5, 1fr); `}
    ${p => p.bp2_cells_6 && css` grid-template-columns: repeat(6, 1fr); `}
    ${p => p.bp2_cells_7 && css` grid-template-columns: repeat(7, 1fr); `}
    ${p => p.bp2_cells_8 && css` grid-template-columns: repeat(8, 1fr); `}
    ${p => p.bp2_cells_9 && css` grid-template-columns: repeat(9, 1fr); `}
    ${p => p.bp2_cells_10 && css` grid-template-columns: repeat(10, 1fr); `}
    ${p => p.bp2_cells_11 && css` grid-template-columns: repeat(11, 1fr); `}
    ${p => p.bp2_cells_12 && css` grid-template-columns: repeat(12, 1fr); `}

    ${p => p.bp2_ai_center && css` align-items: center `}
    ${p => p.bp2_ai_end && css` align-items: end `}
    ${p => p.bp2_ai_start && css` align-items: start `}
    ${p => p.bp2_ai_stretch && css` align-items: stretch `}

    ${p => p.bp2_ji_center && css` justify-items: center `}
    ${p => p.bp2_ji_end && css` justify-items: end `}
    ${p => p.bp2_ji_start && css` justify-items: start `}
    ${p => p.bp2_ji_stretch && css` justify-items: stretch `}

    ${p => p.bp2_ac_center && css` align-content: center `}
    ${p => p.bp2_ac_spacebetween && css` align-content: space-between `}
    ${p => p.bp2_ac_spacearound && css` align-content: space-around `}
    ${p => p.bp2_ac_spaceevenly && css` align-content: space-evenly `}
    ${p => p.bp2_ac_flexstart && css` align-content: flex-start `}
    ${p => p.bp2_ac_flexend && css` align-content: flex-end `}

    ${p => p.bp2_jc_center && css` justify-content: center `}
    ${p => p.bp2_jc_spacebetween && css` justify-content: space-between `}
    ${p => p.bp2_jc_spacearound && css` justify-content: space-around `}
    ${p => p.bp2_jc_spaceevenly && css` justify-content: space-evenly `}
    ${p => p.bp2_jc_flexstart && css` justify-content: flex-start `}
    ${p => p.bp2_jc_flexend && css` justify-content: flex-end `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_size1 && css` grid-gap: ${theme.SPACING_400}; `}
    ${p => p.bp3_size2 && css` grid-gap: ${theme.SPACING_700}; `}
    ${p => p.bp3_size3 && css` grid-gap: ${theme.SPACING_900}; `}

    ${p => p.bp3_cells_1 && css` grid-template-columns: repeat(1, 1fr); `}
    ${p => p.bp3_cells_2 && css` grid-template-columns: repeat(2, 1fr); `}
    ${p => p.bp3_cells_3 && css` grid-template-columns: repeat(3, 1fr); `}
    ${p => p.bp3_cells_4 && css` grid-template-columns: repeat(4, 1fr); `}
    ${p => p.bp3_cells_5 && css` grid-template-columns: repeat(5, 1fr); `}
    ${p => p.bp3_cells_6 && css` grid-template-columns: repeat(6, 1fr); `}
    ${p => p.bp3_cells_7 && css` grid-template-columns: repeat(7, 1fr); `}
    ${p => p.bp3_cells_8 && css` grid-template-columns: repeat(8, 1fr); `}
    ${p => p.bp3_cells_9 && css` grid-template-columns: repeat(9, 1fr); `}
    ${p => p.bp3_cells_10 && css` grid-template-columns: repeat(10, 1fr); `}
    ${p => p.bp3_cells_11 && css` grid-template-columns: repeat(11, 1fr); `}
    ${p => p.bp3_cells_12 && css` grid-template-columns: repeat(12, 1fr); `}

    ${p => p.bp3_ai_center && css` align-items: center `}
    ${p => p.bp3_ai_end && css` align-items: end `}
    ${p => p.bp3_ai_start && css` align-items: start `}
    ${p => p.bp3_ai_stretch && css` align-items: stretch `}

    ${p => p.bp3_ji_center && css` justify-items: center `}
    ${p => p.bp3_ji_end && css` justify-items: end `}
    ${p => p.bp3_ji_start && css` justify-items: start `}
    ${p => p.bp3_ji_stretch && css` justify-items: stretch `}

    ${p => p.bp3_ac_center && css` align-content: center `}
    ${p => p.bp3_ac_spacebetween && css` align-content: space-between `}
    ${p => p.bp3_ac_spacearound && css` align-content: space-around `}
    ${p => p.bp3_ac_spaceevenly && css` align-content: space-evenly `}
    ${p => p.bp3_ac_flexstart && css` align-content: flex-start `}
    ${p => p.bp3_ac_flexend && css` align-content: flex-end `}

    ${p => p.bp3_jc_center && css` justify-content: center `}
    ${p => p.bp3_jc_spacebetween && css` justify-content: space-between `}
    ${p => p.bp3_jc_spacearound && css` justify-content: space-around `}
    ${p => p.bp3_jc_spaceevenly && css` justify-content: space-evenly `}
    ${p => p.bp3_jc_flexstart && css` justify-content: flex-start `}
    ${p => p.bp3_jc_flexend && css` justify-content: flex-end `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_size1 && css` grid-gap: ${theme.SPACING_400}; `}
    ${p => p.bp4_size2 && css` grid-gap: ${theme.SPACING_700}; `}
    ${p => p.bp4_size3 && css` grid-gap: ${theme.SPACING_900}; `}

    ${p => p.bp4_cells_1 && css` grid-template-columns: repeat(1, 1fr); `}
    ${p => p.bp4_cells_2 && css` grid-template-columns: repeat(2, 1fr); `}
    ${p => p.bp4_cells_3 && css` grid-template-columns: repeat(3, 1fr); `}
    ${p => p.bp4_cells_4 && css` grid-template-columns: repeat(4, 1fr); `}
    ${p => p.bp4_cells_5 && css` grid-template-columns: repeat(5, 1fr); `}
    ${p => p.bp4_cells_6 && css` grid-template-columns: repeat(6, 1fr); `}
    ${p => p.bp4_cells_7 && css` grid-template-columns: repeat(7, 1fr); `}
    ${p => p.bp4_cells_8 && css` grid-template-columns: repeat(8, 1fr); `}
    ${p => p.bp4_cells_9 && css` grid-template-columns: repeat(9, 1fr); `}
    ${p => p.bp4_cells_10 && css` grid-template-columns: repeat(10, 1fr); `}
    ${p => p.bp4_cells_11 && css` grid-template-columns: repeat(11, 1fr); `}
    ${p => p.bp4_cells_12 && css` grid-template-columns: repeat(12, 1fr); `}

    ${p => p.bp4_ai_center && css` align-items: center `}
    ${p => p.bp4_ai_end && css` align-items: end `}
    ${p => p.bp4_ai_start && css` align-items: start `}
    ${p => p.bp4_ai_stretch && css` align-items: stretch `}

    ${p => p.bp4_ji_center && css` justify-items: center `}
    ${p => p.bp4_ji_end && css` justify-items: end `}
    ${p => p.bp4_ji_start && css` justify-items: start `}
    ${p => p.bp4_ji_stretch && css` justify-items: stretch `}

    ${p => p.bp4_ac_center && css` align-content: center `}
    ${p => p.bp4_ac_spacebetween && css` align-content: space-between `}
    ${p => p.bp4_ac_spacearound && css` align-content: space-around `}
    ${p => p.bp4_ac_spaceevenly && css` align-content: space-evenly `}
    ${p => p.bp4_ac_flexstart && css` align-content: flex-start `}
    ${p => p.bp4_ac_flexend && css` align-content: flex-end `}

    ${p => p.bp4_jc_center && css` justify-content: center `}
    ${p => p.bp4_jc_spacebetween && css` justify-content: space-between `}
    ${p => p.bp4_jc_spacearound && css` justify-content: space-around `}
    ${p => p.bp4_jc_spaceevenly && css` justify-content: space-evenly `}
    ${p => p.bp4_jc_flexstart && css` justify-content: flex-start `}
    ${p => p.bp4_jc_flexend && css` justify-content: flex-end `}
  }

  ${Margin}
`;

export default Grid;

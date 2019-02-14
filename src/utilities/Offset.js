import { css } from 'styled-components';
import * as theme from './../theme/';

const Offset = css`
  ${p => p.top_0 && css` top: 0; `}
  ${p => p.right_0 && css` right: 0; `}
  ${p => p.bottom_0 && css` bottom: 0; `}
  ${p => p.left_0 && css` left: 0; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_top_0 && css` top: 0; `}
    ${p => p.bp1_right_0 && css` right: 0; `}
    ${p => p.bp1_bottom_0 && css` bottom: 0; `}
    ${p => p.bp1_left_0 && css` left: 0; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_top_0 && css` top: 0; `}
    ${p => p.bp2_right_0 && css` right: 0; `}
    ${p => p.bp2_bottom_0 && css` bottom: 0; `}
    ${p => p.bp2_left_0 && css` left: 0; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_top_0 && css` top: 0; `}
    ${p => p.bp3_right_0 && css` right: 0; `}
    ${p => p.bp3_bottom_0 && css` bottom: 0; `}
    ${p => p.bp3_left_0 && css` left: 0; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_top_0 && css` top: 0; `}
    ${p => p.bp4_right_0 && css` right: 0; `}
    ${p => p.bp4_bottom_0 && css` bottom: 0; `}
    ${p => p.bp4_left_0 && css` left: 0; `}
  }
`;

export default Offset;

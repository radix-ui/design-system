import { css } from 'styled-components';
import * as theme from './../theme/';

const Offset = p => css`
  ${p.top_0 && ` top: 0; `}
  ${p.right_0 && ` right: 0; `}
  ${p.bottom_0 && ` bottom: 0; `}
  ${p.left_0 && ` left: 0; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p.bp1_top_0 && ` top: 0; `}
    ${p.bp1_right_0 && ` right: 0; `}
    ${p.bp1_bottom_0 && ` bottom: 0; `}
    ${p.bp1_left_0 && ` left: 0; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p.bp2_top_0 && ` top: 0; `}
    ${p.bp2_right_0 && ` right: 0; `}
    ${p.bp2_bottom_0 && ` bottom: 0; `}
    ${p.bp2_left_0 && ` left: 0; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p.bp3_top_0 && ` top: 0; `}
    ${p.bp3_right_0 && ` right: 0; `}
    ${p.bp3_bottom_0 && ` bottom: 0; `}
    ${p.bp3_left_0 && ` left: 0; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p.bp4_top_0 && ` top: 0; `}
    ${p.bp4_right_0 && ` right: 0; `}
    ${p.bp4_bottom_0 && ` bottom: 0; `}
    ${p.bp4_left_0 && ` left: 0; `}
  }
`;

export default Offset;

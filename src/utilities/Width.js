import { css } from 'styled-components';
import * as theme from './../theme/';

const Width = css`
  ${p => p.width_50 && css` width: 50%; `}
  ${p => p.width_100 && css` width: 100%; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_width_50 && css` width: 50%; `}
    ${p => p.bp1_width_100 && css` width: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_width_50 && css` width: 50%; `}
    ${p => p.bp2_width_100 && css` width: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_width_50 && css` width: 50%; `}
    ${p => p.bp3_width_100 && css` width: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_width_50 && css` width: 50%; `}
    ${p => p.bp4_width_100 && css` width: 100%; `}
  }
`;

export default Width;

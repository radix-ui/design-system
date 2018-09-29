import { css } from 'styled-components';
import * as theme from './../theme/';

const Height = css`
  ${p => p.height_100 && css` height: 100%; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_height_100 && css` height: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_height_100 && css` height: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_height_100 && css` height: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_height_100 && css` height: 100%; `}
  }
`;

export default Height;

import { css } from 'styled-components';
import * as theme from './../theme/';

const Height = p => css`
  ${p.height_100 && ` height: 100%; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p.bp1_height_100 && ` height: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p.bp2_height_100 && ` height: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p.bp3_height_100 && ` height: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p.bp4_height_100 && ` height: 100%; `}
  }
`;

export default Height;

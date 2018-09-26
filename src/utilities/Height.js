import { css } from 'styled-components';
import * as theme from './../theme/';

const Height = css`
  ${p => p.h100 && css` height: 100%; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_h100 && css` height: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_h100 && css` height: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_h100 && css` height: 100%; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_h100 && css` height: 100%; `}
  }
`;

export default Height;

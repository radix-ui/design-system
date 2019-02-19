import { css } from 'styled-components';
import * as theme from './../theme/';

const FlexItem = p => css`
  ${p.fg_0 && ` flex-grow: 0; `}
  ${p.fg_1 && ` flex-grow: 1; `}
  ${p.fs_0 && ` flex-shrink: 0; `}
  ${p.fs_1 && ` flex-shrink: 1; `}
  ${p.fb_0 && ` flex-basis: 0; `}
  ${p.fb_auto && ` flex-basis: auto; `}

  ${(p.bp1_fg_0 || p.bp1_fg_1 || p.bp1_fs_0 || p.bp1_fs_1 || p.bp1_fb_0 || p.bp1_fb_auto) && ` 
    @media (min-width: ${theme.BREAKPOINT_100}) {
      ${p.bp1_fg_0 && ` flex-grow: 0; `}
      ${p.bp1_fg_1 && ` flex-grow: 1; `}
      ${p.bp1_fs_0 && ` flex-shrink: 0; `}
      ${p.bp1_fs_1 && ` flex-shrink: 1; `}
      ${p.bp1_fb_0 && ` flex-basis: 0; `}
      ${p.bp1_fb_auto && ` flex-basis: auto; `}
    }
  `}

  ${ ( p.bp2_fg_0 || p.bp2_fg_1 || p.bp2_fs_0 || p.bp2_fs_1 || p.bp2_fb_0 || p.bp2_fb_auto) && ` 
    @media (min-width: ${theme.BREAKPOINT_200}) {
      ${p.bp2_fg_0 && ` flex-grow: 0; `}
      ${p.bp2_fg_1 && ` flex-grow: 1; `}
      ${p.bp2_fs_0 && ` flex-shrink: 0; `}
      ${p.bp2_fs_1 && ` flex-shrink: 1; `}
      ${p.bp2_fb_0 && ` flex-basis: 0; `}
      ${p.bp2_fb_auto && ` flex-basis: auto; `}
    }
  ` }

  ${ (p.bp3_fg_0 || p.bp3_fg_1 || p.bp3_fs_0 || p.bp3_fs_1 || p.bp3_fb_0 || p.bp3_fb_auto) && ` 
    @media (min-width: ${theme.BREAKPOINT_300}) {
      ${p.bp3_fg_0 && ` flex-grow: 0; `}
      ${p.bp3_fg_1 && ` flex-grow: 1; `}
      ${p.bp3_fs_0 && ` flex-shrink: 0; `}
      ${p.bp3_fs_1 && ` flex-shrink: 1; `}
      ${p.bp3_fb_0 && ` flex-basis: 0; `}
      ${p.bp3_fb_auto && ` flex-basis: auto; `}
    }
  `}

  ${(p.bp4_fg_0  || p.bp4_fg_1 || p.bp4_fs_0 || p.bp4_fs_1 || p.bp4_fb_0 || p.bp4_fb_auto) && ` 
    @media (min-width: ${theme.BREAKPOINT_400}) {
      ${p.bp4_fg_0 && ` flex-grow: 0; `}
      ${p.bp4_fg_1 && ` flex-grow: 1; `}
      ${p.bp4_fs_0 && ` flex-shrink: 0; `}
      ${p.bp4_fs_1 && ` flex-shrink: 1; `}
      ${p.bp4_fb_0 && ` flex-basis: 0; `}
      ${p.bp4_fb_auto && ` flex-basis: auto; `}
    }
  `}
`;

export default FlexItem;

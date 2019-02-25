import { css } from 'styled-components';
import * as theme from './../theme/';

const FlexItem = css`
  ${p => p.fg_0 && css` flex-grow: 0; `}
  ${p => p.fg_1 && css` flex-grow: 1; `}
  ${p => p.fs_0 && css` flex-shrink: 0; `}
  ${p => p.fs_1 && css` flex-shrink: 1; `}
  ${p => p.fb_0 && css` flex-basis: 0; `}
  ${p => p.fb_auto && css` flex-basis: auto; `}

  ${p => p.as_flexstart && css` align-self: flex-start; `}
  ${p => p.as_center && css` align-self: center; `}
  ${p => p.as_flexend && css` align-self: flex-end; `}
  ${p => p.as_stretch && css` align-self: stretch; `}
  ${p => p.as_baseline && css` align-self: baseline; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_fg_0 && css` flex-grow: 0; `}
    ${p => p.bp1_fg_1 && css` flex-grow: 1; `}
    ${p => p.bp1_fs_0 && css` flex-shrink: 0; `}
    ${p => p.bp1_fs_1 && css` flex-shrink: 1; `}
    ${p => p.bp1_fb_0 && css` flex-basis: 0; `}
    ${p => p.bp1_fb_auto && css` flex-basis: auto; `}

    ${p => p.bp1_as_flexstart && css` align-self: flex-start; `}
    ${p => p.bp1_as_center && css` align-self: center; `}
    ${p => p.bp1_as_flexend && css` align-self: flex-end; `}
    ${p => p.bp1_as_stretch && css` align-self: stretch; `}
    ${p => p.bp1_as_baseline && css` align-self: baseline; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_fg_0 && css` flex-grow: 0; `}
    ${p => p.bp2_fg_1 && css` flex-grow: 1; `}
    ${p => p.bp2_fs_0 && css` flex-shrink: 0; `}
    ${p => p.bp2_fs_1 && css` flex-shrink: 1; `}
    ${p => p.bp2_fb_0 && css` flex-basis: 0; `}
    ${p => p.bp2_fb_auto && css` flex-basis: auto; `}

    ${p => p.bp2_as_flexstart && css` align-self: flex-start; `}
    ${p => p.bp2_as_center && css` align-self: center; `}
    ${p => p.bp2_as_flexend && css` align-self: flex-end; `}
    ${p => p.bp2_as_stretch && css` align-self: stretch; `}
    ${p => p.bp2_as_baseline && css` align-self: baseline; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_fg_0 && css` flex-grow: 0; `}
    ${p => p.bp3_fg_1 && css` flex-grow: 1; `}
    ${p => p.bp3_fs_0 && css` flex-shrink: 0; `}
    ${p => p.bp3_fs_1 && css` flex-shrink: 1; `}
    ${p => p.bp3_fb_0 && css` flex-basis: 0; `}
    ${p => p.bp3_fb_auto && css` flex-basis: auto; `}

    ${p => p.bp3_as_flexstart && css` align-self: flex-start; `}
    ${p => p.bp3_as_center && css` align-self: center; `}
    ${p => p.bp3_as_flexend && css` align-self: flex-end; `}
    ${p => p.bp3_as_stretch && css` align-self: stretch; `}
    ${p => p.bp3_as_baseline && css` align-self: baseline; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_fg_0 && css` flex-grow: 0; `}
    ${p => p.bp4_fg_1 && css` flex-grow: 1; `}
    ${p => p.bp4_fs_0 && css` flex-shrink: 0; `}
    ${p => p.bp4_fs_1 && css` flex-shrink: 1; `}
    ${p => p.bp4_fb_0 && css` flex-basis: 0; `}
    ${p => p.bp4_fb_auto && css` flex-basis: auto; `}

    ${p => p.bp4_as_flexstart && css` align-self: flex-start; `}
    ${p => p.bp4_as_center && css` align-self: center; `}
    ${p => p.bp4_as_flexend && css` align-self: flex-end; `}
    ${p => p.bp4_as_stretch && css` align-self: stretch; `}
    ${p => p.bp4_as_baseline && css` align-self: baseline; `}
  }
`;

export default FlexItem;

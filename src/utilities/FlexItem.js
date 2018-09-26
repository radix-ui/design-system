import { css } from 'styled-components';
import * as theme from './../theme/';

const FlexItem = css`
  ${p => p.fg0 && css` flex-grow: 0; `}
  ${p => p.fg1 && css` flex-grow: 1; `}
  ${p => p.fs0 && css` flex-shrink: 0; `}
  ${p => p.fs1 && css` flex-shrink: 1; `}
  ${p => p.fb0 && css` flex-basis: 0; `}
  ${p => p.fb_auto && css` flex-basis: auto; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_fg0 && css` flex-grow: 0; `}
    ${p => p.bp1_fg1 && css` flex-grow: 1; `}
    ${p => p.bp1_fs0 && css` flex-shrink: 0; `}
    ${p => p.bp1_fs1 && css` flex-shrink: 1; `}
    ${p => p.bp1_fb0 && css` flex-basis: 0; `}
    ${p => p.bp1_fb_auto && css` flex-basis: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_fg0 && css` flex-grow: 0; `}
    ${p => p.bp2_fg1 && css` flex-grow: 1; `}
    ${p => p.bp2_fs0 && css` flex-shrink: 0; `}
    ${p => p.bp2_fs1 && css` flex-shrink: 1; `}
    ${p => p.bp2_fb0 && css` flex-basis: 0; `}
    ${p => p.bp2_fb_auto && css` flex-basis: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_fg0 && css` flex-grow: 0; `}
    ${p => p.bp3_fg1 && css` flex-grow: 1; `}
    ${p => p.bp3_fs0 && css` flex-shrink: 0; `}
    ${p => p.bp3_fs1 && css` flex-shrink: 1; `}
    ${p => p.bp3_fb0 && css` flex-basis: 0; `}
    ${p => p.bp3_fb_auto && css` flex-basis: auto; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_fg0 && css` flex-grow: 0; `}
    ${p => p.bp4_fg1 && css` flex-grow: 1; `}
    ${p => p.bp4_fs0 && css` flex-shrink: 0; `}
    ${p => p.bp4_fs1 && css` flex-shrink: 1; `}
    ${p => p.bp4_fb0 && css` flex-basis: 0; `}
    ${p => p.bp4_fb_auto && css` flex-basis: auto; `}
  }
`;

export default FlexItem;

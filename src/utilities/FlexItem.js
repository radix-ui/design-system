import { css } from 'styled-components';
import * as theme from './../theme/';


const flexitemPropsKeys = ['fg_0','fg_1','fs_0','fs_1','fb_0','fb_auto','as_flexstart','as_center','as_flexend','as_stretch']

const FlexItem = p => css`
  ${p.fg_0 && ` flex-grow: 0; `}
  ${p.fg_1 && ` flex-grow: 1; `}
  ${p.fs_0 && ` flex-shrink: 0; `}
  ${p.fs_1 && ` flex-shrink: 1; `}
  ${p.fb_0 && ` flex-basis: 0; `}
  ${p.fb_auto && ` flex-basis: auto; `}

  ${p.as_flexstart && ` align-self: flex-start; `}
  ${p.as_center && ` align-self: center; `}
  ${p.as_flexend && ` align-self: flex-end; `}
  ${p.as_stretch && ` align-self: stretch; `}
  ${p.as_baseline && ` align-self: baseline; `}

  ${flexitemPropsKeys.some(prop => p[`bp1_${prop}`]) && css` 
    @media (min-width: ${theme.BREAKPOINT_100}) {
      ${p.bp1_fg_0 && ` flex-grow: 0; `}
      ${p.bp1_fg_1 && ` flex-grow: 1; `}
      ${p.bp1_fs_0 && ` flex-shrink: 0; `}
      ${p.bp1_fs_1 && ` flex-shrink: 1; `}
      ${p.bp1_fb_0 && ` flex-basis: 0; `}
      ${p.bp1_fb_auto && ` flex-basis: auto; `}

      ${p.bp1_as_flexstart && ` align-self: flex-start; `}
      ${p.bp1_as_center && ` align-self: center; `}
      ${p.bp1_as_flexend && ` align-self: flex-end; `}
      ${p.bp1_as_stretch && ` align-self: stretch; `}
      ${p.bp1_as_baseline && ` align-self: baseline; `}
    }
  `}

  ${flexitemPropsKeys.some(prop => p[`bp2_${prop}`]) && css` 
    @media (min-width: ${theme.BREAKPOINT_200}) {
      ${p.bp2_fg_0 && ` flex-grow: 0; `}
      ${p.bp2_fg_1 && ` flex-grow: 1; `}
      ${p.bp2_fs_0 && ` flex-shrink: 0; `}
      ${p.bp2_fs_1 && ` flex-shrink: 1; `}
      ${p.bp2_fb_0 && ` flex-basis: 0; `}
      ${p.bp2_fb_auto && ` flex-basis: auto; `}
      
      ${p.bp2_as_flexstart && ` align-self: flex-start; `}
      ${p.bp2_as_center && ` align-self: center; `}
      ${p.bp2_as_flexend && ` align-self: flex-end; `}
      ${p.bp2_as_stretch && ` align-self: stretch; `}
      ${p.bp2_as_baseline && ` align-self: baseline; `}
    }
  ` }

  ${flexitemPropsKeys.some(prop => p[`bp3_${prop}`]) && css` 
    @media (min-width: ${theme.BREAKPOINT_300}) {
      ${p.bp3_fg_0 && ` flex-grow: 0; `}
      ${p.bp3_fg_1 && ` flex-grow: 1; `}
      ${p.bp3_fs_0 && ` flex-shrink: 0; `}
      ${p.bp3_fs_1 && ` flex-shrink: 1; `}
      ${p.bp3_fb_0 && ` flex-basis: 0; `}
      ${p.bp3_fb_auto && ` flex-basis: auto; `}
      
      ${p.bp3_as_flexstart && ` align-self: flex-start; `}
      ${p.bp3_as_center && ` align-self: center; `}
      ${p.bp3_as_flexend && ` align-self: flex-end; `}
      ${p.bp3_as_stretch && ` align-self: stretch; `}
      ${p.bp3_as_baseline && ` align-self: baseline; `}
    }
  `}

  ${flexitemPropsKeys.some(prop => p[`bp4_${prop}`]) && css` 
    @media (min-width: ${theme.BREAKPOINT_400}) {
      ${p.bp4_fg_0 && ` flex-grow: 0; `}
      ${p.bp4_fg_1 && ` flex-grow: 1; `}
      ${p.bp4_fs_0 && ` flex-shrink: 0; `}
      ${p.bp4_fs_1 && ` flex-shrink: 1; `}
      ${p.bp4_fb_0 && ` flex-basis: 0; `}
      ${p.bp4_fb_auto && ` flex-basis: auto; `}
      
      ${p.bp4_as_flexstart && ` align-self: flex-start; `}
      ${p.bp4_as_center && ` align-self: center; `}
      ${p.bp4_as_flexend && ` align-self: flex-end; `}
      ${p.bp4_as_stretch && ` align-self: stretch; `}
      ${p.bp4_as_baseline && ` align-self: baseline; `}
    }
  `}

`;

export default FlexItem;

import { css } from 'styled-components';
import * as theme from './../theme/';

const BackgroundColorPropKeys = [
  "bc_white", "bc_black",
  "bc_gray100", "bc_gray200", "bc_gray300", "bc_gray400", "bc_gray500", "bc_gray600", "bc_gray700", "bc_gray800", "bc_gray900",
  "bc_blue100", "bc_blue200", "bc_blue300", "bc_blue400", "bc_blue500", "bc_blue600", "bc_blue700", "bc_blue800", "bc_blue900" ]

const BackgroundColor = p => css`
  ${p.bc_white && ` background-color: white; `}
  ${p.bc_black && ` background-color: black; `}

  ${p.bc_gray100 && ` background-color: ${theme.GRAY_100}; `}
  ${p.bc_gray200 && ` background-color: ${theme.GRAY_200}; `}
  ${p.bc_gray300 && ` background-color: ${theme.GRAY_300}; `}
  ${p.bc_gray400 && ` background-color: ${theme.GRAY_400}; `}
  ${p.bc_gray500 && ` background-color: ${theme.GRAY_500}; `}
  ${p.bc_gray600 && ` background-color: ${theme.GRAY_600}; `}
  ${p.bc_gray700 && ` background-color: ${theme.GRAY_700}; `}
  ${p.bc_gray800 && ` background-color: ${theme.GRAY_800}; `}
  ${p.bc_gray900 && ` background-color: ${theme.GRAY_900}; `}
  
  ${p.bc_blue100 && ` background-color: ${theme.BLUE_100}; `}
  ${p.bc_blue200 && ` background-color: ${theme.BLUE_200}; `}
  ${p.bc_blue300 && ` background-color: ${theme.BLUE_300}; `}
  ${p.bc_blue400 && ` background-color: ${theme.BLUE_400}; `}
  ${p.bc_blue500 && ` background-color: ${theme.BLUE_500}; `}
  ${p.bc_blue600 && ` background-color: ${theme.BLUE_600}; `}
  ${p.bc_blue700 && ` background-color: ${theme.BLUE_700}; `}
  ${p.bc_blue800 && ` background-color: ${theme.BLUE_800}; `}
  ${p.bc_blue900 && ` background-color: ${theme.BLUE_900}; `}
  
  ${BackgroundColorPropKeys.some(prop => p[`bp1_${prop}`]) && css`
  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p.bp1_bc_white && ` background-color: white; `}
    ${p.bp1_bc_black && ` background-color: black; `}

    ${p.bp1_bc_gray100 && ` background-color: ${theme.GRAY_100}; `}
    ${p.bp1_bc_gray200 && ` background-color: ${theme.GRAY_200}; `}
    ${p.bp1_bc_gray300 && ` background-color: ${theme.GRAY_300}; `}
    ${p.bp1_bc_gray400 && ` background-color: ${theme.GRAY_400}; `}
    ${p.bp1_bc_gray500 && ` background-color: ${theme.GRAY_500}; `}
    ${p.bp1_bc_gray600 && ` background-color: ${theme.GRAY_600}; `}
    ${p.bp1_bc_gray700 && ` background-color: ${theme.GRAY_700}; `}
    ${p.bp1_bc_gray800 && ` background-color: ${theme.GRAY_800}; `}
    ${p.bp1_bc_gray900 && ` background-color: ${theme.GRAY_900}; `}

    ${p.bp1_bc_blue100 && ` background-color: ${theme.BLUE_100}; `}
    ${p.bp1_bc_blue200 && ` background-color: ${theme.BLUE_200}; `}
    ${p.bp1_bc_blue300 && ` background-color: ${theme.BLUE_300}; `}
    ${p.bp1_bc_blue400 && ` background-color: ${theme.BLUE_400}; `}
    ${p.bp1_bc_blue500 && ` background-color: ${theme.BLUE_500}; `}
    ${p.bp1_bc_blue600 && ` background-color: ${theme.BLUE_600}; `}
    ${p.bp1_bc_blue700 && ` background-color: ${theme.BLUE_700}; `}
    ${p.bp1_bc_blue800 && ` background-color: ${theme.BLUE_800}; `}
    ${p.bp1_bc_blue900 && ` background-color: ${theme.BLUE_900}; `}
  }
  `}

  ${BackgroundColorPropKeys.some(prop => p[`bp2_${prop}`]) && css`
  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p.bp2_bc_white && ` background-color: white; `}
    ${p.bp2_bc_black && ` background-color: black; `}

    ${p.bp2_bc_gray100 && ` background-color: ${theme.GRAY_100}; `}
    ${p.bp2_bc_gray200 && ` background-color: ${theme.GRAY_200}; `}
    ${p.bp2_bc_gray300 && ` background-color: ${theme.GRAY_300}; `}
    ${p.bp2_bc_gray400 && ` background-color: ${theme.GRAY_400}; `}
    ${p.bp2_bc_gray500 && ` background-color: ${theme.GRAY_500}; `}
    ${p.bp2_bc_gray600 && ` background-color: ${theme.GRAY_600}; `}
    ${p.bp2_bc_gray700 && ` background-color: ${theme.GRAY_700}; `}
    ${p.bp2_bc_gray800 && ` background-color: ${theme.GRAY_800}; `}
    ${p.bp2_bc_gray900 && ` background-color: ${theme.GRAY_900}; `}

    ${p.bp2_bc_blue100 && ` background-color: ${theme.BLUE_100}; `}
    ${p.bp2_bc_blue200 && ` background-color: ${theme.BLUE_200}; `}
    ${p.bp2_bc_blue300 && ` background-color: ${theme.BLUE_300}; `}
    ${p.bp2_bc_blue400 && ` background-color: ${theme.BLUE_400}; `}
    ${p.bp2_bc_blue500 && ` background-color: ${theme.BLUE_500}; `}
    ${p.bp2_bc_blue600 && ` background-color: ${theme.BLUE_600}; `}
    ${p.bp2_bc_blue700 && ` background-color: ${theme.BLUE_700}; `}
    ${p.bp2_bc_blue800 && ` background-color: ${theme.BLUE_800}; `}
    ${p.bp2_bc_blue900 && ` background-color: ${theme.BLUE_900}; `}
  }
  `}

  ${BackgroundColorPropKeys.some(prop => p[`bp3_${prop}`]) && css`
  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p.bp3_bc_white && ` background-color: white; `}
    ${p.bp3_bc_black && ` background-color: black; `}

    ${p.bp3_bc_gray100 && ` background-color: ${theme.GRAY_100}; `}
    ${p.bp3_bc_gray200 && ` background-color: ${theme.GRAY_200}; `}
    ${p.bp3_bc_gray300 && ` background-color: ${theme.GRAY_300}; `}
    ${p.bp3_bc_gray400 && ` background-color: ${theme.GRAY_400}; `}
    ${p.bp3_bc_gray500 && ` background-color: ${theme.GRAY_500}; `}
    ${p.bp3_bc_gray600 && ` background-color: ${theme.GRAY_600}; `}
    ${p.bp3_bc_gray700 && ` background-color: ${theme.GRAY_700}; `}
    ${p.bp3_bc_gray800 && ` background-color: ${theme.GRAY_800}; `}
    ${p.bp3_bc_gray900 && ` background-color: ${theme.GRAY_900}; `}

    ${p.bp3_bc_blue100 && ` background-color: ${theme.BLUE_100}; `}
    ${p.bp3_bc_blue200 && ` background-color: ${theme.BLUE_200}; `}
    ${p.bp3_bc_blue300 && ` background-color: ${theme.BLUE_300}; `}
    ${p.bp3_bc_blue400 && ` background-color: ${theme.BLUE_400}; `}
    ${p.bp3_bc_blue500 && ` background-color: ${theme.BLUE_500}; `}
    ${p.bp3_bc_blue600 && ` background-color: ${theme.BLUE_600}; `}
    ${p.bp3_bc_blue700 && ` background-color: ${theme.BLUE_700}; `}
    ${p.bp3_bc_blue800 && ` background-color: ${theme.BLUE_800}; `}
    ${p.bp3_bc_blue900 && ` background-color: ${theme.BLUE_900}; `}
  }

  `}
  ${BackgroundColorPropKeys.some(prop => p[`bp4_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p.bp4_bc_white && ` background-color: white; `}
    ${p.bp4_bc_black && ` background-color: black; `}

    ${p.bp4_bc_gray100 && ` background-color: ${theme.GRAY_100}; `}
    ${p.bp4_bc_gray200 && ` background-color: ${theme.GRAY_200}; `}
    ${p.bp4_bc_gray300 && ` background-color: ${theme.GRAY_300}; `}
    ${p.bp4_bc_gray400 && ` background-color: ${theme.GRAY_400}; `}
    ${p.bp4_bc_gray500 && ` background-color: ${theme.GRAY_500}; `}
    ${p.bp4_bc_gray600 && ` background-color: ${theme.GRAY_600}; `}
    ${p.bp4_bc_gray700 && ` background-color: ${theme.GRAY_700}; `}
    ${p.bp4_bc_gray800 && ` background-color: ${theme.GRAY_800}; `}
    ${p.bp4_bc_gray900 && ` background-color: ${theme.GRAY_900}; `}

    ${p.bp4_bc_blue100 && ` background-color: ${theme.BLUE_100}; `}
    ${p.bp4_bc_blue200 && ` background-color: ${theme.BLUE_200}; `}
    ${p.bp4_bc_blue300 && ` background-color: ${theme.BLUE_300}; `}
    ${p.bp4_bc_blue400 && ` background-color: ${theme.BLUE_400}; `}
    ${p.bp4_bc_blue500 && ` background-color: ${theme.BLUE_500}; `}
    ${p.bp4_bc_blue600 && ` background-color: ${theme.BLUE_600}; `}
    ${p.bp4_bc_blue700 && ` background-color: ${theme.BLUE_700}; `}
    ${p.bp4_bc_blue800 && ` background-color: ${theme.BLUE_800}; `}
    ${p.bp4_bc_blue900 && ` background-color: ${theme.BLUE_900}; `}
    }
  `}
`

export default BackgroundColor;

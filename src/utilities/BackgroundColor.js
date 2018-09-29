import { css } from 'styled-components';
import * as theme from './../theme/';

const BackgroundColor = css`
  ${p => p.bc_white && css` background-color: white; `}
  ${p => p.bc_black && css` background-color: black; `}

  ${p => p.bc_gray100 && css` background-color: ${theme.GRAY_100}; `}
  ${p => p.bc_gray200 && css` background-color: ${theme.GRAY_200}; `}
  ${p => p.bc_gray300 && css` background-color: ${theme.GRAY_300}; `}
  ${p => p.bc_gray400 && css` background-color: ${theme.GRAY_400}; `}
  ${p => p.bc_gray500 && css` background-color: ${theme.GRAY_500}; `}
  ${p => p.bc_gray600 && css` background-color: ${theme.GRAY_600}; `}
  ${p => p.bc_gray700 && css` background-color: ${theme.GRAY_700}; `}
  ${p => p.bc_gray800 && css` background-color: ${theme.GRAY_800}; `}
  ${p => p.bc_gray900 && css` background-color: ${theme.GRAY_900}; `}

  ${p => p.bc_blue100 && css` background-color: ${theme.BLUE_100}; `}
  ${p => p.bc_blue200 && css` background-color: ${theme.BLUE_200}; `}
  ${p => p.bc_blue300 && css` background-color: ${theme.BLUE_300}; `}
  ${p => p.bc_blue400 && css` background-color: ${theme.BLUE_400}; `}
  ${p => p.bc_blue500 && css` background-color: ${theme.BLUE_500}; `}
  ${p => p.bc_blue600 && css` background-color: ${theme.BLUE_600}; `}
  ${p => p.bc_blue700 && css` background-color: ${theme.BLUE_700}; `}
  ${p => p.bc_blue800 && css` background-color: ${theme.BLUE_800}; `}
  ${p => p.bc_blue900 && css` background-color: ${theme.BLUE_900}; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_bc_white && css` background-color: white; `}
    ${p => p.bp1_bc_black && css` background-color: black; `}

    ${p => p.bp1_bc_gray100 && css` background-color: ${theme.GRAY_100}; `}
    ${p => p.bp1_bc_gray200 && css` background-color: ${theme.GRAY_200}; `}
    ${p => p.bp1_bc_gray300 && css` background-color: ${theme.GRAY_300}; `}
    ${p => p.bp1_bc_gray400 && css` background-color: ${theme.GRAY_400}; `}
    ${p => p.bp1_bc_gray500 && css` background-color: ${theme.GRAY_500}; `}
    ${p => p.bp1_bc_gray600 && css` background-color: ${theme.GRAY_600}; `}
    ${p => p.bp1_bc_gray700 && css` background-color: ${theme.GRAY_700}; `}
    ${p => p.bp1_bc_gray800 && css` background-color: ${theme.GRAY_800}; `}
    ${p => p.bp1_bc_gray900 && css` background-color: ${theme.GRAY_900}; `}

    ${p => p.bp1_bc_blue100 && css` background-color: ${theme.BLUE_100}; `}
    ${p => p.bp1_bc_blue200 && css` background-color: ${theme.BLUE_200}; `}
    ${p => p.bp1_bc_blue300 && css` background-color: ${theme.BLUE_300}; `}
    ${p => p.bp1_bc_blue400 && css` background-color: ${theme.BLUE_400}; `}
    ${p => p.bp1_bc_blue500 && css` background-color: ${theme.BLUE_500}; `}
    ${p => p.bp1_bc_blue600 && css` background-color: ${theme.BLUE_600}; `}
    ${p => p.bp1_bc_blue700 && css` background-color: ${theme.BLUE_700}; `}
    ${p => p.bp1_bc_blue800 && css` background-color: ${theme.BLUE_800}; `}
    ${p => p.bp1_bc_blue900 && css` background-color: ${theme.BLUE_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_bc_white && css` background-color: white; `}
    ${p => p.bp2_bc_black && css` background-color: black; `}

    ${p => p.bp2_bc_gray100 && css` background-color: ${theme.GRAY_100}; `}
    ${p => p.bp2_bc_gray200 && css` background-color: ${theme.GRAY_200}; `}
    ${p => p.bp2_bc_gray300 && css` background-color: ${theme.GRAY_300}; `}
    ${p => p.bp2_bc_gray400 && css` background-color: ${theme.GRAY_400}; `}
    ${p => p.bp2_bc_gray500 && css` background-color: ${theme.GRAY_500}; `}
    ${p => p.bp2_bc_gray600 && css` background-color: ${theme.GRAY_600}; `}
    ${p => p.bp2_bc_gray700 && css` background-color: ${theme.GRAY_700}; `}
    ${p => p.bp2_bc_gray800 && css` background-color: ${theme.GRAY_800}; `}
    ${p => p.bp2_bc_gray900 && css` background-color: ${theme.GRAY_900}; `}

    ${p => p.bp2_bc_blue100 && css` background-color: ${theme.BLUE_100}; `}
    ${p => p.bp2_bc_blue200 && css` background-color: ${theme.BLUE_200}; `}
    ${p => p.bp2_bc_blue300 && css` background-color: ${theme.BLUE_300}; `}
    ${p => p.bp2_bc_blue400 && css` background-color: ${theme.BLUE_400}; `}
    ${p => p.bp2_bc_blue500 && css` background-color: ${theme.BLUE_500}; `}
    ${p => p.bp2_bc_blue600 && css` background-color: ${theme.BLUE_600}; `}
    ${p => p.bp2_bc_blue700 && css` background-color: ${theme.BLUE_700}; `}
    ${p => p.bp2_bc_blue800 && css` background-color: ${theme.BLUE_800}; `}
    ${p => p.bp2_bc_blue900 && css` background-color: ${theme.BLUE_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_bc_white && css` background-color: white; `}
    ${p => p.bp3_bc_black && css` background-color: black; `}

    ${p => p.bp3_bc_gray100 && css` background-color: ${theme.GRAY_100}; `}
    ${p => p.bp3_bc_gray200 && css` background-color: ${theme.GRAY_200}; `}
    ${p => p.bp3_bc_gray300 && css` background-color: ${theme.GRAY_300}; `}
    ${p => p.bp3_bc_gray400 && css` background-color: ${theme.GRAY_400}; `}
    ${p => p.bp3_bc_gray500 && css` background-color: ${theme.GRAY_500}; `}
    ${p => p.bp3_bc_gray600 && css` background-color: ${theme.GRAY_600}; `}
    ${p => p.bp3_bc_gray700 && css` background-color: ${theme.GRAY_700}; `}
    ${p => p.bp3_bc_gray800 && css` background-color: ${theme.GRAY_800}; `}
    ${p => p.bp3_bc_gray900 && css` background-color: ${theme.GRAY_900}; `}

    ${p => p.bp3_bc_blue100 && css` background-color: ${theme.BLUE_100}; `}
    ${p => p.bp3_bc_blue200 && css` background-color: ${theme.BLUE_200}; `}
    ${p => p.bp3_bc_blue300 && css` background-color: ${theme.BLUE_300}; `}
    ${p => p.bp3_bc_blue400 && css` background-color: ${theme.BLUE_400}; `}
    ${p => p.bp3_bc_blue500 && css` background-color: ${theme.BLUE_500}; `}
    ${p => p.bp3_bc_blue600 && css` background-color: ${theme.BLUE_600}; `}
    ${p => p.bp3_bc_blue700 && css` background-color: ${theme.BLUE_700}; `}
    ${p => p.bp3_bc_blue800 && css` background-color: ${theme.BLUE_800}; `}
    ${p => p.bp3_bc_blue900 && css` background-color: ${theme.BLUE_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_bc_white && css` background-color: white; `}
    ${p => p.bp4_bc_black && css` background-color: black; `}

    ${p => p.bp4_bc_gray100 && css` background-color: ${theme.GRAY_100}; `}
    ${p => p.bp4_bc_gray200 && css` background-color: ${theme.GRAY_200}; `}
    ${p => p.bp4_bc_gray300 && css` background-color: ${theme.GRAY_300}; `}
    ${p => p.bp4_bc_gray400 && css` background-color: ${theme.GRAY_400}; `}
    ${p => p.bp4_bc_gray500 && css` background-color: ${theme.GRAY_500}; `}
    ${p => p.bp4_bc_gray600 && css` background-color: ${theme.GRAY_600}; `}
    ${p => p.bp4_bc_gray700 && css` background-color: ${theme.GRAY_700}; `}
    ${p => p.bp4_bc_gray800 && css` background-color: ${theme.GRAY_800}; `}
    ${p => p.bp4_bc_gray900 && css` background-color: ${theme.GRAY_900}; `}

    ${p => p.bp4_bc_blue100 && css` background-color: ${theme.BLUE_100}; `}
    ${p => p.bp4_bc_blue200 && css` background-color: ${theme.BLUE_200}; `}
    ${p => p.bp4_bc_blue300 && css` background-color: ${theme.BLUE_300}; `}
    ${p => p.bp4_bc_blue400 && css` background-color: ${theme.BLUE_400}; `}
    ${p => p.bp4_bc_blue500 && css` background-color: ${theme.BLUE_500}; `}
    ${p => p.bp4_bc_blue600 && css` background-color: ${theme.BLUE_600}; `}
    ${p => p.bp4_bc_blue700 && css` background-color: ${theme.BLUE_700}; `}
    ${p => p.bp4_bc_blue800 && css` background-color: ${theme.BLUE_800}; `}
    ${p => p.bp4_bc_blue900 && css` background-color: ${theme.BLUE_900}; `}
  }
`;

export default BackgroundColor;

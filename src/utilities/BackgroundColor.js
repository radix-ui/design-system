import { css } from 'styled-components';
import * as theme from './../theme/';

const BackgroundColor = p => css`
  background-color: ${
    p.bc_white ? 'white' :
    p.bc_black ? 'black' :

    p.bc_gray100 ? theme.GRAY_100 :
    p.bc_gray200 ? theme.GRAY_200 :
    p.bc_gray300 ? theme.GRAY_300 :
    p.bc_gray400 ? theme.GRAY_400 :
    p.bc_gray500 ? theme.GRAY_500 :
    p.bc_gray600 ? theme.GRAY_600 :
    p.bc_gray700 ? theme.GRAY_700 :
    p.bc_gray800 ? theme.GRAY_800 :
    p.bc_gray900 ? theme.GRAY_900 :

    p.bc_blue100 ? theme.BLUE_100 :
    p.bc_blue200 ? theme.BLUE_200 :
    p.bc_blue300 ? theme.BLUE_300 :
    p.bc_blue400 ? theme.BLUE_400 :
    p.bc_blue500 ? theme.BLUE_500 :
    p.bc_blue600 ? theme.BLUE_600 :
    p.bc_blue700 ? theme.BLUE_700 :
    p.bc_blue800 ? theme.BLUE_800 :
    p.bc_blue900 ? theme.BLUE_900 : 'auto'
  };

  @media (min-width: ${theme.BREAKPOINT_100}) {
    background-color: ${
      p.bp1_bc_white ? 'white' :
      p.bp1_bc_black ? 'black' :

      p.bp1_bc_gray100 ? theme.GRAY_100 :
      p.bp1_bc_gray200 ? theme.GRAY_200 :
      p.bp1_bc_gray300 ? theme.GRAY_300 :
      p.bp1_bc_gray400 ? theme.GRAY_400 :
      p.bp1_bc_gray500 ? theme.GRAY_500 :
      p.bp1_bc_gray600 ? theme.GRAY_600 :
      p.bp1_bc_gray700 ? theme.GRAY_700 :
      p.bp1_bc_gray800 ? theme.GRAY_800 :
      p.bp1_bc_gray900 ? theme.GRAY_900 :

      p.bp1_bc_blue100 ? theme.BLUE_100 :
      p.bp1_bc_blue200 ? theme.BLUE_200 :
      p.bp1_bc_blue300 ? theme.BLUE_300 :
      p.bp1_bc_blue400 ? theme.BLUE_400 :
      p.bp1_bc_blue500 ? theme.BLUE_500 :
      p.bp1_bc_blue600 ? theme.BLUE_600 :
      p.bp1_bc_blue700 ? theme.BLUE_700 :
      p.bp1_bc_blue800 ? theme.BLUE_800 :
      p.bp1_bc_blue900 ? theme.BLUE_900 : 'auto'
    };
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    background-color: ${
      p.bp2_bc_white ? 'white' :
      p.bp2_bc_black ? 'black' :

      p.bp2_bc_gray100 ? theme.GRAY_100 :
      p.bp2_bc_gray200 ? theme.GRAY_200 :
      p.bp2_bc_gray300 ? theme.GRAY_300 :
      p.bp2_bc_gray400 ? theme.GRAY_400 :
      p.bp2_bc_gray500 ? theme.GRAY_500 :
      p.bp2_bc_gray600 ? theme.GRAY_600 :
      p.bp2_bc_gray700 ? theme.GRAY_700 :
      p.bp2_bc_gray800 ? theme.GRAY_800 :
      p.bp2_bc_gray900 ? theme.GRAY_900 :

      p.bp2_bc_blue100 ? theme.BLUE_100 :
      p.bp2_bc_blue200 ? theme.BLUE_200 :
      p.bp2_bc_blue300 ? theme.BLUE_300 :
      p.bp2_bc_blue400 ? theme.BLUE_400 :
      p.bp2_bc_blue500 ? theme.BLUE_500 :
      p.bp2_bc_blue600 ? theme.BLUE_600 :
      p.bp2_bc_blue700 ? theme.BLUE_700 :
      p.bp2_bc_blue800 ? theme.BLUE_800 :
      p.bp2_bc_blue900 ? theme.BLUE_900 : 'auto'
    };
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    background-color: ${
      p.bp3_bc_white ? 'white' :
      p.bp3_bc_black ? 'black' :

      p.bp3_bc_gray100 ? theme.GRAY_100 :
      p.bp3_bc_gray200 ? theme.GRAY_200 :
      p.bp3_bc_gray300 ? theme.GRAY_300 :
      p.bp3_bc_gray400 ? theme.GRAY_400 :
      p.bp3_bc_gray500 ? theme.GRAY_500 :
      p.bp3_bc_gray600 ? theme.GRAY_600 :
      p.bp3_bc_gray700 ? theme.GRAY_700 :
      p.bp3_bc_gray800 ? theme.GRAY_800 :
      p.bp3_bc_gray900 ? theme.GRAY_900 :

      p.bp3_bc_blue100 ? theme.BLUE_100 :
      p.bp3_bc_blue200 ? theme.BLUE_200 :
      p.bp3_bc_blue300 ? theme.BLUE_300 :
      p.bp3_bc_blue400 ? theme.BLUE_400 :
      p.bp3_bc_blue500 ? theme.BLUE_500 :
      p.bp3_bc_blue600 ? theme.BLUE_600 :
      p.bp3_bc_blue700 ? theme.BLUE_700 :
      p.bp3_bc_blue800 ? theme.BLUE_800 :
      p.bp3_bc_blue900 ? theme.BLUE_900 : 'auto'
    };
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    background-color: ${

      p.bp4_bc_white ? 'white' :
      p.bp4_bc_black ? 'black' :

      p.bp4_bc_gray100 ? theme.GRAY_100 :
      p.bp4_bc_gray200 ? theme.GRAY_200 :
      p.bp4_bc_gray300 ? theme.GRAY_300 :
      p.bp4_bc_gray400 ? theme.GRAY_400 :
      p.bp4_bc_gray500 ? theme.GRAY_500 :
      p.bp4_bc_gray600 ? theme.GRAY_600 :
      p.bp4_bc_gray700 ? theme.GRAY_700 :
      p.bp4_bc_gray800 ? theme.GRAY_800 :
      p.bp4_bc_gray900 ? theme.GRAY_900 :

      p.bp4_bc_blue100 ? theme.BLUE_100 :
      p.bp4_bc_blue200 ? theme.BLUE_200 :
      p.bp4_bc_blue300 ? theme.BLUE_300 :
      p.bp4_bc_blue400 ? theme.BLUE_400 :
      p.bp4_bc_blue500 ? theme.BLUE_500 :
      p.bp4_bc_blue600 ? theme.BLUE_600 :
      p.bp4_bc_blue700 ? theme.BLUE_700 :
      p.bp4_bc_blue800 ? theme.BLUE_800 :
      p.bp4_bc_blue900 ? theme.BLUE_900 : 'auto'
  };
  }
`

export default BackgroundColor;

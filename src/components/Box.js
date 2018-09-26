import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';

const Box = styled.div`
  ${Margin}

  ${p => p.p0 && css` padding: 0; `}
  ${p => p.pt0 && css` padding-top: 0; `}
  ${p => p.pr0 && css` padding-right: 0; `}
  ${p => p.pb0 && css` padding-bottom: 0; `}
  ${p => p.pl0 && css` padding-left: 0; `}

  ${p => p.p1 && css` padding: ${theme.SPACING_100}; `}
  ${p => p.pt1 && css` padding-top: ${theme.SPACING_100}; `}
  ${p => p.pr1 && css` padding-right: ${theme.SPACING_100}; `}
  ${p => p.pb1 && css` padding-bottom: ${theme.SPACING_100}; `}
  ${p => p.pl1 && css` padding-left: ${theme.SPACING_100}; `}

  ${p => p.p2 && css` padding: ${theme.SPACING_200}; `}
  ${p => p.pt2 && css` padding-top: ${theme.SPACING_200}; `}
  ${p => p.pr2 && css` padding-right: ${theme.SPACING_200}; `}
  ${p => p.pb2 && css` padding-bottom: ${theme.SPACING_200}; `}
  ${p => p.pl2 && css` padding-left: ${theme.SPACING_200}; `}

  ${p => p.p3 && css` padding: ${theme.SPACING_300}; `}
  ${p => p.pt3 && css` padding-top: ${theme.SPACING_300}; `}
  ${p => p.pr3 && css` padding-right: ${theme.SPACING_300}; `}
  ${p => p.pb3 && css` padding-bottom: ${theme.SPACING_300}; `}
  ${p => p.pl3 && css` padding-left: ${theme.SPACING_300}; `}

  ${p => p.p4 && css` padding: ${theme.SPACING_400}; `}
  ${p => p.pt4 && css` padding-top: ${theme.SPACING_400}; `}
  ${p => p.pr4 && css` padding-right: ${theme.SPACING_400}; `}
  ${p => p.pb4 && css` padding-bottom: ${theme.SPACING_400}; `}
  ${p => p.pl4 && css` padding-left: ${theme.SPACING_400}; `}

  ${p => p.p5 && css` padding: ${theme.SPACING_500}; `}
  ${p => p.pt5 && css` padding-top: ${theme.SPACING_500}; `}
  ${p => p.pr5 && css` padding-right: ${theme.SPACING_500}; `}
  ${p => p.pb5 && css` padding-bottom: ${theme.SPACING_500}; `}
  ${p => p.pl5 && css` padding-left: ${theme.SPACING_500}; `}

  ${p => p.p6 && css` padding: ${theme.SPACING_600}; `}
  ${p => p.pt6 && css` padding-top: ${theme.SPACING_600}; `}
  ${p => p.pr6 && css` padding-right: ${theme.SPACING_600}; `}
  ${p => p.pb6 && css` padding-bottom: ${theme.SPACING_600}; `}
  ${p => p.pl6 && css` padding-left: ${theme.SPACING_600}; `}

  ${p => p.p7 && css` padding: ${theme.SPACING_700}; `}
  ${p => p.pt7 && css` padding-top: ${theme.SPACING_700}; `}
  ${p => p.pr7 && css` padding-right: ${theme.SPACING_700}; `}
  ${p => p.pb7 && css` padding-bottom: ${theme.SPACING_700}; `}
  ${p => p.pl7 && css` padding-left: ${theme.SPACING_700}; `}

  ${p => p.p8 && css` padding: ${theme.SPACING_800}; `}
  ${p => p.pt8 && css` padding-top: ${theme.SPACING_800}; `}
  ${p => p.pr8 && css` padding-right: ${theme.SPACING_800}; `}
  ${p => p.pb8 && css` padding-bottom: ${theme.SPACING_800}; `}
  ${p => p.pl8 && css` padding-left: ${theme.SPACING_800}; `}

  ${p => p.p9 && css` padding: ${theme.SPACING_900}; `}
  ${p => p.pt9 && css` padding-top: ${theme.SPACING_900}; `}
  ${p => p.pr9 && css` padding-right: ${theme.SPACING_900}; `}
  ${p => p.pb9 && css` padding-bottom: ${theme.SPACING_900}; `}
  ${p => p.pl9 && css` padding-left: ${theme.SPACING_900}; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_p0 && css` padding: 0; `}
    ${p => p.bp1_pt0 && css` padding-top: 0; `}
    ${p => p.bp1_pr0 && css` padding-right: 0; `}
    ${p => p.bp1_pb0 && css` padding-bottom: 0; `}
    ${p => p.bp1_pl0 && css` padding-left: 0; `}

    ${p => p.bp1_p1 && css` padding: ${theme.SPACING_100}; `}
    ${p => p.bp1_pt1 && css` padding-top: ${theme.SPACING_100}; `}
    ${p => p.bp1_pr1 && css` padding-right: ${theme.SPACING_100}; `}
    ${p => p.bp1_pb1 && css` padding-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp1_pl1 && css` padding-left: ${theme.SPACING_100}; `}

    ${p => p.bp1_p2 && css` padding: ${theme.SPACING_200}; `}
    ${p => p.bp1_pt2 && css` padding-top: ${theme.SPACING_200}; `}
    ${p => p.bp1_pr2 && css` padding-right: ${theme.SPACING_200}; `}
    ${p => p.bp1_pb2 && css` padding-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp1_pl2 && css` padding-left: ${theme.SPACING_200}; `}

    ${p => p.bp1_p3 && css` padding: ${theme.SPACING_300}; `}
    ${p => p.bp1_pt3 && css` padding-top: ${theme.SPACING_300}; `}
    ${p => p.bp1_pr3 && css` padding-right: ${theme.SPACING_300}; `}
    ${p => p.bp1_pb3 && css` padding-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp1_pl3 && css` padding-left: ${theme.SPACING_300}; `}

    ${p => p.bp1_p4 && css` padding: ${theme.SPACING_400}; `}
    ${p => p.bp1_pt4 && css` padding-top: ${theme.SPACING_400}; `}
    ${p => p.bp1_pr4 && css` padding-right: ${theme.SPACING_400}; `}
    ${p => p.bp1_pb4 && css` padding-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp1_pl4 && css` padding-left: ${theme.SPACING_400}; `}

    ${p => p.bp1_p5 && css` padding: ${theme.SPACING_500}; `}
    ${p => p.bp1_pt5 && css` padding-top: ${theme.SPACING_500}; `}
    ${p => p.bp1_pr5 && css` padding-right: ${theme.SPACING_500}; `}
    ${p => p.bp1_pb5 && css` padding-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp1_pl5 && css` padding-left: ${theme.SPACING_500}; `}

    ${p => p.bp1_p6 && css` padding: ${theme.SPACING_600}; `}
    ${p => p.bp1_pt6 && css` padding-top: ${theme.SPACING_600}; `}
    ${p => p.bp1_pr6 && css` padding-right: ${theme.SPACING_600}; `}
    ${p => p.bp1_pb6 && css` padding-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp1_pl6 && css` padding-left: ${theme.SPACING_600}; `}

    ${p => p.bp1_p7 && css` padding: ${theme.SPACING_700}; `}
    ${p => p.bp1_pt7 && css` padding-top: ${theme.SPACING_700}; `}
    ${p => p.bp1_pr7 && css` padding-right: ${theme.SPACING_700}; `}
    ${p => p.bp1_pb7 && css` padding-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp1_pl7 && css` padding-left: ${theme.SPACING_700}; `}

    ${p => p.bp1_p8 && css` padding: ${theme.SPACING_800}; `}
    ${p => p.bp1_pt8 && css` padding-top: ${theme.SPACING_800}; `}
    ${p => p.bp1_pr8 && css` padding-right: ${theme.SPACING_800}; `}
    ${p => p.bp1_pb8 && css` padding-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp1_pl8 && css` padding-left: ${theme.SPACING_800}; `}

    ${p => p.bp1_p9 && css` padding: ${theme.SPACING_900}; `}
    ${p => p.bp1_pt9 && css` padding-top: ${theme.SPACING_900}; `}
    ${p => p.bp1_pr9 && css` padding-right: ${theme.SPACING_900}; `}
    ${p => p.bp1_pb9 && css` padding-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp1_pl9 && css` padding-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_p0 && css` padding: 0; `}
    ${p => p.bp2_pt0 && css` padding-top: 0; `}
    ${p => p.bp2_pr0 && css` padding-right: 0; `}
    ${p => p.bp2_pb0 && css` padding-bottom: 0; `}
    ${p => p.bp2_pl0 && css` padding-left: 0; `}

    ${p => p.bp2_p1 && css` padding: ${theme.SPACING_100}; `}
    ${p => p.bp2_pt1 && css` padding-top: ${theme.SPACING_100}; `}
    ${p => p.bp2_pr1 && css` padding-right: ${theme.SPACING_100}; `}
    ${p => p.bp2_pb1 && css` padding-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp2_pl1 && css` padding-left: ${theme.SPACING_100}; `}

    ${p => p.bp2_p2 && css` padding: ${theme.SPACING_200}; `}
    ${p => p.bp2_pt2 && css` padding-top: ${theme.SPACING_200}; `}
    ${p => p.bp2_pr2 && css` padding-right: ${theme.SPACING_200}; `}
    ${p => p.bp2_pb2 && css` padding-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp2_pl2 && css` padding-left: ${theme.SPACING_200}; `}

    ${p => p.bp2_p3 && css` padding: ${theme.SPACING_300}; `}
    ${p => p.bp2_pt3 && css` padding-top: ${theme.SPACING_300}; `}
    ${p => p.bp2_pr3 && css` padding-right: ${theme.SPACING_300}; `}
    ${p => p.bp2_pb3 && css` padding-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp2_pl3 && css` padding-left: ${theme.SPACING_300}; `}

    ${p => p.bp2_p4 && css` padding: ${theme.SPACING_400}; `}
    ${p => p.bp2_pt4 && css` padding-top: ${theme.SPACING_400}; `}
    ${p => p.bp2_pr4 && css` padding-right: ${theme.SPACING_400}; `}
    ${p => p.bp2_pb4 && css` padding-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp2_pl4 && css` padding-left: ${theme.SPACING_400}; `}

    ${p => p.bp2_p5 && css` padding: ${theme.SPACING_500}; `}
    ${p => p.bp2_pt5 && css` padding-top: ${theme.SPACING_500}; `}
    ${p => p.bp2_pr5 && css` padding-right: ${theme.SPACING_500}; `}
    ${p => p.bp2_pb5 && css` padding-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp2_pl5 && css` padding-left: ${theme.SPACING_500}; `}

    ${p => p.bp2_p6 && css` padding: ${theme.SPACING_600}; `}
    ${p => p.bp2_pt6 && css` padding-top: ${theme.SPACING_600}; `}
    ${p => p.bp2_pr6 && css` padding-right: ${theme.SPACING_600}; `}
    ${p => p.bp2_pb6 && css` padding-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp2_pl6 && css` padding-left: ${theme.SPACING_600}; `}

    ${p => p.bp2_p7 && css` padding: ${theme.SPACING_700}; `}
    ${p => p.bp2_pt7 && css` padding-top: ${theme.SPACING_700}; `}
    ${p => p.bp2_pr7 && css` padding-right: ${theme.SPACING_700}; `}
    ${p => p.bp2_pb7 && css` padding-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp2_pl7 && css` padding-left: ${theme.SPACING_700}; `}

    ${p => p.bp2_p8 && css` padding: ${theme.SPACING_800}; `}
    ${p => p.bp2_pt8 && css` padding-top: ${theme.SPACING_800}; `}
    ${p => p.bp2_pr8 && css` padding-right: ${theme.SPACING_800}; `}
    ${p => p.bp2_pb8 && css` padding-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp2_pl8 && css` padding-left: ${theme.SPACING_800}; `}

    ${p => p.bp2_p9 && css` padding: ${theme.SPACING_900}; `}
    ${p => p.bp2_pt9 && css` padding-top: ${theme.SPACING_900}; `}
    ${p => p.bp2_pr9 && css` padding-right: ${theme.SPACING_900}; `}
    ${p => p.bp2_pb9 && css` padding-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp2_pl9 && css` padding-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_p0 && css` padding: 0; `}
    ${p => p.bp3_pt0 && css` padding-top: 0; `}
    ${p => p.bp3_pr0 && css` padding-right: 0; `}
    ${p => p.bp3_pb0 && css` padding-bottom: 0; `}
    ${p => p.bp3_pl0 && css` padding-left: 0; `}

    ${p => p.bp3_p1 && css` padding: ${theme.SPACING_100}; `}
    ${p => p.bp3_pt1 && css` padding-top: ${theme.SPACING_100}; `}
    ${p => p.bp3_pr1 && css` padding-right: ${theme.SPACING_100}; `}
    ${p => p.bp3_pb1 && css` padding-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp3_pl1 && css` padding-left: ${theme.SPACING_100}; `}

    ${p => p.bp3_p2 && css` padding: ${theme.SPACING_200}; `}
    ${p => p.bp3_pt2 && css` padding-top: ${theme.SPACING_200}; `}
    ${p => p.bp3_pr2 && css` padding-right: ${theme.SPACING_200}; `}
    ${p => p.bp3_pb2 && css` padding-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp3_pl2 && css` padding-left: ${theme.SPACING_200}; `}

    ${p => p.bp3_p3 && css` padding: ${theme.SPACING_300}; `}
    ${p => p.bp3_pt3 && css` padding-top: ${theme.SPACING_300}; `}
    ${p => p.bp3_pr3 && css` padding-right: ${theme.SPACING_300}; `}
    ${p => p.bp3_pb3 && css` padding-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp3_pl3 && css` padding-left: ${theme.SPACING_300}; `}

    ${p => p.bp3_p4 && css` padding: ${theme.SPACING_400}; `}
    ${p => p.bp3_pt4 && css` padding-top: ${theme.SPACING_400}; `}
    ${p => p.bp3_pr4 && css` padding-right: ${theme.SPACING_400}; `}
    ${p => p.bp3_pb4 && css` padding-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp3_pl4 && css` padding-left: ${theme.SPACING_400}; `}

    ${p => p.bp3_p5 && css` padding: ${theme.SPACING_500}; `}
    ${p => p.bp3_pt5 && css` padding-top: ${theme.SPACING_500}; `}
    ${p => p.bp3_pr5 && css` padding-right: ${theme.SPACING_500}; `}
    ${p => p.bp3_pb5 && css` padding-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp3_pl5 && css` padding-left: ${theme.SPACING_500}; `}

    ${p => p.bp3_p6 && css` padding: ${theme.SPACING_600}; `}
    ${p => p.bp3_pt6 && css` padding-top: ${theme.SPACING_600}; `}
    ${p => p.bp3_pr6 && css` padding-right: ${theme.SPACING_600}; `}
    ${p => p.bp3_pb6 && css` padding-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp3_pl6 && css` padding-left: ${theme.SPACING_600}; `}

    ${p => p.bp3_p7 && css` padding: ${theme.SPACING_700}; `}
    ${p => p.bp3_pt7 && css` padding-top: ${theme.SPACING_700}; `}
    ${p => p.bp3_pr7 && css` padding-right: ${theme.SPACING_700}; `}
    ${p => p.bp3_pb7 && css` padding-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp3_pl7 && css` padding-left: ${theme.SPACING_700}; `}

    ${p => p.bp3_p8 && css` padding: ${theme.SPACING_800}; `}
    ${p => p.bp3_pt8 && css` padding-top: ${theme.SPACING_800}; `}
    ${p => p.bp3_pr8 && css` padding-right: ${theme.SPACING_800}; `}
    ${p => p.bp3_pb8 && css` padding-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp3_pl8 && css` padding-left: ${theme.SPACING_800}; `}

    ${p => p.bp3_p9 && css` padding: ${theme.SPACING_900}; `}
    ${p => p.bp3_pt9 && css` padding-top: ${theme.SPACING_900}; `}
    ${p => p.bp3_pr9 && css` padding-right: ${theme.SPACING_900}; `}
    ${p => p.bp3_pb9 && css` padding-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp3_pl9 && css` padding-left: ${theme.SPACING_900}; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_p0 && css` padding: 0; `}
    ${p => p.bp4_pt0 && css` padding-top: 0; `}
    ${p => p.bp4_pr0 && css` padding-right: 0; `}
    ${p => p.bp4_pb0 && css` padding-bottom: 0; `}
    ${p => p.bp4_pl0 && css` padding-left: 0; `}

    ${p => p.bp4_p1 && css` padding: ${theme.SPACING_100}; `}
    ${p => p.bp4_pt1 && css` padding-top: ${theme.SPACING_100}; `}
    ${p => p.bp4_pr1 && css` padding-right: ${theme.SPACING_100}; `}
    ${p => p.bp4_pb1 && css` padding-bottom: ${theme.SPACING_100}; `}
    ${p => p.bp4_pl1 && css` padding-left: ${theme.SPACING_100}; `}

    ${p => p.bp4_p2 && css` padding: ${theme.SPACING_200}; `}
    ${p => p.bp4_pt2 && css` padding-top: ${theme.SPACING_200}; `}
    ${p => p.bp4_pr2 && css` padding-right: ${theme.SPACING_200}; `}
    ${p => p.bp4_pb2 && css` padding-bottom: ${theme.SPACING_200}; `}
    ${p => p.bp4_pl2 && css` padding-left: ${theme.SPACING_200}; `}

    ${p => p.bp4_p3 && css` padding: ${theme.SPACING_300}; `}
    ${p => p.bp4_pt3 && css` padding-top: ${theme.SPACING_300}; `}
    ${p => p.bp4_pr3 && css` padding-right: ${theme.SPACING_300}; `}
    ${p => p.bp4_pb3 && css` padding-bottom: ${theme.SPACING_300}; `}
    ${p => p.bp4_pl3 && css` padding-left: ${theme.SPACING_300}; `}

    ${p => p.bp4_p4 && css` padding: ${theme.SPACING_400}; `}
    ${p => p.bp4_pt4 && css` padding-top: ${theme.SPACING_400}; `}
    ${p => p.bp4_pr4 && css` padding-right: ${theme.SPACING_400}; `}
    ${p => p.bp4_pb4 && css` padding-bottom: ${theme.SPACING_400}; `}
    ${p => p.bp4_pl4 && css` padding-left: ${theme.SPACING_400}; `}

    ${p => p.bp4_p5 && css` padding: ${theme.SPACING_500}; `}
    ${p => p.bp4_pt5 && css` padding-top: ${theme.SPACING_500}; `}
    ${p => p.bp4_pr5 && css` padding-right: ${theme.SPACING_500}; `}
    ${p => p.bp4_pb5 && css` padding-bottom: ${theme.SPACING_500}; `}
    ${p => p.bp4_pl5 && css` padding-left: ${theme.SPACING_500}; `}

    ${p => p.bp4_p6 && css` padding: ${theme.SPACING_600}; `}
    ${p => p.bp4_pt6 && css` padding-top: ${theme.SPACING_600}; `}
    ${p => p.bp4_pr6 && css` padding-right: ${theme.SPACING_600}; `}
    ${p => p.bp4_pb6 && css` padding-bottom: ${theme.SPACING_600}; `}
    ${p => p.bp4_pl6 && css` padding-left: ${theme.SPACING_600}; `}

    ${p => p.bp4_p7 && css` padding: ${theme.SPACING_700}; `}
    ${p => p.bp4_pt7 && css` padding-top: ${theme.SPACING_700}; `}
    ${p => p.bp4_pr7 && css` padding-right: ${theme.SPACING_700}; `}
    ${p => p.bp4_pb7 && css` padding-bottom: ${theme.SPACING_700}; `}
    ${p => p.bp4_pl7 && css` padding-left: ${theme.SPACING_700}; `}

    ${p => p.bp4_p8 && css` padding: ${theme.SPACING_800}; `}
    ${p => p.bp4_pt8 && css` padding-top: ${theme.SPACING_800}; `}
    ${p => p.bp4_pr8 && css` padding-right: ${theme.SPACING_800}; `}
    ${p => p.bp4_pb8 && css` padding-bottom: ${theme.SPACING_800}; `}
    ${p => p.bp4_pl8 && css` padding-left: ${theme.SPACING_800}; `}

    ${p => p.bp4_p9 && css` padding: ${theme.SPACING_900}; `}
    ${p => p.bp4_pt9 && css` padding-top: ${theme.SPACING_900}; `}
    ${p => p.bp4_pr9 && css` padding-right: ${theme.SPACING_900}; `}
    ${p => p.bp4_pb9 && css` padding-bottom: ${theme.SPACING_900}; `}
    ${p => p.bp4_pl9 && css` padding-left: ${theme.SPACING_900}; `}
  }

  ${p => p.left && css` text-align: left; `}
  ${p => p.center && css` text-align: center; `}
  ${p => p.right && css` text-align: right; `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_left && css` text-align: left; `}
    ${p => p.bp1_center && css` text-align: center; `}
    ${p => p.bp1_right && css` text-align: right; `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_left && css` text-align: left; `}
    ${p => p.bp2_center && css` text-align: center; `}
    ${p => p.bp2_right && css` text-align: right; `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_left && css` text-align: left; `}
    ${p => p.bp3_center && css` text-align: center; `}
    ${p => p.bp3_right && css` text-align: right; `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_left && css` text-align: left; `}
    ${p => p.bp4_center && css` text-align: center; `}
    ${p => p.bp4_right && css` text-align: right; `}
  }

  ${p => p.white && css` background-color: white; `}
  ${p => p.black && css` background-color: black; `}

  ${p => p.gray100 && css` background-color: ${theme.GRAY_100}; `}
  ${p => p.gray200 && css` background-color: ${theme.GRAY_200}; `}
  ${p => p.gray300 && css` background-color: ${theme.GRAY_300}; `}
  ${p => p.gray400 && css` background-color: ${theme.GRAY_400}; `}
  ${p => p.gray500 && css` background-color: ${theme.GRAY_500}; `}
  ${p => p.gray600 && css` background-color: ${theme.GRAY_600}; `}
  ${p => p.gray700 && css` background-color: ${theme.GRAY_700}; `}
  ${p => p.gray800 && css` background-color: ${theme.GRAY_800}; `}
  ${p => p.gray900 && css` background-color: ${theme.GRAY_900}; `}

  ${p => p.blue100 && css` background-color: ${theme.BLUE_100}; `}
  ${p => p.blue200 && css` background-color: ${theme.BLUE_200}; `}
  ${p => p.blue300 && css` background-color: ${theme.BLUE_300}; `}
  ${p => p.blue400 && css` background-color: ${theme.BLUE_400}; `}
  ${p => p.blue500 && css` background-color: ${theme.BLUE_500}; `}
  ${p => p.blue600 && css` background-color: ${theme.BLUE_600}; `}
  ${p => p.blue700 && css` background-color: ${theme.BLUE_700}; `}
  ${p => p.blue800 && css` background-color: ${theme.BLUE_800}; `}
  ${p => p.blue900 && css` background-color: ${theme.BLUE_900}; `}

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

  ${p => p.w50 && css` width: 50%; `}
  ${p => p.w100 && css` width: 100%; `}

  ${p => p.border && css` border: 1px solid; `}
  ${p => p.bt && css` border-top: 1px solid; `}
  ${p => p.br && css` border-right: 1px solid; `}
  ${p => p.bb && css` border-bottom: 1px solid; `}
  ${p => p.bl && css` border-left: 1px solid; `}

  ${p => p.bcgray300 && css` border-color: ${theme.GRAY_300}; `}
  ${p => p.bcgray400 && css` border-color: ${theme.GRAY_400}; `}

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

  ${p => p.table && css` display: table; `}
  ${p => p.tablerow && css` display: table-row; `}
  ${p => p.tablecell && css` display: table-cell; `}

  ${p => p.alignmiddle && css` vertical-align: middle; `}

  ${p => p.overflow_visible && css` overflow: visible; `}
  ${p => p.overflow_hidden && css` overflow: hidden; `}
  ${p => p.overflow_scroll && css` overflow: scroll; `}
  ${p => p.overflow_auto && css` overflow: auto; `}

  ${p => p.ox_visible && css` overflow-x: visible; `}
  ${p => p.ox_hidden && css` overflow-x: hidden; `}
  ${p => p.ox_scroll && css` overflow-x: scroll; `}
  ${p => p.ox_auto && css` overflow-x: auto; `}

  ${p => p.oy_visible && css` overflow-x: visible; `}
  ${p => p.oy_hidden && css` overflow-y: hidden; `}
  ${p => p.oy_scroll && css` overflow-y: scroll; `}
  ${p => p.oy_auto && css` overflow-y: auto; `}

  ${p => p.relative && css` position: relative; `}
`;

export default Box;

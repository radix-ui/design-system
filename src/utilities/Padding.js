import { css } from 'styled-components';
import * as theme from './../theme/';

const Padding = css`
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
`;

export default Padding;

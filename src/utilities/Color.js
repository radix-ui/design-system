import { css } from 'styled-components';
import * as theme from './../theme/';

const Color = css`
  ${p => p.color_white && css`color: ${theme.WHITE};`}
  ${p => p.color_black && css`color: ${theme.BLACK};`}

  ${p => p.color_gray500 && css`color: ${theme.GRAY_500};`}
  ${p => p.color_gray600 && css`color: ${theme.GRAY_600};`}
  ${p => p.color_gray900 && css`color: ${theme.GRAY_900};`}

  ${p => p.color_blue500 && css`color: ${theme.BLUE_500};`}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_color_white && css`color: ${theme.WHITE};`}
    ${p => p.bp1_color_black && css`color: ${theme.BLACK};`}

    ${p => p.bp1_color_gray500 && css`color: ${theme.GRAY_500};`}
    ${p => p.bp1_color_gray600 && css`color: ${theme.GRAY_600};`}
    ${p => p.bp1_color_gray900 && css`color: ${theme.GRAY_900};`}

    ${p => p.bp1_color_blue500 && css`color: ${theme.BLUE_500};`}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_color_white && css`color: ${theme.WHITE};`}
    ${p => p.bp2_color_black && css`color: ${theme.BLACK};`}

    ${p => p.bp2_color_gray500 && css`color: ${theme.GRAY_500};`}
    ${p => p.bp2_color_gray600 && css`color: ${theme.GRAY_600};`}
    ${p => p.bp2_color_gray900 && css`color: ${theme.GRAY_900};`}

    ${p => p.bp2_color_blue500 && css`color: ${theme.BLUE_500};`}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_color_white && css`color: ${theme.WHITE};`}
    ${p => p.bp3_color_black && css`color: ${theme.BLACK};`}

    ${p => p.bp3_color_gray500 && css`color: ${theme.GRAY_500};`}
    ${p => p.bp3_color_gray600 && css`color: ${theme.GRAY_600};`}
    ${p => p.bp3_color_gray900 && css`color: ${theme.GRAY_900};`}

    ${p => p.bp3_color_blue500 && css`color: ${theme.BLUE_500};`}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_color_white && css`color: ${theme.WHITE};`}
    ${p => p.bp4_color_black && css`color: ${theme.BLACK};`}

    ${p => p.bp4_color_gray500 && css`color: ${theme.GRAY_500};`}
    ${p => p.bp4_color_gray600 && css`color: ${theme.GRAY_600};`}
    ${p => p.bp4_color_gray900 && css`color: ${theme.GRAY_900};`}

    ${p => p.bp4_color_blue500 && css`color: ${theme.BLUE_500};`}
  }
`;

export default Color;

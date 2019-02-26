import { css } from "styled-components"
import * as theme from "./../theme/"

const colorPropsKeys = [ 'color_white', 'color_black', 'color_gray500', 'color_gray600', 'color_gray900', 'color_blue500' ]

const Color = p => css`
  ${ p.color_white && `color: ${theme.WHITE};`}
  ${ p.color_black && `color: ${theme.BLACK};`}

  ${ p.color_gray500 && `color: ${theme.GRAY_500};`}
  ${ p.color_gray600 && `color: ${theme.GRAY_600};`}
  ${ p.color_gray900 && `color: ${theme.GRAY_900};`}

  ${ p.color_blue500 && `color: ${theme.BLUE_500};`}

  ${colorPropsKeys.some(prop => p[`bp1_${prop}`]) && `
    @media (min-width: ${theme.BREAKPOINT_100}) {
      ${ p.bp1_color_white && `color: ${theme.WHITE};`}
      ${ p.bp1_color_black && `color: ${theme.BLACK};`}

      ${ p.bp1_color_gray500 && `color: ${theme.GRAY_500};`}
      ${ p.bp1_color_gray600 && `color: ${theme.GRAY_600};`}
      ${ p.bp1_color_gray900 && `color: ${theme.GRAY_900};`}

      ${ p.bp1_color_blue500 && `color: ${theme.BLUE_500};`}
    }
  `}

  ${colorPropsKeys.some(prop => p[`bp2_${prop}`]) && `
    @media (min-width: ${theme.BREAKPOINT_200}) {
      ${ p.bp2_color_white && `color: ${theme.WHITE};`}
      ${ p.bp2_color_black && `color: ${theme.BLACK};`}

      ${ p.bp2_color_gray500 && `color: ${theme.GRAY_500};`}
      ${ p.bp2_color_gray600 && `color: ${theme.GRAY_600};`}
      ${ p.bp2_color_gray900 && `color: ${theme.GRAY_900};`}

      ${ p.bp2_color_blue500 && `color: ${theme.BLUE_500};`}
    }
  `}

  ${colorPropsKeys.some(prop => p[`bp3_${prop}`]) && `
    @media (min-width: ${theme.BREAKPOINT_300}) {
      ${ p.bp3_color_white && `color: ${theme.WHITE};`}
      ${ p.bp3_color_black && `color: ${theme.BLACK};`}

      ${ p.bp3_color_gray500 && `color: ${theme.GRAY_500};`}
      ${ p.bp3_color_gray600 && `color: ${theme.GRAY_600};`}
      ${ p.bp3_color_gray900 && `color: ${theme.GRAY_900};`}

      ${ p.bp3_color_blue500 && `color: ${theme.BLUE_500};`}
    }
  `}

  ${colorPropsKeys.some(prop => p[`bp4_${prop}`]) && `
    @media (min-width: ${theme.BREAKPOINT_400}) {
      ${ p.bp4_color_white && `color: ${theme.WHITE};`}
      ${ p.bp4_color_black && `color: ${theme.BLACK};`}

      ${ p.bp4_color_gray500 && `color: ${theme.GRAY_500};`}
      ${ p.bp4_color_gray600 && `color: ${theme.GRAY_600};`}
      ${ p.bp4_color_gray900 && `color: ${theme.GRAY_900};`}

      ${ p.bp4_color_blue500 && `color: ${theme.BLUE_500};`}
    }
  `}
`

export default Color

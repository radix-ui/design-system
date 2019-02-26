import { css } from "styled-components"
import * as theme from "./../theme/"

const heightPropsKeys = ['height_100']

const Height = p => css`
  ${p.height_100 && ` height: 100%; `}

  ${heightPropsKeys.some(prop => p[`bp1_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_100}) {
      ${p.bp1_height_100 && ` height: 100%; `}
    }
  `}

  ${heightPropsKeys.some(prop => p[`bp2_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_200}) {
      ${p.bp2_height_100 && ` height: 100%; `}
    }
  `}

  ${heightPropsKeys.some(prop => p[`bp3_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_300}) {
      ${p.bp3_height_100 && ` height: 100%; `}
    }
  `}

  ${heightPropsKeys.some(prop => p[`bp4_${prop}`]) && css`
    @media (min-width: ${theme.BREAKPOINT_400}) {
      ${p.bp4_height_100 && ` height: 100%; `}
    }
  `}
`

export default Height

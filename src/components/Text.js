import styled, { css } from 'styled-components';
import * as theme from './../theme/';
import Margin from './../utilities/Margin';
import NegativeMargin from './../utilities/NegativeMargin';
import Leading from './../utilities/Leading';
import TextAlign from './../utilities/TextAlign';
import Color from './../utilities/Color';

const Text = styled.span`
  display: block;
  font-family: 'UntitledSans',apple-system,BlinkMacSystemFont;

  ${p => p.size1 && css`
    font-size: ${theme.FONTSIZE_200};
  `}
  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_300};
  `}
  ${p => p.size3 && css`
    font-size: ${theme.FONTSIZE_400};
    letter-spacing: -.001em;
    margin-left: -.05em;
  `}
  ${p => p.size4 && css`
    font-size: ${theme.FONTSIZE_500};
    letter-spacing: -.005em;
    margin-left: -.06em;
  `}
  ${p => p.size5 && css`
    font-size: ${theme.FONTSIZE_600};
    letter-spacing: -.012em;
    margin-left: -.075em;
  `}
  ${p => p.size6 && css`
    font-size: ${theme.FONTSIZE_700};
    letter-spacing: -.028em;
    margin-left: -.085em;
  `}
  ${p => p.size7 && css`
    font-size: ${theme.FONTSIZE_800};
    letter-spacing: -.038em;
    margin-left: -.088em;
  `}
  ${p => p.size8 && css`
    font-size: ${theme.FONTSIZE_900};
    letter-spacing: -.042em;
    margin-left: -.09em;
  `}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_size1 && css`
      font-size: ${theme.FONTSIZE_200};
    `}
    ${p => p.bp1_size2 && css`
      font-size: ${theme.FONTSIZE_300};
    `}
    ${p => p.bp1_size3 && css`
      font-size: ${theme.FONTSIZE_400};
      letter-spacing: -.001em;
      margin-left: -.05em;
    `}
    ${p => p.bp1_size4 && css`
      font-size: ${theme.FONTSIZE_500};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}
    ${p => p.bp1_size5 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}
    ${p => p.bp1_size6 && css`
      font-size: ${theme.FONTSIZE_700};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}
    ${p => p.bp1_size7 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.038em;
      margin-left: -.088em;
    `}
    ${p => p.bp1_size8 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.042em;
      margin-left: -.09em;
    `}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_size1 && css`
      font-size: ${theme.FONTSIZE_200};
    `}
    ${p => p.bp2_size2 && css`
      font-size: ${theme.FONTSIZE_300};
    `}
    ${p => p.bp2_size3 && css`
      font-size: ${theme.FONTSIZE_400};
      letter-spacing: -.001em;
      margin-left: -.05em;
    `}
    ${p => p.bp2_size4 && css`
      font-size: ${theme.FONTSIZE_500};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}
    ${p => p.bp2_size5 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}
    ${p => p.bp2_size6 && css`
      font-size: ${theme.FONTSIZE_700};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}
    ${p => p.bp2_size7 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.038em;
      margin-left: -.088em;
    `}
    ${p => p.bp2_size8 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.042em;
      margin-left: -.09em;
    `}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_size1 && css`
      font-size: ${theme.FONTSIZE_200};
    `}
    ${p => p.bp3_size2 && css`
      font-size: ${theme.FONTSIZE_300};
    `}
    ${p => p.bp3_size3 && css`
      font-size: ${theme.FONTSIZE_400};
      letter-spacing: -.001em;
      margin-left: -.05em;
    `}
    ${p => p.bp3_size4 && css`
      font-size: ${theme.FONTSIZE_500};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}
    ${p => p.bp3_size5 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}
    ${p => p.bp3_size6 && css`
      font-size: ${theme.FONTSIZE_700};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}
    ${p => p.bp3_size7 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.038em;
      margin-left: -.088em;
    `}
    ${p => p.bp3_size8 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.042em;
      margin-left: -.09em;
    `}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_size1 && css`
      font-size: ${theme.FONTSIZE_200};
    `}
    ${p => p.bp4_size2 && css`
      font-size: ${theme.FONTSIZE_300};
    `}
    ${p => p.bp4_size3 && css`
      font-size: ${theme.FONTSIZE_400};
      letter-spacing: -.001em;
      margin-left: -.05em;
    `}
    ${p => p.bp4_size4 && css`
      font-size: ${theme.FONTSIZE_500};
      letter-spacing: -.005em;
      margin-left: -.06em;
    `}
    ${p => p.bp4_size5 && css`
      font-size: ${theme.FONTSIZE_600};
      letter-spacing: -.012em;
      margin-left: -.075em;
    `}
    ${p => p.bp4_size6 && css`
      font-size: ${theme.FONTSIZE_700};
      letter-spacing: -.028em;
      margin-left: -.085em;
    `}
    ${p => p.bp4_size7 && css`
      font-size: ${theme.FONTSIZE_800};
      letter-spacing: -.038em;
      margin-left: -.088em;
    `}
    ${p => p.bp4_size8 && css`
      font-size: ${theme.FONTSIZE_900};
      letter-spacing: -.042em;
      margin-left: -.09em;
    `}
  }

  ${p => p.nowrap && css`white-space: nowrap;`}

  ${p => p.bold && css`
    font-weight: 500;
    font-family: ${theme.UNTITLEDSANSMEDIUM};
  `}

  ${p => p.tnum && css`font-feature-settings: 'tnum';`}

  ${p => p.us_none && css`user-select: none;`}

  ${Leading}
  ${Margin}
  ${NegativeMargin}
  ${TextAlign}
  ${Color}
`;

export default Text;

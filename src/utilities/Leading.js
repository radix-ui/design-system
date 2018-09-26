import { css } from 'styled-components';
import * as theme from './../theme/';

const Leading = css`
  ${p => p.lh1 && css`line-height: ${theme.LEADING_100};`}
  ${p => p.lh2 && css`line-height: ${theme.LEADING_200};`}
  ${p => p.lh3 && css`line-height: ${theme.LEADING_300};`}
  ${p => p.lh4 && css`line-height: ${theme.LEADING_400};`}
  ${p => p.lh5 && css`line-height: ${theme.LEADING_500};`}
  ${p => p.lh6 && css`line-height: ${theme.LEADING_600};`}
  ${p => p.lh7 && css`line-height: ${theme.LEADING_700};`}
  ${p => p.lh8 && css`line-height: ${theme.LEADING_800};`}
  ${p => p.lh9 && css`line-height: ${theme.LEADING_900};`}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_lh1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp1_lh2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp1_lh3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp1_lh4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp1_lh5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp1_lh6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp1_lh7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp1_lh8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp1_lh9 && css`line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_lh1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp2_lh2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp2_lh3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp2_lh4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp2_lh5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp2_lh6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp2_lh7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp2_lh8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp2_lh9 && css`line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_lh1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp3_lh2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp3_lh3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp3_lh4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp3_lh5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp3_lh6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp3_lh7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp3_lh8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp3_lh9 && css`line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_lh1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp4_lh2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp4_lh3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp4_lh4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp4_lh5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp4_lh6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp4_lh7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp4_lh8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp4_lh9 && css`line-height: ${theme.LEADING_900};`}
  }
`;

export default Leading;

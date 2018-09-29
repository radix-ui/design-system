import { css } from 'styled-components';
import * as theme from './../theme/';

const Leading = css`
  ${p => p.lh_1 && css`line-height: ${theme.LEADING_100};`}
  ${p => p.lh_2 && css`line-height: ${theme.LEADING_200};`}
  ${p => p.lh_3 && css`line-height: ${theme.LEADING_300};`}
  ${p => p.lh_4 && css`line-height: ${theme.LEADING_400};`}
  ${p => p.lh_5 && css`line-height: ${theme.LEADING_500};`}
  ${p => p.lh_6 && css`line-height: ${theme.LEADING_600};`}
  ${p => p.lh_7 && css`line-height: ${theme.LEADING_700};`}
  ${p => p.lh_8 && css`line-height: ${theme.LEADING_800};`}
  ${p => p.lh_9 && css`line-height: ${theme.LEADING_900};`}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p => p.bp1_lh_1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp1_lh_2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp1_lh_3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp1_lh_4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp1_lh_5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp1_lh_6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp1_lh_7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp1_lh_8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp1_lh_9 && css`line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p => p.bp2_lh_1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp2_lh_2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp2_lh_3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp2_lh_4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp2_lh_5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp2_lh_6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp2_lh_7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp2_lh_8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp2_lh_9 && css`line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p => p.bp3_lh_1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp3_lh_2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp3_lh_3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp3_lh_4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp3_lh_5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp3_lh_6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp3_lh_7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp3_lh_8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp3_lh_9 && css`line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p => p.bp4_lh_1 && css`line-height: ${theme.LEADING_100};`}
    ${p => p.bp4_lh_2 && css`line-height: ${theme.LEADING_200};`}
    ${p => p.bp4_lh_3 && css`line-height: ${theme.LEADING_300};`}
    ${p => p.bp4_lh_4 && css`line-height: ${theme.LEADING_400};`}
    ${p => p.bp4_lh_5 && css`line-height: ${theme.LEADING_500};`}
    ${p => p.bp4_lh_6 && css`line-height: ${theme.LEADING_600};`}
    ${p => p.bp4_lh_7 && css`line-height: ${theme.LEADING_700};`}
    ${p => p.bp4_lh_8 && css`line-height: ${theme.LEADING_800};`}
    ${p => p.bp4_lh_9 && css`line-height: ${theme.LEADING_900};`}
  }
`;

export default Leading;

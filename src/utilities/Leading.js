import { css } from 'styled-components';
import * as theme from './../theme/';

const Leading = p => css`
  ${p.lh_1 && ` line-height: ${theme.LEADING_100};`}
  ${p.lh_2 && ` line-height: ${theme.LEADING_200};`}
  ${p.lh_3 && ` line-height: ${theme.LEADING_300};`}
  ${p.lh_4 && ` line-height: ${theme.LEADING_400};`}
  ${p.lh_5 && ` line-height: ${theme.LEADING_500};`}
  ${p.lh_6 && ` line-height: ${theme.LEADING_600};`}
  ${p.lh_7 && ` line-height: ${theme.LEADING_700};`}
  ${p.lh_8 && ` line-height: ${theme.LEADING_800};`}
  ${p.lh_9 && ` line-height: ${theme.LEADING_900};`}

  @media (min-width: ${theme.BREAKPOINT_100}) {
    ${p.bp1_lh_1 && ` line-height: ${theme.LEADING_100};`}
    ${p.bp1_lh_2 && ` line-height: ${theme.LEADING_200};`}
    ${p.bp1_lh_3 && ` line-height: ${theme.LEADING_300};`}
    ${p.bp1_lh_4 && ` line-height: ${theme.LEADING_400};`}
    ${p.bp1_lh_5 && ` line-height: ${theme.LEADING_500};`}
    ${p.bp1_lh_6 && ` line-height: ${theme.LEADING_600};`}
    ${p.bp1_lh_7 && ` line-height: ${theme.LEADING_700};`}
    ${p.bp1_lh_8 && ` line-height: ${theme.LEADING_800};`}
    ${p.bp1_lh_9 && ` line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_200}) {
    ${p.bp2_lh_1 && ` line-height: ${theme.LEADING_100};`}
    ${p.bp2_lh_2 && ` line-height: ${theme.LEADING_200};`}
    ${p.bp2_lh_3 && ` line-height: ${theme.LEADING_300};`}
    ${p.bp2_lh_4 && ` line-height: ${theme.LEADING_400};`}
    ${p.bp2_lh_5 && ` line-height: ${theme.LEADING_500};`}
    ${p.bp2_lh_6 && ` line-height: ${theme.LEADING_600};`}
    ${p.bp2_lh_7 && ` line-height: ${theme.LEADING_700};`}
    ${p.bp2_lh_8 && ` line-height: ${theme.LEADING_800};`}
    ${p.bp2_lh_9 && ` line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_300}) {
    ${p.bp3_lh_1 && ` line-height: ${theme.LEADING_100};`}
    ${p.bp3_lh_2 && ` line-height: ${theme.LEADING_200};`}
    ${p.bp3_lh_3 && ` line-height: ${theme.LEADING_300};`}
    ${p.bp3_lh_4 && ` line-height: ${theme.LEADING_400};`}
    ${p.bp3_lh_5 && ` line-height: ${theme.LEADING_500};`}
    ${p.bp3_lh_6 && ` line-height: ${theme.LEADING_600};`}
    ${p.bp3_lh_7 && ` line-height: ${theme.LEADING_700};`}
    ${p.bp3_lh_8 && ` line-height: ${theme.LEADING_800};`}
    ${p.bp3_lh_9 && ` line-height: ${theme.LEADING_900};`}
  }

  @media (min-width: ${theme.BREAKPOINT_400}) {
    ${p.bp4_lh_1 && ` line-height: ${theme.LEADING_100};`}
    ${p.bp4_lh_2 && ` line-height: ${theme.LEADING_200};`}
    ${p.bp4_lh_3 && ` line-height: ${theme.LEADING_300};`}
    ${p.bp4_lh_4 && ` line-height: ${theme.LEADING_400};`}
    ${p.bp4_lh_5 && ` line-height: ${theme.LEADING_500};`}
    ${p.bp4_lh_6 && ` line-height: ${theme.LEADING_600};`}
    ${p.bp4_lh_7 && ` line-height: ${theme.LEADING_700};`}
    ${p.bp4_lh_8 && ` line-height: ${theme.LEADING_800};`}
    ${p.bp4_lh_9 && ` line-height: ${theme.LEADING_900};`}
  }
`;

export default Leading;

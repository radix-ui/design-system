import styled from 'styled-components';
import css from '@styled-system/css';

export const Table = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left',
});

export const Thead = styled('thead')({});
export const Tbody = styled('tbody')({});
export const Tr = styled('tr')({});
export const Td = styled('td')(
  css({
    paddingY: 3,
    paddingRight: 3,
    borderBottom: '1px solid',
    borderColor: 'grays.3',
    fontSize: 2,
  })
);

export const Th = styled(Td)(
  css({
    fontFamily: 'medium',
    fontWeight: 500,
    borderWidth: 2,
  })
).withComponent('th');

export const Tfoot = styled('tfoot')({});

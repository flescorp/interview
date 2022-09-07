import styled from 'styled-components';

interface TableCountProp {
  totalCount: number;
  presentCount: number;
}

const TableCountLayout = styled.div`
  width: max-content;
  color: ${({ theme }) => theme.palette.black};
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;

  strong {
    color: ${props => props.theme.palette.primary};
  }
`;

function TableCount({ totalCount, presentCount }: TableCountProp) {
  return (
    <TableCountLayout>
      총 {totalCount}건 중<strong>{presentCount}</strong>건
    </TableCountLayout>
  );
}
export default TableCount;

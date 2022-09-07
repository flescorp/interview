import React from 'react';

import {
  TableLayout,
  TableFooterLayout,
} from '@/components/Common/Table/Table.styled';
import Table from '@/components/Common/Table/Table';

interface TableTemplateProp {
  colgroup: Array<{ id: number; col: string }> | '';
  Column: JSX.Element | undefined | '';
  Body: JSX.Element | undefined;
  Footer: JSX.Element | undefined | '';
}
function TableTemplate({ colgroup, Column, Body, Footer }: TableTemplateProp) {
  return (
    <TableLayout>
      <Table colgroup={colgroup} Column={Column} Body={Body} />
      <TableFooterLayout>{Footer}</TableFooterLayout>
    </TableLayout>
  );
}
export default TableTemplate;

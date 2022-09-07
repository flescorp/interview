import React from 'react';

import {
  CustomizedTable,
  CustomizedTableHead,
  CustomizedTableBody,
} from '@/components/Common/Table/Table.styled';

function Table({ colgroup, Column, Body }: any) {
  return (
      <CustomizedTable sx={{ minWidth: 650 }} aria-label="simple table">
        {colgroup
          ? colgroup?.map(({ id, col }: any) => (
              <colgroup key={id}>
                <col width={col} />
              </colgroup>
            ))
          : ''}
        <CustomizedTableHead>{Column}</CustomizedTableHead>
        <CustomizedTableBody>{Body}</CustomizedTableBody>
    </CustomizedTable>
  );
}
export default Table;

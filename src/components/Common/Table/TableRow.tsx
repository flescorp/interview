import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

 function TableRowComponent({ columns, children }: any) {
  return (
    <TableRow>
      {columns
        ? columns.map((c: any) => <TableCell key={c}>{c}</TableCell>)
        : { children }}
    </TableRow>
  );
}
export default TableRowComponent;
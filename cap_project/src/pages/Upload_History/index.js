import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useState } from 'react';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'fileName', label: 'File Name', minWidth: 150 },
  { id: 'folder', label: 'Folder', minWidth: 100 },
  { id: 'uploadDate', label: 'Upload Date', minWidth: 50 },
  { id: 'fileSize', label: 'FileSize', minWidth: 50 },
  { id: 'uploader', label: 'Uploader', minWidth: 70 },
  { id: 'status', label: 'Status', minWidth: 50 },
];

function createData(id, fileName, folder, uploadDate, fileSize, uploader, status) {
  return { id, fileName, folder, uploadDate, fileSize, uploader, status };
}

const rows = [
  createData(1, 'File1.xlsx', 'Folder A', '2023-08-14', '2.5 MB', 'User A', 'Created'),
  createData(2, 'File2.csv', 'Folder B', '2023-08-15', '1.8 MB', 'User B', 'Created'),
  createData(3, 'File3.pdf', 'Folder A', '2023-08-16', '4.2 MB', 'User C', 'Updated'),
  createData(4, 'File4.xlsx', 'Folder C', '2023-08-17', '3.1 MB', 'User A', 'Created'),
  createData(5, 'File5.csv', 'Folder B', '2023-08-18', '2.0 MB', 'User D', 'Updated'),
  createData(6, 'File6.pdf', 'Folder A', '2023-08-19', '1.5 MB', 'User B', 'Created'),
  createData(7, 'File7.xlsx', 'Folder C', '2023-08-20', '2.7 MB', 'User C', 'Created'),
  createData(8, 'File8.csv', 'Folder B', '2023-08-21', '3.3 MB', 'User D', 'Created'),
  createData(9, 'File9.pdf', 'Folder A', '2023-08-22', '2.8 MB', 'User A', 'Updated'),
  createData(10, 'File10.xlsx', 'Folder C', '2023-08-23', '1.9 MB', 'User B', 'Created'),
];

function Upload_History() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ top: 57, minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Upload_History;

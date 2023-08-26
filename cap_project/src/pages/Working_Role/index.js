import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import ModalAddRole from './ModalAddRole';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 50 },
  { id: 'description', label: 'Description', minWidth: 250 },
  { id: 'executor', label: 'Executor', minWidth: 50 },
  { id: 'timeChange', label: 'Time Change', minWidth: 50 },
  { id: 'numberOfUsers', label: 'Number of Users', minWidth: 50 },
  // { id: 'action', label: 'Action', minWidth: 50 },
];

function createData(id, name, description, executor, timeChange, numberOfUsers) {
  return { id, name, description, executor, timeChange, numberOfUsers };
}

const rows = [
  createData(1, 'IT', 'Description IT', 'Duong Vu', '08:00', 15),
  createData(2, 'Seo', 'Description Seo', 'Duong Vu', '08:00', 15),
  createData(3, 'Marketing', 'Description Marketing', 'Duong Vu', '08:00', 15),
  createData(4, 'HR', 'Description HR', 'Duong Vu', '08:00', 15),
  createData(5, 'PM', 'Description PM', 'Duong Vu', '08:00', 15),
];

function Working_Role() {
  const [listWorkingRoles, setListWorkingRoles] = useState([]);

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const handleUpdateTable = (role) => {};

  useEffect(() => {
    setListWorkingRoles(rows);
  }, []);

  return (
    <>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <span className="fw-bold h5">List User</span>
        <Button variant="secondary" onClick={() => setIsShowModalAddNew(true)}>
          Add New User
        </Button>
      </div>
      <TableContainer>
        <Table variant="dark">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell key={`column-${i}`} align={column.align} style={{ top: 57, minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listWorkingRoles.map((row) => {
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
                  <TableCell>
                    <Button variant="warning" className="me-2" onClick={() => {}}>
                      <FontAwesomeIcon icon={faPen} />
                    </Button>
                    <Button variant="danger" onClick={() => {}}>
                      <FontAwesomeIcon icon={faXmark} />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <ModalAddRole
        show={isShowModalAddNew}
        handleClose={() => setIsShowModalAddNew(false)}
        handleUpdateTable={handleUpdateTable}
      />
    </>
  );
}

export default Working_Role;

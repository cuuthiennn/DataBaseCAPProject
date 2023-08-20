import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { fetchAllUser } from '~/components/servers/UsersService';

function Users_Control() {
  const [listUsers, setListUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getUsers(1);
  }, []);

  // set total users and total pages
  const getUsers = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data) {
      setListUsers(res.data);
      setTotalPages(res.total_pages);
    }
  };

  // Update index page with new users and
  const handleChange = (e, p) => {
    getUsers(p);
  };

  return (
    <section className="">
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <span className="fw-bold h5">List User</span>
        {/* <Button variant="secondary">Add New User</Button> */}
        <button className="btn btn-success">Add New User</button>
      </div>
      <div className="d-flex justify-content-center">
        <p>Hello</p>
        <p>XinChao</p>p
      </div>
      <Table variant="dark" style={{ backgroundColor: 'var(--primary)' }}>
        <thead>
          <tr>
            <th className="w-15">ID</th>
            <th className="">Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <Button variant="warning" className="me-2">
                      Edit
                    </Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <div className="d-flex justify-content-center text-light">
        <Pagination
          count={totalPages}
          size="medium"
          shape="rounded"
          variant="outlined"
          onChange={handleChange}
          showFirstButton
          showLastButton
        />
      </div>
    </section>
  );
}

export default Users_Control;

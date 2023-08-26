import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import _ from 'lodash';
import ModelAddNew from '~/components/Layout/components/modalAddNew';
import ModalEditUser from '~/components/Layout/components/modalEditUser';
import ModalDeleteUser from '~/components/Layout/components/modalDeleteUser';

const user = (id, username, password, firstName, lastName, birthday, email, gender, phone, role) => {
  return { id, username, password, firstName, lastName, birthday, email, gender, phone, role };
};

const rows = [
  user(1, 'user1', '1231', 'First_1', 'Last_1', '11-06-2003', 'email_1@example.com', true, '123-456-01', 'ADMIN'),
  user(2, 'user2', '1232', 'First_2', 'Last_2', '12-06-2003', 'email_2@example.com', false, '123-456-02', 'HR'),
  user(3, 'user3', '1233', 'First_3', 'Last_3', '13-06-2003', 'email_3@example.com', true, '123-456-03', 'MARKETING'),
  user(4, 'user4', '1234', 'First_4', 'Last_4', '14-06-2003', 'email_4@example.com', false, '123-456-04', 'IT'),
  user(5, 'user5', '1235', 'First_5', 'Last_5', '15-06-2003', 'email_5@example.com', true, '123-456-05', 'SEO'),
];

function Users_Control() {
  const [listUsers, setListUsers] = useState([]);

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataUserEdit, setDataModalEdit] = useState({});

  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataUserDelete, setDataModalDelete] = useState({});

  // Update table when add new user successfully
  const handleUpdateTable = (user) => {
    setListUsers([user, ...listUsers]);
  };

  // Update table when update user successfully
  const handleEditUserFromModal = (user) => {
    let cloneListUsers = _.cloneDeep(listUsers);
    let index = listUsers.findIndex((item) => item.id === user.id);
    user.array.forEach((element) => {
      console.log(element);
    });
    // cloneListUsers[index].firstName = user.firstName;
    // cloneListUsers[index].role = user.role;
    setListUsers(cloneListUsers);
  };

  // Update table when delete user successfully
  const handleDeleteUserFromModal = (user) => {
    let cloneListUsers = _.cloneDeep(listUsers);
    cloneListUsers = cloneListUsers.filter((item) => item.id !== user.id);
    setListUsers(cloneListUsers);
  };

  // Add all users to list
  useEffect(() => {
    setListUsers(rows);
  }, []);

  return (
    <section className="">
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <span className="fw-bold h5">List User</span>
        <Button variant="secondary" onClick={() => setIsShowModalAddNew(true)}>
          Add New User
        </Button>
      </div>
      <Table variant="dark" style={{ backgroundColor: 'var(--primary)' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Role</th>
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
                  <td>{item.username}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.gender ? 'Male' : 'Female'}</td>
                  <td>{item.phone}</td>
                  <td>{item.role}</td>
                  <td>
                    <Button
                      variant="warning"
                      className="me-2"
                      onClick={() => {
                        setDataModalEdit(item);
                        setIsShowModalEdit(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        setDataModalDelete(item);
                        setIsShowModalDelete(true);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <ModelAddNew
        show={isShowModalAddNew}
        handleClose={() => setIsShowModalAddNew(false)}
        handleUpdateTable={handleUpdateTable}
      />

      <ModalEditUser
        show={isShowModalEdit}
        handleClose={() => setIsShowModalEdit(false)}
        dataUserEdit={dataUserEdit}
        handleEditUserFromModal={handleEditUserFromModal}
      />

      <ModalDeleteUser
        show={isShowModalDelete}
        handleClose={() => setIsShowModalDelete(false)}
        dataUserDelete={dataUserDelete}
        handleDeleteUserFromModal={handleDeleteUserFromModal}
      />
    </section>
  );
}

export default Users_Control;

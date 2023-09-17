import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import _ from 'lodash';
import ModelAddNew from '~/components/Layout/components/modalAddNew';
import ModalEditUser from '~/components/Layout/components/modalEditUser';
import ModalDeleteUser from '~/components/Layout/components/modalDeleteUser';
import { fetchAllUser } from '~/components/servers/UsersService';

function Users_Control() {
  const [listUsers, setListUsers] = useState([]);

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataUserEdit, setDataModalEdit] = useState({});

  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataUserDelete, setDataModalDelete] = useState({});

  // Update table when update user successfully
  const handleEditUserFromModal = (user) => {
    let cloneListUsers = _.cloneDeep(listUsers);
    let index = listUsers.findIndex((item) => item.id === user.id);
    cloneListUsers[index].firstName = user.firstName;
    cloneListUsers[index].role = user.role;
    setListUsers(cloneListUsers);
  };

  // Add all users to list
  useEffect(() => {
    getUsers();
  }, [isShowModalAddNew, isShowModalEdit, isShowModalDelete]);

  const getUsers = async () => {
    let res = await fetchAllUser();
    if (res && res.data) {
      setListUsers(res.data);
    }
  };

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
                  <td>{item.user_name}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
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

      <ModelAddNew show={isShowModalAddNew} handleClose={() => setIsShowModalAddNew(false)} />

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
      />
    </section>
  );
}

export default Users_Control;

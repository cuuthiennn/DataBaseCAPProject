import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ModalAddNew from './ModalAddNew';
import DropDownTree from './DropDownTree';

function model_workingRole(id, name, parent) {
  return { id, name, parent };
}

const rows = [
  model_workingRole(1, 'VietNam', null),
  model_workingRole(2, 'Finance', 1),
  model_workingRole(3, 'Marketing', 1),
  model_workingRole(4, 'NAV', 2),
  model_workingRole(5, 'Sale', 3),
  model_workingRole(6, 'USA', null),
];

function Working_Role() {
  const [listWorkingRole, setListWorkingRole] = useState([]);

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  useEffect(() => {
    setListWorkingRole(rows);
  }, []);

  const handleAddWorkingRole = (role) => {
    setListWorkingRole([...listWorkingRole, ...role]);
  };

  return (
    <>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <span className="fw-bold h5">Working Roles</span>
        <Button
          variant="secondary"
          onClick={() => {
            setIsShowModalAddNew(true);
          }}
        >
          Add New Working Role
        </Button>
      </div>
      <div className="container-fluid">
        <DropDownTree data={listWorkingRole} />
      </div>

      <ModalAddNew
        show={isShowModalAddNew}
        handleClose={() => setIsShowModalAddNew(false)}
        handleAddWorkingRole={handleAddWorkingRole}
      />
    </>
  );
}

export default Working_Role;

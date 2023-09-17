import api from './axiosConfig';

const workingRole_GetAll = () => {
  return api.get(`/workingRole/getAllWorkingRoles`);
};

const workingRole_Create = ({ name, parent_id }) => {
  return api.get(`/createRole/${name}.${parent_id}`);
};

export { workingRole_GetAll, workingRole_Create };

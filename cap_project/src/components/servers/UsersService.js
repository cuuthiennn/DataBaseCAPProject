import api from './axiosConfig';

const fetchAllUser = () => {
  return api.get(`/user/getAllUser`);
};

const postCreateUser = ({ user }) => {
  // return api({
  //   method: 'POST',
  //   url: 'user/create',
  //   data: {
  //     user,
  //   },
  // });
  return api.post('/user/create', { user });
};

//
const putUpdateUser = (id, { user }) => {
  return api.put(`/user/update/${id}`, { user });
};

const deleteUser = (id) => {
  return api.delete(`/user/delete/${id}`);
};

export { fetchAllUser, postCreateUser, putUpdateUser, deleteUser };

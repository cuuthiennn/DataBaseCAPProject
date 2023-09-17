import api from './axiosConfig';

const fetchAllUser = () => {
  return api.get(`/user/getAllUser`);
};

const postCreateUser = (user_name, password, first_name, last_name, birthday, email, gender, phone) => {
  return api.post('/user/create', { user_name, password, first_name, last_name, birthday, email, gender, phone });
};

//
const putUpdateUser = (id, { user_name, password, first_name, last_name, birthday, email, gender, phone }) => {
  return api.put(`/user/update/${id}`, { user_name, password, first_name, last_name, birthday, email, gender, phone });
};

const deleteUser = (id) => {
  return api.delete(`/user/delete/${id}`);
};

export { fetchAllUser, postCreateUser, putUpdateUser, deleteUser };

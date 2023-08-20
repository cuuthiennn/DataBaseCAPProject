import api from "./axiosConfig";

const fetchAllUser = (page) => {
  return api.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
  return api.post("/api/users", { name, job });
};

const putUpdateUser = (id, name, job) => {
  return api.put(`/api/users/${id}`, { name, job });
};

const deleteUser = (id) => {
  return api.delete(`/api/users/${id}`);
};

export { fetchAllUser, postCreateUser, putUpdateUser, deleteUser };

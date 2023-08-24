const pool = require('../config/database')

class WorkingRole {
    
    getAllRole = async () => {
        const queryCommand = `SELECT * FROM working_role`;
        const result = JSON.stringify( await pool.query(queryCommand));

        return result;
    }

    createRole = async (path_name, role_parent_id) => {
        const queryCommand = `INSERT INTO working_role (path_name, role_parent_id) OUTPUT inserted.* VALUES ('@path_name', '@role_parent_id')`;
        pool.input("path_name", path_name);
        pool.input("role_parent_id", role_parent_id);
        const result = JSON.stringify( await pool.query(queryCommand));

        return result;
    }

    updateRole = async (id, path_name, role_parent_id) => {
        const queryCommand = `UPDATE working_role SET path_name = '@path_name', role_parent_id = '@role_parent_id' OUTPUT inserted.* WHERE id = '@id'`;
        pool.input("id", id);
        pool.input("path_name", path_name);
        pool.input("role_parent_id", role_parent_id);
        const result = JSON.stringify( await pool.query(queryCommand));

        return result;
    }

    deleteRole = async (id) => {
        const queryCommand = `DELETE FROM working_role OUTPUT inserted.* WHERE id = '@id'`;
        pool.input("id", id);
        const result = JSON.stringify( await pool.query(queryCommand));
        return result;
    }
}

module.exports = WorkingRole;
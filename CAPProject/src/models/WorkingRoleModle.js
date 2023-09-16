const pool = require('../config/database')

class WorkingRole {
    
    getPathById = async (id) => {
        const queryCommand = `SELECT [id]`+
                            `,[path_name]`+
                            `,[role_parent_id]`+
                            `,[Path]`+
                            ` FROM [CAPProject].[dbo].[WorkingRoleHierarchy]`+
                            ` WHERE id = @id`;
        const db = pool.request();
        db.input("id", id);
        const result = JSON.stringify(await db.query(queryCommand));
        return result;
    }

    getWorkingRoleChileById = async (id) => {
        const queryCommand = `SELECT * FROM working_role WHERE role_parent_id  = @id`
        const db = pool.request();
        db.input("id", id);
        const result = JSON.stringify(await db.query(queryCommand));
        return result;
    };

    createRole = async (path_name, role_parent_id) => {
        const queryCommand = `INSERT INTO working_role (path_name, role_parent_id) OUTPUT inserted.* VALUES ('@path_name', '@role_parent_id')`;
        const db = pool.request();
        db.input("path_name", path_name);
        db.input("role_parent_id", role_parent_id);
        const result = JSON.stringify(await db.query(queryCommand));

        return result;
    }

    updateRole = async (id, path_name, role_parent_id) => {
        const queryCommand = `UPDATE working_role SET path_name = '@path_name', role_parent_id = '@role_parent_id' OUTPUT inserted.* `
                            +`WHERE id = '@id'`;
        const db = pool.request();
        db.input("id", id);
        db.input("path_name", path_name);
        db.input("role_parent_id", role_parent_id);
        const result = JSON.stringify(await db.query(queryCommand));

        return result;
    }

    deleteRole = async (id) => {
        const queryCommand = `DELETE FROM working_role OUTPUT deleted.* WHERE id = '@id'`;
        const db = pool.request();
        db.input("id", id);
        const result = JSON.stringify(await db.query(queryCommand));
        return result;
    }
}

module.exports = WorkingRole;
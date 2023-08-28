const pool = require('../config/database');

class UserRoleCModle {
    getAllUserRole = async () => {
        const queryCommand = `SELECT * FROM user_roles`
        const result = JSON.stringify(await pool.query(queryCommand));

        return result;
    };

    createUserRole = async (role_name) => {
        const queryCommand = `INSERT INTO user_roles (name) VALUES (@role_name)`;
        const db = pool.request();
        db.input("role_name", role_name);
        const result = JSON.stringify(await pool.query(queryCommand));

        return result;
    }

    deleteUserRole = async (role_id) => {
        const queryCommand = `DELETE FROM user_roles OUTPUT deleted.* WHERE id = @role_id`;
        const db = pool.request();
        db.input("role_id", role_id);
        const result = JSON.stringify(await pool.query(queryCommand));
        
        return result;
    }

    updateUserRole = async (role_id, role_name) => {
        const queryCommand = `UPDATE user_roles SET name = @role_name WHERE id = @role_id`;
        const db = pool.request();
        db.input("role_id", role_id);
        db.input("role_name", role_name);
        const result = JSON.stringify(await pool.query(queryCommand));
        
        return result;
    }
}

module.exports = UserRoleCModle;
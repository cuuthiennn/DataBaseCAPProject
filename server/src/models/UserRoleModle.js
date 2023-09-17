const pool = require('../config/database');

class UserRoleCModle {
    getAllUserRole = async () => {
        const queryCommand = `SELECT * FROM user_role`
        const result = JSON.stringify(await pool.query(queryCommand));

        return result;
    };

    createUserRole = async (role_name) => {
        const queryCommand = `INSERT INTO user_role(name) OUTPUT inserted.* VALUES (@role_name)`;
        const db = pool.request();
        db.input("role_name", role_name);
        const result = JSON.stringify(await db.query(queryCommand));

        return result;
    }

    deleteUserRole = async (role_id) => {
        const queryCommand = `DELETE FROM user_role OUTPUT deleted.* WHERE id = @role_id`;
        const db = pool.request();
        db.input("role_id", role_id);
        const result = JSON.stringify(await db.query(queryCommand));
        
        return result;
    }

    updateUserRole = async (role_id, role_name) => {
        const queryCommand = `UPDATE user_role SET name = @role_name inserted.* WHERE id = @role_id`;
        const db = pool.request();
        db.input("role_id", role_id);
        db.input("role_name", role_name);
        const result = JSON.stringify(await db.query(queryCommand));
        
        return result;
    }
}

module.exports = UserRoleCModle;
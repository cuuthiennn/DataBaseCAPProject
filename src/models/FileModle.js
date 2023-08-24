const pool = require('../config/database')

class fileModle {
    getAllFile = async (user_id) => {
        const queryCommand = `SELECT * FROM file_history WHERE user_id = @user_id`;
        pool.input("user_id", user_id);
        const result = JSON.stringify(await pool.query(queryCommand));
        return result;
    }

    addFile = async (data) => {
        const queryCommand = `INSERT INTO file_history (user_id, file_name, upload_date, status, file_path)`+
        `OUTPUT inserted.* VALUES (@user_id, @file_name, @upload_date, @status, @file_path)`;
        pool.input("user_id", data.user_id);
        pool.input("file_name", data.file_name);
        pool.input("upload_date", data.upload_date);
        pool.input("status", data.status);
        pool.input("file_path", data.file_path);
        const result = JSON.stringify(await pool.query(queryCommand));
        return result;
    }

    deleteFile = async (id, user_id) => {
        const queryCommand = `DELETE FROM file_history OUTPUT inserted.* WHERE id = @id AND user_id = @user_id`;
        pool.input("id", id);
        pool.input("user_id", user_id);
        const result = JSON.stringify(await pool.query(queryCommand));
        return result;
    }

    updateFile = async (data) => {
        const queryCommand = `UPDATE file_history SET file_name = @file_name, upload_date = @upload_date,`+
        ` status = @status, file_path = @file_path OUTPUT inserted.* WHERE id = @id`;
        pool.input("id", data.id);
        pool.input("file_name", data.file_name);
        pool.input("upload_date", data.upload_date);
        pool.input("status", data.status);
        pool.input("file_path", data.file_path);
        const result = JSON.stringify(await pool.query(queryCommand));
        return result;
    }
}

module.exports = fileModle;
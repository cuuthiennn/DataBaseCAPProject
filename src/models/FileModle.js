const pool = require('../config/database')

class fileModle {
    getAllFile = async (user_id) => {
        const queryCommand = `SELECT * FROM file_history WHERE user_id = @user_id`;
        const db = pool.request();
        db.input("user_id", user_id);
        const result = JSON.stringify(await pool.query(queryCommand));
        return result;
    }

    addFile = async (data) => {
        const queryCommand = `INSERT INTO file_history (user_id, file_name, upload_date, status, file_path)`+
        `OUTPUT inserted.* VALUES (@user_id, @file_name, @upload_date, @status, @file_path)`;
        const db = pool.request();
        db.input("user_id", data.user_id);
        db.input("file_name", data.file_name);
        db.input("upload_date", data.upload_date);
        db.input("status", data.status);
        db.input("file_path", data.file_path);
        const result = JSON.stringify(await pool.query(queryCommand));
        return result;
    }

    deleteFile = async (id, user_id) => {
        const queryCommand = `DELETE FROM file_history OUTPUT deleted.* WHERE id = @id AND user_id = @user_id`;
        const db = pool.request();
        db.input("id", id);
        db.input("user_id", user_id);
        const result = JSON.stringify(await pool.query(queryCommand));
        return result;
    }

    updateFile = async (data) => {
        const queryCommand = `UPDATE file_history SET file_name = @file_name, upload_date = @upload_date,`+
        ` status = @status, file_path = @file_path OUTPUT inserted.* WHERE id = @id`;
        const db = pool.request();
        db.input("id", data.id);
        db.input("file_name", data.file_name);
        db.input("upload_date", data.upload_date);
        db.input("status", data.status);
        db.input("file_path", data.file_path);
        const result = JSON.stringify(await pool.query(queryCommand));
        return result;
    }
}

module.exports = fileModle;
const pool = require('../config/database')

class UserModel{
    constructor(id, user_name, password, email, phone, gender, birthday, first_name, last_name){
        this.id = id;
        this.user_name = user_name;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.birthday = birthday;
        this.first_name = first_name;
        this.last_name = last_name;
    }
    
    getAllUser = async () =>{
        const queryCommand = `SELECT * FROM account`;
        const result = JSON.stringify(await pool.query(queryCommand));
        return result;
    }
    
    getUserById = async (id) =>{
        const queryCommand = `SELECT * FROM account WHERE id = @id`;
        pool.input("id", id)
        const result = JSON.stringify(await pool.query(queryCommand));
        return result;
    }
    
    createUser = async (data) =>{
        const newUser = {
            user_name: data.user_name,
            password: data.password,
            first_name : data.first_name || '',
            last_name : data.last_name || '',
            birthday : data.birthday || '',
            email : data.email || '',
            gender : data.gender || '',
            phone : data.phone || ''
        };
        pool.input('user_name', newUser.user_name);
        pool.input('password', newUser.password);
        pool.input('first_name', newUser.first_name);
        pool.input('last_name', newUser.last_name);
        pool.input('birthday', newUser.birthday);
        pool.input('email', newUser.email);
        pool.input('gender', newUser.gender);
        pool.input('phone', newUser.phone);
        queryCommand = `INSERT INTO account (user_name, password, first_name, last_name, birthday, email, gender, phone) OUTPUT inserted.*`
        + `VALUES (@user_name, @password, @first_name, @last_name, @birthday, @email, @gender, @phone)`;
        pool.input('user_name', newUser)
        let results = JSON.stringify(await pool.query(queryCommand));
        return results;
    }
    
    updateUser = (id, data) =>{
        const newUser = {
            user_name: data.user_name,
            password: data.password,
            first_name: data.first_name,
            last_name: data.last_name,
            birthday: data.birthday,
            email: data.email,
            gender: data.gender,
            phone: data.phone
        };
        pool.input('user_name', newUser.user_name);
        pool.input('password', newUser.password);
        pool.input('first_name', newUser.first_name);
        pool.input('last_name', newUser.last_name);
        pool.input('birthday', newUser.birthday);
        pool.input('email', newUser.email);
        pool.input('gender', newUser.gender);
        pool.input('phone', newUser.phone);
        pool.input("id", id)
        const queryCommand = `UPDATE account Set user_name = @user_name,`+
                                                `password = @password,`+
                                                `first_name = @first_name,`+
                                                `last_name = @last_name,`+
                                                `birthday = @birthday,`+
                                                `email = @email,`+
                                                `gender = @gender,`+
                                                `phone = @phone`+
                                `OUTPUT inserted.* WHERE id = @id`;
        pool.query(queryCommand, [newUser, id], (err, res) => {
            if(err) {
                console.log(err)
            }
            return {id: res.id, ...data};
        })
    }

    login = async (data) => {
        const queryCommand = `SELECT a.id, a.user_name FROM account a WHERE user_name = @user_name AND password = @password`;
        pool.input("user_name", data.user_name);
        pool.input("password", data.password);
        const result = JSON.stringify( await pool.query(queryCommand));
        return result;
    };
}

module.exports = UserModel;
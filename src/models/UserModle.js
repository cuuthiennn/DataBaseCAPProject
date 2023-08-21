const { json } = require('express');
const pool = require('../config/database')

var User =  (User) => {
    this.id = User.id;
    this.user_name = User.user_name;
    this.password = User.password;
    this.email = User.email;
    this.phone = User.phone;
    this.gender = User.gender;
    this.birthday = User.birthday;
    this.first_name = User.first_name;
    this.last_name = User.last_name;
}

User.getAllUser = async () =>{
    const result = JSON.stringify(await pool.query(`SELECT * FROM account`));
    return result;
}

User.getUserById = async (id) =>{
    const result = JSON.stringify(await pool.query(`SELECT * FROM account WHERE id = ${id}`));
    return result;
}

User.createUser = async (data) =>{
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
    queryCommand = `INSERT INTO account (user_name, password, first_name, last_name, birthday, email, gender, phone) OUTPUT inserted.*`
    + `VALUES ('${newUser.user_name}', '${newUser.password}', '${newUser.first_name}', '${newUser.last_name}', '${newUser.birthday}', '${newUser.email}', ${newUser.gender}, '${newUser.phone}')`;
    let results = JSON.stringify(await pool.query(queryCommand));
    return results;
}

User.updateUser = (id, data) =>{
    pool.query(`UPDATE account SET? WHERE id = ${id}`, data, (err, res) =>{
        if(err){
            console.log(err)
        }
        return {id: res.id, ...data};
    })
}

module.exports = User;
const mssql = require('mssql/msnodesqlv8');
require('dotenv').config();

const config = {
    server: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    driver: process.env.DRIVER,
    options:{
        trustedConnection: false     
    }
}

const connect = new mssql.ConnectionPool(config);

connect.connect(config, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database');
    }
})

module.exports = connect.request();
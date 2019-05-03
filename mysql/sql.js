const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qaz12345',
    database: 'UserDB'
});

connection.connect(err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connect Success');
});

function Query(connection, sql, value) {
    return new Promise((res, rej) => {
        connection.query(sql, value, (error, rows) => {
            if (error) {
                rej(error);
            }
            res(rows);
        });
    });
}

const crud = {
    /** GET */
    get: async (table, property, value) => {
        let result;

        if (value) {
            result = await Query(connection, `SELECT * FROM ${table} WHERE ${property} = ?`, value);
        } else {
            result = await Query(connection, `SELECT * FROM ${table}`);
        }

        return result;
    },

    /** POST */
    post: async (table, value) => {
        const result = await Query(connection, `INSERT INTO ${table} SET ?`, value);
        return result;
    },

    /** PUT */
    put: async (table, property, value) => {
        const result = await Query(connection, `UPDATE ${table} SET ? WHERE ${property} = ?`, [value, value[property]]);
        return result;
    },

    /** DELETE */
    delete: async (table, property, value) => {
        const result = await Query(connection, `DELETE FROM ${table} WHERE ${property} = ?`, value);
        return result;
    }
};

module.exports = crud;
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bcrypt = require('bcrypt');
const app = express();
const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());

//Ask: ?ssl=true removed from connection string in .env? I thought we were supposed to, but directions are saying it should be there.
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log("Database is connected!")
}).catch(err => console.log(err))

app.post('/auth/login', ctrl.login)

app.listen(SERVER_PORT, () => {
   console.log(`Server is running on port ${SERVER_PORT}`); 
})
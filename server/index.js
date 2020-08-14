require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();
const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAg: 1000 * 60 * 60 * 24},
    secret: SESSION_SECRET
}));

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
app.post('/auth/register', ctrl.register)
app.get('/auth/user', ctrl.getUser)
app.post('/auth/logout', ctrl.logout)

app.listen(SERVER_PORT, () => {
   console.log(`Server is running on port ${SERVER_PORT}`); 
})
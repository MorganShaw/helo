require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();
const authCtrl = require('./authController');
const postCtrl = require('./postController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    secret: SESSION_SECRET
}));

//Ask: ?ssl=true removed from connection string in .env. Directions say it should be there, but that's for an outdated version/process. Don't include that in the '
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log("Database is connected!")
}).catch(err => console.log(err))

//Endpoints for authentication
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//Endpoints for posts
app.get('/api/posts/:id', postCtrl.getPosts)
// app.get('/api/post/:id', ctrl.getPost)
// app.post('/api/post/:id', ctrl.createPost)
// app.put('/api/post/:id', ctrl.editPost)
// app.delete('/api/post/:id', ctrl.deletePost)

app.listen(SERVER_PORT, () => {
   console.log(`Server is running on port ${SERVER_PORT}`); 
})
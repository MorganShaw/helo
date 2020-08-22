const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        const [user] = await db.check_user(username);
        if (!user){
            return res.status(404).send('User not found. Please register as a new user.');
        } else {
            const authenticated = bcrypt.compareSync(password, user.password)
            if(authenticated){
                req.session.user = {
                    userId: user.id,
                    username: user.username,
                    profilePic: user.profile_pic
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Username or password incorrect.')
            }
        }

    },
    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password, profilePic} = req.body;
        console.log(req.body);
        const [existingUser] = await db.check_user(username);
        if(existingUser){
            res.status(409).send('User already exists.')
        } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newUser] = await db.create_user([username, hash, profilePic]);
        // req.session.user = newUser[0];
        req.session.user = {
            userId: newUser.id,
            username: newUser.username,
            profilePic: newUser.profile_pic
        }
        res.status(200).send(req.session.user)
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUser: (req, res) => {
        if (req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404);
        }
    }
}
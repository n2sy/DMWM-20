const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
    const login = req.body.login;
    const pwd = req.body.password;

    User.findOne({ login: login })
        .then(u => {
            if (!u) {
                const error = new Error("User Not found !")
                error.statusCode = 401;
                throw error;
            }
            loadedUser = u;
            return bcrypt.compare(pwd, loadedUser.password)
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error("Wrong password!")
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign({
                login: loadedUser.login,
                userId: loadedUser['_id'].toString()
            }, 'secretdmwm20code', { expiresIn: '12h' })

            res.status(200).json({
                message: 'User Logged !',
                token: token
            })
        })

        .catch(err => {
            console.log(err);
        })


}

exports.register = (req, res) => {
    const login = req.body.login;
    const pwd = req.body.password;

    bcrypt.hash(pwd, 12)
        .then(hashedPwd => {
            const newUser = new User({
                login: login,
                password: hashedPwd
            });
            return newUser.save();
        })
        .then(result => {
            res.status(201).json({
                message: 'User successfully created',
                userId: result['_id']
            })
        })
        .catch(err => {
            console.log(err);
        })

}
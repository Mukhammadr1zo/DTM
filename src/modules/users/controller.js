const { loginModel, registerModel } = require("./model.js");
const jwt = require('../../utils/jwt.js')


const login = async (req, res, next) => {
    try {
        const response = await loginModel(req.body)

        if (response.error || !response.length) return next(response)

        res.status(201).send({
            status: 201,
            message: 'successful login',
            token: jwt.sign(response[0].user_id)
        })
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res, next) => {
    try {
        const response = await registerModel(req.body)

        if (response.error || !response.length) return next(response)

        res.status(201).send({
            status: 201,
            message: 'successful register',
            token: jwt.sign(response[0].user_id)
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    login,
    register
}
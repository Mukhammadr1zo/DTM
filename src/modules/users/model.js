const { fetchData } = require('../../utils/postgres.js')
const { LOGIN, REGISTER } = require('./query.js')

const loginModel = async ({ contact, password }) => {
    try {
        return await fetchData(LOGIN, contact, password)
    } catch (error) {
        console.log(error);
    }
}

const registerModel = async ({ fullname, contact, region_id, password, gender }) => {
    try {
        return await fetchData(REGISTER, fullname, contact, region_id, password, gender)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    loginModel,
    registerModel
}
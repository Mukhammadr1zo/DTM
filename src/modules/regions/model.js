const { fetchData } = require('../../utils/postgres.js')
const { GET } = require('./query.js')

const getRegionsModel = async () => {
    try {
        return await fetchData(GET)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getRegionsModel
}
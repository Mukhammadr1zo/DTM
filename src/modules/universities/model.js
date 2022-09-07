const { fetchData } = require('../../utils/postgres.js')
const { GET } = require('./query.js')

const getUniversitiesModel = async ({ first_subject, second_subject }) => {
    try {
        return await fetchData(GET, first_subject, second_subject)
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getUniversitiesModel
}
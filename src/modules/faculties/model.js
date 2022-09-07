const { fetchData } = require('../../utils/postgres.js')
const { GET } = require('./query.js')

const getFacultiesModel = async ({ faculty_id }) => {
    try {
        return await fetchData(GET, faculty_id)
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getFacultiesModel
}
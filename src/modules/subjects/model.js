const { fetchData } = require('../../utils/postgres.js')
const { GETFIRST, GETSECOND } = require('./query.js')

const getFirstSubjectModel = async () => {
    try {
        return await fetchData(GETFIRST)
    } catch (error) {
        console.log(error);
    }
}

const getSecondSubjectModel = async ({ first_subject_id }) => {
    try {
        return await fetchData(GETSECOND, first_subject_id)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getFirstSubjectModel,
    getSecondSubjectModel
}
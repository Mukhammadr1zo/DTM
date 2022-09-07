const { fetchData } = require('../../utils/postgres.js')
const { GET, GETBYID, GETHIGHSCORE, POST } = require('./query.js')

const postResultsModel = async ({ first_subject, second_subject, first_tests_count, second_tests_count, faculties, time, first_subject_id, second_subject_id }, user_id) => {
    try {
        return await fetchData(POST, first_subject, second_subject, time, user_id, faculties, first_tests_count, second_tests_count, first_subject_id, second_subject_id)
    } catch (error) {
        console.log(error);
    }
}

const getResultsByIdModel = async ({ result_id }) => {
    try {
        
        return await fetchData(GETBYID, result_id)
    } catch (error) {
        console.log(error);
    }
}

const getResultsModel = async (user_id) => {
    try {
        return await fetchData(GET, user_id)
    } catch (error) {
        console.log(error);
    }
}

const getHighestResultsModel= async () => {
    try {
        return await fetchData(GETHIGHSCORE)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postResultsModel,
    getResultsModel,
    getResultsByIdModel,
    getHighestResultsModel
}
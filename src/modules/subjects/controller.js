const { getFirstSubjectModel, getSecondSubjectModel } = require("./model.js");

const getFirstSubject = async (req, res, next) => {
    try {
        const response = await getFirstSubjectModel()

        if (response.error) return next(response)

        res.status(200).send({
            status: 200,
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

const getSecondSubject = async (req, res, next) => {
    try {
        const response = await getSecondSubjectModel(req.params)

        if (response.error) return next(response)

        res.status(200).send({
            status: 200,
            data: response
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getFirstSubject,
    getSecondSubject
}
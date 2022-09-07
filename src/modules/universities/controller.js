const { getUniversitiesModel } = require("./model.js");

const getUniversities = async (req, res, next) => {
    try {
        const response = await getUniversitiesModel(req.query)

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
    getUniversities
}
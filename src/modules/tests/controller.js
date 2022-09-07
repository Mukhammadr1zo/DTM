const { getTestsModel } = require("./model.js");

const getTests = async (req, res, next) => {
    try {
        const response = await getTestsModel(req.query)

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
    getTests
}
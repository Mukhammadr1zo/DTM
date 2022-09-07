const { getRegionsModel } = require("./model.js");

const getRegions = async (req, res, next) => {
    try {
        const response = await getRegionsModel()

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
    getRegions
}
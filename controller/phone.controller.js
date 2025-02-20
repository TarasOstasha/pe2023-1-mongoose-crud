const createHttpError = require("http-errors");
const { Phone } = require("../models");


module.exports.createPhone = async (req, res, next) => {
    const { body } = req;

    try {
        const createdPhone = await Phone.create(body);

        if (!createdPhone) {
            return next(createHttpError(400, 'Bad request'));
        }

        res.status(201).send({ data: createdPhone });
    } catch (err) {
        next(err);
    }
}

// get phones through mongoose populate
module.exports.getPhones = async (req, res, next) => {
    try {
        const foundPhones = await Phone.find().populate('userId');
        if(!foundPhones) {
            return next(createHttpError(404, 'Phone Not Found'));
        }
        res.status(200).send({ data: foundPhones });
    } catch (err) {
        next(err);
    }
}

module.exports.getPhoneById = async (req, res, next) => {
    const { phoneId } = req.params;
    try {
        const foundPhone = await Phone.findById(phoneId);
        if (!foundPhone) {
            return next(createHttpError(404, 'Phone Not Found'));
        }
        res.status(200).send({ data: foundPhone });
    } catch (error) {
        next(error);
    }

}

module.exports.updatePhoneById = async (req, res, next) => {
    const { params: { phoneId }, body } = req;
    try {
        const updatedPhone = await Phone.findByIdAndUpdate(phoneId, body, {
            new: true,
            runValidators: true, // on update validators (except required)
        });

        if (!updatedPhone) {
            return next(createHttpError(404, 'Phone Not Found'));
        }

        res.status(200).send({ data: updatedPhone });
    } catch (error) {
        next(error);
    }
}

module.exports.deletePhoneById = async (req, res, next) => {
    const { phoneId } = req.params;

    try {
      const deletedPhone = await Phone.findByIdAndDelete(phoneId);
  
      if (!deletedPhone) {
        return next(createHttpError(404, 'Phone Not Found'));
      }
      res.status(204).send();
    } catch (err) {
      next(err);
    }
}
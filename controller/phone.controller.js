const { Phone } = require("../models");


module.exports.createPhone = async (req, res, next) => {
    const { body } = req;

    try {
      const createdUser = await User.create(body);
  
      if (!createdUser) {
        return next(createHttpError(400, 'Bad request'));
      }
  
      res.status(201).send({ data: createdUser });
    } catch (err) {
      next(err);
    }
}

// get phones through mongoose populate
module.exports.getPhones = async (req, res, next) => {
    try {
        const foundPhones = await Phone.find().populate('userId');
        res.status(200).send({ data: foundPhones }); 
    } catch (err) {
        next(err);
    }
}

module.exports.getPhoneById = async (req, res, next) => {
    const { userId } = req.params;
}

module.exports.updatePhoneById = async (req, res, next) => {
    
}

module.exports.deletePhoneById = async (req, res, next) => {
    
}
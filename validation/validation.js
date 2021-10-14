const idValidationSchema = require('./idValidationSchema');
const todoValidationSchema = require('./todoValidationSchema');

const validation = (keys) => async (req, res, next) => {
  try {
    if (keys.includes('id')) await idValidationSchema.validate({id: req.params.id});
    if (keys.includes('body')) await todoValidationSchema.validate(req.body);
    next();
    return;
  } catch (error) {
    return res.status(400).json({error});
  }
}

module.exports = validation;

const yup = require('yup');

const idValidationSchema = yup.object().shape({
  id: yup.number().required().positive().integer()
})

module.exports = idValidationSchema;

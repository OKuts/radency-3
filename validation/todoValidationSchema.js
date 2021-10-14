const yup = require('yup');

const todoValidationSchema = yup.object().shape({
  name:  yup.string().required().min(3),
  categoryId: yup.number().required().moreThan(-1).integer(),
  content: yup.string().required().min(10),
})

module.exports = todoValidationSchema;

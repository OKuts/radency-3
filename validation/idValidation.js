const yup = require('yup');

const idSchema =yup.object().shape({
  id: yup.number().required().positive().integer()
})



module.exports = idSchema;

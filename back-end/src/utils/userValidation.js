const yup = require('yup');

const userSchema = yup.object().shape({
  name: yup.string().min(12).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

module.exports = userSchema;

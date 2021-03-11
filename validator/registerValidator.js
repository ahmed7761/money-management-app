const validator = require('validator');

const validate = user => {
  let error = {}

  if(!user.name) {
    error.name = 'Please provide your name'
  }

  if(!user.email) {
    error.email = 'Please provide your email'
  } else if (!validator.isEmail(user.email)) {
    error.email = 'Please provide valid email'
  }

  if(!user.password) {
    error.password = 'Please provide your password'
  } else if (user.password < 6) {
    error.password = 'Password must be greater than 6 character'
  }

  if(!user.confirmPassword) {
    error.confirmPassword = 'Please provide your confirm password'
  } else if (user.password !== user.confirmPassword) {
    error.confirmPassword = ' Confirm password does not match'
  }

  return {
    error,
    isValid: Object.keys(error).length === 0
  }
};

module.exports = validate;

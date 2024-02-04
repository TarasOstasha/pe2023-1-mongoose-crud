const mongoose = require('mongoose');
const yup = require('yup');
// required
// default
// Numbers, Date: min, max
// Strings: enum, match, minLength, maxLength

const EMAIL_VALIDATION_SCHEMA = yup.string().email();

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [2, 'First name must be 2 symbols at least'],
      maxLength: 64,
      match: /^[A-Z][a-z]+$/,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 64,
    },
    email: {
      type: String,
      validate: {
        validator: v => EMAIL_VALIDATION_SCHEMA.isValidSync(v),
      },
      required: true,
    },
    birthday: {
      type: Date,
      max: new Date(),
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    isMerried: {
      type: Boolean,
      default: false,
    },
    workExperience: { type: Number, min: 0 },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

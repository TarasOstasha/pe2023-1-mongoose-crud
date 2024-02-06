const mongoose = require('mongoose');
const yup = require('yup');
const { COLORS } = require('../constant');

const SERIAL_NUMBER_VALIDATION_SCHEMA = yup.string().min(2).matches(/^\d[a-zA-Z0-9]{1,33}$/).required('Serial Number Required!');

const phoneSchema = new mongoose.Schema(
    {
        model: {
            type: String,
            required: [true, 'Model required'] // build-in method
        },
        brand: {
            type: String,
            required: [true, 'Brand required']
        },
        yearManufactured: {
            type: Date,
            max: new Date(),
        },
        core: {
            type: String,
            validate: {
                validator: function (v) {
                    return (/^[A-Z][a-zA-Z0-9]{1,17}$/.test(v));
                },
                message: props => `${props.value} is not a valid format!` // custom validation method
            },
        },
        ram: {
            type: String,
        },
        isFNC: {
            type: Boolean,
            default: false,
        },
        serialNumber: {
            type: String,
            validate: {
                validator: v => SERIAL_NUMBER_VALIDATION_SCHEMA.isValid(v) // custom validation method
            }
        },
        color: {
            type: String,
            enum: COLORS
        },
        userId: {
            type: mongoose.ObjectId,
            ref: 'User'
        }
    }
);

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
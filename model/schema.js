const mongoose = require('mongoose')
const { Schema, model } = mongoose

const contact = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
})

const Contacts = model('contact', contact)

module.exports = Contacts
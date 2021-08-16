const mongoose = require('mongoose')

// Schema 
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    location: {type: String, required: true},
    profileImage: String,
    about: String,
    media: String,
})


const User = mongoose.model('User', userSchema)

module.exports = User
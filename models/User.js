const mongoose = require('mongoose')

// Schema 
const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    name: {type: String, required: true},
    category: {type: String, required: true},
    location: {type: String, required: true},
    profileImage: String,
    about: String,
    image1: String,
    image2: String,
    image3: String,
})


const User = mongoose.model('User', userSchema)

module.exports = User
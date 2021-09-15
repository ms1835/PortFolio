const mongoose = require('mongoose')
// ------Schema-------
// name
// email
// message

const querySchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    message: {
        type: String,
        // required: true
    }
},{timestamps:true})

const Query = mongoose.model('Query',querySchema)
module.exports={Query}
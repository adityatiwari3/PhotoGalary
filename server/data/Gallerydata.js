const mongoose = require('mongoose');

const gallerydata= new mongoose.Schema({
    Name : {
        type: String,
        required: true
    },
    URL : {
        type: String,
        required: true
    },
    Detail : {
        type: String,
        required: true
    }
})


const Data = mongoose.model('GALLERYDATA',gallerydata);
module.exports = Data;
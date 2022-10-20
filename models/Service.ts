const mongoose = require("mongoose");


const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
         type:String,
         required:true
    },
    service:
    {
        name: { type: String, required: true },
    },

    price: {
        type: Number,
        required: true
    },
    // source: {
    //     file: { type: Buffer, required: true },
    //     filename: { type: String, required: true },
    //     mimetype: { type: String, required: true }
    // },
    // status:{
    //     type: String,
    //     default: 'Pending',
    //     required: true
    // }
},{timestamps:true})


mongoose.models = {};
export default mongoose.model('Service', ServiceSchema);
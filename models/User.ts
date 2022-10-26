const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
         type:String,
         required:true
    },
    password: {
        type: String,
        required: true
    },
   number: {
        type: Number,
        required: true
    },
   
    
})
mongoose.models = {};
export default mongoose.model("User", UserSchema);
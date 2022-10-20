const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    UserEmail:{
         type:String,
         required:true
    },
    password: {
        type: Number,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
   
    
})

export default mongoose.model("User", UserSchema);
import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    username: String,

    emailid: String,
 
    password: String,


    resetPasswordTokenExpiery: String,

});

const userModel =  mongoose.model('userModel', userSchema);

export default userModel;
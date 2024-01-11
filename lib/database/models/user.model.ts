import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    clerkid:{
        type:String,
    },
    email:{
        type:String,
    },
    username:{
        type:String,
    },
   
});


const User = models.User || model('User' , userSchema);

export default User;

import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    area: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
    firstName:{
        type:String, 
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastName :{
        type:String, 
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    email : {
        type:String, 
        required: true, 
        lowercase: true, 
        unique: true
    },
    mobileNumber : {
        type:String, 
        required: true, 
        unique: true,
        min: 10,
        max: 10
    },
    username : {
        type:String, 
        required: true, 
        lowercase: true, 
        trim: true,
        unique: true
    },
    password : {
        type:String, 
        required: true,
        trim: true
    },
    address: { type: addressSchema, default: {} },
    cartItems:{type:[String], default:[]}
})

//Creating Collection
const User = mongoose.model("user", userSchema);
export default User;

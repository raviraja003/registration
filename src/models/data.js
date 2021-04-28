const mongoose = require("mongoose");

const databaseSchema = new mongoose.Schema({
    Firstname:{
        type:String
    },
    Lastname:{
        type:String
    },
    Email:{
        type:String
    },
    password:{
        type:String
    },
    gender:{
        type:String
    },
    Phone:{
        type:String
    },
    age:{
        type:String
    },
    Confirmpassword:{
        type:String
    },
    city:{
        type:String
    }
 })

 const Register = new mongoose.model('Register',databaseSchema)

 module.exports= Register;
const mongoose = require('mongoose');

var schema = new.mongoose.Schema({
    username:{
        type:String,
        required:true
    }, 

    firstname:{
        type:String,
        required:true
    }, 

    lastname:{
        type:String,
        required:true,
        
    }, 

    email:{
        type:String,
        required:true,
        unique: true
    },
    usertype:String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb



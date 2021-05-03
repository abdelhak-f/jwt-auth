const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({    
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required:true,
        unique: true,
        match: [/^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/,
    "please provide a valid email"
]
    },
    password : {
        type: String,
        required:true
    },
    role : {
        type : string,
        default: "user",
        enum: 
    }
},
{timestamps: true}
);


module.exports = mongoose.model('User', userSchema);
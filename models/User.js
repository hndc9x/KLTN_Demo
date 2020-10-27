const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true // email độc nhất với mỗi người dùng
    },
    password:{
        type:String,
        required:true
    },
    avatar:{ 
        type:String
    },
    role:{  // 0 nếu là admin -- 1 nếu là user
        type:Number,
        default:0
    },
    history:{ // lịch sử mua hàng
        type:Array,
        default:[],
    },
});

module.exports = User = mongoose.model('User',UserSchema)
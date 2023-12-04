const mongoose= require("mongoose");

// schema

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //reference to Post Model
    },
    user:{
        type:String,
        required:true,
    },
});

module.exports=mongoose.model("Like",likeSchema);

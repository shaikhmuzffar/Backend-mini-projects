// importing models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// buisness logic
exports.createComment = async (req,res) =>{
   try{
     // fetch data from user req
     const {post,user,body} = req.body;
     // creating object
     const comment= new Comment({
         post,user,body
     });
     // save the comment into the db
     const savedComment =await comment.save();

    //  find Post by ID, add the new comment to the comments array
    const updatedPost= await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
    .populate("comments").exec();  

    res.json({
        post:updatedPost,
    });

   }
   catch(error){
    return res.status(500).json({
        error:"error while creating comment"
    })

   }
}



//populate the comments array with comment documents
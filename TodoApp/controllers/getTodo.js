// imported todo scheama from model
const Todo = require("../models/Todo");

// defining route handler
exports.getTodo =  async(req, res) =>{

  try{
      // fetch all the todo items from database
      const todos = await Todo.find({});

      // response
      res.status(200).json({
          success: true,
          data: todos,
          message:"entire todo data is fetched"
      });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({
        success: false,
        error:err.message,
        message:'server error',
    });
  }
}


exports.getTodoById =  async(req, res) =>{

    try{
        // fetch single todo based on id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});

        // data for given id not found
       if(!todo){
        res.status(404).json({
            success: false,
            message:"no data found for given id",
        })
       }
       
        // data for given id  found
       res.status(200).json({
        success: true,
        data: todo,
        message:`todo for ${id} sucessfully fetched`
       })
        
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error:err.message,
            message:'server error',
        });
      }
  }
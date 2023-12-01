// imported todo scheama from model
const Todo = require("../models/Todo");

// define router handler
exports.createTodo = async (req, res) => {
    try {
        // extract title and description from request body
        const { title, description } = req.body;
        // create new todo object and insert in db
        const response = await Todo.create({ title, description });
        // send json response with sucess flag
        res.status(200).json(
            {
                success: true,
                data:response,
                message:'Entry created successfully'
            }
        )

    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success: false,
                data:'internal server error',
                message:err.message,
            }
        )
    }
}
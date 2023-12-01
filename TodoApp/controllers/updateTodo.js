// imported todo scheama from model
const Todo = require("../models/Todo");

// defining the route handler
exports.updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() },
        )

        res.status(200).json({
            success:true,
            data:todo,
            message:'updated successfully'
        })

    } catch (err) {
        console.error(err)
        res.status(500).json({
            success:false,
            eror:err.message,
            message:'updated successfully'
        })
    }
}
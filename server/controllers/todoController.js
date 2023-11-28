import todoModel from "../models/todoModel.js";

export const getAllTodo = (req, res) => {
    todoModel.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Todo not found", error: err.message })
        );
};

export const postCreateTodo = (req, res) => {
    todoModel.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) =>
            res
                .status(440)
                .json({ message: "Failed to add todo", error: err.message })
        );
};

export const putUpdateTodo = (req, res) => {
    todoModel.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update todo", error: err.message })
        );
};

export const deleteTodo = (req, res) => {
    todoModel.findOneAndDelete(req.params.id, req.body)
        .then((data) =>{
            console.log();
            res.json({ message: "todo deleted successfully", data })}
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};
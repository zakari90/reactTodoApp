import mongoose from "mongoose";



const todoSchema = mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    },
})


const todoModel = mongoose.model("todo",todoSchema)

export default todoModel
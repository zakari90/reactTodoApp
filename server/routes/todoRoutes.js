import express from "express";
import { deleteTodo, getAllTodo, postCreateTodo, putUpdateTodo } from "../controllers/todoController.js";


const router = express()


/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllTodo);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateTodo);


/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id",putUpdateTodo);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteTodo);



export default router;

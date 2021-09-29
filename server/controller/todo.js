
import Todo from '../models/todo.js';


export const readTodo = async (req, res) => {
    try {

        const todos = await Todo.find();
        res.status(200).send(todos);
    }
    catch (error) {
        res.status(404).send({ error: error.message })
    }
}
export const createTodo = async (req, res) => {
    console.log("Create is called", req.body);
    const todo = new Todo(req.body);
    try {

        await todo.save();
        res.status(201).send(todo);
    }
    catch (error) {
        res.status(409).send({ error: error.message })
    }
}
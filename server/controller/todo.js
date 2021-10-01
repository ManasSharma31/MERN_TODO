
import Todo from '../models/todo.js';
import mongoose from 'mongoose';


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
    var myId = mongoose.Types.ObjectId();
    console.log("Create is called", myId);
    const { title, description } = req.body;
    var temp = {};
    temp.title = title;
    temp.description = description;
    temp.id = myId;
    const todo = new Todo(temp);
    try {

        await todo.save();
        res.status(201).send(todo);
    }
    catch (error) {
        res.status(409).send({ error: error.message })
    }
}

export const updateTodo = async (req, res) => {


    const id = req.params.id;
    console.log(id);


    const { title, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send(`${id} id not found`);
    }
    const todo = { title, description, id };
    await Todo.findByIdAndUpdate(id, todo, { new: true })
    res.status(200).send(todo);
}
export const deleteTodo = async (req, res) => {

    const id = req.params.id;
    console.log("I was called", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send(`${id} id not found`);
    }
    try {
        await Todo.findByIdAndRemove(id)
        res.status(200).send({ message: "Successfully deleted" });
    }
    catch (error) {
        res.status(404).send("Item cannot be deleted due to some issue");
    }
}
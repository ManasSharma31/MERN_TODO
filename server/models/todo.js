import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    description: String,
}, { timestamps: true })

const Todo = mongoose.model('todocollections', todoSchema);
export default Todo;

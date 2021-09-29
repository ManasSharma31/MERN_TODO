import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();


const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

const mongodb_URL = "mongodb+srv://admin-manas:atlas31@cluster0.fv4vq.mongodb.net/todoDB?retryWrites=true&w=majority";

mongoose.connect(mongodb_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("DB successfully running")
}).catch(err => {
    console.log(err);
})


app.get("/add", (req, res) => {
    console.log("Add was called");
    res.status(200).send("Added Successfully");

})


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})

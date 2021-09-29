import axios from '../axios.js';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        borderRadius: "10px",
        width: "70vw",
        minWidth: "300px",
        margin: "0px auto",
        marginTop: "80px",
        backgroundColor: "whitesmoke",
        boxShadow: "5px 5px 5px rgb(0,0,0)",
        border: "1px solid black"
    },
    form: {
        display: "flex",
        width: "80%",
        flexDirection: "column",
        alignItems: "center",
        "& input": {
            margin: "10px 0",
            border: "none",
            outline: "0",
            width: "100%",
            maxWidth: "300px",
            padding: "10px",
            borderRadius: "4px",

        }
    },
    button: {
        textTransform: "inherit !important",
        backgroundColor: "black !important",
        color: "white !important",
        marginTop: "30px",
    }
})))


export default function Form() {
    const [todos, setTodos] = useState({
        title: "",
        description: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setTodos(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const addItem = async (e) => {
        e.preventDefault();
        await axios.post('/add', todos)
            .then(res => {
                console.log(res.body)
            })
            .catch(err => {
                console.log(err);
            })

    }
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <h2>Add your task..</h2>
            <form className={classes.form}>
                <input type="text" style={{ textTransform: "capitalize" }} value={todos.title} name="title" required placeholder="Title" onChange={handleChange} />
                <input type="text" value={todos.description} name="description" placeholder="Describe your task" onChange={handleChange} />
            </form>
            <Button onClick={addItem} className={classes.button} variant="outlined">Add</Button>

        </div>
    )
}

import axios from '../axios.js';
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Task from './Task.js';


const override = css`
  display: block;
  margin: 10px auto;
  border-color: red;
`;

const useStyle = makeStyles((theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        borderRadius: "10px",
        width: "50vw",
        minWidth: "300px",
        margin: "0px auto",
        marginTop: "70px",
        backgroundColor: "#3F3F3F",
        boxShadow: "5px 5px 5px rgb(0,0,0)",
        border: "1px solid black"
    },
    form: {
        display: "flex",
        // width: "100%",
        flexDirection: "column",

        "& input": {
            margin: "10px 0",
            border: "none",
            outline: "0",
            width: "100%",
            fontSize: "20px",
            maxWidth: "300px",
            padding: "10px",
            height: "40px",
            borderRadius: "4px",

        }
    },
    button: {
        textTransform: "inherit !important",
        backgroundColor: "black !important",
        color: "white !important",
        marginTop: "30px",
    },
    list: {
        width: "90vw",
        margin: "0 auto",

    }
})))


export default function Form() {
    const [todos, setTodos] = useState({
        title: "",
        description: "",
        id: null,
    })
    const [loading, setLoading] = useState(false);
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        fetch();
    }, [])


    const fetch = async () => {
        await axios.get("/")
            .then((res) => {
                console.log("Manas:", res.data);
                setTodoList(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setTodos(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const addItem = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (todos.id === null) {

            await axios.post('/', todos)
                .then(res => {
                    const data = res.data;
                    setTodoList([...todoList, data]);
                    setLoading(false);
                    setTodos({
                        title: "",
                        description: "",
                        id: null
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            await axios.patch(`/${todos.id}`, todos).then(res => {
                console.log(res.data);
                const data = res.data;
                var list = todoList.filter(todo => todos.id !== todo._id);
                list = [...list, data];
                setTodoList(list);
                setLoading(false);
                setTodos({
                    title: "",
                    description: "",
                    id: null
                });

            })
                .catch(err => {
                    console.log(err)
                });
        }

    }

    const classes = useStyle();
    return (
        <>
            <div className={classes.root}>
                <h2>Add your task..</h2>
                <form className={classes.form}>
                    <input type="text" style={{ textTransform: "capitalize" }} value={todos.title} name="title" required placeholder="Title" onChange={handleChange} />
                    <input type="text" value={todos.description} name="description" placeholder="Describe your task" onChange={handleChange} />
                </form>
                <Button onClick={addItem} className={classes.button} variant="outlined">Add</Button>

            </div>
            <ClipLoader color="red" loading={loading} css={override} size={30} />

            <div className={classes.list}>
                {
                    todoList?.map(todo => (
                        <Task key={todo.id} id={todo._id} title={todo.title} des={todo.description} todoList={todoList} setTodoList={setTodoList} setTodos={setTodos} />
                    ))
                }
            </div>

        </>
    )
}

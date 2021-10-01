
import { makeStyles } from '@mui/styles';
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import axios from '../axios';

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        padding: "10px",
        border: '1px solid #A2A2A2',
        margin: "10px 0px",
        borderRadius: "0 10px 0 10px",
        transition: 'transform 500ms ease-in-out',
        "&:hover": {
            backgroundColor: "black",
            transform: "scale(1.01)",
            color: "white",
            "& $options >*": {
                color: "whitesmoke"

            }
        }
    },
    content: {
        flex: "1",
        "& h3": {
            marginBottom: "5px",
            fontWeight: "600"
        },
        "& small": {
            fontWeight: "800",
            fontSize: "12px",
        }

    },
    options: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }


}))

function Task(props) {

    const { title, id, des, todoList, setTodoList, setTodos } = props;


    const deleteTodo = async () => {
        await axios.delete(`/${id}`).then(res => {
            console.log(res.message);
            const list = todoList.filter(todo => id !== todo._id);
            setTodoList(list);


        }).catch(err => {
            console.log(err);
        })


    }

    const updateTodo = async () => {
        const todo = { title, description: des, id };
        setTodos(todo);

    }
    const classes = useStyle();


    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <h3>{title}</h3>
                <small>{des}</small>
            </div>
            <div className={classes.options}>
                <IconButton onClick={deleteTodo}>
                    <DeleteForeverIcon />
                </IconButton>
                <IconButton onClick={updateTodo}>
                    <EditIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Task

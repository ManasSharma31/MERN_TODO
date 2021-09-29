
import { makeStyles } from '@mui/styles';
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        padding: "10px",
        border: '1px solid #A2A2A2',
        margin: "10px 0px",
        borderRadius: "0 10px 0 10px"
    },
    content: {
        flex: "1",
        "& h3": {
            marginBottom: "5px",
            fontWeight: "600"
        },
        "& small": {
            fontWeight: "500",
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

    const { title, id, des } = props;
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <h3>{title}</h3>
                <small>{des}</small>
            </div>
            <div className={classes.options}>
                <IconButton>
                    <DeleteForeverIcon />
                </IconButton>
                <IconButton>
                    <EditIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Task

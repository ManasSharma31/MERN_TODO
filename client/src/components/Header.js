import React from 'react'
import { makeStyles } from '@mui/styles';

import MenuIcon from '@mui/icons-material/Menu';



const useStyle = makeStyles((theme) => ({
    root: {
        height: "70px",
        display: "flex",
        width: "100vw",
        position: "fixed",
        top: "0",
        zIndex: "1",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 10px",
        backgroundColor: "#3F3F3F",
        color: "white",
    }
}))

export default function Header() {

    const classes = useStyle();
    return (
        <div className={classes.root}>
            <h1>Todos App</h1>
            <MenuIcon />

        </div>
    )
}

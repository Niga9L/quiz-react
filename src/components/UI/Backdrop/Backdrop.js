import React from "react";
import classes from './Backdrop.module.sass'

const Backdrop = props => {
    return (
        <div className={classes.Backdrop} onClick={props.onClick}/>
    )
}

export default Backdrop
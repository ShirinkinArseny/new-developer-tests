import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    userPreviewLine: {
        display: "flex",
        fontFamily: "sans-serif",
        justifyContent: "space-between",
        fontSize: "14px",
        paddingTop: "4px",
        paddingBottom: "4px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        "&:last-child": {
            borderBottom: "none",
            paddingBottom: "0"
        }
    },
    email: {
        opacity: 0.4
    }
}))

const UserPreviewLine = (props) => {
    const classes = useStyles();
    return <div className={classes.userPreviewLine}>
        <div className={classes.username}>
            {props.name}
        </div>
        <div className={classes.email}>
            {props.email}
        </div>
    </div>
}

export default UserPreviewLine;
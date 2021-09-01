import React, {useState} from "react";
import {Button} from "./Controls/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Switch} from "./Controls/Switch";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        minHeight: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    switch: {
        marginBottom: 10,
    },
    button: {
        margin: "10px 0",
    },
}));

export const JsTest = () => {
    const classes = useStyles();
    const [array, setArray] = useState([true, false, true, false]);
    const [checkResult, setCheckResult] = useState(null);

    const handleClick = (index) => {
        setArray((prev) =>
            prev.map((check, i) => {
                if (i === index) return !check;
                return check;
            })
        );
    };

    const checkArray = (array, requiredValues) => {
        //ES2019 magic
        const presentedKeys = Object.fromEntries(array.map(a => [a, true]))
        return requiredValues.map(r => presentedKeys[r] || false).reduce((a, b) => a && b, true)
    };

    const handleCheck = () => {
        setCheckResult(
            checkArray(array, [true, false])
                ? "Both values are presented"
                : "Nope, not at all"
        )
    };

    return (
        <div className={classes.root}>
            <div>
                {array.map((item, index) => (
                    <Switch
                        className={classes.switch}
                        key={index}
                        onClick={() => handleClick(index)}
                        label={index}
                        checked={array[index]}
                    />
                ))}
                <Button onClick={handleCheck} className={classes.button}>
                    Check
                </Button>
                <br/>
                {checkResult !== null && checkResult.toString()}
            </div>
        </div>
    );
};

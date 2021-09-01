import React, {useMemo, useState} from "react";
import {Button} from "../Controls/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        minHeight: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    buttonsWrapper: {
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        marginBottom: 15,
    },
}));

export const View2 = () => {
    const classes = useStyles();
    const [slowCounter, setSlowCounter] = useState(0);
    const [fastCounter, setFastCounter] = useState(0);

    const slowIncrement = () => {
        setSlowCounter(prev => prev + 1);
    };

    const fastIncrement = () => {
        setFastCounter(prev => prev + 1);
    };

    const calculatedValue = useMemo(() => {
            let blackhole = 0;
            /*
            This loop can potentially be dead-code-eliminated,
            because 'i' is never used.
            Blackhole is used to fool the optimiser and
            to make slowpath REALLY be slow.

            Average time per call, ms
            Without blackhole:    220
            With    blackhole:   2100
             */
            for (let i = 0; i < 1000000000; i++) {
                blackhole += i;
            }
            return slowCounter + " bh=" + blackhole;
        },
        [slowCounter]
    );

    return (
        <div className={classes.root}>
            <div>
                <h4>{calculatedValue}</h4>
                <div className={classes.buttonsWrapper}>
                    <Button onClick={slowIncrement} className={classes.button}>
                        Slow Increment
                    </Button>
                </div>
                <h4>{fastCounter}</h4>
                <div className={classes.buttonsWrapper}>
                    <Button onClick={fastIncrement} className={classes.button}>
                        Fast Increment
                    </Button>
                </div>
            </div>
        </div>
    );
};

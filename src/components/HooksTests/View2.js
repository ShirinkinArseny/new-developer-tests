import React, { useState } from "react";
import { Button } from "../Button";
import { makeStyles } from "@material-ui/core/styles";

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
    //copy increment code from view1
  };

  const fastIncrement = () => {
    //copy increment code from view1
  };

  const calculate = () => {
    for (let i = 0; i < 1000000000; i++) {
      //do something
    }
    return slowCounter;
  };

  return (
    <div className={classes.root}>
      <div>
        <h4>{calculate()}</h4>
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

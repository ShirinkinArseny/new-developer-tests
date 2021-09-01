import React, { useState } from "react";
import { Button } from "../Controls/Button";
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
    //gap: 10px would be enough, but safari cant into flex-gap
    "& *": {
      marginRight: "10px",
      "&:last-child": {
        marginRight: "0"
      }
    }
  },
}));

export const View1 = () => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);

  const incrementBy1 = () => {
    setCounter((prev) => prev + 1);
  };

  const incrementBy1000 = () => {
    for (let i = 0; i < 1000; i++) {
      //should incrementBy1 be implemented in the way that screws up this?
      incrementBy1()
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <h4>{counter}</h4>
        <div className={classes.buttonsWrapper}>
          <Button onClick={incrementBy1} className={classes.button}>
            Increment by 1
          </Button>
          <Button onClick={incrementBy1000} className={classes.button}>
            Increment by 1000
          </Button>
        </div>
      </div>
    </div>
  );
};

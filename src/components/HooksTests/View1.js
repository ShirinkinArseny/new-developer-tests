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
  },
}));

export const View1 = () => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);

  const incrementBy1 = () => {
    //do something
  };

  const incrementBy1000 = () => {
    //ATTENTION! Don't remove "for" cycle. That's the idea of this task
    for (let i = 0; i < 1000; i++) {
      //increment counter by 1 here
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

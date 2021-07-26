import React, {useState} from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "./Button";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    minHeight: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  list: {
    minWidth: 400,
    listStyle: "none",
    borderRadius: 5,
    padding: "20px 25px",
    boxShadow: "1px 2px 10px rgba(0,0,0,0.2)",
  },
  buttonsWrapper: {
    width: "100%",
    marginBottom: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const ListView = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([])

  const getUsers = () => {
    //Timeout to simulate a slow connection or a heavy request
    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/users");
    }, 1000);
  };

  const handleNameSort = () => {
    //sort by name code here
  };

  const handleEmailSort = () => {
    //sort by email code here
  };

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        <li className={classes.buttonsWrapper}>
          <Button onClick={handleNameSort}>Sort by Name</Button>
          <Button onClick={handleEmailSort}>Sort by Email</Button>
        </li>
        {/*Display users here*/}
      </ul>
    </div>
  );
};

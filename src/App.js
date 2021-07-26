import React from "react";
import { makeStyles } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import { HeaderMenu } from "./components/HeaderMenu";
import logo from "./assets/images/Flowster-Logo-Main.svg";
import { ListView } from "./components/ListView";
import { View1 } from "./components/HooksTests/View1";
import { View2 } from "./components/HooksTests/View2";

const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
  },
  header: {
    position: "sticky",
    width: "100%",
    height: 80,
    top: 0,
    padding: "0 10vw",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#FFF",
  },
  headerLogo: {
    height: "50%",
    objectFit: "contain",
  },
  content: {
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src={logo} alt="Flowster" className={classes.headerLogo} />
        <HeaderMenu />
      </div>
      <div className={classes.content}>
        <Switch>
          <Route exact path="/api" component={ListView} />
          <Route exact path="/react_1" component={View1} />
          <Route exact path="/react_2" component={View2} />
          <Redirect to={"/api"} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

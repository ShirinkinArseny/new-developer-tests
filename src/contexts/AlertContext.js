import React, { createContext, useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const AlertContext = createContext(undefined);

export const useAlert = () => useContext(AlertContext);

const useStyles = makeStyles(() => ({
  alertWrapper: {
    position: "fixed",
    left: "50vw",
    top: 30,
    transform: "translateX(-50%)",
    padding: 20,
    background: "#288CBE",
    color: "#FFF",
    borderRadius: 3,
    zIndex: 1000,
    transition: "all .3s",
  },
  hidden: {
    opacity: 0,
    transform: "translateX(-50%) translateY(calc(-100% - 20px))",
  },
}));

export const AlertProvider = ({ children }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    visible: false,
    text: "",
  });

  const show = (message) => {
    setState({
      visible: true,
      text: message,
    });
  };

  useEffect(() => {
    const timeout = () => {
      setState((prev) => ({
        ...prev,
        visible: false,
      }));
    };
    if (state.visible) {
      setTimeout(timeout, 1500);
    }
    return () => clearTimeout(timeout);
  }, [state]);

  return (
    <AlertContext.Provider
      value={{
        show,
      }}
    >
      <div
        className={clsx(classes.alertWrapper, !state.visible && classes.hidden)}
      >
        {state.text}
      </div>
      {children}
    </AlertContext.Provider>
  );
};

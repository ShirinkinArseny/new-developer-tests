import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  button: {
    outline: "none",
    background: "#288CBE",
    color: "#FFF",
    border: "none",
    borderRadius: 3,
    padding: "16px 8px",
    fontSize: 18,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
    },
  },
}));

export const Button = ({ onClick, children, className }) => {
  const classes = useStyles();

  return (
    <button className={clsx(classes.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

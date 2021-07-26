import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  switch: {
    border: "2px solid",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "all .2s ease",
  },
  bullet: {
    transition: "all .2s ease",
    borderRadius: "100%",
    background: "#FFF",
  },
  checked: {
    borderColor: "#288CBE",
    background: "#288CBE",
  },
  unchecked: {
    borderColor: "rgba(0,0,0,0.1)",
    background: "rgba(0,0,0,0.2)",
  },
  disabled: {
    cursor: "default",
    opacity: 0.4,
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
    color: "#000",
  },
}));

export const Switch = ({
  checked = false,
  onClick,
  label = "",
  className = "",
  size = 24,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <div
        className={clsx(
          classes.switch,
          checked ? classes.checked : classes.unchecked
        )}
        style={{ size, width: size * 2, borderRadius: size / 2 }}
        onClick={onClick}
      >
        <div
          className={classes.bullet}
          style={{
            width: size - 4,
            height: size - 4,
            transform: checked ? `translateX(${size}px)` : undefined,
          }}
        />
      </div>
      {label != null && <div className={classes.label}>{label}</div>}
    </div>
  );
};

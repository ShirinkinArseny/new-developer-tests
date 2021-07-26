import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    display: "inline-block",
    position: "relative",
    width: 80,
    height: 80,
  },
  el: {
    boxSizing: "border-box",
    display: "block",
    position: "absolute",
    borderRadius: "50%",
    animation: "$anim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
    color: "#288CBE",
    width: 80 * 0.8,
    height: 80 * 0.8,
    margin: 80 * 0.1,
    border: `${80 * 0.1}px solid #288CBE`,
    borderColor: `#288CBE transparent transparent transparent`,
  },
  el1: {
    animationDelay: "-0.45s",
  },
  el2: {
    animationDelay: "-0.3s",
  },
  el3: {
    animationDelay: "-0.15s",
  },
  "@keyframes anim": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

export const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.el} />
      <div className={clsx(classes.el, classes.el1)} />
      <div className={clsx(classes.el, classes.el2)} />
      <div className={clsx(classes.el, classes.el3)} />
    </div>
  );
};

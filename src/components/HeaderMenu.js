import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  item: {
    fontSize: 25,
    cursor: "pointer",
    marginRight: 15,
    color: "#000",
    "&:hover": {
      opacity: 0.7,
    },
  },
  selectedItem: {
    color: "#288CBE",
  },
}));

const options = [
  {
    title: "API",
    url: "/api",
  },
  {
    title: "React-Easy",
    url: "/react_1",
  },
  {
    title: "React-Advanced",
    url: "/react_2",
  },
];

export const HeaderMenu = () => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    const optionIndex = options.findIndex(
      (option) => option.url === location.pathname
    );
    if (optionIndex >= 0) setSelectedOption(optionIndex);
  }, [location]);

  const handleClick = (optionIndex) => {
    history.push(options[optionIndex].url);
  };

  return (
    <div className={classes.root}>
      {options.map((option, index) => (
        <div
          key={option.url}
          className={clsx(
            classes.item,
            selectedOption === index && classes.selectedItem
          )}
          onClick={() => handleClick(index)}
        >
          {option.title}
        </div>
      ))}
    </div>
  );
};

import React, {useEffect, useState} from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import {Button} from "./Controls/Button";
import UserPreviewLine from "./UserPreviewLine";
import {Loader} from "./Loader";
import {AlertProvider, useAlert} from "../contexts/AlertContext";

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
    contentNotLoaded: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
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
    const [isLoaded, setLoaded] = useState(false)
    const [users, setUsers] = useState([])
    const alert = useAlert()

    const getUsers = () => {
        setTimeout(() => {
            console.log();
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then(response => {
                    setUsers(response.data);
                    setLoaded(true);
                });
        }, 1000);
    };
    useEffect(() => {
        getUsers()
    }, []);

    const sortBy = (criterion) => {
        setUsers((prev) =>
            prev
                .slice()
                .sort((a, b) =>
                    criterion.extractor(a).localeCompare(criterion.extractor(b))
                )
        );
        alert.show("Sorted by "+criterion.title);
    }

    const createSorter = (criterion) => () => sortBy(criterion)

    const nameCriterion = { title: "name", extractor: u => u.name };
    const handleNameSort = createSorter(nameCriterion);

    const emailCriterion = { title: "email", extractor: u => u.email };
    const handleEmailSort = createSorter(emailCriterion);

    const content = isLoaded
        ?
        <ul className={classes.list}>
            <li className={classes.buttonsWrapper}>
                <Button onClick={handleNameSort}>Sort by Name</Button>
                <Button onClick={handleEmailSort}>Sort by Email</Button>
            </li>
            {users.map(user => <UserPreviewLine key={"UserPreviewLine__" + user.id} {...user}/>)}
        </ul>
        : <div className={classes.contentNotLoaded}><Loader/></div>

    return (
        <div className={classes.root}>
            {content}
        </div>
    );
};

import React from 'react';
import {Card} from "@mui/material";
import classes from "../../question.module.scss";


const Item = ({content, number}) => {

    return (
        <Card className={classes.card}>
            <h3>Питання {number + 1}</h3>
            <h4>{content.title}</h4>
            <p>{content.question}</p>
        </Card>
    );
};

export default Item;
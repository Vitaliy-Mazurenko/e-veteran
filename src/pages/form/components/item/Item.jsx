import React, {useState} from 'react';
import classes from '../../form.module.scss'
import {Card, Radio, TextField} from "@mui/material";

const Item = ({content, number}) => {
    const [selectedValue, setSelectedValue] = useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    return (
        <Card className={classes.card}>
            <h3>Питання {number + 1}</h3>
            <h4>{content.name}</h4>
            {content?.form && content?.form.map((e, index) => {
                return <div className={classes.radio} key={index}>
                    <Radio
                        checked={selectedValue === e}
                        onChange={handleChange}
                        value={e}
                        name="radio-buttons"/>
                    <p>{e}</p></div>
            })}
        </Card>
    );
};

export default Item;
import React, {useEffect, useState} from 'react';
import {Card, TextField} from "@mui/material";
import classes from "../../question.module.scss";
import style from './redactItem.module.scss'
import Delete from './../../../../assets/mdi_delete.svg'


const RedactItem = ({content, number, setNewQuestions, newQuestions, setIsSaveAvailable}) => {
    const [input, setInput] = useState(content.title)
    const [textArea, setTextArea] = useState(content.question)

    useEffect(() => {
        if (input?.length > 5 && textArea?.length > 5) {
            setIsSaveAvailable(true)
        } else {
            setIsSaveAvailable(false)
        }
    }, [input, textArea])

    const handleInput = (e) => {
        setInput(e)
        setNewQuestions(newQuestions.filter(element => {
            if (element.id !== content.id) {
                return element
            } else {
                return element.title = e.length ? e : ' '
            }
        }))
    }
    const handleTextArea = (e) => {
        setTextArea(e)
        setNewQuestions(
            newQuestions.filter(element => {
                if (element.id === content.id) {
                    return element.question = e.length ? e : ' '
                } else {
                    return element

                }
            })
        )
    }
    const handleDelete = () => {
        const a = newQuestions.filter(e => {
            return e.id !== content.id
        })
        setNewQuestions(a)
    }
    return (
        <Card className={classes.card}>
            <button onClick={handleDelete} className={style.delete}>
                <img src={Delete} alt=""/>
            </button>
            <h3>Питання {number + 1}</h3>
            <TextField error={!(input?.length > 5)} label='Питання' onChange={e => handleInput(e.target.value)}
                       value={input}/>
            <TextField error={!(textArea?.length > 5)} onChange={e => handleTextArea(e.target.value)} multiline
                       label='Відповідь' value={textArea}/>
        </Card>

    );
};

export default RedactItem;
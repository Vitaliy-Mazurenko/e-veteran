import React, {useEffect, useState} from 'react';
import classes from '../../form.module.scss'
import {Button, Card, TextField} from "@mui/material";
import Delete from "../../../../assets/mdi_delete.svg";

const RedactItem = ({content, number, setNewQuestions, newQuestions, setIsSaveAvailable}) => {
    const [input, setInput] = useState(content.name)
    const [form, setForm] = useState(content.form ? [...content.form] : [])

    useEffect(() => {
        if (input.length > 5) {
            setIsSaveAvailable(true)
        } else {
            setIsSaveAvailable(false)
        }
    }, [input])

    const handleInput = (e) => {
        setInput(e)
        setNewQuestions(newQuestions.filter(element => {
            if (element.id !== content.id) {
                return element
            } else {
                return element.name = e.length ? e : ' '
            }
        }))
    }

    const handleForm = (e, index) => {
        const a = form
        a[index] = e
        setForm(a)
        setNewQuestions(newQuestions.map((elem, i) => {
            if(elem.id === content.id){
                return {...elem, form: form}
            }else{
                return elem
            }
        }))
    }
    const handleDelete = () => {
        const a = newQuestions.filter(e => {
            return e.id !== content.id
        })
        setNewQuestions(a)
    }
    const handleAdd = ()=>{
        const a = form
        a.push('')
        setForm(a)
        setNewQuestions(newQuestions.map((elem, i) => {
            if(elem.id === content.id){
                return {...elem, form: form}
            }else{
                return elem
            }

        }))
    }

    return (
        <Card className={classes.card}>
            <button className={classes.delete} onClick={handleDelete}>
                <img src={Delete} alt=""/>
            </button>
            <h3>Питання {number + 1}</h3>
            <TextField error={!(input.length > 5)} label='Питання' onChange={e => handleInput(e.target.value)}
                       value={input}/>
            { form?.map((e, index) => {
                return <TextField label={'Відповідь '+ (index + 1)} key={index} value={e} onChange={e => handleForm(e.target.value, index)}/>
            })}
            <Button variant='outlined' onClick={handleAdd} className={classes.add}>
                Додати Відповідь
            </Button>
        </Card>

    );
};

export default RedactItem;
import React, {useState} from 'react';
import classes from './form.module.scss'
import {Button} from "@mui/material";
import Item from "./components/item/Item.jsx";
import RedactItem from "./components/redactItem/RedactItem.jsx";
import empty from "../../assets/image 6.png";

const Form = () => {
    const [admin, setAdmin] = useState(false)
    const handleButton = () => {
        setAdmin(true)
    }
    const [isSaveAvailable, setIsSaveAvailable] = useState(true)
    const [questions, setQuestions] = useState([
        {
            id: 1,
            name: "Хто може взяти участь в проєкті",
            form: ['Так', 'Ні']
        },
        {
            id: 2,
            name: "Як подати електронну заяву?",
            form: ['Ветеран', 'Родич (я родич і подаю заяву на ветерана)']
        },
        {
            id: 3,
            name: "Як подати заяву через чат-бот?",
            form: []
        },
        {
            id: 4,
            name: "Наступні кроки",
            form: []
        },
    ])
    const [newQuestions, setNewQuestions] = useState([
        {
            id: 1,
            name: "Хто може взяти участь в проєкті",
            form: ['Так', 'Ні']
        },
        {
            id: 2,
            name: "Як подати електронну заяву?",
            form: ['Ветеран', 'Родич (я родич і подаю заяву на ветерана)']
        },
        {
            id: 3,
            name: "Як подати заяву через чат-бот?",
            form: []
        },
        {
            id: 4,
            name: "Наступні кроки",
            form: []
        },
    ])
    const handleAdd = () => {
        setAdmin(true)
        const a = newQuestions.slice()
        a.push({
            id: Math.random(),
            name: " ",
            description: " "
        })
        setNewQuestions(a)
    }
    const handleSave = () => {
        if (isSaveAvailable || newQuestions.length < 1) {
            setQuestions(newQuestions)
            setAdmin(false)
        }
    }
    const handleBack = () => {
        setAdmin(false)
        setNewQuestions(questions)
    }
    return (
        <div className={classes.form}>
            <div className={classes.header}>
                <h2>Питання-Відповіді</h2>
                {(newQuestions.length > 0 || admin) ? <> {admin ? <div>
                        <Button variant='outlined' onClick={handleBack} className={classes.back}
                                style={{marginRight: 10}}>Відмінити</Button>
                        <Button variant='contained' className={classes.edit} onClick={handleSave}>Зберегти</Button>
                    </div> :
                    <Button variant='contained' className={classes.edit} onClick={handleButton}>Редагувати</Button>}
                </> : <Button variant='contained' className={classes.edit} onClick={handleAdd}>Створити</Button>}
            </div>
            {newQuestions.length > 0 ?
                <>
                    <div className={classes.container}>
                        {!admin
                            ?
                            questions?.map((e, index) => {
                                return <Item
                                    key={Math.random()}
                                    number={index}
                                    content={e}
                                />
                            })
                            :
                            newQuestions.map((e, index) => {
                                return <RedactItem
                                    isSaveAvailable={isSaveAvailable}
                                    setIsSaveAvailable={setIsSaveAvailable}
                                    newQuestions={newQuestions}
                                    setNewQuestions={setNewQuestions}
                                    number={index} key={e.id}
                                    content={e}
                                />
                            })}
                    </div>
                    <Button variant='contained' onClick={handleAdd} className={classes.add}>Додати Питання</Button>
                </> :
                <div className={classes.empty}>
                    <p>У Вас ще не має створених Питаннь-Відповідей</p>
                    <img src={empty} alt=""/>
                    {questions.length > 0 && <Button variant='contained' onClick={handleAdd} className={classes.add}>Додати Питання</Button>}
                </div>}
        </div>
    );
};

export default Form;
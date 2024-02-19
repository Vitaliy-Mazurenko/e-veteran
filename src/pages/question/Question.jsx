import React, {useEffect, useState} from 'react';
import classes from './question.module.scss'
import {Button} from "@mui/material";
import Item from "./componets/item/Item.jsx";
import RedactItem from "./componets/redactItem/RedactItem.jsx";
import empty from '../../assets/image 6.png'
import axios from "axios";
import {useQuery} from "react-query";

const getData = async () => {
    return await axios.get('http://52.201.226.109:8080/api/faqs')
}

const putData = async (data, id) => {
    return await axios.put('http://52.201.226.109:8080/api/faqs/' + id, data)
}
const postData = async (data) => {
    return await axios.post('http://52.201.226.109:8080/api/faqs/add', data)
}

const Question = () => {
    const {data} = useQuery('name', getData,{
        refetchOnWindowFocus: false,
    })

    const [admin, setAdmin] = useState(false)
    const handleButton = () => {
        setAdmin(true)
    }
    const [isSaveAvailable, setIsSaveAvailable] = useState(true)

    const [questions, setQuestions] = useState(data?.data ? data.data : [])
    const [newQuestions, setNewQuestions] = useState(data?.data ? data.data : [])


    useEffect(() => {
        setQuestions(data?.data ? data.data : [])
        setNewQuestions(data?.data ? data.data : [])
    }, [data])

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
            for (let i = 0; i < newQuestions.length; i++) {

                if (data.data.length) {
                    for (let j = 0; j < data.data.length; j++) {

                        if (newQuestions[i].id === data.data[j].id) {
                            putData(newQuestions[i], newQuestions[i].id)
                        } else {
                            postData(newQuestions[i])
                        }
                    }
                } else {
                    postData(newQuestions[i])
                }

            }
            setAdmin(false)
        }
    }
    const handleBack = () => {
        setAdmin(false)
        setNewQuestions(questions)
    }
    return (
        <div className={classes.question}>
            <div className={classes.header}>
                <h2>Питання-Відповіді</h2>
                {(newQuestions?.length > 0 || admin) ? <> {admin ? <div>
                        <Button variant='outlined' onClick={handleBack} className={classes.back}
                                style={{marginRight: 10}}>Відмінити</Button>
                        <Button variant='contained' className={classes.edit} onClick={handleSave}>Зберегти</Button>
                    </div> :
                    <Button variant='contained' className={classes.edit} onClick={handleButton}>Редагувати</Button>}
                </> : <Button variant='contained' className={classes.edit} onClick={handleAdd}>Створити</Button>}
            </div>
            {newQuestions?.length > 0 ?
                <>
                    <div className={classes.container}>
                        {!admin
                            ?
                            questions.map((e, index) => {

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
                    {questions?.length > 0 &&
                        <Button variant='contained' onClick={handleAdd} className={classes.add}>Додати Питання</Button>}
                </div>}
        </div>
    );
};

export default Question;
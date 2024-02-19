import React, {useState} from 'react';
import classes from './analyst.module.scss'
import {Select, MenuItem, Box} from "@mui/material";
import {VictoryChart, VictoryLine, VictoryPie, VictoryTheme} from 'victory';

const Analyst = () => {
    const [days, setDays] = useState(10)

    const data = [
        {quarter: 1, earnings: 13},
        {quarter: 2, earnings: 16},
        {quarter: 3, earnings: 14},
        {quarter: 4, earnings: 19},
        {quarter: 5, earnings: 41},
        {quarter: 6, earnings: 12},
        {quarter: 7, earnings: 32},
        {quarter: 8, earnings: 13},
        {quarter: 9, earnings: 16},
        {quarter: 10, earnings: 14},
        {quarter: 11, earnings: 19},
        {quarter: 12, earnings: 41},
        {quarter: 13, earnings: 12},
        {quarter: 14, earnings: 32}
    ];

    const handleChange = e => {
        setDays(e.target.value)
    }

    return (
        <div className={classes.analyst}>
            <div className={classes.header}>
                <h3>Аналітика</h3>
                <Select
                    value={days}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Останній день</MenuItem>
                    <MenuItem value={3}>Останні 3 Дні</MenuItem>
                    <MenuItem value={7}>Останні 7 Днів</MenuItem>
                    <MenuItem value={10}>Останні 10 Днів</MenuItem>
                    <MenuItem value={14}>Останні 14 Днів</MenuItem>
                    <MenuItem value={30}>Останні 30 Днів</MenuItem>
                </Select>
            </div>
            <div className={classes.container}>
                <Box className={[classes.mini1, classes.mini]}>
                    <p>Всього звернень</p>
                    <div>
                        <h6>2500</h6>
                        <VictoryLine
                            style={{
                                data: {stroke: "#11BB8D", strokeWidth: 12},
                            }}
                            theme={VictoryTheme.material}
                            data={data}
                            x="quarter"
                            y="earnings"/>
                    </div>
                </Box>
                <Box className={[classes.mini2, classes.mini]}>
                    <p>Всього користувачів</p>
                    <div>
                        <h6>450</h6>
                        <VictoryLine
                            style={{
                                data: {stroke: "#114F95", strokeWidth: 12},
                            }}
                            theme={VictoryTheme.material}
                            data={data}
                            x="quarter"
                            y="earnings"/>
                    </div>
                </Box>
                <Box className={[classes.mini3, classes.mini]}>
                    <p>Середній вік</p>
                    <div>
                        <h6>40</h6>
                        <VictoryLine
                            style={{
                                data: {stroke: "#27AE60", strokeWidth: 12},
                            }}
                            theme={VictoryTheme.material}
                            data={data}
                            x="quarter"
                            y="earnings"/>
                    </div>
                </Box>
                <Box className={[classes.mini4, classes.mini]}>
                    <p>Середній час</p>
                    <div>
                        <h6>45m</h6>
                        <VictoryLine
                            style={{
                                data: {stroke: "#FBAE38", strokeWidth: 12},
                            }}
                            theme={VictoryTheme.material}
                            data={data}
                            x="quarter"
                            y="earnings"/>
                    </div>
                </Box>
                <Box className={[classes.medium1, classes.medium]}>
                    <p>Сесій</p>
                    <div className={classes.block}><VictoryChart
                        theme={VictoryTheme.material}
                    >
                        <VictoryLine
                            style={{
                                data: {stroke: "#c43a31"},
                                parent: {border: "1px solid #ccc"}
                            }}
                            data={[
                                {x: 1, y: 2},
                                {x: 2, y: 3},
                                {x: 3, y: 5},
                                {x: 4, y: 4},
                                {x: 5, y: 7}
                            ]}
                        />
                    </VictoryChart>
                        <VictoryChart
                            theme={VictoryTheme.material}
                        >
                            <VictoryLine
                                style={{
                                    data: {stroke: "green"},
                                    parent: {border: "1px solid #ccc"}
                                }}
                                data={[
                                    {x: 1, y: 5},
                                    {x: 2, y: 2},
                                    {x: 3, y: 8},
                                    {x: 4, y: 1},
                                    {x: 5, y: 9}
                                ]}
                            />
                        </VictoryChart></div>
                </Box>
                <Box className={[classes.medium2, classes.medium]}>
                    <p>Користувачі</p>
                    <VictoryPie
                        colorScale={["#114F95", "#1177B7", "#17B7EA", "#3D83D2", "#86CAFF"]}
                        data={[
                            {x: "Ветирани", y: 35},
                            {x: "Помічники", y: 40},
                            {x: "Мати", y: 55}
                        ]}
                    />
                </Box>
                <Box className={[classes.medium1, classes.medium]}>
                    <p>Топ Месенджерів</p>
                </Box>
                <Box className={[classes.medium2, classes.medium]}>
                    <p>
                        Топ Питань
                    </p>
                </Box>
            </div>
        </div>
    );
};

export default Analyst;
const express = require('express');
const app = express();

const argMap = process.argv
    .map((arg) => {
        return {[arg.replace(/=[^=]+$/, '')]: arg.replace(/^[^=]+=/, '')}
    })
    .reduce((args, arg) => {
        if (!args) {
            return arg;
        }
        return Object.assign(args, arg);
    });

const WEEKDAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const LIST_LENGTH = 11;

function cardinalToOrdinal(number) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = number % 10;
    const suffix = remainder < 4
        ? suffixes[remainder]
        : suffixes[0];

    return `${number}${suffix}`;
}

function generateItem(id) {
    const offset = parseInt(id, 10);
    const episodeDay = new Date();
    episodeDay.setDate(episodeDay.getDate() - offset);
    const day = WEEKDAYS[episodeDay.getDay()];
    const date = cardinalToOrdinal(episodeDay.getDate());
    const month = MONTHS[episodeDay.getMonth()];
    const year = episodeDay.getFullYear();
    return {
        id,
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        title: `Bunnycast ${day} ${date} ${month} ${year}`,
        thumb: 'http://lorempixel.com/275/165/'
    }
}

function generateList() {
    const list = [];
    while (list.length <= LIST_LENGTH) {
        list.push(generateItem(list.length));
    }
    return list;
}

app.get('/api/', (req, res) => {
    res.json({items: generateList()});
});

app.get('/api/:id', (req, res) => {
    res.json(generateItem(req.params.id, 0));
});

app.listen(argMap.PORT);
const express = require('express');
const cors = require('cors');

const cruisesRouts = require('./routes/api/v1/cruises')
const amenitiesRouts = require('./routes/api/v1/amenities')
const bookingRoomRouts = require('./routes/api/v1/bookingRooms')
const decksRouts = require('./routes/api/v1/decks')
const entertainmentsRouts = require('./routes/api/v1/entertainments')
const passengersRouts = require('./routes/api/v1/passengers')
const roomsRouts = require('./routes/api/v1/rooms')
const routesRouts = require('./routes/api/v1/routes')

const app = express();

app.use(cors());

// const { People, Articles } = require('./models');
const sequelize = require('./sequelize');

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        data: 'Homepage'
    });
});

app.use('/api/v1/cruises', cruisesRouts);
app.use('/api/v1/amenities', amenitiesRouts);
app.use('/api/v1/bookingRooms', bookingRoomRouts);
app.use('/api/v1/decks', decksRouts);
app.use('/api/v1/entertainments', entertainmentsRouts);
app.use('/api/v1/passengers', passengersRouts);
app.use('/api/v1/rooms', roomsRouts);
app.use('/api/v1/routes', routesRouts);


app.use((error, req, res, next) => {
    res.send({
        error: error.message
    });
});

module.exports = app;

const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Passenger } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const passengers = await Passenger.findAll();

    res.send({
        data: passengers
    })
}));

router.get('/:p1/:p2', asyncHandler(async (req, res) => {
    const passengers = await Passenger.findAll({
        where: {
            agePassengers: req.params.p1,
            booking_tour: req.params.p2
        }
    });

    res.send({
        data: passengers
    })
}));

module.exports = router;

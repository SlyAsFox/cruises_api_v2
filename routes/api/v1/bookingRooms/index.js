const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const {BookingRoom} = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const bookingrooms = await BookingRoom.findAll();

    res.send({
        data: bookingrooms
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    await BookingRoom.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await BookingRoom.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await BookingRoom.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

router.get('/:p1/:p2', asyncHandler(async (req, res) => {
    const bookingrooms = await BookingRoom.findAll({
        where: {
            typeNumber: req.params.p1,
            numberArrival: req.params.p2
        }
    });

    res.send({
        data: bookingrooms
    })
}));

module.exports = router;

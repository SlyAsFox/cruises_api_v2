const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Cruise } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const cruises = await Cruise.findAll();

    res.send({
        data: cruises
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    await Cruise.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await Cruise.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await Cruise.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));


router.get('/:p1/:p2', asyncHandler(async (req, res) => {
    const cruises = await Cruise.findAll({
        where: {
            numberRooms: req.params.p1,
            reservationPassengers: req.params.p2
        }
    });

    res.send({
        data: cruises
    })
}));

module.exports = router;

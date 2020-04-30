const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const {Amenity} = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const amenities = await Amenity.findAll();

    res.send(amenities)
}));

router.post('/', asyncHandler(async (req, res) => {
    await Amenity.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await Amenity.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await Amenity.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

router.get('/:p1/:p2', asyncHandler(async (req, res) => {
    const amenities = await Amenity.findAll({
        where: {
            typeReservation: req.params.p1,
            dateBooking: req.params.p2
        }
    });

    res.send({
        data: amenities
    })
}));

module.exports = router;

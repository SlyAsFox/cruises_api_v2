const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Room } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const rooms = await Room.findAll();

    res.send({
        data: rooms
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    await Room.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await Room.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await Room.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

router.get('/:p1/:p2', asyncHandler(async (req, res) => {
    const rooms = await Room.findAll({
        where: {
            roomNumber: req.params.p1,
            roomCategory: req.params.p2
        }
    });

    res.send({
        data: rooms
    })
}));

module.exports = router;

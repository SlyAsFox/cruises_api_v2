const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Entertainment } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const entertainments = await Entertainment.findAll();

    res.send({
        data: entertainments
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    await Entertainment.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await Entertainment.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await Entertainment.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

router.get('/:p1/:p2', asyncHandler(async (req, res) => {
    const entertainments = await Entertainment.findAll({
        where: {
            typeLiner: req.params.p1,
            passengersNumber: req.params.p2
        }
    });

    res.send({
        data: entertainments
    })
}));

module.exports = router;

const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Route } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const routes = await Route.findAll();

    res.send({
        data: routes
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    await Route.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await Route.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await Route.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

router.get('/:p1/:p2', asyncHandler(async (req, res) => {
    const routes = await Route.findAll({
        where: {
            visitedCountries: req.params.p1,
            travelTime: req.params.p2
        }
    });

    res.send({
        data: routes
    })
}));

module.exports = router;

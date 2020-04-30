const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Deck } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const desks = await Deck.findAll();

    res.send({
        data: desks
    })
}));

router.post('/', asyncHandler(async (req, res) => {
    await Deck.create({
        ...req.body
    });
}));

router.put('/:id', asyncHandler(async (req, res) => {
    const animal = await Deck.update(req.body);

    res.send({
        data: animal
    })
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    const animal = await Deck.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

router.get('/:p1/:p2', asyncHandler(async (req, res) => {
    const desks = await Deck.findAll({
        where: {
            ticketType: req.params.p1,
            deckTiers: req.params.p2
        }
    });

    res.send({
        data: desks
    })
}));

module.exports = router;

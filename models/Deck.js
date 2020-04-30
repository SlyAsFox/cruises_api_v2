const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Deck extends Model {}

Deck.init({
    deckClass: {
        type: DataTypes.STRING,
        field: 'deck_class',
        allowNull: false
    },
    numbersBoat: {
        type: DataTypes.INTEGER,
        field: 'numbers_boat',
        allowNull: false
    },
    ticketType: {
        type: DataTypes.STRING,
        field: 'ticket_type',
        allowNull: false
    },
    deckTiers: {
        type: DataTypes.INTEGER,
        field: 'deck_tiers',
        allowNull: false
    }
    },{
    sequelize,
        modelName: 'decks',
        underscored: true,
        timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

// // User.associate = (models ) => {
// //     User.hasMany(models.Animal);
// };

module.exports =Deck ;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Cruise extends Model {}

Cruise.init({
    linerName: {
        type: DataTypes.STRING,
        field: 'liner_name',
        allowNull: false
    },
    numberIMO: {
        type: DataTypes.INTEGER,
        field: 'number_IMO',
        allowNull: false
    },
    linerLenght: {
        type: DataTypes.INTEGER,
        field: 'liner_lenght',
        allowNull: false
    },
    yearConstruction: {
    type: DataTypes.STRING,
        field: 'year_construction',
        allowNull: false
    },
    numberRooms: {
        type: DataTypes.INTEGER,
        field: 'number_rooms',
        allowNull: false
    },
    reservationPassengers: {
    type: DataTypes.STRING,
        field: 'reservation_passengers',
        allowNull: false
    },
    routesId: {
        type: DataTypes.INTEGER,
        field: 'routes_id',
        allowNull: false
    },
    decksId: {
        type: DataTypes.INTEGER,
        field: 'decks_id',
        allowNull: false
    },
    entertainmentsId: {
        type: DataTypes.INTEGER,
        field: 'entertainments_id',
        allowNull: false

}
},{
    sequelize,
    modelName: 'cruises',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

// // User.associate = (models ) => {
// //     User.hasMany(models.Animal);
// };

module.exports = Cruise;

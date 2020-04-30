const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class BookingRoom extends Model {}

BookingRoom.init({
    numberSeats: {
        type: DataTypes.STRING,
        field: 'number_seats',
        allowNull: false
    },
    typeNumber: {
        type: DataTypes.STRING,
        field: 'type_number',
        allowNull: false
    },
    numberArrival: {
        type: DataTypes.STRING,
        field: 'number_arrival',
        allowNull: false
    },
    dateArrival: {
        type: DataTypes.DATE,
        field: 'date_arrival',
        allowNull: false
    },
    dateEviction: {
        type: DataTypes.DATE,
        field: 'date_eviction',
        allowNull: false
    },
    passengersId: {
        type: DataTypes.STRING,
        field: 'passengers_id',
        allowNull: false
    }
    },{
    sequelize,
        modelName: 'bookingRooms',
        underscored: true,
        timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

// // User.associate = (models ) => {
// //     User.hasMany(models.Animal);
// };

module.exports =BookingRoom ;

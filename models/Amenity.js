const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Amenity extends Model {}

Amenity.init({
    tv: {
        type: DataTypes.STRING,
        allowNull: false
    },
    wifi: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minibar: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    typeReservation: {
        type: DataTypes.STRING,
        field: 'type_reservation',
        allowNull: false
    },
    dateBooking: {
        type: DataTypes.STRING,
        field: 'date_booking',
        allowNull: false
    },
    roomsId: {
        type: DataTypes.STRING,
        field: 'rooms_id',
        allowNull: false
    }
    },{
    sequelize,
        modelName: 'amenities',
        underscored: true,
        timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

// // User.associate = (models ) => {
// //     User.hasMany(models.Animal);
// };

module.exports =Amenity ;

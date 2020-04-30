const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Room extends Model {}

Room.init({
    bedsTypes: {
        type: DataTypes.STRING,
        field: 'beds_types',
        allowNull: false
    },
    windowView: {
        type: DataTypes.STRING,
        field: 'window_view',
        allowNull: false
    },
    balconyAvailability: {
        type: DataTypes.STRING,
        field: 'balcony_availability',
        allowNull: false
    },
    roomCategory: {
        type: DataTypes.STRING,
        field: 'room_category',
        allowNull: false
    },
    roomNumber: {
        type: DataTypes.STRING,
        field: 'room_number',
        allowNull: false
    },
    cruisesId: {
        type: DataTypes.INTEGER,
        field: 'cruises_id',
        allowNull: false
    }
     },{
    sequelize,
        modelName: 'rooms',
        underscored: true,
        timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

// // User.associate = (models ) => {
// //     User.hasMany(models.Animal);
// };

module.exports =Room ;
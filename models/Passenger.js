const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Passenger extends Model {}

Passenger.init({
    fullName: {
        type: DataTypes.STRING,
        field: 'full_name',
        allowNull: false
    },
    sexPassengers: {
        type: DataTypes.STRING,
        field: 'sex_passengers',
        allowNull: false
    },
    residenceAddress: {
        type: DataTypes.STRING,
        field: 'residence_address',
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        field: 'phone_number',
        allowNull: false
    },
    agePassengers: {
        type: DataTypes.INTEGER,
        field: 'age_passengers',
        allowNull: false
    },
    booking_tour: {
        type: DataTypes.STRING,
        field: 'booking_tour',
        allowNull: false
    }
    },{
    sequelize,
        modelName: 'passengers',
        underscored: true,
        timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

// // User.associate = (models ) => {
// //     User.hasMany(models.Animal);
// };

module.exports =Passenger ;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Entertainment extends Model {}

Entertainment.init({
    restaurantsNumber: {
        type: DataTypes.INTEGER,
        field: 'restaurants_number',
        allowNull: false
    },
    poolsTypes: {
        type: DataTypes.STRING,
        field: 'pools_types',
        allowNull: false
    },
    eveningShow: {
        type: DataTypes.STRING,
        field: 'evening_show',
        allowNull: false
    },
    storesNumber: {
        type: DataTypes.INTEGER,
        field: 'stores_number',
        allowNull: false
    },
    typeLiner: {
        type: DataTypes.STRING,
        field: 'type_liner',
        allowNull: false
    },
    passengersNumber: {
        type: DataTypes.STRING,
        field: 'passengers_number',
        allowNull: false
    }
},{
    sequelize,
        modelName: 'entertainments',
        underscored: true,
        timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

// // User.associate = (models ) => {
// //     User.hasMany(models.Animal);
// };

module.exports =Entertainment ;
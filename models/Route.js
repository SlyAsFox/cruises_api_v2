const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Route extends Model {}

Route.init({
    departurePort: {
        type: DataTypes.STRING,
        field: 'departure_port',
        allowNull: false
    },
    stopNumber: {
        type: DataTypes.INTEGER,
        field: 'stop_number',
        allowNull: false
    },
    seasNames: {
        type: DataTypes.STRING,
        field: 'seas_names',
        allowNull: false
    },
    stopsNames: {
        type: DataTypes.STRING,
        field: 'stops_names',
        allowNull: false
    },
    visitedCountries: {
        type: DataTypes.STRING,
        field: 'visited_countries',
        allowNull: false
    },
    travelTime: {
        type: DataTypes.STRING,
        field: 'travel_time',
        allowNull: false
    }
    },{
    sequelize,
        modelName: 'routes',
        underscored: true,
        timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

// // User.associate = (models ) => {
// //     User.hasMany(models.Animal);
// };

module.exports =Route ;